/**
 * GMT 458 - Web GIS Assignment 1
 * i18n.js - Multi-language (Turkish / English) Translation Engine
 * Begüm Miray Dengiz - Hacettepe University Geomatics Engineering
 */

const translations = {
  tr: {
    // Navigation
    "nav.brand": "Begüm Miray",
    "nav.brand_sub": ".WebGIS",
    "nav.resume": "Özgeçmiş",
    "nav.table": "Tablo",
    "nav.maps": "Web Haritaları",
    "theme.title_dark": "Karanlık Moda Geç",
    "theme.title_light": "Aydınlık Moda Geç",

    // Index - Hero Section
    "hero.badge": "🏛️ Hacettepe Üniversitesi • Geomatik Mühendisliği",
    "hero.greeting": "Merhaba, Ben",
    "hero.name": "Begüm Miray Dengiz",
    "hero.role": "📐 Geomatik Mühendisliği Son Sınıf Öğrencisi & WebGIS Geliştiricisi",
    "hero.bio": "Hacettepe Üniversitesi Mühendislik Fakültesi Geomatik Mühendisliği Bölümü son sınıf öğrencisiyim. Mesleki stajlarımı <strong>Karayolları 4. Bölge Müdürlüğü</strong>, <strong>Doruk Harita Şirketi</strong> ve <strong>Çankaya LİHKAB</strong> bünyesinde tamamladım. Coğrafi Bilgi Sistemleri (CBS), açık kaynaklı WebGIS haritalama teknolojileri (Leaflet, OpenLayers) ve mekânsal veri analizleri üzerine çalışmalarımı sürdürüyorum.",
    "hero.btn_maps": "🗺️ Web Haritalarını İncele (30 Şehir)",
    "hero.btn_tech": "📊 Teknolojiler & Beceriler",
    "hero.avatar_role": "Son Sınıf Öğrencisi",
    "hero.avatar_sub": "Hacettepe Geomatik Müh.",

    // Index - Information Cards
    "cards.edu_title": "🎓 Akademik Eğitim",
    "cards.edu_sub": "Hacettepe Üniversitesi (2020 – 2026)",
    "cards.edu_desc": "Mühendislik Fakültesi Geomatik Mühendisliği Bölümü. CBS, Fotogrametri, Jeodezi, Uzaktan Algılama ve GMT 458 Web GIS dersi kapsamında açık kaynaklı mekânsal yazılım mimarileri.",

    "cards.intern_title": "💼 Mesleki Stajlar",
    "cards.intern_sub": "Kamu ve Özel Sektör Deneyimi",
    "cards.intern_desc": "<strong>Karayolları 4. Bölge Müdürlüğü</strong> (yol & güzergah etüdü), <strong>Doruk Harita</strong> (halihazır harita üretimi & kadastro) ve <strong>Çankaya LİHKAB</strong> (lisanslı harita bürosu, tescil ve aplikasyon).",

    "cards.focus_title": "🔬 İlgi & Uzmanlık Alanları",
    "cards.focus_sub": "Mekânsal Bilişim & Web Teknolojileri",
    "cards.focus_desc": "Açık kaynaklı WebGIS kütüphaneleri (Leaflet, OpenLayers), masaüstü CBS (QGIS, ArcGIS), mekânsal veritabanı (PostGIS) ve modern web geliştirme (HTML5, CSS3, JavaScript).",

    // Index - Quick Showcase Cards
    "showcase.maps_title": "🗺️ Gittiğim Şehirler & İnteraktif Harita Vitrini",
    "showcase.maps_desc": "Türkiye ve KKTC genelinde ziyaret ettiğim 30 şehir; Leaflet ve OpenLayers ile haritalandırıldı. Esri uydu altlığı, mesafe ölçüm cetveli, ölçek eşiği (Zoom Threshold) ve dünya tekrarı sınırlandırması içerir.",
    "showcase.maps_btn": "Haritaları Keşfet ➔",

    "showcase.tech_title": "📊 CBS & Web Harita Teknolojileri Tablosu",
    "showcase.tech_desc": "Geomatik mühendisliği ve WebGIS mimarisinde kullandığım 13 farklı teknoloji, kütüphane ve yazılımın detaylı tabular incelemesi. Canlı arama ve kategori filtreleme özellikleri.",
    "showcase.tech_btn": "Tabloyu İncele ➔",

    // Index - Contact / Links
    "contact.title": "🌐 İletişim & Proje Bağlantıları",
    "contact.github": "GitHub Deposu (GMT461-WEBGIS)",
    "contact.email": "Hacettepe E-Posta",
    "contact.review": "Peer Review Sistemi",

    // Technologies Page
    "tech.badge": "💻 Jeo-Uzamsal Yazılım & Araç Yetkinlikleri",
    "tech.title": "CBS & Web Harita Teknolojileri",
    "tech.desc": "Geomatik mühendisliğinde ve modern WebGIS mimarisinde kullandığım araçlar, harita kütüphaneleri ve yazılımların detaylı tabular dökümü. Canlı arama ve filtreleme araçlarıyla hızlıca inceleyebilirsiniz.",
    "tech.search_placeholder": "Teknoloji ara (örn: Leaflet, QGIS)...",
    "tech.filter_all": "Tümü (13)",
    "tech.filter_odev": "🎯 Ödevde Kullanılanlar (9)",
    "tech.filter_webgis": "WebGIS",
    "tech.filter_desktop": "Masaüstü CBS",
    "tech.filter_web": "Web Geliştirme",
    "tech.filter_db": "Veritabanı",
    "tech.filter_dev": "Yazılım & Araçlar",
    
    // Table Headers
    "table.th_tech": "Yazılım / Teknoloji & Logo",
    "table.th_cat": "Kategori & Rol",
    "table.th_role": "Ödevdeki Fonksiyonu & Mekânsal Kullanımı",
    "table.th_level": "Öğrenme / Yetkinlik",
    "table.th_status": "Ödev / Proje Durumu",

    // Tech bottom cards
    "techcard.1_title": "Leaflet vs OpenLayers Seçimi",
    "techcard.1_desc": "Leaflet hızlı, hafif ve temel haritalama senaryoları için kusursuzdur. OpenLayers ise farklı koordinat referans sistemleri (CRS) ve karmaşık vektör veri katmanları için endüstri standardıdır.",
    "techcard.2_title": "Sürekli Mesleki Gelişim",
    "techcard.2_desc": "Geomatik mühendisliğinde açık veri standartları (OGC), GeoJSON, WMS/WFS servisleri ve modern web harita mimarilerini araştırarak kendimi sürekli güncel tutuyorum.",
    "techcard.3_title": "Sıradaki Adım",
    "techcard.3_desc": "İki haritanın çalıştığı ve zoom threshold ile dünya tekrarı sorunlarının çözüldüğü interaktif sayfaya göz atın:",
    "techcard.3_btn": "Web Haritalarına Git ➔",

    // Maps Page
    "maps.badge": "📍 30 Gittiğim Şehir & KKTC • Mekânsal Rota Vitrini",
    "maps.title": "Gittiğim Şehirler & İnteraktif Harita Vitrini",
    "maps.desc": "Aşağıda Türkiye ve KKTC genelinde <strong>ziyaret ettiğim 30 şehir</strong> (Eskişehir, Ankara, Van, Aydın, İzmir, Konya, İstanbul, Çanakkale, Muğla, Antalya, Kütahya, Bolu, Zonguldak, Kırıkkale, Nevşehir, Kayseri, Sivas, Çorum, Yozgat, Ordu, Trabzon, Rize, Samsun, Artvin, KKTC, Balıkesir, Denizli, Sinop, Bitlis, Erzurum) <strong>Leaflet</strong> ve <strong>OpenLayers</strong> kütüphaneleriyle haritalandırılmıştır. Haritalar; <em>Esri Uydu Görüntüsü</em>, <em>Canlı Koordinat Takibi</em>, <em>Şehirlerarası Mesafe Ölçüm Cetveli</em>, <em>Ölçek Eşiği (Zoom Threshold)</em> ve <em>Dünya Tekrarı Sınırlandırması (noWrap / wrapX)</em> ile donatılmıştır.",

    "maps.base_label": "🛰️ Altlık Katman:",
    "maps.base_osm": "🗺️ Sokak (OSM)",
    "maps.base_sat": "🛰️ Esri Uydu Görüntüsü",
    "maps.filter_label": "🗺️ Bölge Filtresi:",
    "maps.filter_all": "Tümü (30)",
    "maps.filter_icanadolu": "🏛️ İç Anadolu (8)",
    "maps.filter_karadeniz": "🌲 Karadeniz (9)",
    "maps.filter_ege": "🌊 Ege & Akdeniz (6)",
    "maps.filter_marmara": "🌉 Marmara (3)",
    "maps.filter_dogu": "🏔️ Doğu Anadolu (3)",
    "maps.filter_kktc": "🏝️ KKTC (1)",

    // Leaflet Card
    "maps.l_title": "1. Leaflet Haritası",
    "maps.l_subtitle": "Türkiye & KKTC Çapında 30 Gittiğim Şehir • Esri Uydu Katmanı & Mesafe Ölçüm Cetveli",
    "maps.ruler_btn": "📏 Cetvel Aracı (Mesafe Ölç)",
    "maps.ruler_active": "🛑 Ölçümü Tamamla",
    "maps.clear_ruler_btn": "🗑️ Ölçümü Sıfırla",
    "maps.btn_turkey": "🇹🇷 Türkiye'ye Yaklaş (Zoom 6)",
    "maps.btn_world": "🌍 Dünyaya Uzaklaş (Zoom 3)",
    "maps.btn_toggle_threshold_off": "Zoom Eşiğini Kapat",
    "maps.btn_toggle_threshold_on": "Zoom Eşiğini Aç",
    "maps.btn_toggle_wrap_allow": "Tekrarı İzin Ver (noWrap: false)",
    "maps.btn_toggle_wrap_lock": "Tek Dünya Yap (noWrap: true)",

    "maps.zoom_label": "Mevcut Zoom:",
    "maps.thresh_label": "Ölçek Eşiği (Threshold):",
    "maps.thresh_visible": "Görünür (Zoom ≥ 5)",
    "maps.thresh_hidden": "Gizli (Zoom < 5)",
    "maps.thresh_disabled": "Devre Dışı",
    "maps.wrap_label": "Dünya Sınırı (noWrap):",
    "maps.wrap_active": "noWrap: Aktif (Tek Dünya)",
    "maps.wrap_disabled": "noWrap: Pasif (Tekrarlı)",

    "maps.measure_title": "📏 Ölçülen Kuş Uçuşu Mesafe:",
    "maps.measure_hint": "(Şehirlere sırayla tıklayın)",
    "maps.measure_click_hint": "Harita veya şehir noktalarına tıklayarak mesafe ölçün",

    "maps.l_sol_title": "💡 Mekânsal Optimizasyon ve Sınır Denetimi (Leaflet):",
    "maps.l_sol_1": "<strong>1. Ölçek Eşiği (Zoom Threshold - Marker Çakışması):</strong> Türkiye ve KKTC genelinde yer alan 30 şehir noktası dünya ölçeğinde (küresel zoom) üst üste yığılır ve harita okunamaz hale gelir. Bu sorunu çözmek için Leaflet'te <code>map.on('zoomend')</code> olayı dinlenir. Mevcut zoom seviyesi eşikten (<code>threshold = 5</code>) küçük olduğunda (kıtalar veya dünya ölçeği) <code>map.removeLayer(markersLayer)</code> ile marker grubu gizlenir; Türkiye ve bölge ölçeğine yaklaşıldığında (<code>zoom ≥ 5</code>) <code>map.addLayer(markersLayer)</code> ile tüm şehirler yeniden gösterilir.",
    "maps.l_sol_2": "<strong>2. Dünya Tekrarını Önleme (noWrap / Tile Bounding):</strong> Mercator projeksiyonunda döşeme katmanları yatayda sonsuz tekrarlar. Bunu engellemek için <code>L.tileLayer</code> seçeneklerinde <span class=\"code-snippet\">noWrap: true</span> ve <span class=\"code-snippet\">bounds: [[-90, -180], [90, 180]]</span> tanımlanmış, harita için <span class=\"code-snippet\">maxBounds</span> ve <span class=\"code-snippet\">maxBoundsViscosity: 1.0</span> ayarlanmıştır.",

    // OpenLayers Card
    "maps.ol_title": "2. OpenLayers (OL) Haritası",
    "maps.ol_subtitle": "Türkiye & KKTC Çapında 30 Gittiğim Şehir • Vektör Katman, minZoom & wrapX Çözümleri",
    "maps.ol_wrap_label": "Dünya Sınırı (wrapX):",
    "maps.ol_wrap_active": "wrapX: false (Tek Dünya)",
    "maps.ol_wrap_disabled": "wrapX: true (Tekrarlı)",
    "maps.ol_btn_wrap_allow": "Tekrarı İzin Ver (wrapX: true)",
    "maps.ol_btn_wrap_lock": "Tek Dünya Yap (wrapX: false)",

    "maps.ol_sol_title": "💡 Mekânsal Optimizasyon ve Sınır Denetimi (OpenLayers):",
    "maps.ol_sol_1": "<strong>1. Ölçek Eşiği (minZoom Özelliği):</strong> OpenLayers vektör katmanlarında (<code>ol.layer.Vector</code>) doğrudan yerleşik <span class=\"code-snippet\">minZoom: 5</span> özelliği bulunmaktadır. Kullanıcı dünya ölçeğine uzaklaştığında (zoom < 5), OpenLayers otomatik olarak vektör katmanını çizmeyi durdurarak marker karmaşasını ve render maliyetini önler.",
    "maps.ol_sol_2": "<strong>2. Dünya Tekrarını Önleme (wrapX: false & extent):</strong> OpenLayers'ta karo kaynağında (Tile Source) varsayılan olarak açık olan yatay tekrarı durdurmak için <span class=\"code-snippet\">new ol.source.OSM({ wrapX: false })</span> veya XYZ kaynağında <code>wrapX: false</code> tanımlanır. Ayrıca <code>ol.View</code> üzerinde <span class=\"code-snippet\">extent</span> sınırlandırılarak tek dünya görünümü kilitlenir.",

    // Popup Labels
    "popup.city_title": "Ziyaret Edilen Şehir",
    "popup.region": "Bölge",
    "popup.coords": "Koordinatlar",
    "popup.famous": "Meşhur Yerler",
    "popup.food": "Yöresel Lezzetler",
    "popup.visited_badge": "✓ Ziyaret Edildi",

    // Table Details (13 Technologies)
    "td.leaflet_desc": "Ödev 1'de <strong>1. Harita Motoru</strong> olarak kullanıldı. 30 ziyaret edilen şehrin koordinatlarını gösterme, özel SVG pin markerları, popup pencereleri, ölçek eşiği (Zoom < 5 gizleme) ve <code>noWrap: true</code> ile tek dünya sınırlandırması.",
    "td.ol_desc": "Ödev 1'de <strong>2. Harita Motoru</strong> olarak kullanıldı. EPSG:3857 (Web Mercator) projeksiyonunda 30 şehir vektör katmanı (VectorSource & VectorLayer), <code>minZoom: 5</code> kuralı ile marker çakışması önleme, <code>wrapX: false</code> dünya tekrarı çözümü ve HTML popup overlay.",
    "td.html5_desc": "Ödev 1 web sayfasının tüm yapısal iskeleti; semantik etiketler (<code>&lt;header&gt;</code>, <code>&lt;main&gt;</code>, <code>&lt;section&gt;</code>, <code>&lt;article&gt;</code>, <code>&lt;footer&gt;</code>), W3C standartlarına uygun erişilebilirlik (ARIA etiketleri) ve SEO meta etiketleri.",
    "td.css3_desc": "Ödev 1 görsel tasarımı; haritacılık temalı zümrüt/turkuaz pusula gülü ve topoğrafik izohips dalgaları (%10 animasyon gereksinimi), CSS değişkenleri ile Açık/Koyu tema yönetimi, cam efekti (Glassmorphism) ve mobil uyumlu CSS Grid/Flexbox düzeni.",
    "td.js_desc": "Ödev 1'de Leaflet ve OpenLayers harita nesnelerinin başlatılması, canlı koordinat takipçisi (mousemove), teknoloji arama ve filtreleme motoru, tema geçişi (LocalStorage), çoklu dil desteği (TR/EN i18n).",
    "td.esri_desc": "Ödev 1 haritalarında yüksek çözünürlüklü küresel ortofoto uydu altlığı olarak entegre edildi. Türkiye ve KKTC'deki 30 şehrin gerçek arazi örtüsü, topoğrafyası ve kıyı çizgilerinin incelenmesine olanak tanır.",
    "td.osm_desc": "Ödev 1'de Leaflet ve OpenLayers haritalarının varsayılan sokak ve topoğrafya altlığı. Küresel tile sunucusu üzerinden hızlı, standart ve açık kaynaklı kartografik altlık sağlar.",
    "td.ruler_desc": "Ödev 1 haritasında şehirler üzerine sırayla tıklanarak aralarındaki kuş uçuşu küresel jeodezik mesafeyi WGS84 elipsoidinde anlık hesaplayan interaktif ölçüm aracı.",
    "td.git_desc": "Ödev kaynak kodlarının sürüm takibi, commit geçmişi, akademik ödev teslim dokümantasyonu (README.md, AI beyanı) ve ödev web sayfasının internette canlı yayına alınması (GitHub Pages).",
    "td.qgis_desc": "Mekânsal katman düzenleme, tampon (buffer) ve bindirme (overlay) analizi, ödevde haritalanan 30 şehrin koordinat doğruluk kontrolleri ve GeoJSON / Shapefile veri üretimi.",
    "td.arcgis_desc": "Mekânsal veri tabanı tasarımı, 3D arazi modeli görselleştirme, harita servisleri (MapServer / FeatureServer) yayınlama ve jeoistatistiksel analizler.",
    "td.postgis_desc": "ST_Intersects, ST_Buffer, ST_Distance gibi mekânsal SQL fonksiyonları, GiST indeksleme ve büyük vektör veri kümelerinin yüksek performanslı sorgulanması.",
    "td.python_desc": "Mekânsal veri işleme otomasyonu, koordinat dönüşümleri, GeoJSON üretim betikleri ve yerel test HTTP sunucusu ile geliştirme ortamı.",

    // Badges & Statuses
    "badge.webgis_lib": "WebGIS Kütüphanesi",
    "badge.web_standard": "Web Standardı",
    "badge.ui_design": "Web Tasarım & UI",
    "badge.web_prog": "Web Programlama",
    "badge.sat_service": "Uydu Altlık Servisi",
    "badge.osm_carto": "Açık Kaynak Kartografya",
    "badge.geodesy_calc": "Jeodezik Hesaplama",
    "badge.vcs": "Versiyon Kontrol & Dağıtım",
    "badge.desktop_gis": "Masaüstü CBS",
    "badge.spatial_db": "Mekânsal Veritabanı",
    "badge.data_science": "Yazılım & Veri Bilimi",

    "status.act_m1": "🎯 Ödev 1'de Aktif (Harita 1)",
    "status.act_m2": "🎯 Ödev 1'de Aktif (Harita 2)",
    "status.act_core": "🎯 Ödev 1 Temel Yapısı",
    "status.act_ui": "🎯 Ödev 1 UI & Animasyon",
    "status.act_engine": "🎯 Ödev 1 Etkileşim Motoru",
    "status.act_sat": "🎯 Ödev 1 Uydu Altlığı",
    "status.act_street": "🎯 Ödev 1 Sokak Altlığı",
    "status.act_ruler": "🎯 Ödev 1 Ölçüm Aracı",
    "status.act_deploy": "🎯 Ödev Yayını & Kod Yönetimi",
    "status.data_prod": "Veri Üretimi & Analiz",
    "status.lab_gis": "Ders Uygulaması & CBS",
    "status.theory_lab": "Teorik & Lab Çalışmaları",
    "status.active_use": "Aktif Kullanımda",

    // Footer
    "footer.title": "GMT 458 – Web GIS | Ödev 1: Kişisel Web Sayfası",
    "footer.subtitle": "Hacettepe Üniversitesi Geomatik Mühendisliği Bölümü © {year} Begüm Miray Dengiz",
    "footer.review": "Peer Review Sistemi ↗"
  },

  en: {
    // Navigation
    "nav.brand": "Begüm Miray",
    "nav.brand_sub": ".WebGIS",
    "nav.resume": "Resume & About",
    "nav.table": "Table",
    "nav.maps": "Web Maps",
    "theme.title_dark": "Switch to Dark Mode",
    "theme.title_light": "Switch to Light Mode",

    // Index - Hero Section
    "hero.badge": "🏛️ Hacettepe University • Geomatics Engineering",
    "hero.greeting": "Hello, I am",
    "hero.name": "Begüm Miray Dengiz",
    "hero.role": "📐 Senior Geomatics Engineering Student & WebGIS Developer",
    "hero.bio": "I am a senior Geomatics Engineering student at Hacettepe University, Faculty of Engineering. I completed my professional internships at the <strong>4th Regional Directorate of Highways</strong>, <strong>Doruk Mapping Company</strong>, and <strong>Çankaya LIHKAB</strong>. I conduct research and development on Geographic Information Systems (GIS), open-source WebGIS mapping technologies (Leaflet, OpenLayers), and spatial data analysis.",
    "hero.btn_maps": "🗺️ Explore Web Maps (30 Cities)",
    "hero.btn_tech": "📊 Technologies & Skills",
    "hero.avatar_role": "Senior Student",
    "hero.avatar_sub": "Hacettepe Geomatics Eng.",

    // Index - Information Cards
    "cards.edu_title": "🎓 Academic Education",
    "cards.edu_sub": "Hacettepe University (2020 – 2026)",
    "cards.edu_desc": "Faculty of Engineering, Department of Geomatics Engineering. Studies in GIS, Photogrammetry, Geodesy, Remote Sensing, and open-source geospatial software architecture under the GMT 458 Web GIS course.",

    "cards.intern_title": "💼 Professional Internships",
    "cards.intern_sub": "Public & Private Sector Experience",
    "cards.intern_desc": "<strong>4th Regional Directorate of Highways</strong> (road survey & alignment), <strong>Doruk Mapping</strong> (digital cadastral map production), and <strong>Çankaya LIHKAB</strong> (licensed cadastral office, property surveying and boundary registration).",

    "cards.focus_title": "🔬 Focus & Expertise Areas",
    "cards.focus_sub": "Geospatial Informatics & Web Technologies",
    "cards.focus_desc": "Open-source WebGIS libraries (Leaflet, OpenLayers), desktop GIS software (QGIS, ArcGIS), spatial databases (PostGIS), and modern front-end web engineering (HTML5, CSS3, JavaScript).",

    // Index - Quick Showcase Cards
    "showcase.maps_title": "🗺️ Visited Cities & Interactive Map Showcase",
    "showcase.maps_desc": "30 cities visited across Turkey and the TRNC, mapped using Leaflet and OpenLayers. Includes Esri satellite imagery, real-time distance measuring ruler, zoom threshold optimization, and world wrap containment.",
    "showcase.maps_btn": "Explore Maps ➔",

    "showcase.tech_title": "📊 GIS & Web Map Technologies Table",
    "showcase.tech_desc": "Detailed tabular analysis of 13 technologies, libraries, and GIS tools used in Geomatics Engineering and WebGIS architecture. Features live search and interactive category filters.",
    "showcase.tech_btn": "View Table ➔",

    // Index - Contact / Links
    "contact.title": "🌐 Contact & Project Links",
    "contact.github": "GitHub Repository (GMT461-WEBGIS)",
    "contact.email": "Hacettepe Email",
    "contact.review": "Peer Review System",

    // Technologies Page
    "tech.badge": "💻 Geospatial Software & Tool Competencies",
    "tech.title": "GIS & Web Mapping Technologies",
    "tech.desc": "Detailed tabular breakdown of geospatial tools, mapping libraries, and GIS software used in geomatics engineering and modern WebGIS architectures. Explore easily with live search and category filters.",
    "tech.search_placeholder": "Search technology (e.g. Leaflet, QGIS)...",
    "tech.filter_all": "All (13)",
    "tech.filter_odev": "🎯 Used in Assignment (9)",
    "tech.filter_webgis": "WebGIS",
    "tech.filter_desktop": "Desktop GIS",
    "tech.filter_web": "Web Development",
    "tech.filter_db": "Database",
    "tech.filter_dev": "Tools & Software",
    
    // Table Headers
    "table.th_tech": "Software / Technology & Logo",
    "table.th_cat": "Category & Role",
    "table.th_role": "Assignment Function & Spatial Role",
    "table.th_level": "Proficiency Level",
    "table.th_status": "Project / Course Status",

    // Tech bottom cards
    "techcard.1_title": "Leaflet vs. OpenLayers Comparison",
    "techcard.1_desc": "Leaflet is exceptionally fast, lightweight, and ideal for straightforward mapping workflows. OpenLayers is the robust industry standard for diverse coordinate reference systems (CRS) and complex vector data pipelines.",
    "techcard.2_title": "Continuous Professional Growth",
    "techcard.2_desc": "I constantly stay up-to-date with open geospatial standards (OGC), GeoJSON, WMS/WFS services, and modern cloud-native web mapping architectures.",
    "techcard.3_title": "Next Step",
    "techcard.3_desc": "Visit the interactive showcase page featuring both maps with zoom threshold and world wrapping solutions:",
    "techcard.3_btn": "Go to Web Maps ➔",

    // Maps Page
    "maps.badge": "📍 30 Visited Cities & TRNC • Spatial Route Showcase",
    "maps.title": "Visited Cities & Interactive Map Showcase",
    "maps.desc": "Below are <strong>30 cities visited</strong> across Turkey and the TRNC (Eskişehir, Ankara, Van, Aydın, İzmir, Konya, Istanbul, Çanakkale, Muğla, Antalya, Kütahya, Bolu, Zonguldak, Kırıkkale, Nevşehir, Kayseri, Sivas, Çorum, Yozgat, Ordu, Trabzon, Rize, Samsun, Artvin, TRNC, Balıkesir, Denizli, Sinop, Bitlis, Erzurum) mapped using <strong>Leaflet</strong> and <strong>OpenLayers</strong>. Equipped with <em>Esri Satellite Imagery</em>, <em>Live Coordinate Tracking</em>, <em>Distance Measuring Ruler</em>, <em>Zoom Threshold</em>, and <em>World Wrap Containment (noWrap / wrapX)</em>.",

    "maps.base_label": "🛰️ Base Layer:",
    "maps.base_osm": "🗺️ Street (OSM)",
    "maps.base_sat": "🛰️ Esri Satellite",
    "maps.filter_label": "🗺️ Region Filter:",
    "maps.filter_all": "All (30)",
    "maps.filter_icanadolu": "🏛️ Central Anatolia (8)",
    "maps.filter_karadeniz": "🌲 Black Sea (9)",
    "maps.filter_ege": "🌊 Aegean & Med. (6)",
    "maps.filter_marmara": "🌉 Marmara (3)",
    "maps.filter_dogu": "🏔️ Eastern Anatolia (3)",
    "maps.filter_kktc": "🏝️ TRNC (1)",

    // Leaflet Card
    "maps.l_title": "1. Leaflet Map",
    "maps.l_subtitle": "30 Visited Cities Across Turkey & TRNC • Esri Satellite Layer & Distance Measurement Ruler",
    "maps.ruler_btn": "📏 Ruler Tool (Measure Distance)",
    "maps.ruler_active": "🛑 Stop Measuring",
    "maps.clear_ruler_btn": "🗑️ Reset Measurement",
    "maps.btn_turkey": "🇹🇷 Zoom to Turkey (Zoom 6)",
    "maps.btn_world": "🌍 Zoom to World (Zoom 3)",
    "maps.btn_toggle_threshold_off": "Disable Zoom Threshold",
    "maps.btn_toggle_threshold_on": "Enable Zoom Threshold",
    "maps.btn_toggle_wrap_allow": "Allow Repeating (noWrap: false)",
    "maps.btn_toggle_wrap_lock": "Lock Single World (noWrap: true)",

    "maps.zoom_label": "Current Zoom:",
    "maps.thresh_label": "Scale Threshold:",
    "maps.thresh_visible": "Visible (Zoom ≥ 5)",
    "maps.thresh_hidden": "Hidden (Zoom < 5)",
    "maps.thresh_disabled": "Disabled",
    "maps.wrap_label": "World Wrap (noWrap):",
    "maps.wrap_active": "noWrap: Active (Single World)",
    "maps.wrap_disabled": "noWrap: Inactive (Repeating)",

    "maps.measure_title": "📏 Measured Great-Circle Distance:",
    "maps.measure_hint": "(Click cities sequentially)",
    "maps.measure_click_hint": "Click on map or city markers to measure distance",

    "maps.l_sol_title": "💡 Spatial Optimization & Boundary Control (Leaflet):",
    "maps.l_sol_1": "<strong>1. Zoom Threshold (Marker Overlapping Resolution):</strong> 30 city markers across Turkey and the TRNC cluster densely at global zoom levels, cluttering the view. To resolve this, Leaflet listens to the <code>map.on('zoomend')</code> event. When zoom is below threshold (<code>threshold = 5</code>), <code>map.removeLayer(markersLayer)</code> hides markers; upon zooming in (<code>zoom ≥ 5</code>), <code>map.addLayer(markersLayer)</code> restores them.",
    "maps.l_sol_2": "<strong>2. Preventing World Wrap (noWrap / Tile Bounding):</strong> In Mercator projection, tile layers repeat infinitely along the X-axis. To constrain this, <code>L.tileLayer</code> is configured with <span class=\"code-snippet\">noWrap: true</span> and <span class=\"code-snippet\">bounds: [[-90, -180], [90, 180]]</span>, and the map uses <span class=\"code-snippet\">maxBounds</span> with <span class=\"code-snippet\">maxBoundsViscosity: 1.0</span>.",

    // OpenLayers Card
    "maps.ol_title": "2. OpenLayers (OL) Map",
    "maps.ol_subtitle": "30 Visited Cities Across Turkey & TRNC • Vector Layer, minZoom & wrapX Solutions",
    "maps.ol_wrap_label": "World Wrap (wrapX):",
    "maps.ol_wrap_active": "wrapX: false (Single World)",
    "maps.ol_wrap_disabled": "wrapX: true (Repeating)",
    "maps.ol_btn_wrap_allow": "Allow Repeating (wrapX: true)",
    "maps.ol_btn_wrap_lock": "Lock Single World (wrapX: false)",

    "maps.ol_sol_title": "💡 Spatial Optimization & Boundary Control (OpenLayers):",
    "maps.ol_sol_1": "<strong>1. Scale Threshold (minZoom Property):</strong> In OpenLayers, vector layers (<code>ol.layer.Vector</code>) natively support <span class=\"code-snippet\">minZoom: 5</span>. When zooming out to global scales (zoom < 5), OpenLayers automatically omits rendering the vector layer, preventing visual clutter and rendering overhead.",
    "maps.ol_sol_2": "<strong>2. Preventing World Wrap (wrapX: false & extent):</strong> To prevent default horizontal repetition in OpenLayers tile sources, <span class=\"code-snippet\">new ol.source.OSM({ wrapX: false })</span> or <code>wrapX: false</code> on XYZ sources is used. Additionally, <code>ol.View</code> locks the map boundary via <span class=\"code-snippet\">extent</span>.",

    // Popup Labels
    "popup.city_title": "Visited City",
    "popup.region": "Region",
    "popup.coords": "Coordinates",
    "popup.famous": "Famous Landmarks",
    "popup.food": "Local Cuisine",
    "popup.visited_badge": "✓ Visited",

    // Table Details (13 Technologies)
    "td.leaflet_desc": "Used as the <strong>1st Map Engine</strong> in Assignment 1. Features 30 visited city coordinates, custom SVG pin markers, interactive popups, zoom threshold (< 5 hidden), and <code>noWrap: true</code> single-world constraint.",
    "td.ol_desc": "Used as the <strong>2nd Map Engine</strong> in Assignment 1. Renders 30 city points in EPSG:3857 (Web Mercator) projection using VectorSource & VectorLayer, <code>minZoom: 5</code> threshold to prevent clustering, <code>wrapX: false</code> world wrapping solution, and HTML popup overlay.",
    "td.html5_desc": "Complete structural skeleton of the assignment web page; semantic tags (<code>&lt;header&gt;</code>, <code>&lt;main&gt;</code>, <code>&lt;section&gt;</code>, <code>&lt;article&gt;</code>, <code>&lt;footer&gt;</code>), W3C accessibility compliance (ARIA roles), and SEO metadata.",
    "td.css3_desc": "Visual design system; cartography-themed emerald/teal palette, topographic contour lines (satisfying 10% keyframe animation requirement), CSS Variables for Light/Dark themes, glassmorphism, and responsive CSS Grid/Flexbox.",
    "td.js_desc": "Initialization of Leaflet & OpenLayers map instances, real-time coordinate tracking (mousemove), dynamic search and filter engine, theme switcher (LocalStorage), and bilingual (TR/EN i18n) translation engine.",
    "td.esri_desc": "Integrated as high-resolution global orthophoto satellite imagery. Enables visual exploration of terrain, vegetation, and coastal geometry across all 30 cities in Turkey and the TRNC.",
    "td.osm_desc": "Default street and topography base map for both Leaflet and OpenLayers. Serves fast, standardized, open-source cartographic tiles via global tile servers.",
    "td.ruler_desc": "Interactive geodesic measurement tool calculating great-circle distance between visited cities sequentially on the WGS84 ellipsoid.",
    "td.git_desc": "Source code version control, commit history, academic submission documentation (README.md, AI statement), and live cloud deployment via GitHub Pages.",
    "td.qgis_desc": "Spatial vector layer editing, buffer and overlay analysis, coordinate accuracy verification for the 30 mapped cities, and GeoJSON / Shapefile production.",
    "td.arcgis_desc": "Geodatabase modeling, 3D elevation visualization, spatial web services (MapServer / FeatureServer) publishing, and geostatistical analysis.",
    "td.postgis_desc": "Spatial SQL operations (ST_Intersects, ST_Buffer, ST_Distance), GiST indexing, and high-performance querying of large geographic vector datasets.",
    "td.python_desc": "Automated geospatial data processing pipelines, coordinate transformations, GeoJSON generation scripts, and local testing HTTP servers.",

    // Badges & Statuses
    "badge.webgis_lib": "WebGIS Library",
    "badge.web_standard": "Web Standard",
    "badge.ui_design": "Web Design & UI",
    "badge.web_prog": "Web Programming",
    "badge.sat_service": "Satellite Basemap Service",
    "badge.osm_carto": "Open-Source Cartography",
    "badge.geodesy_calc": "Geodetic Calculation",
    "badge.vcs": "Version Control & Hosting",
    "badge.desktop_gis": "Desktop GIS",
    "badge.spatial_db": "Spatial Database",
    "badge.data_science": "Software & Data Science",

    "status.act_m1": "🎯 Active in Assign. 1 (Map 1)",
    "status.act_m2": "🎯 Active in Assign. 1 (Map 2)",
    "status.act_core": "🎯 Assignment 1 Core Structure",
    "status.act_ui": "🎯 Assignment 1 UI & Animation",
    "status.act_engine": "🎯 Assignment 1 Interactivity",
    "status.act_sat": "🎯 Assignment 1 Satellite Base",
    "status.act_street": "🎯 Assignment 1 Street Base",
    "status.act_ruler": "🎯 Assignment 1 Ruler Tool",
    "status.act_deploy": "🎯 Assignment Deployment & Git",
    "status.data_prod": "Data Production & Analysis",
    "status.lab_gis": "Course Lab & GIS Analysis",
    "status.theory_lab": "Theory & Lab Practice",
    "status.active_use": "In Active Use",

    // Footer
    "footer.title": "GMT 458 – Web GIS | Assignment 1: Personal Web Page",
    "footer.subtitle": "Hacettepe University Department of Geomatics Engineering © {year} Begüm Miray Dengiz",
    "footer.review": "Peer Review System ↗"
  }
};

/**
 * City translations dictionary for Popups and Tooltips
 */
const cityTranslations = {
  "Eskişehir": {
    region_tr: "İç Anadolu",
    region_en: "Central Anatolia",
    desc_tr: "Odunpazarı tarihi ahşap evleri, Porsuk Çayı kıyıları, havacılık ve raylı sistemler kenti.",
    desc_en: "Historic Odunpazarı wooden mansions, scenic Porsuk River banks, aviation and railway hub.",
    famous_tr: "Odunpazarı Evleri, Porsuk Çayı Gondol Turu, Sazova Parkı, Kurşunlu Külliyesi",
    famous_en: "Odunpazarı Houses, Porsuk River Gondolas, Sazova Science Park, Kurşunlu Complex",
    food_tr: "Çibörek, Balaban Köfte, Met Helvası, Haşhaşlı Çörek",
    food_en: "Çibörek, Balaban Meatball, Met Halva, Poppy Seed Pastry"
  },
  "Ankara": {
    region_tr: "İç Anadolu",
    region_en: "Central Anatolia",
    desc_tr: "Başkent; Hacettepe Üniversitesi Geomatik Mühendisliği lisans eğitimi, mesleki stajlar ve nirengi ağları.",
    desc_en: "Capital city; Hacettepe University Geomatics Engineering education, internships and geodetic networks.",
    famous_tr: "Anıtkabir, Ankara Kalesi, Hacettepe Beytepe Kampüsü, Anadolu Medeniyetleri Müzesi",
    famous_en: "Anıtkabir, Ankara Castle, Hacettepe Beytepe Campus, Anatolian Civilizations Museum",
    food_tr: "Ankara Tavası, Beypazarı Kurusu, Çubuk Turşusu, Ankara Simidi",
    food_en: "Ankara Tava, Beypazarı Dry Biscuits, Çubuk Pickles, Ankara Bagel"
  },
  "Van": {
    region_tr: "Doğu Anadolu",
    region_en: "Eastern Anatolia",
    desc_tr: "Van Gölü sodalı havzası, Akdamar Adası, Urartu Kalesi ve doğunun bin yıllık kadim kültür mirası.",
    desc_en: "Lake Van alkaline basin, Akdamar Island, Urartian Fortress and millennia-old eastern heritage.",
    famous_tr: "Akdamar Adası & Kilisesi, Tarihi Van Kalesi, Muradiye Şelalesi, Van Kedi Villası",
    famous_en: "Akdamar Island & Church, Historical Van Castle, Muradiye Waterfall, Van Cat Villa",
    food_tr: "Meşhur Van Kahvaltısı, Otlu Peynir, İnci Kefali, Keledoş",
    food_en: "Famous Van Breakfast, Herb Cheese, Pearl Mullet, Keledoş Stew"
  },
  "Aydın": {
    region_tr: "Ege & Akdeniz",
    region_en: "Aegean & Med.",
    desc_tr: "Afrodisias antik kenti, Büyük Menderes deltası, Kuşadası sahil hattı ve zeytin diyarı.",
    desc_en: "Aphrodisias ancient city, Meander River delta, Kuşadası coastline, and rich olive orchards.",
    famous_tr: "Afrodisias Antik Kenti (UNESCO), Kuşadası Güvercinada, Dilek Yarımadası Milli Parkı",
    famous_en: "Aphrodisias Ancient City (UNESCO), Pigeon Island Kuşadası, Dilek Peninsula National Park",
    food_tr: "Aydın İnciri, Çine Köftesi, Yuvarlama, Zeytinyağlı Kuru Börülce",
    food_en: "Aydın Figs, Çine Meatballs, Yuvarlama Soup, Olive Oil Cowpeas"
  },
  "İzmir": {
    region_tr: "Ege & Akdeniz",
    region_en: "Aegean & Med.",
    desc_tr: "Ege’nin incisi; Kordon boyu, Tarihi Saat Kulesi, Efes Antik Kenti ve kıyı jeodezisi.",
    desc_en: "Pearl of the Aegean; Kordon promenade, Historic Clock Tower, Ephesus ancient city, and coastal geodesy.",
    famous_tr: "Tarihi Konak Saat Kulesi, Kordon Sahili, Efes Antik Kenti, Şirince Köyü, Çeşme & Alaçatı",
    famous_en: "Konak Clock Tower, Kordon Promenade, Ephesus Ancient City, Şirince Village, Çeşme & Alaçatı",
    food_tr: "İzmir Boyozu, Kumru, İzmir Köfte, Şambali Tatlısı, İzmir Bombası",
    food_en: "İzmir Boyoz, Kumru Sandwich, İzmir Meatballs, Şambali Dessert, Chocolate Bomba"
  },
  "Konya": {
    region_tr: "İç Anadolu",
    region_en: "Central Anatolia",
    desc_tr: "Mevlana Müzesi, Selçuklu medeniyeti, geniş tarım havzası ve karstik obruk jeomorfolojisi.",
    desc_en: "Mevlana Museum, Seljuk civilization, vast agricultural basin, and karstic sinkhole geomorphology.",
    famous_tr: "Mevlana Müzesi & Türbesi, Çatalhöyük Neolitik Kenti, Sille Köyü, Karatay Medresesi",
    famous_en: "Mevlana Museum & Tomb, Çatalhöyük Neolithic Site, Sille Village, Karatay Madrasa",
    food_tr: "Etliekmek, Fırın Kebabı, Tirit, Bamya Çorbası, Mevlana Şekeri",
    food_en: "Etliekmek (Meat Bread), Oven Kebab, Tirit, Okra Soup, Mevlana Candy"
  },
  "İstanbul": {
    region_tr: "Marmara",
    region_en: "Marmara",
    desc_tr: "İki kıtayı birleştiren mega kent; Boğaziçi hattı, Tarihi Yarımada, jeodezik nirengi ve mega ulaşım ağları.",
    desc_en: "Megacity bridging two continents; Bosphorus strait, Historic Peninsula, geodetic triangulation networks.",
    famous_tr: "Ayasofya-i Kebir Camii, Sultanahmet, Topkapı Sarayı, Galata Kulesi, Boğaziçi",
    famous_en: "Hagia Sophia Mosque, Blue Mosque, Topkapı Palace, Galata Tower, Bosphorus Strait",
    food_tr: "Sultanahmet Köftesi, Eminönü Balık Ekmek, Ortaköy Kumpiri, Sarıyer Böreği",
    food_en: "Sultanahmet Meatballs, Fish Sandwiches, Ortaköy Baked Potato, Sarıyer Pastry"
  },
  "Çanakkale": {
    region_tr: "Marmara",
    region_en: "Marmara",
    desc_tr: "Çanakkale Boğazı, Tarihi Gelibolu Yarımadası Şehitlikleri, Troya Antik Kenti ve rüzgar enerjisi sahaları.",
    desc_en: "Dardanelles Strait, Gallipoli Peninsula historical battlefields, Ancient Troy, and wind farms.",
    famous_tr: "Çanakkale Şehitler Abidesi, Troya Antik Kenti & Müzesi, Aynalı Çarşı, Kilitbahir Kalesi",
    famous_en: "Çanakkale Martyrs' Memorial, Troy Ancient City & Museum, Aynalı Bazaar, Kilitbahir Castle",
    food_tr: "Peynir Helvası, Sardalya Izgara, Ezine Peyniri, Mafiş Tatlısı",
    food_en: "Cheese Halva, Grilled Sardines, Ezine Cheese, Mafiş Pastry"
  },
  "Muğla": {
    region_tr: "Ege & Akdeniz",
    region_en: "Aegean & Med.",
    desc_tr: "Bodrum, Fethiye Ölüdeniz, Marmaris koyları, kıyı hidrografisi ve Likya Yolu mekânsal rotası.",
    desc_en: "Bodrum, Fethiye Ölüdeniz Blue Lagoon, Marmaris bays, coastal hydrography, and the Lycian Way route.",
    famous_tr: "Fethiye Ölüdeniz & Kelebekler Vadisi, Bodrum Kalesi, Dalyan Kaunos Kaya Mezarları",
    famous_en: "Ölüdeniz Blue Lagoon, Bodrum Castle, Dalyan Kaunos Rock Tombs, Saklıkent Gorge",
    food_tr: "Çökertme Kebabı, Muğla Saraylısı, Kabak Çiçeği Dolması, Çam Balı",
    food_en: "Çökertme Kebab, Stuffed Zucchini Flowers, Pine Honey, Muğla Saraylısı Dessert"
  },
  "Antalya": {
    region_tr: "Ege & Akdeniz",
    region_en: "Aegean & Med.",
    desc_tr: "Turizmin başkenti; Kaleiçi, Düden ve Kurşunlu Şelaleleri, Toros Dağları ve Akdeniz kıyı jeomorfolojisi.",
    desc_en: "Capital of Mediterranean tourism; Kaleiçi Old Town, Düden Waterfalls, Taurus Mountains.",
    famous_tr: "Tarihi Kaleiçi & Hadrian Kapısı, Düden Şelalesi, Aspendos Antik Tiyatrosu, Konyaaltı Sahili",
    famous_en: "Historic Kaleiçi & Hadrian's Gate, Düden Waterfalls, Aspendos Amphitheatre, Konyaaltı Beach",
    food_tr: "Antalya Usulü Piyaz (Tahinli), Hibeş, Yanık Dondurma, Şiş Köfte",
    food_en: "Tahini White Bean Piyaz, Hibeş Spread, Burnt Ice Cream, Skewer Meatballs"
  },
  "Kütahya": {
    region_tr: "İç Anadolu",
    region_en: "Central Anatolia",
    desc_tr: "Geleneksel Türk çini sanatı merkezi, Aizanoi Antik Kenti Zeus Tapınağı ve Frig Vadisi kaya anıtları.",
    desc_en: "Center of traditional Turkish ceramic tiles, Aizanoi Temple of Zeus, and Phrygian Valley monuments.",
    famous_tr: "Aizanoi Antik Kenti (Zeus Tapınağı), Kütahya Kalesi, Çini Çarşısı, Frig Vadisi",
    famous_en: "Aizanoi Ancient City (Zeus Temple), Kütahya Fortress, Tile Bazaar, Phrygian Valley",
    food_tr: "Kütahya Güveci, Cimcik Hamuru, Haşhaşlı Pide, Sıkıcık Çorbası",
    food_en: "Kütahya Casserole, Cimcik Pasta, Poppy Seed Flatbread, Sıkıcık Soup"
  },
  "Bolu": {
    region_tr: "Karadeniz",
    region_en: "Black Sea",
    desc_tr: "Abant ve Gölcük tabiat parkları, Yedigöller heyelan set gölleri, zengin orman örtüsü ve aşçılık kültürü.",
    desc_en: "Abant & Gölcük nature parks, Yedigöller landslide lakes, lush forests, and celebrated culinary culture.",
    famous_tr: "Yedigöller Milli Parkı, Abant Gölü Tabiat Parkı, Gölcük Tabiat Parkı, Kartalkaya Kayak Merkezi",
    famous_en: "Yedigöller National Park, Lake Abant, Gölcük Nature Park, Kartalkaya Ski Center",
    food_tr: "Mengen Pilavı, Bolu Beyi Tatlısı, Abant Kebabı, Fındık Şekeri, Saray Helvası",
    food_en: "Mengen Rice, Bolu Beyi Dessert, Abant Kebab, Palace Halva"
  },
  "Zonguldak": {
    region_tr: "Karadeniz",
    region_en: "Black Sea",
    desc_tr: "Türkiye’nin taş kömürü başkenti, Gökgöl Mağarası, Karadeniz kıyı topoğrafyası ve madencilik mirası.",
    desc_en: "Coal mining capital of Turkey, Gökgöl Cave, rugged Black Sea coastal topography.",
    famous_tr: "Gökgöl Mağarası, Maden Müzesi, Filyos Antik Kenti & Sahili, Varagel Tüneli",
    famous_en: "Gökgöl Cave, Mining Museum, Filyos Ancient City & Shore, Varagel Tunnel",
    food_tr: "Uğmaç Çorbası, Zonguldak Pidesi, Mancar Sarması, Beyaz Baklava",
    food_en: "Uğmaç Soup, Zonguldak Pita, Mancar Chard Rolls, White Baklava"
  },
  "Kırıkkale": {
    region_tr: "İç Anadolu",
    region_en: "Central Anatolia",
    desc_tr: "Kızılırmak nehri vadisi, Tarihi Çeşnigir Köprüsü ve kanyonu, savunma sanayii merkezi.",
    desc_en: "Kızılırmak River valley, Historic Çeşnigir Bridge and canyon, defense industry hub.",
    famous_tr: "Tarihi Çeşnigir Köprüsü & Kanyonu, MKE Silah Sanayi Müzesi, Dinek Dağı",
    famous_en: "Historic Çeşnigir Bridge & Canyon, Defense Industry Museum, Dinek Mountain",
    food_tr: "Kırıkkale Tavası, Keskin Tava, Tuvalak Çorbası, Madımak Yemeği",
    food_en: "Keskin Tava Baked Meat, Tuvalak Soup, Madımak Greens"
  },
  "Nevşehir": {
    region_tr: "İç Anadolu",
    region_en: "Central Anatolia",
    desc_tr: "Kapadokya peri bacaları, yeraltı şehirleri, Göreme Açık Hava Müzesi ve sıcak hava balonları mekânsal sahası.",
    desc_en: "Cappadocia fairy chimneys, underground cities, Göreme Open Air Museum, and hot air balloon airspace.",
    famous_tr: "Göreme Açık Hava Müzesi, Uçhisar Kalesi, Derinkuyu Yeraltı Şehri, Paşabağ Vadisi",
    famous_en: "Göreme Open Air Museum, Uçhisar Rock Castle, Derinkuyu Underground City, Paşabağ Valley",
    food_tr: "Testi Kebabı, Nevşehir Tavası, Kayısı Dolması, Düğü Çorbası",
    food_en: "Pottery Kebab (Testi), Nevşehir Tava, Stuffed Apricots, Düğü Soup"
  },
  "Kayseri": {
    region_tr: "İç Anadolu",
    region_en: "Central Anatolia",
    desc_tr: "Erciyes Dağı volkanik konisi (3917m), Selçuklu külliyeleri, Kapuzbaşı Şelaleleri ve ticaret merkezi.",
    desc_en: "Mount Erciyes volcanic cone (3917m), Seljuk architectural complexes, Kapuzbaşı Waterfalls.",
    famous_tr: "Erciyes Kayak Merkezi, Kayseri Kalesi, Tarihi Kapalıçarşı, Hunat Hatun Külliyesi",
    famous_en: "Erciyes Ski Resort, Kayseri Castle, Historic Grand Bazaar, Hunat Hatun Complex",
    food_tr: "Kayseri Mantısı (Kaşıkta 40 Mantı), Kayseri Pastırması, Sucuk, Yağlama (Şebit)",
    food_en: "Kayseri Manti Dumplings, Pastrami (Pastırma), Spicy Soujouk, Yağlama Flatbread"
  },
  "Sivas": {
    region_tr: "İç Anadolu",
    region_en: "Central Anatolia",
    desc_tr: "Divriği Ulu Camii ve Darüşşifası (UNESCO), Çifte Minareli Medrese, Kangal köpekleri ve jeotermal kaplıcalar.",
    desc_en: "Divriği Great Mosque & Hospital (UNESCO), Double Minaret Madrasa, Kangal dogs, and geothermal springs.",
    famous_tr: "Divriği Ulu Camii (UNESCO), Çifte Minareli Medrese, Buruciye Medresesi, Gök Medrese",
    famous_en: "Divriği Great Mosque (UNESCO), Twin Minaret Madrasa, Buruciye Madrasa, Blue Madrasa",
    food_tr: "Sivas Köftesi, Sivas Katmeri, Madımak Yemeği, Kelle Tatlısı, Peskütan Çorbası",
    food_en: "Sivas Meatballs, Sivas Layered Katmer, Madımak Greens, Peskütan Soup"
  },
  "Çorum": {
    region_tr: "Karadeniz",
    region_en: "Black Sea",
    desc_tr: "Hitit İmparatorluğu başkenti Hattuşa (UNESCO), Yazılıkaya açık hava mabedi ve meşhur leblebi kenti.",
    desc_en: "Hittite Empire capital Hattusa (UNESCO), Yazılıkaya open-air sanctuary, famous roasted chickpeas.",
    famous_tr: "Hattuşa Antik Kenti (UNESCO), Yazılıkaya Açıkhava Mabedi, Alacahöyük, Tarihi Saat Kulesi",
    famous_en: "Hattusa Ancient City (UNESCO), Yazılıkaya Sanctuary, Alacahöyük, Historic Clock Tower",
    food_tr: "Çorum Leblebisi, Çorum Kuru Mantısı, İskilip Dolması, Çatal Çorbası",
    food_en: "Çorum Roasted Chickpeas, Baked Manti, İskilip Cauldron Rice, Fork Soup"
  },
  "Yozgat": {
    region_tr: "İç Anadolu",
    region_en: "Central Anatolia",
    desc_tr: "Türkiye’nin ilk milli parkı Yozgat Çamlığı, Çapanoğlu Camii, Roma Hamamı (Basilica Therma).",
    desc_en: "Turkey's first national park Yozgat Pine Grove, Çapanoğlu Mosque, Basilica Therma Roman Bath.",
    famous_tr: "Yozgat Çamlığı Milli Parkı, Sarıkaya Roma Hamamı (Kral Kızı), Çapanoğlu Büyük Camii",
    famous_en: "Yozgat Pine Grove National Park, Sarıkaya Roman Bath, Çapanoğlu Grand Mosque",
    food_tr: "Testi Kebabı, Arabaşı Çorbası ve Hamuru, Yozgat Böreği, Parmak Çörek",
    food_en: "Pottery Kebab, Arabaşı Soup & Dough, Finger Bread (Parmak Çörek)"
  },
  "Ordu": {
    region_tr: "Karadeniz",
    region_en: "Black Sea",
    desc_tr: "Boztepe teleferik manzarası, Yason Burnu efsanesi ve yarımadası, Karadeniz fındık havzası.",
    desc_en: "Boztepe cable car view, Cape Jason legend and peninsula, vast Black Sea hazelnut groves.",
    famous_tr: "Boztepe & Teleferik Hattı, Yason Burnu & Tarihi Kilise, Çambaşı Yaylası, Ünye Kalesi",
    famous_en: "Boztepe Viewpoint & Cable Car, Cape Jason & Church, Çambaşı Plateau, Ünye Castle",
    food_tr: "Ordu Pidesi, Karalahana Çorbası ve Sarması, Melocan Kavurması, Fındıklı Çikolata",
    food_en: "Ordu Pita, Black Cabbage Rolls, Melocan Smilax Roast, Hazelnut Chocolates"
  },
  "Trabzon": {
    region_tr: "Karadeniz",
    region_en: "Black Sea",
    desc_tr: "Sümela Manastırı dik kayalıkları, Uzungöl heyelan gölü, Trabzon Ayasofya Müzesi ve Doğu Karadeniz limanı.",
    desc_en: "Sümela Monastery cliffside, Uzungöl alpine lake, Trabzon Hagia Sophia, Eastern Black Sea port.",
    famous_tr: "Sümela Manastırı (Maçka), Uzungöl Tabiat Parkı, Trabzon Ayasofya Camii, Atatürk Köşkü",
    famous_en: "Sümela Rock Monastery, Uzungöl Nature Park, Hagia Sophia Trabzon, Atatürk Pavilion",
    food_tr: "Akçaabat Köftesi, Kuymak (Mıhlama), Karadeniz Hamsi Tava, Vakfıkebir Ekmeği, Laz Böreği",
    food_en: "Akçaabat Meatballs, Kuymak Cheese Fondue, Pan-Fried Anchovy, Laz Böreği Custard"
  },
  "Rize": {
    region_tr: "Karadeniz",
    region_en: "Black Sea",
    desc_tr: "Ayder Yaylası, Kaçkar Dağları Milli Parkı, Zilkale kanyon hisarı, Fırtına Deresi ve çay plantasyonları.",
    desc_en: "Ayder Plateau, Kaçkar Mountains National Park, Zilkale canyon fort, Fırtına River, tea estates.",
    famous_tr: "Ayder Yaylası & Kaplıcaları, Tarihi Zilkale, Palovit Şelalesi, Fırtına Vadisi & Taş Köprüler",
    famous_en: "Ayder Alpine Plateau, Historic Zilkale Castle, Palovit Waterfall, Stone Bridges",
    food_tr: "Rize Muhlaması, Rize Kavurması, Laz Böreği, Hamsili Pilav, Çaykur Çayı",
    food_en: "Rize Muhlama, Braised Beef (Kavurma), Anchovy Rice, Fresh Turkish Tea"
  },
  "Samsun": {
    region_tr: "Karadeniz",
    region_en: "Black Sea",
    desc_tr: "Milli Mücadele'nin başladığı liman kenti; Bandırma Vapuru Müzesi, Kızılırmak Deltası Kuş Cenneti (UNESCO).",
    desc_en: "Birthplace of the National Struggle; Bandırma Ferry Museum, Kızılırmak Delta Bird Sanctuary (UNESCO).",
    famous_tr: "Bandırma Vapuru Müzesi, Onur Anıtı (Atatürk Heykeli), Kızılırmak Deltası Kuş Cenneti",
    famous_en: "Bandırma Ferry Museum, Honor Monument, Kızılırmak Delta Wetlands",
    food_tr: "Bafra ve Terme Pidesi, Samsun Simidi, Nokul, Kaz Tiridi, Çarşamba Kıvratması",
    food_en: "Bafra & Terme Pita, Samsun Bagel, Nokul Walnut Roll, Goose Tirit"
  },
  "Artvin": {
    region_tr: "Karadeniz",
    region_en: "Black Sea",
    desc_tr: "Karagöl Milli Parkı (Borçka & Şavşat), Çoruh Nehri derin kanyonları, dik yamaç topoğrafyası.",
    desc_en: "Karagöl National Park (Borçka & Şavşat), Çoruh River deep gorges, steep alpine topography.",
    famous_tr: "Borçka Karagöl, Şavşat Karagöl, Mençuna Şelalesi, Cehennem Deresi Kanyonu, Atatepe",
    famous_en: "Borçka Karagöl Lake, Şavşat Karagöl, Mençuna Waterfall, Hell's Creek Canyon, Atatepe",
    food_tr: "Artvin Döneri, Kuymak, Kalacoş, Motrella, Laz Böreği",
    food_en: "Artvin Wood-Fired Döner, Kuymak, Kalacoş, Motrella Corn Porridge"
  },
  "KKTC": {
    region_tr: "KKTC",
    region_en: "TRNC",
    desc_tr: "Kuzey Kıbrıs Türk Cumhuriyeti; Girne Kalesi & Limanı, Lefkoşa Selimiye, Gazimağusa Othello Kalesi ve Akdeniz adası.",
    desc_en: "Turkish Republic of Northern Cyprus; Kyrenia Castle & Harbour, Nicosia Selimiye, Famagusta Othello.",
    famous_tr: "Girne Tarihi Limanı & Kalesi, Bellapais Manastırı, Gazimağusa Maraş & Othello Kalesi, Saint Hilarion",
    famous_en: "Kyrenia Harbour & Castle, Bellapais Abbey, Famagusta Othello Castle, St. Hilarion Castle",
    food_tr: "Hellim Peyniri Izgara, Şeftali Kebabı, Molehiya, Kıbrıs Köftesi, Ceviz Macunu",
    food_en: "Grilled Halloumi Cheese, Şeftali Kebab, Molokhia, Cypriot Meatballs, Walnut Paste"
  },
  "Balıkesir": {
    region_tr: "Marmara",
    region_en: "Marmara",
    desc_tr: "Kaz Dağları Milli Parkı (İda Dağı oksijen havzası), Ayvalık Cunda Adası, Manyas Kuş Gölü ve Edremit Körfezi.",
    desc_en: "Mount Ida (Kaz Mountains) oxygen reservoir, Ayvalık Cunda Island, Lake Manyas Bird Sanctuary.",
    famous_tr: "Ayvalık Cunda Adası, Şeytan Sofrası, Kaz Dağları Milli Parkı, Manyas Kuşcenneti",
    famous_en: "Cunda Island Ayvalık, Devil's Feast Viewpoint, Mount Ida National Park, Lake Manyas",
    food_tr: "Balıkesir Höşmerim Tatlısı, Susurluk Tostu ve Ayranı, Ayvalık Tostu, Edremit Zeytinyağı",
    food_en: "Höşmerim Cheese Dessert, Susurluk Toast & Frothy Ayran, Ayvalık Toast, Cold-Pressed Olive Oil"
  },
  "Denizli": {
    region_tr: "Ege & Akdeniz",
    region_en: "Aegean & Med.",
    desc_tr: "Pamukkale beyaz travertenleri (UNESCO), Hierapolis Antik Kenti antik havuzu ve termal jeotermal kaynaklar.",
    desc_en: "Pamukkale white travertine terraces (UNESCO), Hierapolis antique Cleopatra pool, thermal geysers.",
    famous_tr: "Pamukkale Travertenleri (UNESCO), Hierapolis Antik Tiyatrosu & Kleopatra Havuzu, Laodikeia",
    famous_en: "Pamukkale Travertines (UNESCO), Hierapolis Antique Theatre, Cleopatra Thermal Pool, Laodicea",
    food_tr: "Denizli Fırın Kebabı, Çaput Aşı Pilavı, Biber Sıyırması, Zafer Gazozu",
    food_en: "Denizli Oven Kebab, Çaput Aşı Pilaf, Zafer Mineral Soda"
  },
  "Sinop": {
    region_tr: "Karadeniz",
    region_en: "Black Sea",
    desc_tr: "Türkiye’nin en kuzey noktası İnceburun Deniz Feneri, Tarihi Sinop Cezaevi, Hamsilos fiyort benzeri koyu.",
    desc_en: "Northernmost tip of Turkey at İnceburun Lighthouse, Historic Sinop Prison, Hamsilos fjord-like cove.",
    famous_tr: "Tarihi Sinop Kapalı Cezaevi, İnceburun Deniz Feneri, Hamsilos Koyu Tabiat Parkı, Sinop Kalesi",
    famous_en: "Historic Sinop Fortress Prison, İnceburun Cape & Lighthouse, Hamsilos Bay Nature Park",
    food_tr: "Sinop Mantısı (Cevizli & Sarımsaklı Yoğurtlu), Nokul, Kestane Balı, Palamut Tava",
    food_en: "Sinop Walnut & Garlic Manti Dumplings, Sinop Nokul Pastry, Pan-Fried Bonito"
  },
  "Bitlis": {
    region_tr: "Doğu Anadolu",
    region_en: "Eastern Anatolia",
    desc_tr: "Nemrut Kalderası ve Krater Gölü, Ahlat Selçuklu Meydan Mezarlığı (UNESCO adayı), Beş Minare ve Süphan Dağı.",
    desc_en: "Nemrut Caldera & Crater Lake, Ahlat Seljuk Tombstones (UNESCO tentative), Five Minarets.",
    famous_tr: "Nemrut Krater Gölü & Kalderası, Ahlat Selçuklu Mezarlığı, Tarihi Bitlis Kalesi, İslahiye Medresesi",
    famous_en: "Nemrut Volcano Crater Lake, Ahlat Seljuk Graveyard, Historic Bitlis Citadel",
    food_tr: "Bitlis Büryan Kebabı, Avoror Köftesi, Katıklı Dolma, Ahlat Elması, Karakovan Balı",
    food_en: "Bitlis Büryan Pit-Roasted Lamb, Stuffed Squash Dolma, Ahlat Apples, Comb Honey"
  },
  "Erzurum": {
    region_tr: "Doğu Anadolu",
    region_en: "Eastern Anatolia",
    desc_tr: "Palandöken Kayak Merkezi, Çifte Minareli Medrese, Üç Kümbetler, Yakutiye Medresesi ve Doğu Anadolu yaylası.",
    desc_en: "Palandöken Olympic Ski Resort, Double Minaret Madrasa, Three Domes, Yakutiye Madrasa.",
    famous_tr: "Palandöken Kayak Merkezi, Çifte Minareli Medrese, Tarihi Erzurum Kalesi, Tortum Şelalesi",
    famous_en: "Palandöken Ski Resort, Twin Minaret Madrasa, Historic Erzurum Castle, Tortum Waterfall",
    food_tr: "Cağ Kebabı (Yatık Döner), Kadayıf Dolması, Erzurum Civil Peyniri, Aşotu Çorbası",
    food_en: "Cağ Kebab (Horizontal Spitted Lamb), Stuffed Kadayıf Dessert, String Civil Cheese"
  }
};

/**
 * Returns current language stored in localStorage or default 'tr'
 */
function getCurrentLanguage() {
  return localStorage.getItem('webgis_lang') || 'tr';
}

/**
 * Change site language and re-render all elements
 */
function setLanguage(lang) {
  if (lang !== 'tr' && lang !== 'en') lang = 'tr';
  localStorage.setItem('webgis_lang', lang);
  document.documentElement.setAttribute('lang', lang);

  // Update text nodes
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      let text = translations[lang][key];
      if (text.includes('{year}')) {
        text = text.replace('{year}', new Date().getFullYear());
      }
      el.innerHTML = text;
    }
  });

  // Update placeholder attributes
  const placeholderEls = document.querySelectorAll('[data-i18n-placeholder]');
  placeholderEls.forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (translations[lang] && translations[lang][key]) {
      el.setAttribute('placeholder', translations[lang][key]);
    }
  });

  // Update title / aria-label attributes
  const titleEls = document.querySelectorAll('[data-i18n-title]');
  titleEls.forEach(el => {
    const key = el.getAttribute('data-i18n-title');
    if (translations[lang] && translations[lang][key]) {
      el.setAttribute('title', translations[lang][key]);
      el.setAttribute('aria-label', translations[lang][key]);
    }
  });

  // Update language buttons state
  document.querySelectorAll('.lang-btn').forEach(btn => {
    if (btn.getAttribute('data-lang') === lang) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // Broadcast custom event for other scripts (e.g. maps.js)
  window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
}

/**
 * Initialize Language Switcher Click Handlers
 */
function initLanguageSwitcher() {
  const currentLang = getCurrentLanguage();
  setLanguage(currentLang);

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const chosenLang = btn.getAttribute('data-lang');
      setLanguage(chosenLang);
    });
  });
}

// Auto-run on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  initLanguageSwitcher();
});
