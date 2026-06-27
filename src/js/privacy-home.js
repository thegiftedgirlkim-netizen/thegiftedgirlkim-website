import { mountShell } from './layout.js';
import { getSupportApps, renderSupportAppIcon } from './support-hub.js';
import hubData from '../data/support-hub.json';

function mountPrivacyHome() {
  const mount = document.querySelector('[data-privacy-home]');
  if (!mount) return;

  const apps = getSupportApps();

  mount.innerHTML = `
    <section class="page-hero page-hero--compact">
      <div class="container">
        <p class="eyebrow">Your Privacy Matters</p>
        <h1 class="page-hero__title">Privacy Policies</h1>
        <p class="page-hero__lead">Official privacy policies for The Gifted Girl Kim LLC website and every published app — store-ready links, all in one place.</p>
      </div>
    </section>

    <section class="section" style="padding-top:0;">
      <div class="container">
        <div class="prose" style="margin-bottom:2rem;">
          <p><strong>The Gifted Girl Kim LLC</strong> builds apps and digital experiences with privacy as a core value. Each app has its own privacy policy below. These are the official links for App Store, Google Play, and support going forward.</p>
        </div>

        <div class="support-section-head">
          <p class="eyebrow">Per-App Policies</p>
          <h2 class="section-head__title">App Privacy Policies</h2>
        </div>

        <div class="support-app-grid support-app-grid--compact">
          ${apps.map(app => {
            const meta = hubData.apps[app.id] || {};
            return `
              <a href="/privacy/${app.id}.html" class="support-app-card support-app-card--link">
                <div class="support-app-card__top">
                  ${renderSupportAppIcon(app)}
                  <div>
                    <h3 class="support-app-card__name">${app.name}</h3>
                    <p class="support-app-card__tagline">Effective: ${meta.effectiveDate || 'June 27, 2026'}</p>
                  </div>
                </div>
              </a>
            `;
          }).join('')}
        </div>

        <div class="support-section-head" style="margin-top:2.5rem;">
          <p class="eyebrow">This Website</p>
          <h2 class="section-head__title">Website Privacy Policy</h2>
        </div>

        <div class="prose">
          <p>The Gifted Girl Kim LLC ("we," "us," or "our") builds apps and digital experiences with privacy as a core value. This policy explains how we handle information when you visit our website.</p>

          <h2>Website</h2>
          <p>This marketing website is static. We do not use advertising trackers, analytics cookies, or sell your personal information. If you email us or use a contact form, we receive the information you choose to send.</p>

          <h2>Our Apps</h2>
          <p>Each app has its own privacy policy linked above. Many apps process information locally on your device. We do not sell personal information.</p>
          <ul>
            <li>We do not sell personal information.</li>
            <li>We do not upload your photos, messages, or private content to our servers unless a specific app feature clearly requires it and discloses that use.</li>
            <li>App store purchases are processed by Apple or Google under their respective privacy policies.</li>
          </ul>

          <h2>Information We May Receive</h2>
          <ul>
            <li>Support emails you send to us voluntarily</li>
            <li>Basic technical details you include in a support request (device model, OS version, app version)</li>
            <li>Newsletter signups if you choose to join our mailing list</li>
          </ul>

          <h2>Children's Privacy</h2>
          <p>Our apps and website are not directed to children under 13. We do not knowingly collect personal information from children under 13. Contact us if you believe a child has provided personal information.</p>

          <h2>Contact</h2>
          <p>Questions about privacy? Email <a href="mailto:thegiftedgirlkim@gmail.com">thegiftedgirlkim@gmail.com</a>.</p>
          <p><em>Last updated: June 26, 2026</em></p>
        </div>

        <div class="hero__actions" style="margin-top:1.5rem; justify-content:center;">
          <a href="/support.html" class="btn btn-primary">Support Home →</a>
          <a href="/terms.html" class="btn btn-secondary">Terms &amp; Conditions</a>
        </div>
      </div>
    </section>
  `;
}

mountShell();
mountPrivacyHome();
