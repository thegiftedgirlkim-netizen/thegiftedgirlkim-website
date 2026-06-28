import { mountShell } from './layout.js';
import { getSupportApp, supportEmail, renderSupportAppIcon } from './support-hub.js';
import site from '../data/site.json';

function mountAppPrivacy() {
  const id = document.body.dataset.appId;
  const app = getSupportApp(id);
  const mount = document.querySelector('[data-app-privacy]');
  if (!app || !mount) {
    if (mount) mount.innerHTML = '<div class="container"><p>Privacy policy not found. <a href="/privacy.html">Return to Privacy</a></p></div>';
    return;
  }

  const onDeviceText = app.onDeviceOnly
    ? 'Yes — core personal content is designed to stay on your device unless a specific feature clearly states otherwise.'
    : 'Some features may sync through our backend or use online services. See details below.';

  mount.innerHTML = `
    <section class="page-hero page-hero--compact">
      <div class="container support-app-hero">
        <div class="support-app-hero__icon">${renderSupportAppIcon(app)}</div>
        <div>
          <p class="eyebrow">Privacy Policy</p>
          <h1 class="page-hero__title">${app.name}</h1>
          <p class="page-hero__lead">Effective date: ${app.effectiveDate || 'June 27, 2026'}</p>
        </div>
      </div>
    </section>

    <section class="section" style="padding-top:0;">
      <div class="container prose support-privacy-prose">
        <p><strong>${site.company}</strong> ("we," "us," or "our") publishes <strong>${app.name}</strong>. This privacy policy explains how the app handles information. This is the official privacy policy for ${app.name}.</p>

        <h2>Who Owns This App</h2>
        <p>${app.name} is published by <strong>${site.company}</strong>, owned and operated by Kimberly Haggy.</p>

        <h2>What Data Is Collected</h2>
        <p>${app.dataCollected || 'We minimize data collection. See the app description and in-app privacy notes for current behavior.'}</p>

        ${(app.extraSections || []).map(section => `
        <h2>${section.title}</h2>
        <p>${section.body}</p>
        `).join('')}

        <h2>On-Device Processing</h2>
        <p>${onDeviceText}</p>

        <h2>Third-Party Services</h2>
        <p>${app.thirdPartyServices || 'No third-party advertising SDKs. App store purchases are processed by Apple or Google under their privacy policies.'}</p>

        <h2>Data We Do Not Sell</h2>
        <p>We do not sell your personal information.</p>

        <h2>Children's Privacy</h2>
        <p>Our apps are not directed to children under 13. We do not knowingly collect personal information from children under 13. Contact us if you believe a child has provided personal information.</p>

        <h2>Changes to This Policy</h2>
        <p>We may update this policy as the app evolves. The effective date at the top will change when updates are posted.</p>

        <h2>Contact</h2>
        <p>Questions about privacy for ${app.name}? Email <a href="mailto:${supportEmail()}">${supportEmail()}</a>.</p>

        <div class="hero__actions support-privacy-actions">
          <a href="/support/${app.id}.html" class="btn btn-primary">${app.name} Support →</a>
          <a href="/marketing/${app.id}.html" class="btn btn-secondary">App Overview</a>
          <a href="/support.html" class="btn btn-secondary">Support Home</a>
          <a href="/privacy.html" class="btn btn-secondary">Website Privacy</a>
        </div>
      </div>
    </section>
  `;
}

mountShell();
mountAppPrivacy();
