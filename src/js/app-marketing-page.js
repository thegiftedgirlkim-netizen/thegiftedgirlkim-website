import { mountShell } from './layout.js';
import { getSupportApp, supportEmail, renderSupportAppIcon } from './support-hub.js';
import site from '../data/site.json';

function renderFeatureList(features) {
  if (!features?.length) return '';
  return `
    <h2>What You Can Do</h2>
    <ul class="support-list">${features.map(item => `<li>${item}</li>`).join('')}</ul>
  `;
}

function mountAppMarketing() {
  const id = document.body.dataset.appId;
  const app = getSupportApp(id);
  const mount = document.querySelector('[data-app-marketing]');
  if (!app || !mount) {
    if (mount) {
      mount.innerHTML = '<div class="container"><p>Marketing page not found. <a href="/apps.html">Return to Apps</a></p></div>';
    }
    return;
  }

  const marketing = app.marketing || {};
  const headline = marketing.headline || app.tagline;
  const intro = marketing.intro?.length
    ? marketing.intro
    : [app.description];
  const features = marketing.features || [];
  const price = marketing.price;
  const disclaimer = marketing.disclaimer;

  mount.innerHTML = `
    <section class="page-hero page-hero--compact">
      <div class="container support-app-hero">
        <div class="support-app-hero__icon">${renderSupportAppIcon(app)}</div>
        <div>
          <p class="eyebrow">App Overview</p>
          <h1 class="page-hero__title">${app.name}</h1>
          <p class="page-hero__lead">${headline}</p>
        </div>
      </div>
    </section>

    <section class="section" style="padding-top:0;">
      <div class="container prose support-privacy-prose">
        ${intro.map(paragraph => `<p>${paragraph}</p>`).join('')}

        ${renderFeatureList(features)}

        ${marketing.builtFor ? `
          <h2>Built for Gentle Everyday Use</h2>
          <p>${marketing.builtFor}</p>
        ` : ''}

        ${price ? `
          <h2>Price</h2>
          <p><strong>${app.name}</strong> is a paid download: <strong>${price}</strong></p>
        ` : ''}

        ${disclaimer ? `
          <h2>Important Note</h2>
          <p>${disclaimer}</p>
        ` : ''}

        <div class="hero__actions support-privacy-actions">
          ${app.links?.ios ? `<a href="${app.links.ios}" class="btn btn-primary" target="_blank" rel="noopener noreferrer">View on App Store →</a>` : ''}
          <a href="${app.supportUrl}" class="btn btn-secondary">${app.name} Support →</a>
          <a href="${app.privacyUrl}" class="btn btn-secondary">Privacy Policy →</a>
          <a href="/apps.html#${app.id}" class="btn btn-secondary">All Apps</a>
        </div>

        <p class="support-small-note">Questions? Email <a href="mailto:${supportEmail()}">${supportEmail()}</a>. Published by <strong>${site.company}</strong>.</p>
      </div>
    </section>
  `;
}

mountShell();
mountAppMarketing();
