import { mountShell } from './layout.js';
import {
  getSupportApp,
  renderSupportAppIcon,
  mailtoBugReport,
  mailtoFeatureRequest,
  supportEmail
} from './support-hub.js';

function renderList(items, emptyText) {
  if (!items?.length) {
    return `<p class="support-empty">${emptyText}</p>`;
  }
  return `<ul class="support-list">${items.map(item => `<li>${item}</li>`).join('')}</ul>`;
}

function renderFaqs(faqs) {
  if (!faqs?.length) return '';
  return `
    <h2 class="support-block-title">App FAQs</h2>
    <div class="faq-list">${faqs.map(faq => `
      <details class="faq-item">
        <summary>${faq.question}</summary>
        <p>${faq.answer}</p>
      </details>
    `).join('')}</div>
  `;
}

function mountAppSupport() {
  const id = document.body.dataset.appId;
  const app = getSupportApp(id);
  const mount = document.querySelector('[data-app-support]');
  if (!app || !mount) {
    if (mount) mount.innerHTML = '<div class="container"><p>App not found. <a href="/support.html">Return to Support</a></p></div>';
    return;
  }

  mount.innerHTML = `
    <section class="page-hero page-hero--compact">
      <div class="container support-app-hero">
        <div class="support-app-hero__icon">${renderSupportAppIcon(app)}</div>
        <div>
          <p class="eyebrow">App Support</p>
          <h1 class="page-hero__title">${app.name}</h1>
          <p class="page-hero__lead">${app.tagline}</p>
        </div>
      </div>
    </section>

    <section class="section" style="padding-top:0;">
      <div class="container support-app-layout">
        <div class="prose support-app-main">
          <div class="info-card">
            <h2>About This App</h2>
            <p>${app.description}</p>
          </div>

          <div class="support-meta-grid">
            <div class="info-card">
              <h3>Current Version</h3>
              <p>${app.version || 'TBD'}</p>
            </div>
            <div class="info-card">
              <h3>Last Updated</h3>
              <p>${app.lastUpdated || 'TBD'}</p>
            </div>
            <div class="info-card">
              <h3>Status</h3>
              <p>${app.status}</p>
            </div>
          </div>

          <div class="info-card">
            <h2>Get Help</h2>
            <p>Email <a href="mailto:${supportEmail()}">${supportEmail()}</a> for support with ${app.name}.</p>
            <div class="hero__actions support-action-row">
              <a href="${mailtoBugReport(app)}" class="btn btn-primary">Report a Bug 🐛</a>
              <a href="${mailtoFeatureRequest(app)}" class="btn btn-secondary">Feature Request ✨</a>
              <a href="${app.privacyUrl}" class="btn btn-secondary">Privacy Policy →</a>
            </div>
          </div>

          ${renderFaqs(app.faqs)}

          <div class="info-card">
            <h2>Known Issues</h2>
            ${renderList(app.knownIssues, 'No known issues reported at this time.')}
          </div>

          <div class="info-card">
            <h2>Planned Features</h2>
            ${renderList(app.plannedFeatures, 'Planned features will be listed here as development continues.')}
          </div>
        </div>

        <aside class="support-app-sidebar">
          <div class="info-card">
            <h3>Quick Links</h3>
            <nav class="support-sidebar-nav">
              <a href="/support.html">← Support Home</a>
              <a href="${app.privacyUrl}">Privacy Policy</a>
              <a href="/apps.html#${app.id}">View on Apps Page</a>
              ${app.links?.ios ? `<a href="${app.links.ios}" target="_blank" rel="noopener noreferrer">App Store →</a>` : ''}
            </nav>
          </div>
        </aside>
      </div>
    </section>
  `;
}

mountShell();
mountAppSupport();
