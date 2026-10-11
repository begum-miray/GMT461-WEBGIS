/**
 * GMT 458 - Web GIS Assignment 1
 * maps.js - Implementation of OpenLayers and Leaflet Maps
 * 
 * Features:
 * - Issue 1: Zoom threshold for overlapping markers (markers appear only beyond threshold)
 * - Issue 2: Earth repeating itself when zoomed out (wrapX: false / noWrap: true)
 * - Esri World Imagery (Satellite) & CartoDB Dark Base Layer Switcher
 * - Real-time Mouse Coordinate Tracker (WGS84 Lat/Lng)
 * - Marker Category Filtering (Academic, Social, Tech)
 */

document.addEventListener('DOMContentLoaded', () => {
  initLeafletMap();
  initOpenLayersMap();
});

/* ==========================================================================
   Shared Marker Data (Hacettepe University & Ankara Landmarks)
   ========================================================================== */
const ankaraLocations = [
  { name: 'Hacettepe Geomatik Mühendisliği', category: 'academic', lat: 39.8654, lng: 32.7338, desc: 'WebGIS dersimizin ana bölümü ve laboratuvarları.' },
  { name: 'Beytepe Kütüphanesi', category: 'academic', lat: 39.8690, lng: 32.7350, desc: 'Merkezi çalışma ve araştırma kütüphanesi.' },
  { name: 'Mühendislik Fakültesi Dekanlığı', category: 'academic', lat: 39.8660, lng: 32.7360, desc: 'Mühendislik fakültesi idari birimi.' },
  { name: 'Beytepe Kongre Merkezi', category: 'social', lat: 39.8675, lng: 32.7310, desc: 'Akademik konferanslar ve etkinlik salonu.' },
  { name: 'Beytepe Stadyumu & Spor Kompleksi', category: 'social', lat: 39.8630, lng: 32.7390, desc: 'Spor kompleksi ve açık atletizm stadyumu.' },
  { name: 'Hacettepe Teknokent', category: 'tech', lat: 39.8590, lng: 32.7340, desc: 'CBS, Uzaktan Algılama ve yazılım AR-GE firmaları.' },
  { name: 'Beytepe Metro İstasyonu Bağlantısı', category: 'tech', lat: 39.8820, lng: 32.7480, desc: 'Kampüs ulaşım aktarma merkezi.' },
  { name: 'Anıtkabir', category: 'social', lat: 39.9250, lng: 32.8369, desc: 'Ankara merkez tarihi simge.' },
  { name: 'Kızılay Meydanı', category: 'tech', lat: 39.9208, lng: 32.8541, desc: 'Ankara kent merkezi.' }
];

/* ==========================================================================
   1. LEAFLET MAP IMPLEMENTATION
   ========================================================================== */

let leafletMap;
let leafletMarkersLayer;
let leafletTileLayer;
let currentLeafletBaseLayer = 'osm'; // 'osm', 'satellite', 'dark'
let activeLeafletCategory = 'all';
const LEAFLET_ZOOM_THRESHOLD = 12; // Markers only visible when zoom >= 12
let isLeafletThresholdActive = true;
let isLeafletNoWrapActive = true;

// Distance Measurement Ruler State
let isLeafletMeasureActive = false;
let measurePoints = [];
let measurePolyline = null;
let measureMarkers = [];

// Base Tile Layer URLs
const LEAFLET_TILE_PROVIDERS = {
  osm: {
    url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    attr: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  },
  satellite: {
    url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
    attr: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
  },
  dark: {
    url: 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',
    attr: '&copy; <a href="https://carto.com/attributions">CARTO</a>'
  }
};

function initLeafletMap() {
  const mapElement = document.getElementById('leaflet-map');
  if (!mapElement) return;

  const worldBounds = L.latLngBounds(L.latLng(-90, -180), L.latLng(90, 180));

  leafletMap = L.map('leaflet-map', {
    center: [39.8654, 32.7338], // Hacettepe Beytepe
    zoom: 13,
    minZoom: 2,
    maxBounds: isLeafletNoWrapActive ? worldBounds : null,
    maxBoundsViscosity: 1.0
  });

  // Apply default base layer
  createLeafletTileLayer(currentLeafletBaseLayer, isLeafletNoWrapActive);

  // Initialize marker layer group
  leafletMarkersLayer = L.layerGroup();
  renderLeafletMarkers();

  // Mouse Coordinates Tracker
  leafletMap.on('mousemove', e => {
    const coordsDisplay = document.getElementById('leaflet-coords-display');
    if (coordsDisplay) {
      coordsDisplay.textContent = `Lat: ${e.latlng.lat.toFixed(5)} | Lng: ${e.latlng.lng.toFixed(5)}`;
    }
  });

  // Zoom events for Issue 1
  leafletMap.on('zoomend', updateLeafletZoomUI);
  updateLeafletZoomUI();

  // Bind controls
  setupLeafletControls();
}

function createLeafletTileLayer(providerKey, noWrapSetting) {
  if (leafletTileLayer) {
    leafletMap.removeLayer(leafletTileLayer);
  }

  const provider = LEAFLET_TILE_PROVIDERS[providerKey] || LEAFLET_TILE_PROVIDERS.osm;

  leafletTileLayer = L.tileLayer(provider.url, {
    attribution: provider.attr,
    noWrap: noWrapSetting,
    bounds: noWrapSetting ? [[-90, -180], [90, 180]] : undefined
  }).addTo(leafletMap);
}

function renderLeafletMarkers() {
  leafletMarkersLayer.clearLayers();

  ankaraLocations.forEach(loc => {
    if (activeLeafletCategory === 'all' || loc.category === activeLeafletCategory) {
      const marker = L.marker([loc.lat, loc.lng]);
      marker.bindPopup(`
        <div style="font-family: 'Inter', sans-serif;">
          <strong style="color: #7c3aed; font-size: 0.95rem;">${loc.name}</strong>
          <p style="margin: 0.35rem 0 0; color: #475569; font-size: 0.85rem;">${loc.desc}</p>
          <span style="font-size: 0.75rem; color: #0284c7; font-weight: 600;">[Lat: ${loc.lat.toFixed(4)}, Lng: ${loc.lng.toFixed(4)}]</span>
        </div>
      `);
      leafletMarkersLayer.addLayer(marker);
    }
  });

  updateLeafletZoomUI();
}

function updateLeafletZoomUI() {
  const currentZoom = leafletMap.getZoom();
  const zoomDisplay = document.getElementById('leaflet-current-zoom');
  const markerStatus = document.getElementById('leaflet-marker-status');

  if (zoomDisplay) {
    zoomDisplay.textContent = currentZoom;
  }

  // Issue 1: Zoom Threshold Logic
  if (isLeafletThresholdActive) {
    if (currentZoom >= LEAFLET_ZOOM_THRESHOLD) {
      if (!leafletMap.hasLayer(leafletMarkersLayer)) {
        leafletMap.addLayer(leafletMarkersLayer);
      }
      if (markerStatus) {
        markerStatus.textContent = 'Görünür (Zoom ≥ ' + LEAFLET_ZOOM_THRESHOLD + ')';
        markerStatus.className = 'issue-status-badge status-active';
      }
    } else {
      if (leafletMap.hasLayer(leafletMarkersLayer)) {
        leafletMap.removeLayer(leafletMarkersLayer);
      }
      if (markerStatus) {
        markerStatus.textContent = 'Gizli (Zoom < ' + LEAFLET_ZOOM_THRESHOLD + ')';
        markerStatus.className = 'issue-status-badge status-inactive';
      }
    }
  } else {
    if (!leafletMap.hasLayer(leafletMarkersLayer)) {
      leafletMap.addLayer(leafletMarkersLayer);
    }
    if (markerStatus) {
      markerStatus.textContent = 'Eşik Kapalı (Her zaman görünür)';
      markerStatus.className = 'issue-status-badge status-active';
    }
  }
}

function setupLeafletControls() {
  // Base Layer Buttons (OSM / Satellite / Dark)
  const baseButtons = document.querySelectorAll('.leaflet-base-btn');
  baseButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      baseButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentLeafletBaseLayer = btn.getAttribute('data-base') || 'osm';
      createLeafletTileLayer(currentLeafletBaseLayer, isLeafletNoWrapActive);
    });
  });

  // Category Filter Buttons
  const catButtons = document.querySelectorAll('.leaflet-cat-btn');
  catButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      catButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeLeafletCategory = btn.getAttribute('data-cat') || 'all';
      renderLeafletMarkers();
    });
  });

  // Distance Measurement Ruler Controls
  const btnMeasure = document.getElementById('leaflet-measure-btn');
  const btnClearMeasure = document.getElementById('leaflet-clear-measure-btn');
  const measureBadge = document.getElementById('leaflet-measure-badge');
  const measureVal = document.getElementById('leaflet-measure-val');

  if (btnMeasure) {
    btnMeasure.addEventListener('click', () => {
      isLeafletMeasureActive = !isLeafletMeasureActive;

      if (isLeafletMeasureActive) {
        btnMeasure.textContent = '📏 Cetvel Modu: Açık (Tıklayın)';
        btnMeasure.classList.add('measure-active-btn');
        leafletMap.getContainer().style.cursor = 'crosshair';
        if (measureBadge) measureBadge.style.display = 'flex';
        leafletMap.on('click', handleMeasureClick);
      } else {
        btnMeasure.textContent = '📏 Cetvel Aracı (Mesafe Ölç)';
        btnMeasure.classList.remove('measure-active-btn');
        leafletMap.getContainer().style.cursor = '';
        leafletMap.off('click', handleMeasureClick);
      }
    });
  }

  function handleMeasureClick(e) {
    if (!isLeafletMeasureActive) return;

    measurePoints.push(e.latlng);

    // Add marker for the clicked point
    const pointMarker = L.circleMarker(e.latlng, {
      radius: 6,
      fillColor: '#38bdf8',
      color: '#ffffff',
      weight: 2,
      opacity: 1,
      fillOpacity: 0.9
    }).addTo(leafletMap);
    
    pointMarker.bindTooltip(`Nokta ${measurePoints.length}`, { permanent: false, direction: 'top' });
    measureMarkers.push(pointMarker);

    // If 2 or more points, draw line and calculate total distance
    if (measurePoints.length >= 2) {
      if (measurePolyline) {
        leafletMap.removeLayer(measurePolyline);
      }

      measurePolyline = L.polyline(measurePoints, {
        color: '#a855f7',
        weight: 4,
        dashArray: '6, 8',
        opacity: 0.95
      }).addTo(leafletMap);

      let totalDistMeters = 0;
      for (let i = 0; i < measurePoints.length - 1; i++) {
        totalDistMeters += measurePoints[i].distanceTo(measurePoints[i + 1]);
      }

      if (measureVal) {
        if (totalDistMeters >= 1000) {
          measureVal.textContent = `${(totalDistMeters / 1000).toFixed(2)} km`;
        } else {
          measureVal.textContent = `${Math.round(totalDistMeters)} m`;
        }
      }

      if (btnClearMeasure) btnClearMeasure.style.display = 'inline-flex';
    }
  }

  if (btnClearMeasure) {
    btnClearMeasure.addEventListener('click', () => {
      measurePoints = [];
      if (measurePolyline) {
        leafletMap.removeLayer(measurePolyline);
        measurePolyline = null;
      }
      measureMarkers.forEach(m => leafletMap.removeLayer(m));
      measureMarkers = [];
      if (measureVal) measureVal.textContent = '0 m';
      btnClearMeasure.style.display = 'none';
    });
  }

  // Zoom Buttons
  const btnZoomIn = document.getElementById('leaflet-zoom-campus');
  if (btnZoomIn) {
    btnZoomIn.addEventListener('click', () => {
      leafletMap.setView([39.8654, 32.7338], 14, { animate: true });
    });
  }

  const btnZoomOut = document.getElementById('leaflet-zoom-world');
  if (btnZoomOut) {
    btnZoomOut.addEventListener('click', () => {
      leafletMap.setView([30, 20], 3, { animate: true });
    });
  }

  // Toggle Zoom Threshold (Issue 1)
  const btnToggleThreshold = document.getElementById('leaflet-toggle-threshold');
  if (btnToggleThreshold) {
    btnToggleThreshold.addEventListener('click', () => {
      isLeafletThresholdActive = !isLeafletThresholdActive;
      btnToggleThreshold.textContent = isLeafletThresholdActive 
        ? 'Zoom Eşiğini Kapat' 
        : 'Zoom Eşiğini Aç (Threshold: 12)';
      updateLeafletZoomUI();
    });
  }

  // Toggle noWrap (Issue 2)
  const btnToggleWrap = document.getElementById('leaflet-toggle-wrap');
  if (btnToggleWrap) {
    btnToggleWrap.addEventListener('click', () => {
      isLeafletNoWrapActive = !isLeafletNoWrapActive;
      createLeafletTileLayer(currentLeafletBaseLayer, isLeafletNoWrapActive);

      const wrapStatus = document.getElementById('leaflet-wrap-status');
      if (wrapStatus) {
        wrapStatus.textContent = isLeafletNoWrapActive ? 'noWrap: Aktif (Tek Dünya)' : 'noWrap: Kapalı (Tekrar Eden Dünya)';
        wrapStatus.className = isLeafletNoWrapActive ? 'issue-status-badge status-active' : 'issue-status-badge status-inactive';
      }

      btnToggleWrap.textContent = isLeafletNoWrapActive 
        ? 'Tekrarı İzin Ver (noWrap: false)' 
        : 'Tekrarı Engelle (noWrap: true)';
      
      const worldBounds = L.latLngBounds(L.latLng(-90, -180), L.latLng(90, 180));
      leafletMap.setMaxBounds(isLeafletNoWrapActive ? worldBounds : null);
    });
  }
}


/* ==========================================================================
   2. OPENLAYERS (OL) MAP IMPLEMENTATION
   ========================================================================== */

let olMap;
let olTileLayer;
let olVectorLayer;
let currentOLBase = 'osm'; // 'osm' or 'satellite'
const OL_ZOOM_THRESHOLD = 11;
let isOLWrapActive = false; // wrapX = false solves Issue 2

function getOLTileSource(baseType, wrapSetting) {
  if (baseType === 'satellite') {
    return new ol.source.XYZ({
      url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
      attributions: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',
      wrapX: wrapSetting
    });
  }
  return new ol.source.OSM({
    wrapX: wrapSetting
  });
}

function initOpenLayersMap() {
  const mapElement = document.getElementById('ol-map');
  if (!mapElement) return;

  // 1. Base Layer (Issue 2: wrapX: false)
  olTileLayer = new ol.layer.Tile({
    source: getOLTileSource(currentOLBase, isOLWrapActive)
  });

  // 2. Vector Layer for Markers (Issue 1: minZoom)
  const vectorSource = new ol.source.Vector();

  ankaraLocations.forEach(loc => {
    const feature = new ol.Feature({
      geometry: new ol.geom.Point(ol.proj.fromLonLat([loc.lng, loc.lat])),
      name: loc.name,
      description: loc.desc,
      category: loc.category
    });

    // Custom Styled Neon Purple-Cyan Pin
    feature.setStyle(new ol.style.Style({
      image: new ol.style.Circle({
        radius: 8,
        fill: new ol.style.Fill({ color: '#a855f7' }),
        stroke: new ol.style.Stroke({ color: '#ffffff', width: 2.5 })
      })
    }));

    vectorSource.addFeature(feature);
  });

  olVectorLayer = new ol.layer.Vector({
    source: vectorSource,
    minZoom: OL_ZOOM_THRESHOLD // Native OpenLayers Zoom Threshold!
  });

  // View bounds
  const worldExtent = ol.proj.transformExtent([-180, -85, 180, 85], 'EPSG:4326', 'EPSG:3857');

  const olView = new ol.View({
    center: ol.proj.fromLonLat([32.7338, 39.8654]), // Beytepe
    zoom: 13,
    minZoom: 2,
    extent: worldExtent,
    constrainResolution: true
  });

  olMap = new ol.Map({
    target: 'ol-map',
    layers: [olTileLayer, olVectorLayer],
    view: olView,
    controls: ol.control.defaults.defaults().extend([
      new ol.control.ScaleLine({ units: 'metric' }),
      new ol.control.FullScreen()
    ])
  });

  // Popup overlay for OpenLayers
  setupOLPopup();

  // Mouse Move Coordinates Tracker
  olMap.on('pointermove', evt => {
    const coordsDisplay = document.getElementById('ol-coords-display');
    if (coordsDisplay && evt.coordinate) {
      const lonLat = ol.proj.toLonLat(evt.coordinate);
      coordsDisplay.textContent = `Lat: ${lonLat[1].toFixed(5)} | Lng: ${lonLat[0].toFixed(5)}`;
    }
  });

  // Zoom updates for Issue 1
  olView.on('change:resolution', updateOLZoomUI);
  updateOLZoomUI();

  // Bind controls
  setupOLControls();
}

function updateOLZoomUI() {
  if (!olMap) return;
  const zoom = Math.round(olMap.getView().getZoom() * 10) / 10;
  const zoomDisplay = document.getElementById('ol-current-zoom');
  const markerStatus = document.getElementById('ol-marker-status');

  if (zoomDisplay) {
    zoomDisplay.textContent = zoom;
  }

  if (markerStatus) {
    if (zoom >= OL_ZOOM_THRESHOLD) {
      markerStatus.textContent = `Görünür (Zoom ≥ ${OL_ZOOM_THRESHOLD})`;
      markerStatus.className = 'issue-status-badge status-active';
    } else {
      markerStatus.textContent = `Gizli (Zoom < ${OL_ZOOM_THRESHOLD})`;
      markerStatus.className = 'issue-status-badge status-inactive';
    }
  }
}

function setupOLPopup() {
  const container = document.getElementById('ol-popup');
  const content = document.getElementById('ol-popup-content');
  const closer = document.getElementById('ol-popup-closer');

  if (!container || !content) return;

  const overlay = new ol.Overlay({
    element: container,
    autoPan: {
      animation: { duration: 250 }
    }
  });

  olMap.addOverlay(overlay);

  if (closer) {
    closer.onclick = () => {
      overlay.setPosition(undefined);
      closer.blur();
      return false;
    };
  }

  olMap.on('singleclick', evt => {
    const feature = olMap.forEachFeatureAtPixel(evt.pixel, f => f);
    if (feature) {
      const coordinates = feature.getGeometry().getCoordinates();
      const name = feature.get('name');
      const desc = feature.get('description');
      content.innerHTML = `
        <strong style="color: #a855f7; font-size: 0.95rem;">${name}</strong>
        <p style="margin: 0.35rem 0 0; color: #94a3b8; font-size: 0.85rem;">${desc}</p>
      `;
      overlay.setPosition(coordinates);
    } else {
      overlay.setPosition(undefined);
    }
  });

  olMap.on('pointermove', evt => {
    if (evt.dragging) return;
    const pixel = olMap.getEventPixel(evt.originalEvent);
    const hit = olMap.hasFeatureAtPixel(pixel);
    olMap.getTargetElement().style.cursor = hit ? 'pointer' : '';
  });
}

function setupOLControls() {
  // Base Layer Buttons (OSM / Satellite)
  const baseButtons = document.querySelectorAll('.ol-base-btn');
  baseButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      baseButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentOLBase = btn.getAttribute('data-base') || 'osm';
      olTileLayer.setSource(getOLTileSource(currentOLBase, isOLWrapActive));
    });
  });

  // Zoom to Campus
  const btnCampus = document.getElementById('ol-zoom-campus');
  if (btnCampus) {
    btnCampus.addEventListener('click', () => {
      olMap.getView().animate({
        center: ol.proj.fromLonLat([32.7338, 39.8654]),
        zoom: 14,
        duration: 1000
      });
    });
  }

  // Zoom to World (test Issue 1 & Issue 2)
  const btnWorld = document.getElementById('ol-zoom-world');
  if (btnWorld) {
    btnWorld.addEventListener('click', () => {
      olMap.getView().animate({
        center: ol.proj.fromLonLat([20, 30]),
        zoom: 3,
        duration: 1000
      });
    });
  }

  // Toggle wrapX (Issue 2)
  const btnWrap = document.getElementById('ol-toggle-wrap');
  if (btnWrap) {
    btnWrap.addEventListener('click', () => {
      isOLWrapActive = !isOLWrapActive;
      olTileLayer.setSource(getOLTileSource(currentOLBase, isOLWrapActive));

      const wrapStatus = document.getElementById('ol-wrap-status');
      if (wrapStatus) {
        wrapStatus.textContent = !isOLWrapActive ? 'wrapX: false (Tek Dünya - Çözüldü)' : 'wrapX: true (Tekrar Eden Dünya)';
        wrapStatus.className = !isOLWrapActive ? 'issue-status-badge status-active' : 'issue-status-badge status-inactive';
      }

      btnWrap.textContent = !isOLWrapActive 
        ? 'Tekrarı İzin Ver (wrapX: true)' 
        : 'Tekrarı Engelle (wrapX: false)';
    });
  }
}
