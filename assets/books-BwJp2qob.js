import{m as n,a as t,g as s}from"./layout-D8VIfDvx.js";n();const a=s(),e=a.amazonAuthor,o=document.querySelector("[data-books-author]");o&&(e!=null&&e.url)&&(o.innerHTML=`
    <div class="books-author-banner">
      <div>
        <p class="eyebrow">Amazon Author Page</p>
        <h2 class="books-author-banner__title">Browse all books by ${a.brandShort}</h2>
        <p class="books-author-banner__lead">Memoir, Elvis Presley titles, The Unexpected Soulmate, international editions, and more.</p>
      </div>
      <a href="${e.url}" class="btn btn-primary" target="_blank" rel="noopener noreferrer">${e.label} →</a>
    </div>
  `);const r=document.querySelector("[data-books-grid]");r&&(r.innerHTML=t());
