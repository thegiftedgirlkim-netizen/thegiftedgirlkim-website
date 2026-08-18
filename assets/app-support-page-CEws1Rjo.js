import{m as i}from"./layout-D8VIfDvx.js";import{g as o,r as n,s as r,m as d,c as l}from"./support-hub-LCD0Cl3t.js";function t(s,a){return s!=null&&s.length?`<ul class="support-list">${s.map(p=>`<li>${p}</li>`).join("")}</ul>`:`<p class="support-empty">${a}</p>`}function c(s){return s!=null&&s.length?`
    <h2 class="support-block-title">App FAQs</h2>
    <div class="faq-list">${s.map(a=>`
      <details class="faq-item">
        <summary>${a.question}</summary>
        <p>${a.answer}</p>
      </details>
    `).join("")}</div>
  `:""}function u(){var e;const s=document.body.dataset.appId,a=o(s),p=document.querySelector("[data-app-support]");if(!a||!p){p&&(p.innerHTML='<div class="container"><p>App not found. <a href="/support.html">Return to Support</a></p></div>');return}p.innerHTML=`
    <section class="page-hero page-hero--compact">
      <div class="container support-app-hero">
        <div class="support-app-hero__icon">${n(a)}</div>
        <div>
          <p class="eyebrow">App Support</p>
          <h1 class="page-hero__title">${a.name}</h1>
          <p class="page-hero__lead">${a.tagline}</p>
        </div>
      </div>
    </section>

    <section class="section" style="padding-top:0;">
      <div class="container support-app-layout">
        <div class="prose support-app-main">
          <div class="info-card">
            <h2>About This App</h2>
            <p>${a.description}</p>
          </div>

          <div class="support-meta-grid">
            <div class="info-card">
              <h3>Current Version</h3>
              <p>${a.version||"TBD"}</p>
            </div>
            <div class="info-card">
              <h3>Last Updated</h3>
              <p>${a.lastUpdated||"TBD"}</p>
            </div>
            <div class="info-card">
              <h3>Status</h3>
              <p>${a.status}</p>
            </div>
          </div>

          <div class="info-card">
            <h2>Get Help</h2>
            <p>Email <a href="mailto:${r()}">${r()}</a> for support with ${a.name}.</p>
            <div class="hero__actions support-action-row">
              <a href="${d(a)}" class="btn btn-primary">Report a Bug 🐛</a>
              <a href="${l(a)}" class="btn btn-secondary">Feature Request ✨</a>
              <a href="${a.privacyUrl}" class="btn btn-secondary">Privacy Policy →</a>
            </div>
          </div>

          ${c(a.faqs)}

          <div class="info-card">
            <h2>Known Issues</h2>
            ${t(a.knownIssues,"No known issues reported at this time.")}
          </div>

          <div class="info-card">
            <h2>Planned Features</h2>
            ${t(a.plannedFeatures,"Planned features will be listed here as development continues.")}
          </div>
        </div>

        <aside class="support-app-sidebar">
          <div class="info-card">
            <h3>Quick Links</h3>
            <nav class="support-sidebar-nav">
              <a href="/support.html">← Support Home</a>
              <a href="${a.privacyUrl}">Privacy Policy</a>
              <a href="${a.marketingUrl}">App Overview</a>
              <a href="/apps.html#${a.id}">View on Apps Page</a>
              ${(e=a.links)!=null&&e.ios?`<a href="${a.links.ios}" target="_blank" rel="noopener noreferrer">App Store →</a>`:""}
            </nav>
          </div>
        </aside>
      </div>
    </section>
  `}i();u();
