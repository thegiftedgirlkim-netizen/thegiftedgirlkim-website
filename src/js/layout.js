import site from '../data/site.json';
import appsData from '../data/apps.json';
import booksData from '../data/books.json';

const NAV = [
  { href: '/', label: 'Home', page: 'index' },
  { href: '/apps.html', label: 'Apps', page: 'apps' },
  { href: '/books.html', label: 'Books', page: 'books' },
  { href: '/shop.html', label: 'Shop', page: 'shop' },
  { href: '/about.html', label: 'About Kimberly', page: 'about' },
  { href: '/support.html', label: 'Support', page: 'support' },
  { href: '/contact.html', label: 'Contact', page: 'contact' }
];

export function getSite() { return site; }
export function getApps() {
  return [...appsData.apps].sort((a, b) => a.order - b.order);
}
export function getFeaturedApps(limit = 6) {
  return getApps().filter(app => app.featured).slice(0, limit);
}

export function getAppsWithIcons(limit = 8) {
  return getApps().filter(app => app.icon).slice(0, limit);
}
export function getBooks() {
  return [...booksData.books].sort((a, b) => a.order - b.order);
}

function currentPage() {
  const path = window.location.pathname.replace(/\/$/, '') || '/';
  const file = path.split('/').pop() || 'index.html';
  if (file === '' || file === 'index.html') return 'index';
  return file.replace('.html', '');
}

function navLink(item) {
  const active = item.page === currentPage() ? ' is-active' : '';
  return `<a href="${item.href}" class="nav-link${active}">${item.label}</a>`;
}

export function renderHeader() {
  const page = currentPage();
  return `
    <header class="site-header">
      <div class="container site-header__inner">
        <a href="/" class="brand-lockup" aria-label="${site.company} home">
          <img src="/assets/brand/company-logo.jpeg" alt="${site.company} logo" class="brand-lockup__logo" width="80" height="80">
          <div class="brand-lockup__text">
            <div class="brand-lockup__name">${site.company}</div>
            <div class="brand-lockup__role">${site.role}</div>
            <div class="brand-lockup__tag">${site.tagline}</div>
          </div>
        </a>
        <nav class="site-nav" aria-label="Main navigation">
          ${NAV.map(navLink).join('')}
        </nav>
        <a href="/contact.html" class="btn btn-primary header-cta">Get in Touch ✨</a>
        <button type="button" class="nav-toggle" aria-label="Open menu" aria-expanded="false" data-nav-toggle>
          <span></span>
        </button>
      </div>
      <nav class="container mobile-nav" data-mobile-nav aria-label="Mobile navigation">
        ${NAV.map(navLink).join('')}
        <a href="/privacy.html" class="nav-link${page === 'privacy' ? ' is-active' : ''}">Privacy</a>
      </nav>
    </header>
  `;
}

export function renderFooter() {
  const year = new Date().getFullYear();
  return `
    <footer class="site-footer">
      <div class="container footer-top">
        <div>
          <div class="footer-brand">${site.brandShort}</div>
          <p class="footer-motto">${site.motto}</p>
          <p class="footer-tagline">${site.role}</p>
        </div>
        <div class="footer-newsletter">
          <h3>New apps, updates & inspiration</h3>
          <p>Join the list for app launches, book news, and studio updates.</p>
          <form class="newsletter-form" action="mailto:${site.email}?subject=Newsletter%20Signup" method="post">
            <label class="sr-only" for="newsletter-email">Email address</label>
            <input id="newsletter-email" type="email" name="email" placeholder="Your email address" required>
            <button type="submit">Sign Me Up ✨</button>
          </form>
        </div>
      </div>
      <div class="container footer-bottom">
        <div class="footer-links">
          <a href="/">Home</a>
          <a href="/apps.html">Apps</a>
          <a href="/books.html">Books</a>
          <a href="/shop.html">Shop</a>
          <a href="${site.etsyShop.url}" target="_blank" rel="noopener noreferrer">Etsy ↗</a>
          <a href="/about.html">About</a>
          <a href="/support.html">Support</a>
          <a href="/privacy.html">Privacy</a>
          <a href="/contact.html">Contact</a>
        </div>
        <div>© ${year} ${site.company}. All rights reserved.</div>
      </div>
    </footer>
  `;
}

export function renderValueBar() {
  return `
    <section class="value-bar" aria-label="Studio values">
      <div class="container value-bar__grid">
        ${site.values.map(v => `
          <article class="value-card">
            <div class="value-card__icon" aria-hidden="true">${v.icon}</div>
            <h3 class="value-card__title">${v.title}</h3>
            <p class="value-card__text">${v.text}</p>
          </article>
        `).join('')}
      </div>
    </section>
  `;
}

export function mountShell() {
  const headerMount = document.querySelector('[data-site-header]');
  const footerMount = document.querySelector('[data-site-footer]');
  if (headerMount) headerMount.innerHTML = renderHeader();
  if (footerMount) footerMount.innerHTML = renderFooter();

  const toggle = document.querySelector('[data-nav-toggle]');
  const mobileNav = document.querySelector('[data-mobile-nav]');
  toggle?.addEventListener('click', () => {
    const open = mobileNav?.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}

export function renderAppCard(app, compact = false) {
  const iconHtml = app.icon
    ? `<img src="${app.icon}" alt="${app.name} app icon" class="app-card__icon" loading="lazy" width="72" height="72">`
    : `<div class="app-card__icon-fallback" aria-hidden="true">${app.name.charAt(0)}</div>`;

  const desc = compact && app.description.length > 120
    ? `${app.description.slice(0, 117)}…`
    : app.description;

  const storeLink = app.links?.ios
    ? `<a class="app-card__link" href="${app.links.ios}" target="_blank" rel="noopener noreferrer">App Store →</a>`
    : app.links?.android
      ? `<a class="app-card__link" href="${app.links.android}" target="_blank" rel="noopener noreferrer">Google Play →</a>`
      : `<a class="app-card__link" href="${app.links.support || '/support.html'}">Learn More →</a>`;

  return `
    <article class="app-card" id="${app.id}">
      <div class="app-card__top">
        <div class="app-card__icon-wrap">${iconHtml}</div>
        <div class="app-card__meta">
          <h3 class="app-card__name">${app.name}</h3>
          <p class="app-card__tagline">${app.tagline}</p>
        </div>
      </div>
      <p class="app-card__desc">${desc}</p>
      <div class="app-card__footer">
        <span class="status-pill">${app.status}</span>
        ${storeLink}
      </div>
    </article>
  `;
}

export function renderAppGrid({ featuredOnly = false, limit = null, extraClass = '' } = {}) {
  let apps = featuredOnly ? getFeaturedApps(limit || 99) : getApps();
  if (limit) apps = apps.slice(0, limit);
  return `<div class="app-grid ${extraClass}">${apps.map(app => renderAppCard(app, featuredOnly)).join('')}</div>`;
}

export function renderBookCard(book) {
  const amazon = book.links?.amazon;
  let link = '<span class="status-pill">Coming Soon</span>';
  if (amazon) {
    const label = amazon.includes('amazon.ca') ? 'View on Amazon.ca →' : 'View on Amazon →';
    link = `<a class="app-card__link" href="${amazon}" target="_blank" rel="noopener noreferrer">${label}</a>`;
  }

  return `
    <article class="book-card" id="${book.id}">
      <img src="${book.cover}" alt="${book.title} book cover" class="book-card__cover" loading="lazy">
      <div class="book-card__body">
        <h3 class="book-card__title">${book.title}</h3>
        ${book.subtitle ? `<p class="book-card__subtitle">${book.subtitle}</p>` : ''}
        <p class="book-card__desc">${book.description}</p>
        <div class="app-card__footer">${link}</div>
      </div>
    </article>
  `;
}

export function renderBookGrid() {
  return `<div class="book-grid">${getBooks().map(renderBookCard).join('')}</div>`;
}

export function renderHeroCarousel() {
  const carouselApps = getAppsWithIcons(8);
  if (carouselApps.length === 0) return '';

  const slides = carouselApps.map((app, i) => `
    <div class="phone-carousel__slide${i === 0 ? ' is-active' : ''}" data-slide="${i}">
      <img src="${app.icon}" alt="${app.name}" class="phone-mockup__icon" width="96" height="96">
      <p class="phone-mockup__label">${app.name}</p>
      <p class="phone-mockup__tagline">${app.tagline}</p>
    </div>
  `).join('');

  const dots = carouselApps.map((app, i) => `
    <button type="button" class="phone-carousel__dot${i === 0 ? ' is-active' : ''}"
      data-carousel-dot="${i}"
      aria-label="Show ${app.name}"
      aria-selected="${i === 0 ? 'true' : 'false'}"></button>
  `).join('');

  return `
    <div class="hero__visual">
      <div class="phone-mockup" aria-label="Featured apps preview">
        <div class="phone-mockup__screen">
          <div class="phone-carousel" data-phone-carousel>
            ${slides}
          </div>
          <div class="phone-carousel__dots" role="tablist" aria-label="App carousel">${dots}</div>
        </div>
      </div>
      <blockquote class="hero__quote">“${site.hero.quote}” ♡ ${site.hero.quoteAuthor}</blockquote>
    </div>
  `;
}

export function renderFeaturedAppsSection({ limit = 6 } = {}) {
  return `
    <section class="featured-apps section-tight" aria-labelledby="featured-apps-heading">
      <div class="container">
        <div class="section-head section-head--left">
          <p class="eyebrow">The Studio</p>
          <h2 id="featured-apps-heading" class="section-head__title">Featured <em>Apps</em> ✨</h2>
          <p class="section-head__lead">Real apps from The Gifted Girl Kim — built with heart, privacy, and purpose.</p>
        </div>
        ${renderAppGrid({ featuredOnly: true, limit, extraClass: 'app-grid--home app-grid--featured' })}
        <div class="center-actions">
          <a href="/apps.html" class="btn btn-secondary">View All Apps →</a>
        </div>
      </div>
    </section>
  `;
}

export function renderShopPromo({ compact = false } = {}) {
  const shop = site.etsyShop;
  if (!shop?.url) return '';

  if (compact) {
    return `
      <section class="shop-promo shop-promo--compact" aria-label="Etsy shop">
        <div class="container shop-promo__inner">
          <div class="shop-promo__copy">
            <p class="eyebrow">Handmade & Heartfelt</p>
            <h2 class="shop-promo__title">Visit My <em>Etsy Shop</em> ♡</h2>
            <p class="shop-promo__lead">Faith-inspired gifts, creative finds, and special pieces from ${site.brandShort} — shipped with care from our Etsy studio.</p>
          </div>
          <div class="shop-promo__actions">
            <a href="${shop.url}" class="btn btn-primary" target="_blank" rel="noopener noreferrer">Shop on Etsy →</a>
            <a href="/shop.html" class="btn btn-secondary">Learn More</a>
          </div>
        </div>
      </section>
    `;
  }

  return `
    <section class="shop-promo" aria-label="Etsy shop">
      <div class="container shop-promo__card">
        <div class="shop-promo__badge" aria-hidden="true">🛍️</div>
        <div class="shop-promo__copy">
          <p class="eyebrow">Etsy • ${shop.handle}</p>
          <h2 class="shop-promo__title">${shop.label}</h2>
          <p class="shop-promo__lead">Discover handmade and heart-led creations from The Gifted Girl Kim — perfect for gifting, encouraging, and adding a little sparkle to everyday life.</p>
          <ul class="shop-promo__list">
            <li>Faith-inspired & feminine designs</li>
            <li>Thoughtful gifts with personal meaning</li>
            <li>Secure checkout through Etsy</li>
          </ul>
          <div class="shop-promo__actions">
            <a href="${shop.url}" class="btn btn-primary" target="_blank" rel="noopener noreferrer">Visit Etsy Shop →</a>
          </div>
          <p class="shop-promo__note">You’ll be taken to <strong>etsy.com/shop/${shop.handle}</strong> to browse and purchase.</p>
        </div>
      </div>
    </section>
  `;
}
