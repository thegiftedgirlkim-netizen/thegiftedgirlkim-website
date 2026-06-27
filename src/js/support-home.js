import { mountShell } from './layout.js';
import {
  getSupportHub,
  getSupportApps,
  renderSupportAppIcon,
  supportEmail
} from './support-hub.js';

function renderAppHubCard(app) {
  return `
    <article class="support-app-card" id="${app.id}">
      <div class="support-app-card__top">
        ${renderSupportAppIcon(app)}
        <div>
          <h3 class="support-app-card__name">${app.name}</h3>
          <p class="support-app-card__tagline">${app.tagline}</p>
        </div>
      </div>
      <p class="support-app-card__desc">${app.description}</p>
      <div class="support-app-card__links">
        <a href="/support/${app.id}.html" class="btn btn-primary btn-sm">App Support →</a>
        <a href="/privacy/${app.id}.html" class="btn btn-secondary btn-sm">Privacy Policy →</a>
      </div>
    </article>
  `;
}

function renderFaqs(faqs) {
  return faqs.map(faq => `
    <details class="faq-item">
      <summary>${faq.question}</summary>
      <p>${faq.answer}</p>
    </details>
  `).join('');
}

function mountSupportHome() {
  const hub = getSupportHub();
  const apps = getSupportApps();
  const email = supportEmail();
  const mount = document.querySelector('[data-support-home]');
  if (!mount) return;

  mount.innerHTML = `
    <section class="page-hero page-hero--compact">
      <div class="container">
        <p class="eyebrow">Help Center</p>
        <h1 class="page-hero__title">${hub.hub.welcomeTitle}</h1>
        <p class="page-hero__lead">${hub.hub.welcomeLead}</p>
      </div>
    </section>

    <section class="section" style="padding-top:0;">
      <div class="container">
        <div class="info-card support-welcome-card">
          <h2>Contact Support</h2>
          <p>${hub.hub.contactIntro}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p class="support-note">Tip: include your app name, device model, iOS/Android version, and screenshots if helpful.</p>
          <div class="hero__actions support-welcome-actions">
            <a href="mailto:${email}" class="btn btn-primary">Email Support ✉️</a>
            <a href="/contact.html" class="btn btn-secondary">Contact Form →</a>
          </div>
        </div>

        <div class="support-section-head">
          <p class="eyebrow">Every App</p>
          <h2 class="section-head__title">App Support &amp; Privacy</h2>
          <p class="section-head__lead">Official support and privacy policy links for every app published by The Gifted Girl Kim LLC.</p>
        </div>

        <div class="support-app-grid">
          ${apps.map(renderAppHubCard).join('')}
        </div>

        <div class="support-section-head" style="margin-top:2.5rem;">
          <p class="eyebrow">Common Questions</p>
          <h2 class="section-head__title">Frequently Asked Questions</h2>
        </div>

        <div class="faq-list">
          ${renderFaqs(hub.hub.generalFaqs)}
        </div>

        <div class="support-hub-links">
          <a href="/privacy.html" class="info-card support-hub-link-card">
            <h3>Website Privacy Policy</h3>
            <p>How we handle information on thegiftedgirlkim.com</p>
          </a>
          <a href="/terms.html" class="info-card support-hub-link-card">
            <h3>Terms &amp; Conditions</h3>
            <p>Terms of use for apps and digital products</p>
          </a>
        </div>
      </div>
    </section>
  `;
}

mountShell();
mountSupportHome();
