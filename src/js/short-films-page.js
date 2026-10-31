import { mountShell } from './layout.js';
import filmsData from '../data/short-films.json';

mountShell();

const projects = [...filmsData.projects].sort((a, b) => a.order - b.order);

function esc(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}

function renderProject(project) {
  const art = project.poster
    ? `<img src="${esc(project.poster)}" alt="${esc(project.title)} poster" width="800" height="1200">`
    : `<div class="film-preview" role="img" aria-label="Preview placeholder, not a completed film poster"><span>Preview</span><small>Not a completed release</small></div>`;
  const trailer = project.trailer
    ? `<p><a class="records-btn" href="${esc(project.trailer)}">Watch approved trailer</a></p>`
    : '';
  const badge = project.preview ? `<p class="film-card__badge">Preview — not a completed release</p>` : '';

  return `
    <article class="records-card film-card" id="${esc(project.id)}">
      <div class="film-card__art">${art}</div>
      <div class="records-card__body">
        ${badge}
        <p class="records-card__brand">GGK Short Films</p>
        <h3>${esc(project.title)}</h3>
        <p>${esc(project.description)}</p>
        ${trailer}
      </div>
    </article>
  `;
}

const featured = document.querySelector('[data-films-featured]');
const gallery = document.querySelector('[data-films-gallery]');
if (featured) featured.innerHTML = projects.filter((project) => project.featured).map(renderProject).join('');
if (gallery) gallery.innerHTML = projects.filter((project) => !project.featured).map(renderProject).join('');
