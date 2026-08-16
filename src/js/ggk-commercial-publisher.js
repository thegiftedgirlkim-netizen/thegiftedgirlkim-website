import { mountShell } from './layout.js';
import { supportEmail } from './support-hub.js';
import site from '../data/site.json';
import page from '../data/ggk-commercial-publisher.json';

function escapeHtml(value) {
  return String(value ?? '').replace(/[&<>"']/g, (char) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  })[char]);
}

function bullets(items = []) {
  return `<ul>${items.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul>`;
}

function mountHome() {
  const mount = document.querySelector('[data-ggk-publisher-home]');
  if (!mount) return;

  mount.innerHTML = `
    <section class="page-hero page-hero--compact">
      <div class="container">
        <p class="eyebrow">${escapeHtml(page.eyebrow)}</p>
        <h1 class="page-hero__title">GGK Commercial Publisher</h1>
        <p class="page-hero__lead">by ${escapeHtml(site.company)}</p>
        <p class="page-hero__lead">${escapeHtml(page.lead)}</p>
      </div>
    </section>

    <section class="section" style="padding-top:0;">
      <div class="container prose support-privacy-prose">
        <p>${escapeHtml(page.intro)}</p>

        <h2>${escapeHtml(page.youtubeHeading)}</h2>
        <p>${escapeHtml(page.youtubeLead)}</p>
        <div class="ggk-youtube-brand">
          <a href="${escapeHtml(page.youtubeChannelUrl)}" rel="noopener noreferrer" aria-label="YouTube channel for The Gifted Girl Kim">
            <img src="/assets/brand/youtube-logo.svg" alt="${escapeHtml(page.youtubeLogoAlt)}" width="88" height="61">
          </a>
          <p>GGK Commercial Publisher can connect to YouTube and upload owner-approved commercials to an authorized channel. YouTube is a trademark of Google LLC.</p>
        </div>

        <h2>${escapeHtml(page.authorizationHeading)}</h2>
        ${bullets(page.authorization)}

        <h2>${escapeHtml(page.revokeHeading)}</h2>
        ${bullets(page.revoke)}
        <p><a href="${escapeHtml(page.googlePermissionsHref)}" rel="noopener noreferrer">${escapeHtml(page.googlePermissionsLabel)}</a></p>
        <p><a href="${escapeHtml(page.googleSecurityHref)}" rel="noopener noreferrer">${escapeHtml(page.googleSecurityLabel)}</a></p>

        <h2>${escapeHtml(page.legalHeading)}</h2>
        <p><a href="${escapeHtml(page.privacyHref)}">${escapeHtml(page.privacyLabel)}</a></p>
        <p><a href="${escapeHtml(page.termsHref)}">${escapeHtml(page.termsLabel)}</a></p>

        <div class="hero__actions support-privacy-actions">
          <a href="${escapeHtml(page.privacyHref)}" class="btn btn-primary">Privacy Policy</a>
          <a href="${escapeHtml(page.termsHref)}" class="btn btn-secondary">Terms of Service</a>
          <a href="mailto:${escapeHtml(supportEmail())}" class="btn btn-secondary">Email ${escapeHtml(site.company)}</a>
        </div>
      </div>
    </section>
  `;
}

mountShell();
mountHome();
