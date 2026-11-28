import{m as n,a as t,g as s}from"./layout-D8BAdoJ3.js";n();const a=s(),o=a.amazonAuthor,e=document.querySelector("[data-books-author]");e&&(o!=null&&o.url)&&(e.innerHTML=`
    <div class="books-author-banner">
      <div>
        <p class="eyebrow">Amazon Author Page</p>
        <h2 class="books-author-banner__title">Browse all books by ${a.brandShort}</h2>
        <p class="books-author-banner__lead">Memoir, The Unexpected Soulmate, international editions, and more.</p>
      </div>
      <a href="${o.url}" class="btn btn-primary" target="_blank" rel="noopener noreferrer">${o.label} →</a>
    </div>
  `);const r=document.querySelector("[data-books-grid]");r&&(r.innerHTML=t());
