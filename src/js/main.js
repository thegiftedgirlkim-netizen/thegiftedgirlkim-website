import {
  mountShell,
  getSite,
  renderValueBar,
  renderHeroCarousel,
  renderFeaturedAppsSection,
  renderShopPromo
} from './layout.js';
import { initPhoneCarousel } from './hero-carousel.js';

const site = getSite();
const etsyUrl = site.etsyShop?.url;

function renderHeroDecor() {
  return `
    <div class="hero__decor" aria-hidden="true">
      <img src="/assets/brand/company-logo.jpeg" alt="" class="hero__crystal hero__crystal--tl">
      <img src="/assets/brand/company-logo.jpeg" alt="" class="hero__crystal hero__crystal--br">
      <span class="hero__spark hero__spark--1">✦</span>
      <span class="hero__spark hero__spark--2">✧</span>
      <span class="hero__spark hero__spark--3">♡</span>
      <span class="hero__wing hero__wing--left"></span>
      <span class="hero__wing hero__wing--right"></span>
    </div>
  `;
}

function mountHome() {
  const heroMount = document.querySelector('[data-hero]');
  const featuredMount = document.querySelector('[data-featured-apps]');
  const valuesMount = document.querySelector('[data-values]');

  if (heroMount) {
    heroMount.innerHTML = `
      <section class="hero">
        ${renderHeroDecor()}
        <div class="container hero__grid">
          <div class="hero__copy">
            <p class="eyebrow">${site.hero.eyebrow}</p>
            <p class="hero__role">${site.role}</p>
            <h1 class="hero__title">${site.hero.headline}</h1>
            <p class="hero__lead">${site.hero.subhead}</p>
            <div class="hero__actions">
              <a href="/apps.html" class="btn btn-primary">Explore My Apps →</a>
              <a href="/about.html" class="btn btn-secondary">About Kimberly ♡</a>
              ${etsyUrl ? `<a href="${etsyUrl}" class="btn btn-secondary" target="_blank" rel="noopener noreferrer">Etsy Shop 🛍️</a>` : ''}
            </div>
          </div>
          ${renderHeroCarousel()}
        </div>
      </section>
    `;
    initPhoneCarousel();
  }

  if (featuredMount) {
    featuredMount.innerHTML = renderFeaturedAppsSection({ limit: 6 });
  }

  if (valuesMount) valuesMount.innerHTML = renderValueBar();

  const shopMount = document.querySelector('[data-shop-promo]');
  if (shopMount) shopMount.innerHTML = renderShopPromo({ compact: true });
}

mountShell();
mountHome();
