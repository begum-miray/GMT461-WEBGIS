# GMT 458 – Web GIS | Assignment 1: Personal Web Page & Interactive WebGIS Portfolio

**Student:** Begüm Miray Dengiz  
**Student ID:** 2220674057  
**Email:** [begumdengiz@hacettepe.edu.tr](mailto:begumdengiz@hacettepe.edu.tr)  
**Institution:** Hacettepe University, Faculty of Engineering, Department of Geomatics Engineering  
**Course:** GMT 458 – Web GIS  
**Academic Term:** Fall 2026  
**Peer-Review Portal:** [https://gmt458.hacettepe.edu.tr/](https://gmt458.hacettepe.edu.tr/)  
**GitHub Repository:** [https://github.com/begum-miray/GMT461-WEBGIS](https://github.com/begum-miray/GMT461-WEBGIS)  
**Live Deployment (GitHub Pages):** [https://begum-miray.github.io/GMT461-WEBGIS/](https://begum-miray.github.io/GMT461-WEBGIS/)  

---

## 📌 Executive Summary

This project has been developed as part of **GMT 458: Web GIS Assignment 1** at Hacettepe University. The goal of the assignment is to build a responsive, multi-page personal WebGIS portfolio from scratch utilizing **semantic HTML5**, **modern Vanilla CSS3** (with custom properties, glassmorphism, and responsive layouts), **JavaScript (ES6+)**, and open-source web mapping libraries (**Leaflet.js** and **OpenLayers**).

The application features:
1. An animated cartographic intro cover screen (compass rose, topographic contour waves, satellite orbit, radar sweep, and geodetic benchmarks).
2. A streamlined personal portfolio highlighting academic geomatics training and professional surveying internships.
3. An interactive, searchable, and categorizable technologies matrix featuring 13 GIS, database, and web development technologies with custom SVG logos.
4. Two synchronized WebGIS mapping engines showcasing **30 visited cities across Turkey & Northern Cyprus (KKTC)**, equipped with live coordinate tracking, satellite and OSM basemaps, regional category filtering (6 categories), a geodetic distance measurement ruler, and rigorous solutions for **Marker Overlap (Issue 1)** and **World Repetition (Issue 2)**.

---

## 🎯 Assignment Directives & Rubric Compliance Matrix

All directives and requirements specified in the GMT 458 rubric have been completed in full:

| Requirement / Directive | Weight | Status | Technical Implementation Details |
| :--- | :---: | :---: | :--- |
| **HTML Structure** | 15% | ✅ Complete | 3 multi-page documents (`index.html`, `technologies.html`, `maps.html`), semantic markup (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`, `<aside>`), W3C compliance, ARIA accessibility, and SEO meta tags. |
| **CSS Animations** | 10% | ✅ Complete | Hardware-accelerated CSS animations (`@keyframes topoFlow`, `@keyframes radarSpin`, `@keyframes scanSweep`, `@keyframes compassBreathing`, `@keyframes satelliteRevolution`, `@keyframes beaconPulse`, `@keyframes slideInUp`), and smooth splash transition. |
| **Tabular Information & Imagery** | 10% | ✅ Complete | Dynamic table in `technologies.html` with original SVG logos, live search input, multi-category tag filtering (`🎯 Used in Assignment (9)`, WebGIS, Desktop, Web, DB, Dev), category badges, and assignment roles. |
| **OpenLayers (OL) Map** | 10% | ✅ Complete | OpenLayers v9.2.4 implementation on `maps.html` featuring 30 visited cities as vector features, EPSG:3857 projection, Esri World Imagery & OSM basemaps, coordinate tracking, scale control, and dynamic popup overlays. |
| **Leaflet Map** | 10% | ✅ Complete | Leaflet v1.9.4 implementation on `maps.html` featuring 30 visited cities, custom SVG pin markers, Esri World Imagery & OSM basemaps, 6-region filter controls (including KKTC), and an interactive great-circle distance measurement tool. |
| **Issue 1: Zoom Threshold** | 10% | ✅ Complete | Resolved marker overlap at global zooms: Leaflet listens to `zoomend` and hides markers when `zoom < 5`; OpenLayers enforces `minZoom: 5` directly on the vector layer. Markers automatically reappear at regional/national scale (`zoom ≥ 5`). |
| **Issue 2: Earth Repetition** | 10% | ✅ Complete | Prevented horizontal Mercator world duplication: Leaflet applies `noWrap: true`, `bounds`, and `maxBoundsViscosity: 1.0`; OpenLayers configures `wrapX: false` on tile sources and binds view `extent`. |
| **Git Version Control** | 5% | ✅ Complete | Meaningful, structured git commit history spanning multiple working sessions with clear conventional commit messages. |
| **Design, Quality & Responsiveness** | 10% | ✅ Complete | Deep Emerald & Oceanic Cyan cartographic color scheme, Light/Dark theme switch with `localStorage` persistence, responsive mobile navigation, and modern glassmorphism styling. |
| **AI Disclosure & Report** | Required | ✅ Complete | Fully documented AI usage report with prior documentation research, specific technical concepts learned, and an estimated time of 2 hours. |

---

## 🛠️ Complete Technical Stack & Tools Used

### 1. Core Web Technologies
* **HTML5 (HyperText Markup Language 5):** Semantic document structure, SEO metadata, Open Graph preview tags, and accessibility attributes.
* **CSS3 (Cascading Style Sheets 3):** Vanilla CSS design system, CSS custom properties (`--bg-primary`, `--primary`, `--glass-bg`, etc.), glassmorphism (`backdrop-filter: blur(24px)`), responsive CSS Grid, Flexbox, and keyframe animations.
* **JavaScript (ECMAScript 2020+):** Client-side interactivity, DOM event handling, asynchronous theme persistence (`localStorage`), real-time search and multi-tag filtering algorithms, and mathematical distance calculations.

### 2. Web Mapping & Geospatial Libraries
* **Leaflet.js (v1.9.4):** Lightweight, mobile-friendly interactive 2D mapping library used for Map 1 (`L.map`, `L.tileLayer`, `L.layerGroup`, `L.marker`, `L.polyline`, `L.popup`).
* **OpenLayers (v9.2.4):** Modular, enterprise-grade geospatial mapping engine used for Map 2 (`ol.Map`, `ol.View`, `ol.layer.Tile`, `ol.layer.Vector`, `ol.source.Vector`, `ol.source.XYZ`, `ol.Overlay`, `ol.geom.Point`, `ol.style.Style`).

### 3. Spatial Data & Tile Services
* **OpenStreetMap (OSM):** Standard open-source cartographic street basemap tiles (`https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`).
* **Esri World Imagery (ArcGIS REST Services):** High-resolution global satellite orthophoto imagery tiles (`https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}`).
* **WGS84 (EPSG:4326):** Global geographic coordinate reference system used for city latitude/longitude storage.
* **Web Mercator (EPSG:3857):** Projected coordinate system used for web tile rendering and distance projection transforms.
* **TUREF / UTM Zone 36N (EPSG:5256):** National Turkish geodetic reference frame referenced in engineering benchmarks.

### 4. Mathematical & Geodetic Algorithms
* **Haversine Great-Circle Distance Formula:** Implemented in pure JavaScript to calculate geodesic distances between clicked cities on the WGS84 sphere:
  $$\Delta\sigma = 2 \arcsin \sqrt{\sin^2\left(\frac{\Delta\phi}{2}\right) + \cos\phi_1 \cos\phi_2 \sin^2\left(\frac{\Delta\lambda}{2}\right)}$$
  $$d = R \cdot \Delta\sigma \quad \text{where } R = 6371.0 \text{ km}$$

### 5. Desktop GIS & Analytical Tools
* **QGIS (v3.34 LTR):** Coordinate data validation, geographic bounding box inspection, and GeoJSON export.
* **ArcGIS:** Spatial database design, geostatistical analysis, and thematic map production.
* **PostgreSQL / PostGIS:** Relational spatial database modeling, spatial SQL functions (`ST_Distance`, `ST_Intersects`, `ST_MakePoint`), and spatial indexing (GiST).
* **Python Geo-Stack:** Spatial automation, coordinate transformation scripts, and local development testing (`python3 -m http.server 8000`).

### 6. Development & Hosting
* **Git:** Distributed version control system.
* **GitHub & GitHub Pages:** Remote code repository hosting and static website deployment.

---

## 🔄 Assignment Technical Workflow & Architecture

### 1. Splash Screen & Cartographic Intro Portal Workflow (`index.html`)
1. **Initial Page Load:** When a user navigates to `index.html`, the fullscreen `#siteCoverOverlay` greets the user.
2. **Visual Cartographic Animations:**
   - **Topographic Contour Waves:** 5 undulating SVG elevation lines (`.topo-line`) with flowing stroke dashes (`@keyframes topoFlow`).
   - **Cartographic Compass Rose:** An SVG 8-point compass star with a graduated degree ring and a glowing North needle breathing smoothly (`@keyframes compassBreathing`).
   - **Orbiting GNSS Satellite:** An animated satellite (`🛰️`) revolving in an elliptical orbit around the compass rose (`@keyframes satelliteRevolution`).
   - **Geodetic Radar Sweep:** A 360° radar beam illuminating 10 km, 25 km, and 50 km distance scale rings.
   - **Geodetic Reticle Benchmarks:** 4 corner coordinates tracking geodetic benchmarks (`Δ NİRENGİ TRG-01`, `EPSG:5256`, `TUDKA 915m`, `GNSS 3D-FIX`).
3. **Exit Transition:** Clicking **"🚀 SİTEYE GİRİŞ YAP"** or pressing `Enter`/`Space` applies the `.cover-fade-out` class (`transform: scale(1.12)`, `filter: blur(14px)`, `opacity: 0`). The cover smoothly transitions away and sets `sessionStorage.setItem('gmt458_visited_cover', 'true')`.
4. **Re-Opening Feature:** Users can re-experience the intro anytime via the **"🎬 Giriş Kapağı"** navbar button. Page reloads automatically reset the session state to allow instant review.

### 2. Personal Portfolio & Biography Workflow (`index.html`)
1. **Header & Navigation:** Responsive brand logo, dark/light theme switch, intro cover button, and mobile menu toggle.
2. **Hero Presentation:** Profile presentation stating student identity (**Begüm Miray Dengiz**), academic status at Hacettepe University Geomatics Engineering, and professional surveying internships (**Karayolları 4. Bölge Müdürlüğü**, **Doruk Harita Şirketi**, **Çankaya LİHKAB**).
3. **Clean Layout:** Redundant duplicate internship cards and competencies grids were removed to maintain a clean, distraction-free resume presentation.

### 3. Interactive Technologies Matrix Workflow (`technologies.html`)
1. **Data Model:** 13 technologies categorized across `webgis`, `desktop`, `web`, `db`, and `dev`, with 9 tagged specifically with `odev`.
2. **Real-Time Live Search:** An input event listener filters rows on each keystroke against title, category, and functional description text.
3. **Multi-Category Tag Filtering:** Clicking any filter button (`Tümü`, `🎯 Ödevde Kullanılanlar`, `WebGIS`, `Masaüstü CBS`, `Web Geliştirme`, `Veritabanı`, `Yazılım & Araçlar`) triggers `rowCategory.split(/\s+/)` matching.
4. **Visual Metrics:** Each row presents an official vector logo, category badge, in-depth functional description of how it was used in GMT 458, an animated skill percentage bar, and an active project status indicator.

### 4. WebGIS Dual Mapping Engine Workflow (`maps.html`)

The maps page implements two independent, side-by-side mapping engines rendering **30 visited cities in Turkey & KKTC**:
* **İç Anadolu (8):** Ankara, Eskişehir, Konya, Kırıkkale, Nevşehir, Kayseri, Sivas, Yozgat
* **Karadeniz (9):** Bolu, Zonguldak, Çorum, Ordu, Trabzon, Rize, Samsun, Artvin, Sinop
* **Ege & Akdeniz (6):** Aydın, İzmir, Muğla, Antalya, Kütahya, Denizli
* **Marmara (3):** İstanbul, Çanakkale, Balıkesir
* **Doğu Anadolu (3):** Van, Bitlis, Erzurum
* **KKTC (1):** KKTC (Lefkoşa & Girne)

#### Engine A: Leaflet.js
1. **Initialization:** Instantiated on `#leaflet-map` centered at Turkey's coordinates `[39.1, 35.2]` with initial zoom `6`.
2. **Basemap Switching:** Radio buttons toggle between **OpenStreetMap (OSM)** and **Esri World Imagery (Satellite)**.
3. **Marker Customization & Rich Popups:** Cities are rendered with custom SVG location pins with neon hover effects. Clicking a pin opens a detailed modal popup displaying city name, region badge, description, **🏛️ Famous Landmarks & Places to Visit (`famousPlaces`)**, **🍽️ Traditional Local Cuisine (`localFood`)**, and precise geodetic coordinates.
4. **Regional Filtering:** Category buttons instantly filter markers across 6 geographic regions (İç Anadolu, Karadeniz, Ege & Akdeniz, Marmara, Doğu Anadolu, KKTC) or show all 30 cities.
5. **Interactive Distance Ruler Tool:**
   - Activating the ruler switches the map cursor to crosshair mode.
   - Clicking two cities calculates the exact great-circle geodesic distance using the Haversine formula.
   - A dynamic geodesic polyline connects the points, and a floating badge displays the measured distance in kilometers.
   - An active reset button clears measurements.
6. **Live Coordinate Tracker:** Listens to `mousemove` events and displays live WGS84 latitude and longitude coordinates.

#### Engine B: OpenLayers
1. **Initialization:** Instantiated on `#ol-map` with `ol.View` projected to Web Mercator (`EPSG:3857`), centered at `ol.proj.fromLonLat([35.2, 39.1])` at zoom `6`.
2. **Vector Architecture:** Cities are constructed as `ol.Feature` objects containing point geometries (`ol.geom.Point`) and custom vector styling (neon circular point with text badge), attached to an `ol.source.Vector` layer.
3. **Interactive Popup Overlay:** Uses an `ol.Overlay` element bound to the map. Clicking any vector feature displays an HTML popup card with city metadata, **🏛️ Gezilecek Yerler (`famousPlaces`)**, and **🍽️ Yöresel Lezzetler (`localFood`)**.
4. **Regional Filtering:** Multi-category ribbon buttons dynamically filter vector features across Turkey's geographic regions.
5. **Basemap Switching:** Toggles the base raster tile source between OSM and Esri Satellite via `ol.source.XYZ`.
6. **Live Coordinates:** Converts pixel coordinates on `pointermove` to EPSG:4326 geographic coordinates via `ol.proj.toLonLat`.

---

## 🔬 Core WebGIS Issues & Mathematical Solutions

### Issue 1: Zoom Threshold / Overlapping Markers

* **Problem Statement:** When many geographic markers are displayed in close proximity across a national scale, zooming out to a continental or global view causes markers to overlap and cluster into an unreadable visual blob, creating UI clutter and degrading rendering performance.
* **Leaflet Solution:**
  An event listener monitors `zoomend`. If the current zoom level drops below the designated threshold (`ZOOM_THRESHOLD = 5`), the marker group is removed from the map via `map.removeLayer`. When zooming into national or regional scales (`zoom ≥ 5`), the markers are automatically re-added via `map.addLayer`. Status badges dynamically inform the user of the threshold state.
  ```javascript
  const LEAFLET_ZOOM_THRESHOLD = 5;

  function updateLeafletMarkerVisibility() {
    const currentZoom = leafletMap.getZoom();
    if (isLeafletThresholdActive && currentZoom < LEAFLET_ZOOM_THRESHOLD) {
      if (leafletMap.hasLayer(leafletMarkersLayer)) {
        leafletMap.removeLayer(leafletMarkersLayer);
      }
    } else {
      if (!leafletMap.hasLayer(leafletMarkersLayer)) {
        leafletMap.addLayer(leafletMarkersLayer);
      }
    }
  }

  leafletMap.on('zoomend', updateLeafletMarkerVisibility);
  ```
* **OpenLayers Solution:**
  OpenLayers natively supports resolution-dependent layer rendering directly on vector layers through the `minZoom` parameter:
  ```javascript
  olMarkersLayer = new ol.layer.Vector({
    source: olVectorSource,
    style: createOpenLayersMarkerStyle,
    minZoom: isOlThresholdActive ? 5 : 0 // Automatically hides markers when zoom < 5
  });
  ```

---

### Issue 2: Earth Repeating Itself When Zoomed Out

* **Problem Statement:** Standard Web Mercator (EPSG:3857) tile services project the cylindrical world map across continuous horizontal tiles from $-\infty$ to $+\infty$, causing the world to repeat infinitely along the longitude axis when zoomed out.
* **Leaflet Solution:**
  Tile layers are constrained using `noWrap: true` and bounded to geographic world limits `[[-90, -180], [90, 180]]`. The map view is locked using `maxBounds` and `maxBoundsViscosity: 1.0` to eliminate panning into void space:
  ```javascript
  const worldBounds = L.latLngBounds(L.latLng(-90, -180), L.latLng(90, 180));

  function createLeafletTileLayer(providerKey, noWrap) {
    return L.tileLayer(LEAFLET_TILE_PROVIDERS[providerKey].url, {
      attribution: LEAFLET_TILE_PROVIDERS[providerKey].attr,
      noWrap: noWrap,
      bounds: noWrap ? worldBounds : undefined,
      maxZoom: 19
    }).addTo(leafletMap);
  }

  leafletMap.setMaxBounds(worldBounds);
  ```
* **OpenLayers Solution:**
  OpenLayers tile sources (`ol.source.OSM` and `ol.source.XYZ`) configure `wrapX: false` to disable horizontal tile wrapping. In addition, `ol.View` enforces coordinate extent bounds:
  ```javascript
  const worldExtent3857 = ol.proj.transformExtent(
    [-180, -85.051129, 180, 85.051129],
    'EPSG:4326',
    'EPSG:3857'
  );

  olTileSource = new ol.source.OSM({
    wrapX: false // Disables infinite horizontal repetition
  });

  olView = new ol.View({
    center: ol.proj.fromLonLat([35.2, 39.1]),
    zoom: 6,
    extent: isOlWrapActive ? undefined : worldExtent3857
  });
  ```

---

## 🤖 Artificial Intelligence (AI) Usage Disclosure & Report

In strict compliance with the GMT 458 course policy:
> *"First understand and search the issues/problems you encounter on Google, and if you cannot resolve it, then use AI.*  
> *o Specify, the specific thing/issue you have learned from AI in your Readme.md.*  
> *o Provide an estimate of the total AI usage in terms of minutes or hours to realise your project."*

### 1. Prior Documentation & Technical Research
Before querying AI assistance, official documentation and community standards were reviewed:
* [Leaflet.js Official TileLayer API Reference](https://leafletjs.com/reference.html#tilelayer)
* [OpenLayers Vector Layer & minZoom API Documentation](https://openlayers.org/en/latest/apidoc/module-ol_layer_Vector-VectorLayer.html)
* [MDN Web Docs: CSS Custom Properties & Keyframe Animations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animations)
* [Esri ArcGIS REST Services Tile Specification](https://developers.arcgis.com/rest/services-reference/enterprise/map-service/)

### 2. Specific Concepts Learned from AI
* **Asymmetric Architecture of Layer Visibility:** While OpenLayers handles scale-dependent visibility internally via the `minZoom` property on `ol.layer.Vector`, Leaflet requires listening to the asynchronous `zoomend` event and toggling the `L.layerGroup` on the map instance using `hasLayer()`, `addLayer()`, and `removeLayer()`. AI helped identify this architectural difference to avoid unnecessary DOM reflows.
* **Tile Bounding Constraints with Viscosity:** AI explained that solely setting `noWrap: true` or `wrapX: false` leaves the viewport susceptible to being panned out of bounds, resulting in grey blank areas. Coupling `noWrap: true` with `maxBoundsViscosity: 1.0` in Leaflet and `ol.proj.transformExtent` in OpenLayers ensures a solid spatial boundary constraint.
* **Hardware-Accelerated Splash Transition Performance:** AI provided guidance on applying `transform: scale()` and `opacity` together with `will-change` and `filter: blur()` to leverage GPU compositing during the intro cover exit animation.

### 3. Estimated Total AI Usage Time
* **Total AI Usage Time:** Approximately **2 hours** (utilized for code architecture verification, rubric compliance auditing, geodetic ruler Haversine formula validation, cartographic animation loops, and multi-page responsive styling optimization).

---

## 📁 Repository File Structure

```
gmt458_ödev/
├── index.html              # Homepage: Intro splash portal, resume & geomatics profile
├── technologies.html       # Technologies page: Searchable & filterable 13-tool GIS matrix
├── maps.html               # Maps page: Leaflet & OpenLayers dual engines (30 cities)
├── README.md               # Comprehensive English assignment documentation & AI disclosure
├── css/
│   └── style.css           # Vanilla CSS design system, dark/light theme, glassmorphism, animations
├── js/
│   ├── main.js             # Core UI, theme toggle, splash controller, table filter & search
│   └── maps.js             # Leaflet & OpenLayers mapping logic, ruler tool, threshold & wrap solutions
└── assets/
    └── images/
        ├── arcgis.svg      # Official vector logo: ArcGIS
        ├── avatar.svg      # Geomatics student vector avatar
        ├── css3.svg        # Official vector logo: CSS3
        ├── git.svg         # Official vector logo: Git
        ├── html5.svg       # Official vector logo: HTML5
        ├── javascript.svg  # Official vector logo: JavaScript
        ├── leaflet.svg     # Official vector logo: Leaflet
        ├── openlayers.svg  # Official vector logo: OpenLayers
        ├── osm.svg         # Official vector logo: OpenStreetMap
        ├── postgis.svg     # Official vector logo: PostgreSQL / PostGIS
        ├── python.svg      # Official vector logo: Python
        ├── qgis.svg        # Official vector logo: QGIS
        └── ruler.svg       # Vector icon: Geodesic Distance Measurement Ruler
```

---

## 🚀 Local Execution Guide

To test the web application locally on your machine:
```bash
# Navigate to the repository root
cd /path/to/gmt458_ödev

# Start a local HTTP server using Python 3
python3 -m http.server 8000

# Open the website in your web browser
open http://localhost:8000/
```
