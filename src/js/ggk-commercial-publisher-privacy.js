import { mountShell } from './layout.js';
import { supportEmail } from './support-hub.js';
import site from '../data/site.json';
import doc from '../data/ggk-commercial-publisher-privacy.json';

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
    if (block.type === 'h3') {
      return `<h3>${escapeHtml(block.text)}</h3>`;
    }
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

function mountPolicy() {
  const mount = document.querySelector('[data-ggk-publisher-privacy]');
  if (!mount) return;

  const sections = (doc.sections || []).map((section) => `
        <h2>${escapeHtml(section.heading)}</h2>
        ${renderBlocks(section.blocks)}
  `).join('\n');

  mount.innerHTML = `
    <section class="page-hero page-hero--compact">
      <div class="container">
        <p class="eyebrow">Privacy Policy</p>
        <h1 class="page-hero__title">GGK Commercial Publisher</h1>
        <p class="page-hero__lead">Effective date: ${escapeHtml(doc.effectiveDate)}</p>
      </div>
    </section>

    <section class="section" style="padding-top:0;">
      <div class="container prose support-privacy-prose">
        <p>${escapeHtml(doc.intro)}</p>
        ${sections}

        <div class="hero__actions support-privacy-actions">
          <a href="/privacy.html" class="btn btn-primary">Website Privacy</a>
          <a href="/support.html" class="btn btn-secondary">Support Home</a>
          <a href="mailto:${escapeHtml(supportEmail())}" class="btn btn-secondary">Email ${escapeHtml(site.company)}</a>
        </div>
      </div>
    </section>
  `;
}

mountShell();
mountPolicy();
