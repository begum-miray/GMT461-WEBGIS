/**
 * GMT 458 - Web GIS Assignment 1
 * main.js - Core UI interactions, Light/Dark theme toggle, table filtering
 */

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initMobileNav();
  initDynamicYear();
  highlightActiveNav();
  initTableSearchFilter();
});

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
      const matchesCategory = activeCategory === 'all' || rowCategory === activeCategory;

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
