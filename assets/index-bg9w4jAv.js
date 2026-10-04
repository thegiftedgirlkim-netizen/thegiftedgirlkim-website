import{m,b as f,c as y,d as g,e as v,g as b}from"./layout-D8VIfDvx.js";function S(r=document.querySelector("[data-phone-carousel]")){var d,p;if(!r)return;const s=[...r.querySelectorAll(".phone-carousel__slide")],a=[...document.querySelectorAll("[data-carousel-dot]")];if(s.length<=1)return;let e=s.findIndex(n=>n.classList.contains("is-active"));e<0&&(e=0);let o=null;const h=n=>{e=(n+s.length)%s.length,s.forEach((t,c)=>t.classList.toggle("is-active",c===e)),a.forEach((t,c)=>{t.classList.toggle("is-active",c===e),t.setAttribute("aria-selected",c===e?"true":"false")})},_=()=>h(e+1);a.forEach((n,t)=>{n.addEventListener("click",()=>{h(t),i()})});const i=()=>{o&&clearInterval(o),o=setInterval(_,3200)};i(),(d=r.closest(".phone-mockup"))==null||d.addEventListener("mouseenter",()=>{o&&clearInterval(o)}),(p=r.closest(".phone-mockup"))==null||p.addEventListener("mouseleave",i)}const l=b();var u;const k=(u=l.etsyShop)==null?void 0:u.url;function L(){return`
    <div class="hero__decor" aria-hidden="true">
      <img src="/assets/brand/company-logo.jpeg" alt="" class="hero__crystal hero__crystal--tl">
      <img src="/assets/brand/company-logo.jpeg" alt="" class="hero__crystal hero__crystal--br">
      <span class="hero__spark hero__spark--1">✦</span>
      <span class="hero__spark hero__spark--2">✧</span>
      <span class="hero__spark hero__spark--3">♡</span>
      <span class="hero__wing hero__wing--left"></span>
      <span class="hero__wing hero__wing--right"></span>
    </div>
  `}function M(){const r=document.querySelector("[data-hero]"),s=document.querySelector("[data-featured-apps]"),a=document.querySelector("[data-values]");r&&(r.innerHTML=`
      <section class="hero">
        ${L()}
        <div class="container hero__grid">
          <div class="hero__copy">
            <p class="eyebrow">${l.hero.eyebrow}</p>
            <p class="hero__role">${l.role}</p>
            <h1 class="hero__title">${l.hero.headline}</h1>
            <p class="hero__lead">${l.hero.subhead}</p>
            <div class="hero__actions">
              <a href="/apps.html" class="btn btn-primary">Explore My Apps →</a>
              <a href="/about.html" class="btn btn-secondary">About Kimberly ♡</a>
              ${`<a href="${k}" class="btn btn-secondary" target="_blank" rel="noopener noreferrer">Etsy Shop 🛍️</a>`}
            </div>
          </div>
          ${f()}
        </div>
      </section>
    `,S()),s&&(s.innerHTML=y({limit:6})),a&&(a.innerHTML=g());const e=document.querySelector("[data-shop-promo]");e&&(e.innerHTML=v({compact:!0}))}m();M();
