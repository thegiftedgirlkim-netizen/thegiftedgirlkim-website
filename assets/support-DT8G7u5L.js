import{m as t}from"./layout-D8VIfDvx.js";import{a as r,b as i,s as o,r as c}from"./support-hub-LCD0Cl3t.js";function n(s){return`
    <article class="support-app-card" id="${s.id}">
      <div class="support-app-card__top">
        ${c(s)}
        <div>
          <h3 class="support-app-card__name">${s.name}</h3>
          <p class="support-app-card__tagline">${s.tagline}</p>
        </div>
      </div>
      <p class="support-app-card__desc">${s.description}</p>
      <div class="support-app-card__links">
        <a href="/support/${s.id}.html" class="btn btn-primary btn-sm">App Support →</a>
        <a href="/privacy/${s.id}.html" class="btn btn-secondary btn-sm">Privacy Policy →</a>
      </div>
    </article>
  `}function l(s){return s.map(a=>`
    <details class="faq-item">
      <summary>${a.question}</summary>
      <p>${a.answer}</p>
    </details>
  `).join("")}function d(){const s=i(),a=r(),p=o(),e=document.querySelector("[data-support-home]");e&&(e.innerHTML=`
    <section class="page-hero page-hero--compact">
      <div class="container">
        <p class="eyebrow">Help Center</p>
        <h1 class="page-hero__title">${s.hub.welcomeTitle}</h1>
        <p class="page-hero__lead">${s.hub.welcomeLead}</p>
      </div>
    </section>

    <section class="section" style="padding-top:0;">
      <div class="container">
        <div class="info-card support-welcome-card">
          <h2>Contact Support</h2>
          <p>${s.hub.contactIntro}</p>
          <p><strong>Email:</strong> <a href="mailto:${p}">${p}</a></p>
          <p class="support-note">Tip: include your app name, device model, iOS/Android version, and screenshots if helpful.</p>
          <div class="hero__actions support-welcome-actions">
            <a href="mailto:${p}" class="btn btn-primary">Email Support ✉️</a>
            <a href="/contact.html" class="btn btn-secondary">Contact Form →</a>
          </div>
        </div>

        <div class="support-section-head">
          <p class="eyebrow">Every App</p>
          <h2 class="section-head__title">App Support &amp; Privacy</h2>
          <p class="section-head__lead">Official support and privacy policy links for every app published by The Gifted Girl Kim LLC.</p>
        </div>

        <div class="support-app-grid">
          ${a.map(n).join("")}
        </div>

        <div class="support-section-head" style="margin-top:2.5rem;">
          <p class="eyebrow">Common Questions</p>
          <h2 class="section-head__title">Frequently Asked Questions</h2>
        </div>

        <div class="faq-list">
          ${l(s.hub.generalFaqs)}
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
  `)}t();d();
