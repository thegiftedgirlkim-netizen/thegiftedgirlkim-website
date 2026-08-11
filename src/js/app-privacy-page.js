import { mountShell } from './layout.js';
import { getSupportApp, supportEmail, renderSupportAppIcon } from './support-hub.js';
import site from '../data/site.json';
import digitalChapelPrivacy from '../data/digital-chapel-privacy.json';

const CUSTOM_PRIVACY_DOCS = {
  'digital-chapel': digitalChapelPrivacy,
};

function escapeHtml(value) {
  return String(value ?? '').replace(/[&<>"']/g, (char) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  })[char]);
}

function renderBlocks(blocks = []) {
  return blocks.map((block) => {
    if (block.type === 'h3') {
      return `<h3>${escapeHtml(block.text)}</h3>`;
    }
    if (block.type === 'ul') {
      const items = (block.items || []).map((item) => `<li>${escapeHtml(item)}</li>`).join('');
      return `<ul>${items}</ul>`;
    }
    return `<p>${escapeHtml(block.text)}</p>`;
  }).join('\n');
}

function renderCustomPrivacyBody(doc) {
  const sections = (doc.sections || []).map((section) => `
        <h2>${escapeHtml(section.heading)}</h2>
        ${renderBlocks(section.blocks)}
  `).join('\n');

  return `
        <p>${escapeHtml(doc.intro)}</p>
        ${sections}
  `;
}

function renderSectionParagraphs(body) {
  return String(body ?? '')
    .split(/\n\n+/)
    .map((part) => part.trim())
    .filter(Boolean)
    .map((part) => `<p>${escapeHtml(part)}</p>`)
    .join('\n');
}

function renderGenericPrivacyBody(app) {
  const onDeviceTitle = app.onDeviceProcessingTitle || "On-Device Processing";
  const onDeviceText =
    app.onDeviceProcessing ||
    (app.onDeviceOnly
      ? "Yes — core personal content is designed to stay on your device unless a specific feature clearly states otherwise."
      : "Some features may sync through our backend or use online services. See details below.");

  return `
        <p><strong>${escapeHtml(site.company)}</strong> ("we," "us," or "our") publishes <strong>${escapeHtml(app.name)}</strong>. This privacy policy explains how the app handles information. This is the official privacy policy for ${escapeHtml(app.name)}.</p>

        <h2>Who Owns This App</h2>
        <p>${escapeHtml(app.name)} is published by <strong>${escapeHtml(site.company)}</strong>, owned and operated by Kimberly Haggy.</p>

        <h2>What Data Is Collected</h2>
        <p>${escapeHtml(app.dataCollected || 'We minimize data collection. See the app description and in-app privacy notes for current behavior.')}</p>

        ${(app.extraSections || []).map(section => `
        <h2>${escapeHtml(section.title)}</h2>
        ${renderSectionParagraphs(section.body)}
        `).join('')}

        <h2>${escapeHtml(onDeviceTitle)}</h2>
        <p>${escapeHtml(onDeviceText)}</p>

        <h2>Third-Party Services</h2>
        <p>${escapeHtml(app.thirdPartyServices || 'No third-party advertising SDKs. App store purchases are processed by Apple or Google under their privacy policies.')}</p>

        <h2>Data We Do Not Sell</h2>
        <p>We do not sell your personal information.</p>

        <h2>Children's Privacy</h2>
        <p>Our apps are not directed to children under 13. We do not knowingly collect personal information from children under 13. Contact us if you believe a child has provided personal information.</p>

        <h2>Changes to This Policy</h2>
        <p>We may update this policy as the app evolves. The effective date at the top will change when updates are posted.</p>

        <h2>Contact</h2>
        <p>Questions about privacy for ${escapeHtml(app.name)}? Email <a href="mailto:${escapeHtml(supportEmail())}">${escapeHtml(supportEmail())}</a>.</p>
  `;
}

function mountAppPrivacy() {
  const id = document.body.dataset.appId;
  const app = getSupportApp(id);
  const mount = document.querySelector('[data-app-privacy]');
  if (!app || !mount) {
    if (mount) mount.innerHTML = '<div class="container"><p>Privacy policy not found. <a href="/privacy.html">Return to Privacy</a></p></div>';
    return;
  }

  const customDoc = CUSTOM_PRIVACY_DOCS[id];
  const effectiveDate = customDoc?.effectiveDate || app.effectiveDate || 'June 27, 2026';
  const bodyHtml = customDoc
    ? renderCustomPrivacyBody(customDoc)
    : renderGenericPrivacyBody(app);

  mount.innerHTML = `
    <section class="page-hero page-hero--compact">
      <div class="container support-app-hero">
        <div class="support-app-hero__icon">${renderSupportAppIcon(app)}</div>
        <div>
          <p class="eyebrow">Privacy Policy</p>
          <h1 class="page-hero__title">${escapeHtml(app.name)}</h1>
          <p class="page-hero__lead">Effective date: ${escapeHtml(effectiveDate)}</p>
        </div>
      </div>
    </section>

    <section class="section" style="padding-top:0;">
      <div class="container prose support-privacy-prose">
        ${bodyHtml}

        <div class="hero__actions support-privacy-actions">
          <a href="/support/${escapeHtml(app.id)}.html" class="btn btn-primary">${escapeHtml(app.name)} Support →</a>
          <a href="/marketing/${escapeHtml(app.id)}.html" class="btn btn-secondary">App Overview</a>
          <a href="/support.html" class="btn btn-secondary">Support Home</a>
          <a href="/privacy.html" class="btn btn-secondary">Website Privacy</a>
        </div>
      </div>
    </section>
  `;
}

mountShell();
mountAppPrivacy();
