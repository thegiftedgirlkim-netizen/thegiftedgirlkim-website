import{m,s as u}from"./layout-D8VIfDvx.js";import{g as $,r as g,s as i}from"./support-hub-LCD0Cl3t.js";function v(o){return o!=null&&o.length?`
    <h2>What You Can Do</h2>
    <ul class="support-list">${o.map(t=>`<li>${t}</li>`).join("")}</ul>
  `:""}function y(){var e,p;const o=document.body.dataset.appId,t=$(o),r=document.querySelector("[data-app-marketing]");if(!t||!r){r&&(r.innerHTML='<div class="container"><p>Marketing page not found. <a href="/apps.html">Return to Apps</a></p></div>');return}const n=t.marketing||{},c=n.headline||t.tagline,l=(e=n.intro)!=null&&e.length?n.intro:[t.description],d=n.features||[],s=n.price,a=n.disclaimer;r.innerHTML=`
    <section class="page-hero page-hero--compact">
      <div class="container support-app-hero">
        <div class="support-app-hero__icon">${g(t)}</div>
        <div>
          <p class="eyebrow">App Overview</p>
          <h1 class="page-hero__title">${t.name}</h1>
          <p class="page-hero__lead">${c}</p>
        </div>
      </div>
    </section>

    <section class="section" style="padding-top:0;">
      <div class="container prose support-privacy-prose">
        ${l.map(h=>`<p>${h}</p>`).join("")}

        ${v(d)}

        ${n.builtFor?`
          <h2>Built for Gentle Everyday Use</h2>
          <p>${n.builtFor}</p>
        `:""}

        ${s?`
          <h2>Price</h2>
          <p><strong>${t.name}</strong> is a paid download: <strong>${s}</strong></p>
        `:""}

        ${a?`
          <h2>Important Note</h2>
          <p>${a}</p>
        `:""}

        <div class="hero__actions support-privacy-actions">
          ${(p=t.links)!=null&&p.ios?`<a href="${t.links.ios}" class="btn btn-primary" target="_blank" rel="noopener noreferrer">View on App Store →</a>`:""}
          <a href="${t.supportUrl}" class="btn btn-secondary">${t.name} Support →</a>
          <a href="${t.privacyUrl}" class="btn btn-secondary">Privacy Policy →</a>
          <a href="/apps.html#${t.id}" class="btn btn-secondary">All Apps</a>
        </div>

        <p class="support-small-note">Questions? Email <a href="mailto:${i()}">${i()}</a>. Published by <strong>${u.company}</strong>.</p>
      </div>
    </section>
  `}m();y();
