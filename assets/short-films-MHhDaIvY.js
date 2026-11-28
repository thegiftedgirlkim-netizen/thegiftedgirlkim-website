import{m as n}from"./layout-D8BAdoJ3.js";/* empty css                */const c=[{id:"featured-production-preview",title:"Featured production",description:"This card is a layout preview for a future featured short film. It is not a completed release, and no title, cast, trailer, or release date is announced here.",poster:null,trailer:null,preview:!0,featured:!0,order:1},{id:"project-preview-one",title:"Project preview",description:"A placeholder slot for an approved GGK Short Films project. Poster, title, description, and optional trailer will appear here when provided.",poster:null,trailer:null,preview:!0,featured:!1,order:2},{id:"project-preview-two",title:"Project slot",description:"Another preview slot in the gallery. This is not a finished film and does not represent a released production.",poster:null,trailer:null,preview:!0,featured:!1,order:3}],p={projects:c};n();const i=[...p.projects].sort((e,t)=>e.order-t.order);function r(e){return String(e).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}function o(e){const t=e.poster?`<img src="${r(e.poster)}" alt="${r(e.title)} poster" width="800" height="1200">`:'<div class="film-preview" role="img" aria-label="Preview placeholder, not a completed film poster"><span>Preview</span><small>Not a completed release</small></div>',s=e.trailer?`<p><a class="records-btn" href="${r(e.trailer)}">Watch approved trailer</a></p>`:"",d=e.preview?'<p class="film-card__badge">Preview — not a completed release</p>':"";return`
    <article class="records-card film-card" id="${r(e.id)}">
      <div class="film-card__art">${t}</div>
      <div class="records-card__body">
        ${d}
        <p class="records-card__brand">GGK Short Films</p>
        <h3>${r(e.title)}</h3>
        <p>${r(e.description)}</p>
        ${s}
      </div>
    </article>
  `}const l=document.querySelector("[data-films-featured]"),a=document.querySelector("[data-films-gallery]");l&&(l.innerHTML=i.filter(e=>e.featured).map(o).join(""));a&&(a.innerHTML=i.filter(e=>!e.featured).map(o).join(""));
