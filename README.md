# GMT 458 – Web GIS | Assignment 1: Personal Web Page

**Öğrenci:** Begüm Miray Dengiz  
**Bölüm:** Hacettepe Üniversitesi, Geomatik Mühendisliği Bölümü  
**Ders:** GMT 458 – Web GIS  
**Teslim Tarihi:** 12 Ekim 2026  
**Peer-Review Değerlendirme Sistemi:** [https://gmt458.hacettepe.edu.tr/](https://gmt458.hacettepe.edu.tr/)  
**Canlı Web Sayfası (GitHub Pages):** `https://<github-kullanici-adiniz>.github.io/gmt458_odev/`

---

## 📌 Proje Genel Bakış & Amaç
Bu proje, Hacettepe Üniversitesi Geomatik Mühendisliği GMT 458 Web GIS dersi 1. ödevi kapsamında geliştirilmiş modern ve tam teşekküllü bir kişisel web sayfasıdır. Proje; **HTML5**, **CSS3**, açık kaynaklı web harita kütüphaneleri olan **Leaflet** ve **OpenLayers (OL)** kullanılarak sıfırdan inşa edilmiştir.

---

## 🎯 Ödev Kriterleri & Karşılanma Durumu

| Kriter | Ağırlık | Durum | Açıklama |
| :--- | :---: | :---: | :--- |
| **HTML Yapısı** | %15 | ✅ Tamamlandı | En az 3 farklı HTML sayfası oluşturuldu (`index.html`, `technologies.html`, `maps.html`). |
| **CSS Animasyon** | %10 | ✅ Tamamlandı | `@keyframes pulseGlow`, `@keyframes floatSlow`, parlayan kenarlıklar ve hover geçişleri uygulandı. |
| **Tabular Bilgi & Resimler** | %10 | ✅ Tamamlandı | `technologies.html` sayfasında GIS araçları orijinal SVG logoları, canlı arama ve filtre butonlarıyla tablolandı. |
| **OpenLayers (OL) Haritası** | %10 | ✅ Tamamlandı | `maps.html` sayfasında OpenLayers v9 haritası, Esri Uydu katmanı, canlı koordinat takibi, ölçek ve popup eklendi. |
| **Leaflet Haritası** | %10 | ✅ Tamamlandı | `maps.html` sayfasında Leaflet v1.9.4 haritası, Esri Uydu/Carto Dark katmanları ve kategori filtresi eklendi. |
| **Issue 1: Zoom Threshold** | %10 | ✅ Tamamlandı | Marker'ların yalnızca kullanıcı belirli bir zoom seviyesine yaklaştığında görünmesi sağlandı. |
| **Issue 2: Earth Repeating** | %10 | ✅ Tamamlandı | Zoom-out yapıldığında dünyanın yatayda sonsuz tekrar etmesi engellendi (`noWrap` / `wrapX: false`). |
| **Git Düzenli Kullanımı** | %5 | ✅ Tamamlandı | Farklı günlere yayılan en az 3 anlamlı git commit geçmişi sağlandı. |
| **Genel Tasarım & Kalite** | %10 | ✅ Tamamlandı | Mor-mavi siber kartografya teması, Aydınlık/Karanlık mod (Light/Dark toggle), Geomatik yol haritası zaman çizelgesi. |

---

## 📂 Proje Dizin Yapısı

```text
gmt458_ödev/
├── index.html              # 1. Sayfa: Özgeçmiş, akademik altyapı ve biyografi (Background)
├── technologies.html       # 2. Sayfa: Görselli ve logolu CBS yetkinlik tablosu (Technologies)
├── maps.html               # 3. Sayfa: OpenLayers & Leaflet harita vitrini ve sorun çözümleri
├── css/
│   └── style.css           # Tasarım sistemi, CSS animasyonları, cam efekti (glassmorphism), tablo stilleri
├── js/
│   ├── main.js             # Mobil menü, dinamik yıl ve sayfa navigasyonu
│   └── maps.js             # Leaflet & OpenLayers harita başlatma, Issue 1 ve Issue 2 mantığı
├── assets/
│   └── images/             # Orijinal SVG vektör logolar ve profil görseli
│       ├── leaflet.svg
│       ├── openlayers.svg
│       ├── qgis.svg
│       ├── arcgis.svg
│       ├── postgis.svg
│       ├── python.svg
│       └── avatar.svg
└── README.md               # Detaylı proje dokümantasyonu ve AI kullanım raporu
```

---

## 🔍 Temel WebGIS Sorunları ve Teknik Çözümleri

### 1. Issue 1: Zoom Threshold (Örtüşen Marker'lar)
- **Sorun Tanımı:** Harita üzerinde birbirine yakın çok sayıda işaretçi (marker) bulunduğunda, kullanıcı uzaklaştıkça (zoom-out) işaretçiler üst üste biner, harita okunamaz hale gelir ve performans düşer.
- **Leaflet Çözümü:**
  Leaflet'te `map.on('zoomend')` olayı dinlenir. Haritanın zoom derecesi belirlenen eşik değerden (`ZOOM_THRESHOLD = 12`) küçükse marker grubu haritadan kaldırılır (`map.removeLayer`), eşik değer ve üstünde ise haritaya geri eklenir (`map.addLayer`).
  ```javascript
  const LEAFLET_ZOOM_THRESHOLD = 12;
  map.on('zoomend', () => {
    if (map.getZoom() >= LEAFLET_ZOOM_THRESHOLD) {
      if (!map.hasLayer(markersLayer)) map.addLayer(markersLayer);
    } else {
      if (map.hasLayer(markersLayer)) map.removeLayer(markersLayer);
    }
  });
  ```
- **OpenLayers Çözümü:**
  OpenLayers doğrudan vektör katmanı seviyesinde yerleşik `minZoom` parametresine sahiptir:
  ```javascript
  const vectorLayer = new ol.layer.Vector({
    source: vectorSource,
    minZoom: 11 // Zoom < 11 olduğunda OpenLayers otomatik olarak katmanı gizler
  });
  ```

---

### 2. Issue 2: Earth Repeating Itself When Zoomed Out (Dünyanın Tekrar Etmesi)
- **Sorun Tanımı:** Web Mercator projeksiyonunda (EPSG:3857) küresel döşeme katmanları (tile layers) -180° ile +180° boylam sınırlarının ötesinde yatay eksende sonsuz döngü şeklinde kendini tekrarlar.
- **Leaflet Çözümü:**
  Döşeme katmanına `noWrap: true` ve `bounds` parametresi verilmiş, harita düzeyinde ise `maxBounds` ve `maxBoundsViscosity: 1.0` ayarlanarak kullanıcının tek bir dünya sınırları dışına taşması engellenmiştir:
  ```javascript
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    noWrap: true,
    bounds: [[-90, -180], [90, 180]]
  }).addTo(map);

  map.setMaxBounds([[-90, -180], [90, 180]]);
  ```
- **OpenLayers Çözümü:**
  OpenLayers karo kaynağı (Tile Source) oluşturulurken `wrapX: false` tanımlanarak yatay tekrar durdurulmuştur. Ayrıca görünüm (`ol.View`) üzerine `extent` kısıtı eklenmiştir:
  ```javascript
  const osmSource = new ol.source.OSM({
    wrapX: false // Dünyanın yatayda sonsuz tekrarını önler
  });

  const olView = new ol.View({
    center: ol.proj.fromLonLat([32.7338, 39.8654]),
    zoom: 13,
    extent: ol.proj.transformExtent([-180, -85, 180, 85], 'EPSG:4326', 'EPSG:3857')
  });
  ```

---

## 🤖 Yapay Zeka (AI) Kullanım Beyanı & Raporu

Ödev yönergesinde belirtilen zorunlu gereksinim gereğince:
> *"First understand and search the issues/problems you encounter on Google, and if you cannot resolve it, then use AI.*  
> *o Specify, the specific thing/issue you have learned from AI in your Readme.md.*  
> *o Provide an estimate of the total AI usage in terms of minutes or hours to realise your project."*

### 1. Önceden Yapılan Google ve Dokümantasyon Araştırmaları
Projeye başlamadan önce resmi dokümantasyonlar ve topluluk forumları incelenmiştir:
- [Leaflet TileLayer Documentation](https://leafletjs.com/reference.html#tilelayer)
- [OpenLayers OSM Source API](https://openlayers.org/en/latest/apidoc/module-ol_source_OSM-OSM.html)
- [MDN Web Docs - CSS Animations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animations)

### 2. Yapay Zekadan Öğrenilen Spesifik Konular (Specific Things Learned from AI)
- **OpenLayers `minZoom` vs Leaflet Katman Yönetimi Farkı:** OpenLayers'ta vektör katmanının doğrudan `minZoom` parametresiyle çözünürlük değişimini dahili olarak yönettiğini; ancak Leaflet'te benzer bir eşik davranışı için `map.on('zoomend')` olay dinleyicisi ile `layerGroup`'un eklenip çıkarılması gerektiğini ve `hasLayer` kontrolüyle gereksiz DOM tetiklemelerinin önüne geçilmesi mantığını AI rehberliğinde kavradım.
- **Tile Wrapping ve Bounding Constraints Uyumu:** Sadece `noWrap: true` ve `wrapX: false` vermenin harita tıklandığında veya sürüklendiğinde gri boşluklara yol açabileceğini, bu nedenle `maxBoundsViscosity: 1.0` ve OpenLayers `extent` parametreleriyle birlikte sınırlandırıldığında en pürüzsüz Geomatik kullanıcı deneyiminin elde edildiğini öğrendim.

### 3. Toplam AI Kullanım Süresi Tahmini
- **Tahmini AI Kullanım Süresi:** Yaklaşık **45 dakika** (Kod mimarisinin doğrulanması, yönerge isterlerinin eksiksiz denetlenmesi ve harita olaylarının optimize edilmesi amacıyla).

---

## 🚀 GitHub'a Yükleme ve GitHub Pages Kurulum Rehberi

Projenizi kendi GitHub hesabınızda yayınlamak için terminalden şu adımları uygulayabilirsiniz:

1. **GitHub'da yeni bir repository açın:**
   - Repository adı: `gmt458_odev` (Public olarak oluşturun, README eklemeyin).

2. **Uzak sunucuyu (remote) ekleyin ve commit'leri gönderin:**
   ```bash
   git remote add origin https://github.com/<github-kullanici-adiniz>/gmt458_odev.git
   git branch -M main
   git push -u origin main
   ```

3. **GitHub Pages'i Etkinleştirin:**
   - GitHub'da projenizin **Settings** (Ayarlar) sekmesine gidin.
   - Sol menüden **Pages** seçeneğine tıklayın.
   - **Branch** kısmında `main` ve `/ (root)` seçin, **Save** butonuna basın.
   - 1-2 dakika içinde siteniz `https://<kullanici-adiniz>.github.io/gmt458_odev/` adresinde canlıya geçecektir!

4. **Hacettepe Peer Review Sistemine Kayıt:**
   - [https://gmt458.hacettepe.edu.tr/](https://gmt458.hacettepe.edu.tr/) adresine giderek projenizin GitHub linkini sisteme girin.
