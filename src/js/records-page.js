import { mountShell } from './layout.js';
import recordsData from '../data/records.json';

mountShell();

const songs = [...recordsData.songs].sort((a, b) => a.order - b.order);

function esc(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}

function renderCard(song, lazy) {
  return `
    <article class="records-card" id="${esc(song.id)}">
      <button type="button" class="records-card__art" data-records-open="${esc(song.id)}" aria-label="View larger artwork for ${esc(song.title)}">
        <img src="${esc(song.cover)}" alt="${esc(song.title)} album artwork" width="${song.width}" height="${song.height}" loading="${lazy ? 'lazy' : 'eager'}">
      </button>
      <div class="records-card__body">
        <p class="records-card__brand">GGK Records</p>
        <h3>${esc(song.title)}</h3>
        <p>${esc(song.description)}</p>
      </div>
    </article>
  `;
}

const featured = document.querySelector('[data-records-featured]');
const catalog = document.querySelector('[data-records-catalog]');
if (featured) featured.innerHTML = songs.filter((song) => song.featured).map((song) => renderCard(song, false)).join('');
if (catalog) catalog.innerHTML = songs.filter((song) => !song.featured).map((song) => renderCard(song, true)).join('');

const dialog = document.querySelector('[data-records-lightbox]');
const lightboxImg = document.querySelector('[data-records-lightbox-img]');
const lightboxCaption = document.querySelector('[data-records-lightbox-caption]');
let lastTrigger = null;

function openArtwork(id, trigger) {
  const song = songs.find((item) => item.id === id);
  if (!song || !dialog || !lightboxImg || !lightboxCaption) return;
  lightboxImg.src = song.cover;
  lightboxImg.alt = `${song.title} album artwork`;
  lightboxCaption.textContent = song.title;
  lastTrigger = trigger;
  dialog.showModal();
}

document.querySelectorAll('[data-records-open]').forEach((button) => {
  button.addEventListener('click', () => openArtwork(button.getAttribute('data-records-open'), button));
});

dialog?.addEventListener('click', (event) => {
  if (event.target === dialog) dialog.close();
});

dialog?.addEventListener('close', () => {
  lastTrigger?.focus();
});
