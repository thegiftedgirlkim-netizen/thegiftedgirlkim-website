import{m as s}from"./layout-D8VIfDvx.js";import{b as a}from"./support-hub-LCD0Cl3t.js";function r(){const{terms:e}=a(),t=document.querySelector("[data-terms-content]");t&&(t.innerHTML=`
    <section class="page-hero page-hero--compact">
      <div class="container">
        <p class="eyebrow">Legal</p>
        <h1 class="page-hero__title">Terms &amp; Conditions</h1>
        <p class="page-hero__lead">Effective date: ${e.effectiveDate}</p>
      </div>
    </section>

    <section class="section" style="padding-top:0;">
      <div class="container prose">
        <p>${e.intro}</p>
        ${e.sections.map(o=>`
          <h2>${o.title}</h2>
          <p>${o.body}</p>
        `).join("")}
        <div class="hero__actions" style="margin-top:1.5rem;">
          <a href="/support.html" class="btn btn-primary">Support Home →</a>
          <a href="/privacy.html" class="btn btn-secondary">Privacy Policies</a>
        </div>
      </div>
    </section>
  `)}s();r();
