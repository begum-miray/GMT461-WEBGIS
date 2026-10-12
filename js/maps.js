/**
 * GMT 458 - Web GIS Assignment 1
 * maps.js - Implementation of OpenLayers and Leaflet Maps
 * 
 * Features:
 * - Visited Cities Dataset (30 Cities: Eskişehir, Ankara, Van, Aydın,
 *   İzmir, Konya, İstanbul, Çanakkale, Muğla, Antalya, Kütahya, Bolu, Zonguldak,
 *   Kırıkkale, Nevşehir, Kayseri, Sivas, Çorum, Yozgat, Ordu, Trabzon, Rize, Samsun, Artvin,
 *   KKTC, Balıkesir, Denizli, Sinop, Bitlis, Erzurum)
 * - Issue 1: Zoom threshold for overlapping markers (markers appear only beyond threshold)
 * - Issue 2: Earth repeating itself when zoomed out (wrapX: false / noWrap: true)
 * - Esri World Imagery (Satellite) & OpenStreetMap (OSM) Base Layer Switcher
 * - Real-time Mouse Coordinate Tracker (WGS84 Lat/Lng)
 * - Marker Region Filtering (İç Anadolu, Karadeniz, Ege & Akdeniz, Marmara, Doğu Anadolu, KKTC)
 * - Interactive Distance Measurement Ruler Tool
 */

document.addEventListener('DOMContentLoaded', () => {
  initLeafletMap();
  initOpenLayersMap();
});

/* ==========================================================================
   30 Gittiğim Şehir Veri Seti (Visited Cities Dataset)
   ========================================================================== */
const visitedCities = [
  {
    name: 'Eskişehir',
    region: 'İç Anadolu',
    category: 'ic-anadolu',
    lat: 39.7767,
    lng: 30.5206,
    desc: 'Odunpazarı tarihi ahşap evleri, Porsuk Çayı kıyıları, havacılık ve raylı sistemler kenti.',
    famousPlaces: 'Odunpazarı Tarihi Evleri, Porsuk Çayı & Gondol Turu, Sazova Parkı, Kurşunlu Külliyesi',
    localFood: 'Çibörek, Balaban Köfte, Met Helvası, Haşhaşlı Çörek'
  },
  {
    name: 'Ankara',
    region: 'İç Anadolu',
    category: 'ic-anadolu',
    lat: 39.9208,
    lng: 32.8541,
    desc: 'Başkent; Hacettepe Üniversitesi Geomatik Mühendisliği lisans eğitimi, mesleki stajlar ve nirengi ağları.',
    famousPlaces: 'Anıtkabir, Ankara Kalesi, Hacettepe Beytepe Kampüsü, Anadolu Medeniyetleri Müzesi',
    localFood: 'Ankara Tavası, Beypazarı Kurusu, Çubuk Turşusu, Ankara Simidi'
  },
  {
    name: 'Van',
    region: 'Doğu Anadolu',
    category: 'dogu-anadolu',
    lat: 38.5012,
    lng: 43.3730,
    desc: 'Van Gölü sodalı havzası, Akdamar Adası, Urartu Kalesi ve doğunun bin yıllık kadim kültür mirası.',
    famousPlaces: 'Akdamar Adası & Kilisesi, Tarihi Van Kalesi, Muradiye Şelalesi, Van Kedi Villası',
    localFood: 'Meşhur Van Kahvaltısı, Otlu Peynir, İnci Kefali, Keledoş'
  },
  {
    name: 'Aydın',
    region: 'Ege & Akdeniz',
    category: 'ege-akdeniz',
    lat: 37.8450,
    lng: 27.8396,
    desc: 'Afrodisias antik kenti, Büyük Menderes deltası, Kuşadası sahil hattı ve zeytin diyarı.',
    famousPlaces: 'Afrodisias Antik Kenti (UNESCO), Kuşadası Güvercinada, Dilek Yarımadası Milli Parkı',
    localFood: 'Aydın İnciri, Çine Köftesi, Yuvarlama, Zeytinyağlı Kuru Börülce'
  },
  {
    name: 'İzmir',
    region: 'Ege & Akdeniz',
    category: 'ege-akdeniz',
    lat: 38.4192,
    lng: 27.1287,
    desc: 'Ege’nin incisi; Kordon boyu, Tarihi Saat Kulesi, Efes Antik Kenti ve kıyı jeodezisi.',
    famousPlaces: 'Tarihi Konak Saat Kulesi, Kordon Sahili, Efes Antik Kenti, Şirince Köyü, Çeşme & Alaçatı',
    localFood: 'İzmir Boyozu, Kumru, İzmir Köfte, Şambali Tatlısı, İzmir Bombası'
  },
  {
    name: 'Konya',
    region: 'İç Anadolu',
    category: 'ic-anadolu',
    lat: 37.8714,
    lng: 32.4846,
    desc: 'Mevlana Müzesi, Selçuklu medeniyeti, geniş tarım havzası ve karstik obruk jeomorfolojisi.',
    famousPlaces: 'Mevlana Müzesi & Türbesi, Çatalhöyük Neolitik Kenti, Sille Köyü, Karatay Medresesi',
    localFood: 'Etliekmek, Fırın Kebabı, Tirit, Bamya Çorbası, Mevlana Şekeri'
  },
  {
    name: 'İstanbul',
    region: 'Marmara',
    category: 'marmara',
    lat: 41.0082,
    lng: 28.9784,
    desc: 'İki kıtayı birleştiren mega kent; Boğaziçi hattı, Tarihi Yarımada, jeodezik nirengi ve mega ulaşım ağları.',
    famousPlaces: 'Ayasofya-i Kebir Camii, Sultanahmet, Topkapı Sarayı, Galata Kulesi, Boğaziçi',
    localFood: 'Sultanahmet Köftesi, Eminönü Balık Ekmek, Ortaköy Kumpiri, Sarıyer Böreği'
  },
  {
    name: 'Çanakkale',
    region: 'Marmara',
    category: 'marmara',
    lat: 40.1553,
    lng: 26.4142,
    desc: 'Çanakkale Boğazı, Şehitler Abidesi, Tarihi Gelibolu Yarımadası ve 1915 Köprüsü.',
    famousPlaces: 'Gelibolu Şehitler Abidesi, Troya Antik Kenti & Atı, Kilitbahir Kalesi, Aynalı Çarşı',
    localFood: 'Peynir Helvası, Sardalya Izgara, Ezine Peyniri, Basma Helvası'
  },
  {
    name: 'Muğla',
    region: 'Ege & Akdeniz',
    category: 'ege-akdeniz',
    lat: 37.2153,
    lng: 28.3636,
    desc: 'Bodrum, Fethiye ve Marmaris koyları, Ölüdeniz lagünü ve eşsiz Akdeniz-Ege kıyı topoğrafyası.',
    famousPlaces: 'Ölüdeniz Lagünü, Saklıkent Kanyonu, Kelebekler Vadisi, Bodrum Kalesi, Dalyan',
    localFood: 'Çökertme Kebabı, Muğla Köftesi, Kabak Çiçeği Dolması, Çam Balı'
  },
  {
    name: 'Antalya',
    region: 'Ege & Akdeniz',
    category: 'ege-akdeniz',
    lat: 36.8969,
    lng: 30.7133,
    desc: 'Kaleiçi, Düden Şelalesi, Toros Dağları eteklerindeki traverten falezleri ve turizm merkezi.',
    famousPlaces: 'Tarihi Kaleiçi, Düden & Kurşunlu Şelaleleri, Aspendos Tiyatrosu, Konyaaltı',
    localFood: 'Antalya Usulü Piyaz (Tahinli), Hibeş, Şiş Köfte, Yanık Dondurma'
  },
  {
    name: 'Kütahya',
    region: 'Ege & Akdeniz',
    category: 'ege-akdeniz',
    lat: 39.4200,
    lng: 29.9857,
    desc: 'Geleneksel çini ve seramik sanatı, Frig Vadisi kaya yerleşimleri ve Aizanoi Antik Kenti.',
    famousPlaces: 'Aizanoi Antik Kenti (Zeus Tapınağı), Kütahya Kalesi, Germiyan Evleri, Frig Vadisi',
    localFood: 'Sıkıcık Çorbası, Güveç, Cimcik Hamuru, Ilıbada Dolması, Höşmerim'
  },
  {
    name: 'Bolu',
    region: 'Karadeniz',
    category: 'karadeniz',
    lat: 40.7350,
    lng: 31.6061,
    desc: 'Abant Gölü, Yedigöller Milli Parkı, zengin orman ekosistemi ve doğa harikası göl jeomorfolojisi.',
    famousPlaces: 'Yedigöller Milli Parkı, Abant Gölü Tabiat Parkı, Gölcük Gölü, Kartalkaya',
    localFood: 'Mengen Usulü Pilav & Yemekler, Bolu Çikolatası, Saray Helvası, Abant Alabalığı'
  },
  {
    name: 'Zonguldak',
    region: 'Karadeniz',
    category: 'karadeniz',
    lat: 41.4564,
    lng: 31.7987,
    desc: 'Karadeniz taşkömürü havzası, madencilik tarihi, dik yamaçlı kıyı şeridi ve liman kenti.',
    famousPlaces: 'Zonguldak Maden Müzesi, Gökgöl Mağarası, Filyos Antik Kenti, Varagel Tüneli',
    localFood: 'Uğmaç Çorbası, Mancarlı Pide, Malay, Beyaz Baklava, Cizleme'
  },
  {
    name: 'Kırıkkale',
    region: 'İç Anadolu',
    category: 'ic-anadolu',
    lat: 39.8468,
    lng: 33.5153,
    desc: 'Kızılırmak nehri vadisi, Tarihi Çeşnigir Köprüsü, sanayi ve stratejik karayolu kavşağı.',
    famousPlaces: 'Tarihi Çeşnigir Köprüsü & Kanyonu, Celal Bayar Parkı, MKE Silah Müzesi',
    localFood: 'Keskin Tava, Kırıkkale Tavası, Tuvalak Çorbası, Hasandede Üzümü'
  },
  {
    name: 'Nevşehir',
    region: 'İç Anadolu',
    category: 'ic-anadolu',
    lat: 38.6247,
    lng: 34.7142,
    desc: 'Kapadokya peri bacaları, Göreme Açık Hava Müzesi, volkanik tüf vadileri ve balon turları.',
    famousPlaces: 'Göreme Açık Hava Müzesi, Uçhisar Kalesi, Derinkuyu Yeraltı Şehri, Paşabağ Vadisi',
    localFood: 'Testi Kebabı, Nevşehir Tavası, Dıvıl, Kuru Kaymak, Kabak Çekirdeği'
  },
  {
    name: 'Kayseri',
    region: 'İç Anadolu',
    category: 'ic-anadolu',
    lat: 38.7205,
    lng: 35.4826,
    desc: 'Erciyes Dağı volkanik stratovulkan kütlesi, Selçuklu kervansarayları ve zengin ticaret kültürü.',
    famousPlaces: 'Erciyes Dağı Kayak Merkezi, Tarihi Kayseri Kalesi, Hunat Hatun Külliyesi, Gevher Nesibe Tıp Medresesi',
    localFood: 'Kayseri Mantısı, Pastırma & Sucuk, Kayseri Yağlaması, Pöç Kebabı'
  },
  {
    name: 'Sivas',
    region: 'İç Anadolu',
    category: 'ic-anadolu',
    lat: 39.7505,
    lng: 37.0150,
    desc: 'Çifte Minareli Medrese, Divriği Ulu Camii (UNESCO mirası), tarihi İpek Yolu kavşağı.',
    famousPlaces: 'Çifte Minareli Medrese, Divriği Ulu Camii (UNESCO), Buruciye Medresesi, Gök Medrese',
    localFood: 'Sivas Köftesi, Sivas Katmeri, Madımak Yemeği, Peskütan Çorbası'
  },
  {
    name: 'Çorum',
    region: 'Karadeniz',
    category: 'karadeniz',
    lat: 40.5506,
    lng: 34.9556,
    desc: 'Hitit İmparatorluğu başkenti Hattuşa, Yazılıkaya açık hava tapınağı ve zengin arkeolojik miras.',
    famousPlaces: 'Hattuşa Antik Kenti (UNESCO), Yazılıkaya Tapınağı, Alacahöyük, Çorum Saat Kulesi',
    localFood: 'Çorum Leblebisi, İskilip Dolması, Kuru Mantı, Çorum Baklavası'
  },
  {
    name: 'Yozgat',
    region: 'İç Anadolu',
    category: 'ic-anadolu',
    lat: 39.8210,
    lng: 34.8083,
    desc: 'Türkiye’nin ilk milli parkı olan Yozgat Çamlığı, tarihi saat kulesi ve Çapanoğlu Camii.',
    famousPlaces: 'Yozgat Çamlığı Milli Parkı, Sarıkaya Roma Hamamı, Çapanoğlu Camii, Saat Kulesi',
    localFood: 'Yozgat Testi Kebabı, Arabaşı Çorbası & Hamuru, Parmak Çörek'
  },
  {
    name: 'Ordu',
    region: 'Karadeniz',
    category: 'karadeniz',
    lat: 40.9862,
    lng: 37.8797,
    desc: 'Boztepe seyir tepesi, teleferik hattı, fındık bahçeleri ve yemyeşil Karadeniz kıyı şeridi.',
    famousPlaces: 'Boztepe Seyir Tepesi, Yason Burnu & Kilisesi, Çambaşı Yaylası, Perşembe Menderesleri',
    localFood: 'Ordu Pidesi, Fındıklı Çikolata, Karalahana Sarması, Mısır Ekmeği'
  },
  {
    name: 'Trabzon',
    region: 'Karadeniz',
    category: 'karadeniz',
    lat: 41.0027,
    lng: 39.7168,
    desc: 'Sümela Manastırı dik kayalıkları, Ayasofya Müzesi, Uzungöl ve Doğu Karadeniz tarihi limanı.',
    famousPlaces: 'Sümela Manastırı, Uzungöl Tabiat Parkı, Trabzon Ayasofya Müzesi, Atatürk Köşkü',
    localFood: 'Akçaabat Köftesi, Kuymak (Mıhlama), Hamsili Pilav, Vakfıkebir Ekmeği'
  },
  {
    name: 'Rize',
    region: 'Karadeniz',
    category: 'karadeniz',
    lat: 41.0201,
    lng: 40.5234,
    desc: 'Kaçkar Dağları Milli Parkı, Fırtına Vadisi kanyonu, Ayder Yaylası ve dik çay terasları.',
    famousPlaces: 'Ayder Yaylası, Fırtına Deresi & Taş Köprüler, Kaçkar Dağları, Zilkale, Pokut',
    localFood: 'Rize Çayı, Rize Muhlaması, Rize Kavurması, Laz Böreği, Pepeçura'
  },
  {
    name: 'Samsun',
    region: 'Karadeniz',
    category: 'karadeniz',
    lat: 41.2867,
    lng: 36.3300,
    desc: 'Milli Mücadelenin ilk adımı; Bandırma Vapuru, Atatürk Onur Anıtı ve Karadeniz sahil kenti.',
    famousPlaces: 'Bandırma Vapuru Müzesi, Atatürk Onur Anıtı, Gazi Müzesi, Amisos Tepesi, Atakum',
    localFood: 'Bafra & Terme Pidesi, Samsun Nokulu, Kaz Tiridi, Karalahana Çorbası'
  },
  {
    name: 'Artvin',
    region: 'Karadeniz',
    category: 'karadeniz',
    lat: 41.1828,
    lng: 41.8183,
    desc: 'Çoruh Nehri derin kanyonları, Borçka Karagöl Tabiat Parkı ve nefes kesen dik vadi topoğrafyası.',
    famousPlaces: 'Borçka Karagöl, Şavşat Karagöl, Mençuna Şelalesi, Cehennem Deresi Kanyonu',
    localFood: 'Artvin Kuymağı, Şavşat Ketesi, Silor, Cevizli Kete, Karalahana Dolması'
  },
  {
    name: 'KKTC (Lefkoşa & Girne)',
    region: 'KKTC',
    category: 'kktc',
    lat: 35.1856,
    lng: 33.3823,
    desc: 'Kuzey Kıbrıs Türk Cumhuriyeti; Girne Kalesi, Lefkoşa tarihi surlar içi, Selimiye Camii ve Doğu Akdeniz jeopolitiği.',
    famousPlaces: 'Girne Kalesi & Batık Gemi Müzesi, Bellapais Manastırı, Kapalı Maraş, Salamis Antik Harabeleri, Selimiye Camii',
    localFood: 'Kıbrıs Hellim Peyniri, Şeftali Kebabı, Molehiya, Kolakas Yemeği, Kırbaç Tatlısı'
  },
  {
    name: 'Balıkesir',
    region: 'Marmara',
    category: 'marmara',
    lat: 39.6484,
    lng: 27.8826,
    desc: 'Marmara ve Ege denizine kıyısı olan zeytin, tarım ve termal kaynaklar diyarı; Kaz Dağları etekleri.',
    famousPlaces: 'Kaz Dağları Milli Parkı, Ayvalık Cunda Adası & Şeytan Sofrası, Manyas Kuş Cenneti, Saat Kulesi',
    localFood: 'Höşmerim Tatlısı, Balıkesir Kuzu Döneri, Ayvalık Tostu, Susurluk Tostu & Ayranı, Edremit Zeytini'
  },
  {
    name: 'Denizli',
    region: 'Ege & Akdeniz',
    category: 'ege-akdeniz',
    lat: 37.7765,
    lng: 29.0864,
    desc: 'Beyaz cennet Pamukkale travertenleri, Hierapolis antik termal kenti ve tekstil sanayi merkezi.',
    famousPlaces: 'Pamukkale Travertenleri (UNESCO), Hierapolis Antik Kenti & Kleopatra Havuzu, Kaklık Mağarası, Laodikeia',
    localFood: 'Denizli Tandır Kebabı, Zafer Gazozu, Kuyu Kebabı, Biber Sıyırması, Çameli Fasulyesi'
  },
  {
    name: 'Sinop',
    region: 'Karadeniz',
    category: 'karadeniz',
    lat: 42.0231,
    lng: 35.1531,
    desc: 'Türkiye’nin en kuzey ucu olan İnceburun feneri, tarihi cezaevi ve doğal fiyort yapısıyla Hamsilos Koyu.',
    famousPlaces: 'Tarihi Sinop Kapalı Cezaevi, Hamsilos Koyu (Fiyort), İnceburun Deniz Feneri, Sinop Kalesi',
    localFood: 'Sinop Mantısı (Cevizli & Kıymalı), Nokul (Kıymalı & Üzümlü), Kestane Balı, Katlama'
  },
  {
    name: 'Bitlis',
    region: 'Doğu Anadolu',
    category: 'dogu-anadolu',
    lat: 38.4006,
    lng: 42.1095,
    desc: 'Nemrut Krater Gölü ve Kalderası, Ahlat Selçuklu Meydan Mezarlığı, beş minareli tarihi taş şehir.',
    famousPlaces: 'Nemrut Kalderası & Krater Gölü (UNESCO adayı), Ahlat Selçuklu Mezarlığı, Bitlis Kalesi, İslahiye Medresesi',
    localFood: 'Büryan Kebabı, Bitlis Köftesi (Katıklı Dolma), Ahlat Elması, Karakovan Balı, Çorti Aşı'
  },
  {
    name: 'Erzurum',
    region: 'Doğu Anadolu',
    category: 'dogu-anadolu',
    lat: 39.9043,
    lng: 41.2679,
    desc: 'Palandöken kış sporları merkezi, Çifte Minareli Medrese, tarihi tabyalar ve Doğu Anadolu yüksek platosu.',
    famousPlaces: 'Çifte Minareli Medrese, Yakutiye Medresesi, Palandöken Kayak Merkezi, Tortum Şelalesi, Erzurum Kalesi',
    localFood: 'Cağ Kebabı, Erzurum Kadayıf Dolması, Su Böreği, Ayran Aşı Çorbası, Civil Peyniri'
  }
];

// Turkey Geographic Center & Optimal Zoom
const TURKEY_CENTER = [39.1, 35.2];
const TURKEY_ZOOM = 6;

/* ==========================================================================
   1. LEAFLET MAP IMPLEMENTATION
   ========================================================================== */

let leafletMap;
let leafletMarkersLayer;
let leafletTileLayer;
let currentLeafletBaseLayer = 'osm'; // 'osm', 'satellite', 'dark'
let activeLeafletCategory = 'all';

// Issue 1: Zoom Threshold (threshold: 5)
// At Turkey and city scales (zoom >= 5), markers appear.
// When zoomed out to continental / world scale (zoom < 5), markers hide to prevent congestion!
const LEAFLET_ZOOM_THRESHOLD = 5;
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
  }
};

function initLeafletMap() {
  const mapElement = document.getElementById('leaflet-map');
  if (!mapElement) return;

  const worldBounds = L.latLngBounds(L.latLng(-90, -180), L.latLng(90, 180));

  leafletMap = L.map('leaflet-map', {
    center: TURKEY_CENTER,
    zoom: TURKEY_ZOOM,
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

  visitedCities.forEach(loc => {
    if (activeLeafletCategory === 'all' || loc.category === activeLeafletCategory) {
      // Custom Neon Pin Icon for Leaflet
      const customPin = L.divIcon({
        className: 'custom-city-pin-wrapper',
        html: `
          <div class="custom-city-pin" title="${loc.name} (${loc.region})">
            <span class="city-pin-pulse"></span>
            <span class="city-pin-core">📍</span>
            <span class="city-pin-label">${loc.name}</span>
          </div>
        `,
        iconSize: [80, 36],
        iconAnchor: [40, 18],
        popupAnchor: [0, -18]
      });

      const marker = L.marker([loc.lat, loc.lng], { icon: customPin });
      marker.bindPopup(`
        <div class="map-popup-card">
          <div class="map-popup-header">
            <span class="map-popup-region">${loc.region}</span>
            <span class="map-popup-tag">📍 Gittiğim Şehir</span>
          </div>
          <h4 class="map-popup-title">${loc.name}</h4>
          <p class="map-popup-desc">${loc.desc}</p>
          <div class="map-popup-meta">
            <div class="map-popup-row">
              <span class="popup-meta-icon">🏛️</span>
              <div><strong>Gezilecek Yerler:</strong> ${loc.famousPlaces}</div>
            </div>
            <div class="map-popup-row">
              <span class="popup-meta-icon">🍽️</span>
              <div><strong>Yöresel Lezzetler:</strong> <span class="food-highlight">${loc.localFood}</span></div>
            </div>
            <div class="map-popup-coords">📐 Enlem: ${loc.lat.toFixed(4)}° | Boylam: ${loc.lng.toFixed(4)}°</div>
          </div>
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
        markerStatus.textContent = 'Gizli (Zoom < ' + LEAFLET_ZOOM_THRESHOLD + ') - Yığılma Önlendi';
        markerStatus.className = 'issue-status-badge status-inactive';
      }
    }
  } else {
    if (!leafletMap.hasLayer(leafletMarkersLayer)) {
      leafletMap.addLayer(leafletMarkersLayer);
    }
    if (markerStatus) {
      markerStatus.textContent = 'Eşik Kapalı (Her Zaman Görünür)';
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

  // Region Category Filter Buttons
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
        btnMeasure.textContent = '📏 Cetvel Modu: Açık (Şehirlere Tıklayın)';
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
      fillOpacity: 0.95
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
      if (measureVal) measureVal.textContent = '0 km';
      btnClearMeasure.style.display = 'none';
    });
  }

  // Zoom to Turkey (replaces Campus zoom)
  const btnZoomTurkey = document.getElementById('leaflet-zoom-campus');
  if (btnZoomTurkey) {
    btnZoomTurkey.textContent = "🇹🇷 Türkiye'ye Yaklaş (Zoom 6)";
    btnZoomTurkey.addEventListener('click', () => {
      leafletMap.setView(TURKEY_CENTER, TURKEY_ZOOM, { animate: true });
    });
  }

  // Zoom to World (Issue 1 & 2 Test)
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
        : `Zoom Eşiğini Aç (Threshold: ${LEAFLET_ZOOM_THRESHOLD})`;
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

// Issue 1: OpenLayers native minZoom threshold
const OL_ZOOM_THRESHOLD = 5;
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

let activeOLCategory = 'all';

function renderOLMarkers() {
  if (!olVectorLayer) return;
  const source = olVectorLayer.getSource();
  source.clear();

  visitedCities.forEach(loc => {
    if (activeOLCategory === 'all' || loc.category === activeOLCategory) {
      const feature = new ol.Feature({
        geometry: new ol.geom.Point(ol.proj.fromLonLat([loc.lng, loc.lat])),
        name: loc.name,
        description: loc.desc,
        region: loc.region,
        category: loc.category,
        famousPlaces: loc.famousPlaces,
        localFood: loc.localFood,
        coords: `Enlem: ${loc.lat.toFixed(4)}° | Boylam: ${loc.lng.toFixed(4)}°`
      });

      // Custom Styled Neon Purple-Cyan Pin Marker with Text Label
      feature.setStyle(new ol.style.Style({
        image: new ol.style.Circle({
          radius: 7,
          fill: new ol.style.Fill({ color: '#a855f7' }),
          stroke: new ol.style.Stroke({ color: '#ffffff', width: 2 })
        }),
        text: new ol.style.Text({
          text: loc.name,
          offsetY: -14,
          font: '600 11px Outfit, sans-serif',
          fill: new ol.style.Fill({ color: '#f8fafc' }),
          stroke: new ol.style.Stroke({ color: '#090b17', width: 3.5 })
        })
      }));

      source.addFeature(feature);
    }
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
  olVectorLayer = new ol.layer.Vector({
    source: vectorSource,
    minZoom: OL_ZOOM_THRESHOLD // Native OpenLayers Zoom Threshold!
  });
  renderOLMarkers();

  // View bounds
  const worldExtent = ol.proj.transformExtent([-180, -85, 180, 85], 'EPSG:4326', 'EPSG:3857');

  const olView = new ol.View({
    center: ol.proj.fromLonLat([TURKEY_CENTER[1], TURKEY_CENTER[0]]), // Turkey Center [35.2, 39.1]
    zoom: TURKEY_ZOOM,
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
      markerStatus.textContent = `Gizli (Zoom < ${OL_ZOOM_THRESHOLD}) - Yığılma Önlendi`;
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
      const region = feature.get('region');
      const famousPlaces = feature.get('famousPlaces');
      const localFood = feature.get('localFood');
      const coords = feature.get('coords');

      content.innerHTML = `
        <div class="map-popup-card" style="padding: 0.25rem;">
          <div class="map-popup-header">
            <span class="map-popup-region">${region}</span>
            <span class="map-popup-tag">📍 Gittiğim Şehir</span>
          </div>
          <h4 class="map-popup-title" style="margin-top: 0.25rem;">${name}</h4>
          <p class="map-popup-desc">${desc}</p>
          <div class="map-popup-meta" style="margin-top: 0.5rem;">
            <div class="map-popup-row">
              <span class="popup-meta-icon">🏛️</span>
              <div><strong>Gezilecek Yerler:</strong> ${famousPlaces}</div>
            </div>
            <div class="map-popup-row">
              <span class="popup-meta-icon">🍽️</span>
              <div><strong>Yöresel Lezzetler:</strong> <span class="food-highlight">${localFood}</span></div>
            </div>
            <div class="map-popup-coords">📐 ${coords}</div>
          </div>
        </div>
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
  // Region Category Filter Buttons for OpenLayers
  const catButtons = document.querySelectorAll('.ol-cat-btn');
  catButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      catButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeOLCategory = btn.getAttribute('data-cat') || 'all';
      renderOLMarkers();
    });
  });

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

  // Zoom to Turkey (replaces Campus)
  const btnTurkey = document.getElementById('ol-zoom-campus');
  if (btnTurkey) {
    btnTurkey.textContent = "🇹🇷 Türkiye'ye Yaklaş (Zoom 6)";
    btnTurkey.addEventListener('click', () => {
      olMap.getView().animate({
        center: ol.proj.fromLonLat([TURKEY_CENTER[1], TURKEY_CENTER[0]]),
        zoom: TURKEY_ZOOM,
        duration: 900
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
        duration: 900
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
