/**
 * GMT 458 - Web GIS Assignment 1
 * main.js - Core UI interactions, Light/Dark theme toggle, table filtering,
 *           and Animated Intro Cover Screen (Kapak Animasyonu)
 */

document.addEventListener('DOMContentLoaded', () => {
  initCoverScreen();
  initThemeToggle();
  initMobileNav();
  initDynamicYear();
  highlightActiveNav();
  initTableSearchFilter();
});

/* ==========================================================================
   0. Siteye Giriş Öncesi Kapak Ekranı & Animasyonlu Geçiş (Intro Cover Screen)
   ========================================================================== */
function initCoverScreen() {
  const coverOverlay = document.getElementById('siteCoverOverlay');
  const enterBtn = document.getElementById('coverEnterBtn');
  const reopenBtn = document.getElementById('reopenCoverBtn');

  // If on sub-pages (maps.html, technologies.html), handle reopen button navigation
  if (!coverOverlay) {
    if (reopenBtn) {
      reopenBtn.addEventListener('click', () => {
        window.location.href = 'index.html?intro=true';
      });
    }
    return;
  }

  const urlParams = new URLSearchParams(window.location.search);
  const forceIntro = urlParams.get('intro') === 'true';
  const isReload = (performance.getEntriesByType && 
                    performance.getEntriesByType('navigation')[0] && 
                    performance.getEntriesByType('navigation')[0].type === 'reload');

  if (isReload) {
    sessionStorage.removeItem('gmt458_visited_cover');
  }

  const hasVisited = sessionStorage.getItem('gmt458_visited_cover');

  function openCover() {
    coverOverlay.style.display = 'flex';
    document.body.classList.add('cover-open');
    // Force DOM reflow before removing fade-out class for smooth entrance
    void coverOverlay.offsetWidth;
    coverOverlay.classList.remove('cover-fade-out');
  }

  function closeCover() {
    coverOverlay.classList.add('cover-fade-out');
    document.body.classList.remove('cover-open');
    sessionStorage.setItem('gmt458_visited_cover', 'true');

    setTimeout(() => {
      coverOverlay.style.display = 'none';
    }, 850);
  }

  // Display cover on initial entry, page reload, or when ?intro=true is requested
  if (forceIntro || !hasVisited) {
    openCover();
  } else {
    coverOverlay.style.display = 'none';
    document.body.classList.remove('cover-open');
  }

  // Enter button click triggers smooth transition
  if (enterBtn) {
    enterBtn.addEventListener('click', (e) => {
      e.preventDefault();
      closeCover();
    });
  }

  // Keyboard shortcut: Press Enter or Space to enter site
  document.addEventListener('keydown', (e) => {
    if (coverOverlay.style.display !== 'none' && !coverOverlay.classList.contains('cover-fade-out')) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        closeCover();
      }
    }
  });

  // Re-open button on index.html
  if (reopenBtn) {
    reopenBtn.addEventListener('click', () => {
      openCover();
    });
  }
}

/* ==========================================================================
   1. Light / Dark Theme Mode Toggle
   ========================================================================== */
function initThemeToggle() {
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const storedTheme = localStorage.getItem('webgis-theme') || 'dark';

  document.documentElement.setAttribute('data-theme', storedTheme);
  updateThemeIcon(themeToggleBtn, storedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('webgis-theme', newTheme);
      updateThemeIcon(themeToggleBtn, newTheme);
    });
  }
}

function updateThemeIcon(btn, theme) {
  if (!btn) return;
  btn.textContent = theme === 'dark' ? '☀️' : '🌙';
  btn.setAttribute('title', theme === 'dark' ? 'Aydınlık Moda Geç' : 'Karanlık Moda Geç');
}

/* ==========================================================================
   2. Mobile Navigation Toggle
   ========================================================================== */
function initMobileNav() {
  const mobileToggle = document.getElementById('mobileToggle');
  const navLinks = document.getElementById('navLinks');

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('nav-active');
      const isExpanded = navLinks.classList.contains('nav-active');
      mobileToggle.setAttribute('aria-expanded', isExpanded);
      mobileToggle.innerHTML = isExpanded ? '✕' : '☰';
    });
  }
}

/* ==========================================================================
   3. Active Navigation Link Indicator
   ========================================================================== */
function highlightActiveNav() {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const links = document.querySelectorAll('.nav-link');
  links.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

/* ==========================================================================
   4. Dynamic Footer Year
   ========================================================================== */
function initDynamicYear() {
  const currentYearSpan = document.getElementById('currentYear');
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }
}

/* ==========================================================================
   5. Interactive Table Live Search & Category Filter (technologies.html)
   ========================================================================== */
function initTableSearchFilter() {
  const searchInput = document.getElementById('tableSearchInput');
  const filterButtons = document.querySelectorAll('.filter-btn');
  const tableRows = document.querySelectorAll('.custom-table tbody tr');

  if (!searchInput && filterButtons.length === 0) return;

  let activeCategory = 'all';

  function filterTable() {
    const query = (searchInput ? searchInput.value.toLowerCase().trim() : '');

    tableRows.forEach(row => {
      const rowCategory = row.getAttribute('data-category') || '';
      const rowText = row.textContent.toLowerCase();

      const matchesSearch = query === '' || rowText.includes(query);
      const categoryList = rowCategory.split(/\s+/);
      const matchesCategory = activeCategory === 'all' || categoryList.includes(activeCategory);

      if (matchesSearch && matchesCategory) {
        row.style.display = '';
      } else {
        row.style.display = 'none';
      }
    });
  }

  if (searchInput) {
    searchInput.addEventListener('input', filterTable);
  }

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCategory = btn.getAttribute('data-filter') || 'all';
      filterTable();
    });
  });
}
