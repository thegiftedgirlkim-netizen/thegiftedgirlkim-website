import { mountShell } from './layout.js';
import { getSupportApp, renderSupportAppIcon } from './support-hub.js';
import communityDoc from '../data/digital-chapel-community.json';

function escapeHtml(value) {
  return String(value ?? '').replace(/[&<>"']/g, (char) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  })[char]);
}

function linkifyPrivacy(text) {
  const escaped = escapeHtml(text);
  return escaped.replace(
    'https://thegiftedgirlkim.com/privacy/digital-chapel.html',
    '<a href="https://thegiftedgirlkim.com/privacy/digital-chapel.html" target="_blank" rel="noopener">https://thegiftedgirlkim.com/privacy/digital-chapel.html</a>',
  ).replace(
    'thegiftedgirlkim@gmail.com',
    '<a href="mailto:thegiftedgirlkim@gmail.com">thegiftedgirlkim@gmail.com</a>',
  );
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
    return `<p>${linkifyPrivacy(block.text)}</p>`;
  }).join('\n');
}

function mountCommunityPage() {
  const app = getSupportApp('digital-chapel');
  const mount = document.querySelector('[data-app-community]');
  if (!mount) return;

  const sections = (communityDoc.sections || []).map((section) => `
        <h2>${escapeHtml(section.heading)}</h2>
        ${renderBlocks(section.blocks)}
  `).join('\n');

  mount.innerHTML = `
    <section class="page-hero page-hero--compact">
      <div class="container support-app-hero">
        <div class="support-app-hero__icon">${app ? renderSupportAppIcon(app) : ''}</div>
        <div>
          <p class="eyebrow">${escapeHtml(communityDoc.eyebrow || 'Community Guidelines')}</p>
          <h1 class="page-hero__title">${escapeHtml(communityDoc.title || 'Digital Chapel Community Guidelines')}</h1>
          <p class="page-hero__lead">${escapeHtml(communityDoc.lead || '')}</p>
        </div>
      </div>
    </section>

    <section class="section" style="padding-top:0;">
      <div class="container prose support-privacy-prose">
        <p>${escapeHtml(communityDoc.intro || '')}</p>
        ${sections}

        <div class="hero__actions support-privacy-actions">
          <a href="/support/digital-chapel.html" class="btn btn-primary">Digital Chapel Support →</a>
          <a href="/privacy/digital-chapel.html" class="btn btn-secondary">Privacy Policy</a>
          <a href="/marketing/digital-chapel.html" class="btn btn-secondary">App Overview</a>
          <a href="/support.html" class="btn btn-secondary">Support Home</a>
        </div>
      </div>
    </section>
  `;
}

mountShell();
mountCommunityPage();
