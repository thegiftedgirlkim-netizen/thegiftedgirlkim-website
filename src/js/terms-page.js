import { mountShell } from './layout.js';
import { getSupportHub } from './support-hub.js';

function mountTerms() {
  const { terms } = getSupportHub();
  const mount = document.querySelector('[data-terms-content]');
  if (!mount) return;

  mount.innerHTML = `
    <section class="page-hero page-hero--compact">
      <div class="container">
        <p class="eyebrow">Legal</p>
        <h1 class="page-hero__title">Terms &amp; Conditions</h1>
        <p class="page-hero__lead">Effective date: ${terms.effectiveDate}</p>
      </div>
    </section>

    <section class="section" style="padding-top:0;">
      <div class="container prose">
        <p>${terms.intro}</p>
        ${terms.sections.map(section => `
          <h2>${section.title}</h2>
          <p>${section.body}</p>
        `).join('')}
        <div class="hero__actions" style="margin-top:1.5rem;">
          <a href="/support.html" class="btn btn-primary">Support Home →</a>
          <a href="/privacy.html" class="btn btn-secondary">Privacy Policies</a>
        </div>
      </div>
    </section>
  `;
}

mountShell();
mountTerms();
