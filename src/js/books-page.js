import { mountShell, renderBookGrid, getSite } from './layout.js';

mountShell();

const site = getSite();
const author = site.amazonAuthor;

const bannerMount = document.querySelector('[data-books-author]');
if (bannerMount && author?.url) {
  bannerMount.innerHTML = `
    <div class="books-author-banner">
      <div>
        <p class="eyebrow">Amazon Author Page</p>
        <h2 class="books-author-banner__title">Browse all books by ${site.brandShort}</h2>
        <p class="books-author-banner__lead">Memoir, Elvis Presley titles, The Unexpected Soulmate, international editions, and more.</p>
      </div>
      <a href="${author.url}" class="btn btn-primary" target="_blank" rel="noopener noreferrer">${author.label} →</a>
    </div>
  `;
}

const mount = document.querySelector('[data-books-grid]');
if (mount) mount.innerHTML = renderBookGrid();
