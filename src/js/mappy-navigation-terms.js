import { mountShell } from './layout.js';
import { supportEmail } from './support-hub.js';
import site from '../data/site.json';
import doc from '../data/mappy-navigation-terms.json';

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
    if (block.type === 'ul') {
      const items = (block.items || []).map((item) => `<li>${escapeHtml(item)}</li>`).join('');
      return `<ul>${items}</ul>`;
    }
    if (block.type === 'a' && block.href) {
      return `<p><a href="${escapeHtml(block.href)}" rel="noopener noreferrer">${escapeHtml(block.text)}</a></p>`;
    }
    return `<p>${escapeHtml(block.text)}</p>`;
  }).join('\n');
}

function mountTerms() {
  const mount = document.querySelector('[data-mappy-navigation-terms]');
  if (!mount) return;

  const sections = (doc.sections || []).map((section) => `
        <h2>${escapeHtml(section.heading)}</h2>
        ${renderBlocks(section.blocks)}
  `).join('\n');

  mount.innerHTML = `
    <section class="page-hero page-hero--compact">
      <div class="container">
        <p class="eyebrow">Terms of Service</p>
        <h1 class="page-hero__title">Mappy Navigation</h1>
        <p class="page-hero__lead">Effective date: ${escapeHtml(doc.effectiveDate)}</p>
        ${doc.lastUpdated ? `<p class="page-hero__lead">Last updated: ${escapeHtml(doc.lastUpdated)}</p>` : ''}
      </div>
    </section>

    <section class="section" style="padding-top:0;">
      <div class="container prose support-privacy-prose">
        <p>${escapeHtml(doc.intro)}</p>
        ${sections}

        <div class="hero__actions support-privacy-actions">
          <a href="https://thegiftedgirlkim.com/support/mappy-navigation.html" class="btn btn-primary">Mappy Support</a>
          <a href="https://thegiftedgirlkim.com/privacy/mappy-navigation.html" class="btn btn-secondary">Privacy Policy</a>
          <a href="https://thegiftedgirlkim.com/marketing/mappy-navigation.html" class="btn btn-secondary">Mappy Overview</a>
          <a href="mailto:${escapeHtml(supportEmail())}" class="btn btn-secondary">Email ${escapeHtml(site.company)}</a>
        </div>
      </div>
    </section>
  `;
}

mountShell();
mountTerms();
