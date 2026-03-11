/* ============================================
   PRIMROSE COFFEE — Product Catalog
   Application Data & Logic
   ============================================ */

// Product data from CSV
const products = [
  {
    id: "CF001",
    name: "Amederaro",
    shortName: "Amederaro",
    country: "Ethiopia",
    region: "Yirgacheffe",
    elevation: "1900–2100 masl",
    variety: "Heirloom",
    process: "Washed",
    flavorNotes: ["Citrus", "Floral", "Tea-like"],
    harvest: "Jan–Mar",
    grade: "Grade 1",
    packaging: "GrainPro + Jute",
    certifications: "Organic",
    description: "This washed Arabica coffee is grown at high elevations in the Sidama region. The cool climate and careful washing process produce a clean cup with bright acidity and elegant floral notes.",
    image: "https://drive.google.com/thumbnail?id=15Emr7zOqKeVQl_Hr7Og7J0-F5W2yzoFQ&sz=w1200",
    logo: "https://drive.google.com/thumbnail?id=1w5mFi7ehvAlJDzCnw5gnKEmFbm3M2Mxf&sz=w400",
    stationId: "WS01",
    stationName: "Sidama Central Washing Station",
    stationLocation: "Sidama, Ethiopia",
    stationAltitude: "1950 m",
    stationProcessing: "Washed & Natural",
    stationWater: "Mountain Spring Water",
    stationNotes: "The station works with over 800 smallholder farmers and uses clean spring water with controlled fermentation tanks.",
    videoUrl: "https://drive.google.com/file/d/1XrCTqDUiPATPfSYFuwoDGRUW9xPYM936/preview",
    visible: true
  },
  {
    id: "CF002",
    name: "Koke Shalaye",
    shortName: "Koke Shalaye",
    country: "Ethiopia",
    region: "Yirgacheffe",
    elevation: "1800–2000 masl",
    variety: "Heirloom",
    process: "Natural",
    flavorNotes: ["Berry", "Sweet", "Wine-like"],
    harvest: "Dec–Feb",
    grade: "Grade 1",
    packaging: "GrainPro + Jute",
    certifications: "Organic",
    description: "This natural processed coffee is dried slowly on raised beds, allowing fruit sugars to fully develop. The result is a sweet and expressive cup with ripe fruit character.",
    image: "https://drive.google.com/thumbnail?id=1D3S_Etig8R3LUdx1GJg_q2UY7N-VDYhB&sz=w1200",
    logo: "https://drive.google.com/thumbnail?id=1GIsKJMjePUpOI_dZqwuEVfa1UzvKfdaS&sz=w400",
    stationId: "WS01",
    stationName: "Sidama Central Washing Station",
    stationLocation: "Sidama, Ethiopia",
    stationAltitude: "1950 m",
    stationProcessing: "Washed & Natural",
    stationWater: "Mountain Spring Water",
    stationNotes: "The station works with over 800 smallholder farmers and uses clean spring water with controlled fermentation tanks.",
    videoUrl: "https://drive.google.com/file/d/1bp_uosCS6WlWNGXwKZs5y2iLHtKu0y3I/preview",
    visible: true
  },
  {
    id: "CF003",
    name: "Harusuke",
    shortName: "Harusuke",
    country: "Ethiopia",
    region: "Yirgacheffe",
    elevation: "1950–2150 masl",
    variety: "Heirloom",
    process: "Honey",
    flavorNotes: ["Stone fruit", "Honey", "Smooth"],
    harvest: "Jan–Mar",
    grade: "Grade 1",
    packaging: "GrainPro + Jute",
    certifications: "—",
    description: "This honey processed coffee balances sweetness and clarity. Partial mucilage removal during processing enhances body while preserving vibrant acidity.",
    image: "https://drive.google.com/thumbnail?id=1otrF8G12x9yRz98vZhsCL8CkEN1Sy4ce&sz=w1200",
    logo: "https://drive.google.com/thumbnail?id=1o3ssrsL0wEqDZepHiolcxxHwKNElHB6F&sz=w400",
    stationId: "WS02",
    stationName: "Gedeb Highlands Washing Station",
    stationLocation: "Gedeb, Ethiopia",
    stationAltitude: "2050 m",
    stationProcessing: "Honey & Washed",
    stationWater: "River-fed Channels",
    stationNotes: "Focused on slow drying and traceability, this station emphasizes quality separation and sustainable water usage.",
    videoUrl: "https://drive.google.com/file/d/1aJ_WIzLSQV_1_Lq3givNXkEibrcipIKi/preview",
    visible: true
  },
  {
    id: "CF004",
    name: "GrgariGutity",
    shortName: "GrgariGutity",
    country: "Ethiopia",
    region: "Gedeb",
    elevation: "1900–2100 masl",
    variety: "Heirloom",
    process: "Washed",
    flavorNotes: ["Citrus", "Floral", "Tea-like"],
    harvest: "Jan–Mar",
    grade: "Grade 1",
    packaging: "GrainPro + Jute",
    certifications: "Organic",
    description: "This washed Arabica coffee is grown at high elevations in the Sidama region. The cool climate and careful washing process produce a clean cup with bright acidity and elegant floral notes.",
    image: "https://drive.google.com/thumbnail?id=15Emr7zOqKeVQl_Hr7Og7J0-F5W2yzoFQ&sz=w1200",
    logo: "https://drive.google.com/thumbnail?id=1fAZ9v60HWrcazNBfbuskvtDFPuJF54cL&sz=w400",
    stationId: "WS01",
    stationName: "Sidama Central Washing Station",
    stationLocation: "Sidama, Ethiopia",
    stationAltitude: "1950 m",
    stationProcessing: "Washed & Natural",
    stationWater: "Mountain Spring Water",
    stationNotes: "The station works with over 800 smallholder farmers and uses clean spring water with controlled fermentation tanks.",
    videoUrl: "https://drive.google.com/file/d/1rd7-ZNWuXhE_7KrByRaIBNIUCPFkbsHD/preview",
    visible: true
  },
  {
    id: "CF005",
    name: "Wubanchi",
    shortName: "Wubanchi",
    country: "Ethiopia",
    region: "Uraga",
    elevation: "1800–2000 masl",
    variety: "Heirloom",
    process: "Natural",
    flavorNotes: ["Berry", "Sweet", "Wine-like"],
    harvest: "Dec–Feb",
    grade: "Grade 1",
    packaging: "GrainPro + Jute",
    certifications: "Organic",
    description: "This natural processed coffee is dried slowly on raised beds, allowing fruit sugars to fully develop. The result is a sweet and expressive cup with ripe fruit character.",
    image: "https://drive.google.com/thumbnail?id=1D3S_Etig8R3LUdx1GJg_q2UY7N-VDYhB&sz=w1200",
    logo: "https://drive.google.com/thumbnail?id=1Vgz4DZ6q64ARla48a-pGInWTm4FF8f_q&sz=w400",
    stationId: "WS01",
    stationName: "Sidama Central Washing Station",
    stationLocation: "Sidama, Ethiopia",
    stationAltitude: "1950 m",
    stationProcessing: "Washed & Natural",
    stationWater: "Mountain Spring Water",
    stationNotes: "The station works with over 800 smallholder farmers and uses clean spring water with controlled fermentation tanks.",
    videoUrl: "https://drive.google.com/file/d/1CgIDU0NZVpNC4rPZVHDXn7iqtrtH228q/preview",
    visible: true
  },
  {
    id: "CF006",
    name: "Worka Nenke",
    shortName: "Worka Nenke",
    country: "Ethiopia",
    region: "Gedeb",
    elevation: "1950–2150 masl",
    variety: "Heirloom",
    process: "Honey",
    flavorNotes: ["Stone fruit", "Honey", "Smooth"],
    harvest: "Jan–Mar",
    grade: "Grade 1",
    packaging: "GrainPro + Jute",
    certifications: "—",
    description: "This honey processed coffee balances sweetness and clarity. Partial mucilage removal during processing enhances body while preserving vibrant acidity.",
    image: "https://drive.google.com/thumbnail?id=1otrF8G12x9yRz98vZhsCL8CkEN1Sy4ce&sz=w1200",
    logo: "https://drive.google.com/thumbnail?id=1Sdep2FZf8RT1TD8o1Oq3DhYQBXU83i89&sz=w400",
    stationId: "WS02",
    stationName: "Gedeb Highlands Washing Station",
    stationLocation: "Gedeb, Ethiopia",
    stationAltitude: "2050 m",
    stationProcessing: "Honey & Washed",
    stationWater: "River-fed Channels",
    stationNotes: "Focused on slow drying and traceability, this station emphasizes quality separation and sustainable water usage.",
    videoUrl: "https://drive.google.com/file/d/1SCA0hQS9eEmCxr8oohmvak6iGeHPeGbm/preview",
    visible: true
  }
];

// Total grid slots (matching the Stitch design: 3 products + 3 coming soon)
const TOTAL_SLOTS = 6;

// i18n State
let currentLang = localStorage.getItem('primrose-lang') || 'en';

/* ============================================
   TRANSLATION ENGINE
   ============================================ */
function updateContent() {
  const t = translations[currentLang];

  // Update static elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key]) {
      el.innerHTML = t[key];
    }
  });

  // Update document direction and lang
  document.documentElement.lang = currentLang;
  document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';

  // Update button text
  const langBtn = document.getElementById('current-lang');
  if (langBtn) langBtn.textContent = currentLang.toUpperCase();

  // Re-render dynamic components if they exist
  if (document.getElementById('products-grid')) renderCollection();
  if (document.getElementById('product-content')) renderProductDetail();
}

function changeLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('primrose-lang', lang);
  updateContent();
  toggleLangMenu(false);
}

function toggleLangMenu(force) {
  const menu = document.getElementById('lang-menu');
  if (!menu) return;
  if (force !== undefined) {
    menu.classList.toggle('active', force);
  } else {
    menu.classList.toggle('active');
  }
}

// Close menu on click outside
document.addEventListener('click', (e) => {
  if (!e.target.closest('.lang-selector-container')) {
    toggleLangMenu(false);
  }
});

/* ============================================
   COLLECTION PAGE RENDERER
   ============================================ */
function renderCollection() {
  const grid = document.getElementById('products-grid');
  if (!grid) return;

  const t = translations[currentLang];
  let html = '';

  // Render real product cards
  products.forEach((product, index) => {
    // Get translated product names/regions if available
    const pKey = `p${index + 1}`;
    const shortName = t[`${pKey}ShortName`] || product.shortName;
    const region = t[`${pKey}Region`] || product.region;

    html += `
      <a href="product.html?id=${product.id}" class="product-card reveal reveal--delay-${index % 3 + 1}">
        <div class="product-card__image">
          <img src="${product.logo}" alt="${shortName}" loading="lazy">
        </div>
        <div class="product-card__accent"></div>
        <div class="product-card__info">
          <div class="product-card__id">${product.id}</div>
          <div class="product-card__name">${shortName}</div>
          <div class="product-card__region">${region}</div>
        </div>
      </a>`;
  });

  // Render "Coming Soon" placeholder cards
  const remaining = TOTAL_SLOTS - products.length;
  for (let i = 0; i < remaining; i++) {
    html += `
      <div class="product-card product-card--coming-soon reveal reveal--delay-${(products.length + i) % 3 + 1}">
        <div class="product-card__image">
          <div class="coming-soon-content">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
            <span data-i18n="comingSoon">${t.comingSoon}</span>
          </div>
        </div>
        <div class="product-card__info" style="min-height: 52px;"></div>
      </div>`;
  }

  grid.innerHTML = html;
}

/* ============================================
   PRODUCT DETAIL PAGE RENDERER
   ============================================ */
function renderProductDetail() {
  const params = new URLSearchParams(window.location.search);
  const productId = params.get('id');

  const pIndex = products.findIndex(p => p.id === productId);
  const product = products[pIndex];
  const t = translations[currentLang];

  if (!product) {
    document.getElementById('product-content').innerHTML = `
      <div style="text-align:center; padding: 4rem 2rem;">
        <h2 style="color: var(--color-primary-dark); margin-bottom: 1rem;">${t.notFoundTitle}</h2>
        <p style="color: var(--color-text-light);">${t.notFoundDesc}</p>
        <a href="collection.html" style="display:inline-block; margin-top:1.5rem; color: var(--color-teal); font-weight:600;">${t.backToColl}</a>
      </div>`;
    return;
  }

  const pKey = `p${pIndex + 1}`;
  const sKey = pIndex === 2 ? 's2' : 's1';

  // Update page title
  document.title = `${product.id} — ${t[`${pKey}Name`] || product.name} | Primrose Coffee`;
  document.getElementById('header-title').textContent = `${product.id} – ${t[`${pKey}Name`] || product.name} `;

  // SVG icon helpers
  const icons = {
    globe: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>',
    pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
    mountain: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M8 21l4-10 4 10"/><path d="M2 21h20"/><path d="M15 14l3 7"/><path d="M9 14l-3 7"/></svg>',
    leaf: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M11 20A7 7 0 0 1 9.8 6.9C15.5 4.9 17 3.5 19 2c1 2 2 4.5 1 8-1 3.5-3.5 6-6 7.5"/><path d="M11.7 7.5C13 12 12.5 16.5 11 20"/></svg>',
    fire: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 22c-4.97 0-8-3.03-8-8 0-3.53 2.13-6 4-8l2 3c.68-1 1.21-2.36 1.5-4C15 2 18 5 18 8c0 2-1 4-2 5l-2-2c-.22 1.27-.68 2.77-2 4z"/></svg>',
    calendar: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>',
    check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>',
    coffee: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>',
    play: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>',
    text: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>',
    station: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 21h18"/><path d="M5 21V7l8-4v18"/><path d="M19 21V11l-6-4"/><path d="M9 9h1"/><path d="M9 13h1"/><path d="M9 17h1"/></svg>'
  };

  const content = document.getElementById('product-content');
  content.innerHTML = `
    <!-- Product Hero Image (Cherry/Plantation) -->
    <div class="product-hero reveal">
      <img src="${product.image}" alt="${t[`${pKey}Name`]}">
      <div class="product-hero__overlay">
        <div class="product-hero__tag">${t.exclusive}</div>
        <h1 class="product-hero__name">${t[`${pKey}Name`] || product.name}</h1>
      </div>
    </div>

    <!-- Coffee Profile Card -->
    <div class="profile-card reveal reveal--delay-1">
      <div class="profile-card__header">
        ${icons.coffee}
        ${t.profile}
      </div>

      <div class="profile-row">
        <div class="profile-row__label">${icons.globe} ${t.origin}</div>
        <div class="profile-row__value">${t[`${pKey}Country`] || product.country}</div>
      </div>
      <div class="profile-row">
        <div class="profile-row__label">${icons.pin} ${t.region}</div>
        <div class="profile-row__value">${t[`${pKey}Region`] || product.region}</div>
      </div>
      <div class="profile-row">
        <div class="profile-row__label">${icons.mountain} ${t.elevation}</div>
        <div class="profile-row__value">${product.elevation}</div>
      </div>
      <div class="profile-row">
        <div class="profile-row__label">${icons.leaf} ${t.variety}</div>
        <div class="profile-row__value"><em>${product.variety}</em></div>
      </div>
      <div class="profile-row">
        <div class="profile-row__label">${icons.fire} ${t.process}</div>
        <div class="profile-row__value">${t[`${pKey}Process`] || product.process}</div>
      </div>
      <div class="profile-row">
        <div class="profile-row__label">${icons.calendar} ${t.harvest}</div>
        <div class="profile-row__value">${t[`${pKey}Harvest`] || product.harvest}</div>
      </div>
      <div class="profile-row">
        <div class="profile-row__label">${icons.check} ${t.grade}</div>
        <div class="profile-row__value">${product.grade}</div>
      </div>
    </div>

    <!--Description -->
    <div class="description-section animate-in" style="animation-delay: 0.15s">
      <div class="description-section__title">
        ${icons.text}
        ${t.description}
      </div>
      <p class="description-section__text">${t[`${pKey}Desc`] || product.description}</p>
      <div class="flavor-notes">
        ${(t[`${pKey}Notes`] || product.flavorNotes).map(note => `<span class="flavor-tag">${note}</span>`).join('')}
      </div>
    </div>

    <!-- Washing Station -->
    <div class="station-section animate-in" style="animation-delay: 0.2s">
      <div class="station-section__header">
        ${icons.station}
        ${t.station}
      </div>
      <div class="station-detail">
        <div class="station-detail__label">${t.stationName}</div>
        <div class="station-detail__value">${t[`${sKey}Name`] || product.stationName}</div>
      </div>
      <div class="station-detail">
        <div class="station-detail__label">${t.location}</div>
        <div class="station-detail__value">${t[`${sKey}Loc`] || product.stationLocation}</div>
      </div>
      <div class="station-detail">
        <div class="station-detail__label">${t.altitude}</div>
        <div class="station-detail__value">${product.stationAltitude}</div>
      </div>
      <div class="station-detail">
        <div class="station-detail__label">${t.processing}</div>
        <div class="station-detail__value">${t[`${sKey}Proc`] || product.stationProcessing}</div>
      </div>
      <div class="station-detail">
        <div class="station-detail__label">${t.waterSource}</div>
        <div class="station-detail__value">${t[`${sKey}Water`] || product.stationWater}</div>
      </div>
      <div class="station-detail">
        <div class="station-detail__label">${t.sustain}</div>
        <div class="station-detail__value">${t[`${sKey}Notes`] || product.stationNotes}</div>
      </div>
    </div>

    <!-- Origin Video -->
      <div class="video-section animate-in" style="animation-delay: 0.25s">
        <div class="video-section__header">
          <svg viewBox="0 0 24 24" fill="currentColor" style="color: #E74C3C"><circle cx="12" cy="12" r="10" fill="#E74C3C" /><path d="M10 8l6 4-6 4V8z" fill="white" /></svg>
          ${t.video}
        </div>
        <div class="video-wrapper">
          <iframe id="origin-video" src="${product.videoUrl}" title="Origin Video — ${product.name}" allowfullscreen allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" style="width: 100%; height: 100%; border-radius: var(--radius-md); border: none;"></iframe>
        </div>
      </div>
    `;

  // Render footer social icons
  const footerSocial = document.getElementById('footer-social');
  if (footerSocial) {
    footerSocial.innerHTML = `
      <a href="mailto:primroseplc@gmail.com" class="footer-social__icon social-icon--gmail" aria-label="Gmail">
        <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24"><path d="M24 5.457v13.909c0 .904-.732 1.634-1.634 1.634h-3.819V11.48L12 16.52l-6.547-5.04v9.52H1.634A1.634 1.634 0 0 1 0 19.366V5.457c0-1.29 1.454-2.022 2.474-1.227L12 11.242l9.526-7.012c1.02-.795 2.474-.063 2.474 1.227z" /></svg>
      </a>
      <a href="https://instagram.com/primrose.coffee" class="footer-social__icon social-icon--instagram" target="_blank" rel="noopener" aria-label="Instagram">
        <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.058-1.69-.072-4.949-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.209-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
      </a>
      <a href="https://wa.me/251911513747" class="footer-social__icon social-icon--whatsapp" target="_blank" rel="noopener" aria-label="WhatsApp">
        <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
      </a>
    `;
  }
}

/* ============================================
   SHARE FUNCTIONALITY
   ============================================ */
function shareProduct() {
  if (navigator.share) {
    navigator.share({
      title: document.title,
      url: window.location.href
    }).catch(() => { });
  } else {
    // Fallback: copy URL to clipboard
    navigator.clipboard.writeText(window.location.href).then(() => {
      const btn = document.querySelector('.detail-header__share');
      if (btn) {
        btn.style.color = 'var(--color-accent)';
        setTimeout(() => { btn.style.color = ''; }, 1500);
      }
    });
  }
}

/* ============================================
   INITIALIZATION
   ============================================ */
document.addEventListener('DOMContentLoaded', () => {
  console.log('App initialization: current language is', currentLang);
  // Robust initialization check
  if (typeof translations === 'undefined') {
    console.error('Translations dictionary not found! Retrying in 100ms...');
    setTimeout(() => { if (typeof translations !== 'undefined') { updateContent(); initInteractions(); } }, 100);
  } else {
    updateContent();
    initInteractions();
  }
});

/* ============================================
   INTERACTIVE REFINEMENTS (IMMERSION 3.0)
   ============================================ */
function initInteractions() {
  initPreloader();
  initScrollReveal();
  initMagneticButton();
  initLogoTilt();
  initParallax();
  initScrollProgress();
  initWindowParallax();
}

// 0. Scroll Progress Bar
function initScrollProgress() {
  const progressBar = document.createElement('div');
  progressBar.className = 'scroll-progress';
  document.body.appendChild(progressBar);

  window.addEventListener('scroll', () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    progressBar.style.width = scrolled + "%";
  });
}

// 1. Scroll Reveal Animation
function initScrollReveal() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal--visible');
      }
    });
  }, observerOptions);

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// 2. Magnetic "VIEW COLLECTION" Button
function initMagneticButton() {
  const btn = document.querySelector('.hero__cta');
  if (!btn) return;

  document.addEventListener('mousemove', (e) => {
    const rect = btn.getBoundingClientRect();
    const btnX = rect.left + rect.width / 2;
    const btnY = rect.top + rect.height / 2;

    const distance = Math.hypot(e.clientX - btnX, e.clientY - btnY);
    const radius = 150;

    if (distance < radius) {
      const strength = 20;
      const x = (e.clientX - btnX) / radius * strength;
      const y = (e.clientY - btnY) / radius * strength;
      btn.style.transform = `translate(${x}px, ${y}px)`;
    } else {
      btn.style.transform = `translate(0, 0)`;
    }
  });
}

// 3. 3D Tilt Effect for Logo
function initLogoTilt() {
  const logoBox = document.querySelector('.hero__logo-box');
  if (!logoBox) return;

  logoBox.addEventListener('mousemove', (e) => {
    const rect = logoBox.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (centerY - y) / 10;
    const rotateY = (x - centerX) / 10;

    logoBox.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  });

  logoBox.addEventListener('mouseleave', () => {
    logoBox.style.transform = `rotateX(0deg) rotateY(0deg) scale(1)`;
  });
}

// 4. Parallax Floating Elements
function initParallax() {
  const logo = document.querySelector('.hero__logo-box');
  const sideText = document.querySelector('.hero__side-text');

  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    if (logo) logo.parentElement.style.transform = `translateY(${scrolled * 0.1}px)`;
    if (sideText) sideText.style.transform = `rotate(-90deg) translateX(${scrolled * 0.15}px)`;
  });
}

// 5. Boutique Preloader
function initPreloader() {
  const preloader = document.getElementById('preloader');
  if (!preloader) return;

  // Cinematic exit on load
  window.addEventListener('load', () => {
    setTimeout(() => {
      preloader.classList.add('preloader--hidden');
    }, 800);
  });

  // Safety fallback
  setTimeout(() => {
    if (preloader) preloader.classList.add('preloader--hidden');
  }, 4000);
}

// 6. Window Parallax for Product Cards
function initWindowParallax() {
  const cards = document.querySelectorAll('.product-card__image img');
  if (cards.length === 0) return;

  const handleParallax = () => {
    cards.forEach(img => {
      const rect = img.parentElement.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top < windowHeight && rect.bottom > 0) {
        const distanceToCenter = (rect.top + rect.height / 2) - (windowHeight / 2);
        const scrollFactor = 0.04;
        const translateY = distanceToCenter * scrollFactor;
        img.style.transform = `scale(1.1) translateY(${translateY}px)`;
      }
    });
  };

  window.addEventListener('scroll', () => requestAnimationFrame(handleParallax));
  handleParallax();
}




