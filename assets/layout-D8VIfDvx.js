(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function i(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(a){if(a.ep)return;a.ep=!0;const s=i(a);fetch(a.href,s)}})();const u="The Gifted Girl Kim LLC",m="The Gifted Girl Kim",h="Apps • Books • Shop • Digital Media",g="App Developer / Author / Digital Creator",f="thegiftedgirlkim@gmail.com",y="https://thegiftedgirlkim.com",v="Building apps that make someone's day just a little bit better.",b={url:"https://www.amazon.com/THE-GIFTED-GIRL-KIM/e/B0GXY64PCX",label:"View all books on Amazon"},_={url:"https://www.etsy.com/shop/THEGIFTEDGIRLKIMSHOP",handle:"THEGIFTEDGIRLKIMSHOP",label:"The Gifted Girl Kim Shop"},k={etsy:"https://www.etsy.com/shop/THEGIFTEDGIRLKIMSHOP",instagram:"https://www.instagram.com/thegiftedgirlkim/",facebook:"",tiktok:"https://www.tiktok.com/@thegiftedgirlkim",youtube:"https://www.youtube.com/@TheGiftedGirlKIM"},w=[{icon:"💗",title:"Apps With Heart",text:"Built to inspire, support, and empower."},{icon:"🔒",title:"Privacy First",text:"Your privacy matters. Always."},{icon:"✨",title:"Faith. Family. Purpose.",text:"Guided by faith and built with purpose."},{icon:"📚",title:"Author & Creator",text:"Books, apps, and digital media for the soul."}],S={eyebrow:"The Gifted Girl Kim LLC",headline:"Apps That Inspire. Tools That Help. Created With Purpose.",subhead:"App developer, author, and digital creator — building thoughtful mobile apps, books, Etsy finds, and digital media designed to uplift, encourage, and make everyday life a little brighter.",quote:"Turning visions into apps that make a difference.",quoteAuthor:"Kimberly"},r={company:u,brandShort:m,tagline:h,role:g,email:f,website:y,motto:v,amazonAuthor:b,etsyShop:_,social:k,values:w,hero:S},A=JSON.parse('[{"id":"screenshot-goblin","name":"Screenshot Goblin","tagline":"Gobbling screenshots. Saving storage.","description":"Find, review, organize, and remove forgotten screenshots — all on your device, with privacy built in.","icon":"/assets/apps/screenshot-goblin.png","iconSource":"Kimberly_App_Studio/Apps/Screenshot Goblin/public/assets/mascot/app-icon-1024.png","category":"Utilities","status":"Coming Soon on Apple","featured":false,"order":20,"iosAppId":"6782643746","links":{"ios":"","android":"","support":"/support/screenshot-goblin.html","privacy":"/privacy/screenshot-goblin.html"}},{"id":"digital-chapel","name":"Digital Chapel","tagline":"Scripture, prayer, and daily encouragement.","description":"Read Scripture, hear the Bible, pray together, and find daily encouragement in a warm, welcoming space.","icon":"/assets/apps/digital-chapel.png","iconSource":"Kimberly_App_Studio/Apps/Digital Chapel/CURRENT BUILD - Apple iPad Fix 2026-06-25/ios/App/App/Assets.xcassets/AppIcon.appiconset/AppIcon-512@2x.png","category":"Faith & Lifestyle","status":"Coming Soon on Apple","featured":false,"order":21,"iosAppId":"6781108213","links":{"ios":"","android":"","support":"/support/digital-chapel.html","privacy":"/privacy/digital-chapel.html","community":"/community/digital-chapel.html"}},{"id":"afterlife-network","name":"Afterlife Network","tagline":"Spirit communication with safety at the center.","description":"Explore spirit communication tools including Sensor Synth, Live Sweep, and Word Beacon — with community safety controls.","icon":"/assets/apps/afterlife-network.png","iconSource":"App Store (id6781073734) — official marketing icon","category":"Entertainment","status":"Live on Apple","featured":true,"order":1,"iosAppId":"6781073734","links":{"ios":"https://apps.apple.com/app/id6781073734","android":"","support":"/support/afterlife-network.html","privacy":"/privacy/afterlife-network.html"}},{"id":"mappy-navigation","name":"Mappy Navigation","tagline":"Navigation for the whole journey.","description":"Plan trips, navigate confidently, discover useful stops, prepare for arrival, and follow key directions from a paired Apple Watch or Wear OS watch.","icon":"/assets/apps/mappy-navigation.png","iconSource":"App Store (id6780708874) — official marketing icon","category":"Navigation","status":"Live on Apple & Google Play","featured":true,"order":2,"iosAppId":"6780708874","links":{"ios":"https://apps.apple.com/app/id6780708874","android":"https://play.google.com/store/apps/details?id=com.mappyjourney.app","support":"/support/mappy-navigation.html","privacy":"/privacy/mappy-navigation.html","marketing":"/marketing/mappy-navigation.html"}},{"id":"meditation-journey-444","name":"Meditation Journey-444","tagline":"Peaceful guided meditation.","description":"A calming meditation experience designed to help you breathe, reflect, and find stillness throughout your day.","icon":"/assets/apps/meditation-journey-444.png","iconSource":"App Store (id6780117824) — official marketing icon","category":"Wellness","status":"Live on Apple","featured":true,"order":3,"iosAppId":"6780117824","links":{"ios":"https://apps.apple.com/app/id6780117824","android":"","support":"/support/meditation-journey-444.html","privacy":"/privacy/meditation-journey-444.html"}},{"id":"memory-friend","name":"Memory Friend","tagline":"Gentle support for remembering what matters.","description":"A warm, personal companion for memories, reminders, and everyday moments worth holding onto.","icon":"/assets/apps/memory-friend.png","iconSource":"Kimberly_App_Studio/Archives/Interrupted Partial Copies/WidgetMe_partial_20260624_201612/assets/brand-universe/memory-friend.png","category":"Lifestyle","status":"Resubmitting to Apple","featured":false,"order":22,"links":{"ios":"","android":"","support":"/support/memory-friend.html","privacy":"/privacy/memory-friend.html","marketing":"/marketing/memory-friend.html"}},{"id":"socialnature","name":"SocialNature","tagline":"Discover nature. Share wonder.","description":"SocialNature is a wildlife discovery community guided by Traveler the Turtle. Browse real discoveries, share photos and videos, comment with other explorers, identify species with AI Nature Lens, join the Nature Race, and build your collections.","icon":"/assets/apps/socialnature.png","iconSource":"App Store (id6782241664) — official marketing icon","category":"Education","status":"Live on Apple & Google Play","featured":true,"order":4,"iosAppId":"6782241664","links":{"ios":"https://apps.apple.com/app/id6782241664","android":"","support":"/support/socialnature.html","privacy":"/privacy/socialnature.html","marketing":"/marketing/socialnature.html"}},{"id":"dream-board","name":"Dream Board","tagline":"Dream boldly with Dreamy the Cloud.","description":"A personal vision board, dream journal, doodle pad, and goal tracker — designed to help you dream boldly and follow through, all on your device.","icon":"/assets/apps/dream-board.png","iconSource":"Kimberly_App_Studio/Archives/Moved Folder Archives/Dream_Board_FULL_ARCHIVE_20260624_201612.zip → Dream Board/App Icon.png","category":"Creativity","status":"Preparing for App Store","featured":false,"order":23,"links":{"ios":"","android":"","support":"/support/dream-board.html","privacy":"/privacy/dream-board.html","marketing":"/marketing/dream-board.html"}},{"id":"mobile-eyes","name":"Mobile Eyes","tagline":"Always watching over loved ones.","description":"A caregiver safety and location companion designed to help families stay connected and informed with care.","icon":"/assets/apps/mobile-eyes.png","iconSource":"Kimberly_App_Studio/Archives/Interrupted Partial Copies/WidgetMe_partial_20260624_201612/assets/brand-universe/mobile-eyes.png","category":"Family","status":"Prototype","featured":false,"order":9,"links":{"ios":"","android":"","support":"/support/mobile-eyes.html","privacy":"/privacy/mobile-eyes.html"}},{"id":"snow-patrol","name":"Snow Patrol","tagline":"Adventures with Snow the husky.","description":"A heartfelt game-inspired experience starring Snow — built around real stories, warmth, and playful exploration.","icon":"/assets/apps/snow-patrol.png","iconSource":"Desktop/Snow Patrol/2f4a936e-f963-407c-ac52-7f1e7eb9e94e.png","category":"Games","status":"In Development","featured":false,"order":10,"links":{"ios":"","android":"","support":"/support/snow-patrol.html","privacy":"/privacy/snow-patrol.html"}},{"id":"widget-guru-studio","name":"Widget Guru Studio","tagline":"132 wallpapers · 19 widgets · 24 themes","description":"Browse 132 wallpaper styles, 19 widget styles, 24 theme packs, and 37 quote cards — save favorites and personalize your phone with Widget Guru. More collections coming in future updates.","icon":"/assets/apps/widget-guru-studio.png","iconSource":"Kimberly_App_Studio/Apps/Widget Guru Studio/assets/brand-universe/widget-guru.png","category":"Lifestyle","status":"Preparing for App Store","featured":false,"order":24,"links":{"ios":"","android":"","support":"/support/widget-guru-studio.html","privacy":"/privacy/widget-guru-studio.html"}},{"id":"memories411","name":"Memories411","tagline":"Every picture tells a story.","description":"Preserve family photos, 411 interview stories, and shared albums — guided by Mr. Polaroid. Save your first family story in minutes.","icon":"/assets/apps/memories411.png","iconSource":"Kimberly_App_Studio/Apps/Memories411/assets/brand/mr-polaroid-hero.png","category":"Family","status":"Preparing for App Store","featured":true,"order":5,"links":{"ios":"","android":"","support":"/support/memories411.html","privacy":"/privacy/memories411.html","marketing":"/marketing/memories411.html"}},{"id":"gem-and-me","name":"Gem & Me","tagline":"Your gentle AI companion.","description":"Pick up your last conversation, make a tiny plan, or just talk for a minute — a calm companion app prototype.","icon":null,"iconSource":"No official PNG icon on KimT9Drive yet — add public/assets/apps/gem-and-me.png when ready","category":"Companion","status":"Prototype","featured":false,"order":11,"links":{"ios":"","android":"","support":"/support/gem-and-me.html","privacy":"/privacy/gem-and-me.html"}},{"id":"language-engine-411","name":"Language Engine 411","tagline":"Learn offline. Practice with AI. Travel with confidence.","description":"Travel-adventure language learning with Lingo the conductor — offline Learn lines, AI Translate & Practice, World Tour, and immersive destination homes for 9 languages.","icon":"/assets/apps/language-engine-411.png","iconSource":"Kimberly_App_Studio/Apps/Language Engine/STORE_ASSETS/icon/app_icon_1024.png","category":"Education","status":"Preparing for App Store & Google Play","featured":true,"order":4,"links":{"ios":"","android":"","support":"/support/language-engine-411.html","privacy":"/privacy/language-engine-411.html","marketing":"/marketing/language-engine-411.html"}},{"id":"horoscope-411","name":"Horoscope 411","tagline":"Your Stars. Your Day. Your 411.","description":"Offline-first daily astrology with Luna & Nova — Daily 411, Moon 411, Angel Numbers, compatibility, and Horoscope 411 Plus forecasts for entertainment and personal reflection.","icon":"/assets/apps/horoscope-411.png","iconSource":"Kimberly_App_Studio/Apps/Horoscopes 411 / Codex worktree iOS AppIcon-512@2x.png","category":"Lifestyle","status":"Preparing for App Store & Google Play","featured":true,"order":3,"links":{"ios":"","android":"","support":"/support/horoscope-411.html","privacy":"/privacy/horoscope-411.html","marketing":"/marketing/horoscope-411.html"}},{"id":"ai-fitness-411","name":"AI Fitness 411","tagline":"Hydro + Flex. Food, water, movement, and coaching.","description":"Track macros, water, steps, and heart rate with Hydro and Flex as your AI coaches. Log meals by scan or search, connect Apple Health or Health Connect, and unlock unlimited coaching with optional Premium.","icon":"/assets/apps/ai-fitness-411.png","iconSource":"Kimberly_App_Studio/Apps/AI Fitness 411/STORE_ASSETS/app-icon-1024.png","category":"Health & Fitness","status":"Preparing for App Store & Google Play","featured":true,"order":2,"links":{"ios":"","android":"","support":"/support/ai-fitness-411.html","privacy":"/privacy/ai-fitness-411.html","marketing":"/marketing/ai-fitness-411.html"}}]'),G={apps:A},E=[{id:"through-my-eyes",title:"Through My Eyes",subtitle:"Well, ok then... I have the receipts.",author:"The Gifted Girl Kim",description:"A candid, heartfelt memoir-style journey — honest stories, real receipts, and the kind of truth that stays with you.",cover:"/assets/books/through-my-eyes.jpg",coverSource:"Kimberly_App_Studio/Graphics/Images/Through my eyes book cover.jpg",links:{amazon:"https://www.amazon.com/THE-GIFTED-GIRL-KIM/e/B0GXY64PCX"},featured:!0,order:1},{id:"through-my-eyes-it",title:"Attraverso I Miei Occhi",subtitle:"Italian Edition — Well, ok then... I have the receipts.",author:"The Gifted Girl Kim",description:"The Italian-language edition of Through My Eyes — honest stories, real receipts, and the kind of truth that stays with you.",cover:"/assets/books/attraverso-i-miei-occhi.jpg",coverSource:"Amazon — https://m.media-amazon.com/images/I/814Dz7YoRpL.jpg",asin:"B0GZCNS5YQ",links:{amazon:"https://www.amazon.com/ATTRAVERSO-MIEI-OCCHI-ricevute-Italian-ebook/dp/B0GZCNS5YQ"},featured:!0,order:2},{id:"the-unexpected-soulmate",title:"The Unexpected Soulmate",subtitle:"",author:"The Gifted Girl Kim",description:"A story of surprise, grace, and connection — written with warmth, honesty, and the kind of truth that stays with you.",cover:"/assets/books/the-unexpected-soulmate.jpg",coverSource:"Kimberly_App_Studio/Graphics/Images/THE UNEXPECTED SOULMATE COVER .JPG",links:{amazon:"https://www.amazon.com/UNEXPECTED-SOULMATE-GIFTED-GIRL-KIM-ebook/dp/B0GX4667X1"},featured:!0,order:3},{id:"ep-then-and-now-en",title:"Elvis Presley: Then and Now",subtitle:"English Edition",author:"The Gifted Girl Kim",description:"A thoughtful exploration of Elvis Presley’s legacy — then and now — for readers who love music, memory, and meaning.",cover:"/assets/books/ep-then-and-now-en.jpg",coverSource:"Kimberly_App_Studio/Graphics/Images/Elvis Presley Then and Now Cover.jpeg",links:{amazon:"https://www.amazon.com/ELVIS-PRESLEY-THEN-NOW-GIFTED-GIRL-ebook/dp/B0GXX95K1H"},featured:!0,order:4},{id:"ep-then-and-now-it",title:"Elvis Presley: Then and Now",subtitle:"Italian Edition",author:"The Gifted Girl Kim",description:"The Italian-language edition celebrating Elvis Presley’s enduring influence across generations.",cover:"/assets/books/ep-then-and-now-it.jpg",coverSource:"Kimberly_App_Studio/Graphics/Images/EP THEN AND NOW IT COVER.JPG",links:{amazon:"https://www.amazon.com/-/es/GIFTED-GIRL-KIM-ebook/dp/B0GZF9LFGT"},featured:!0,order:5},{id:"ep-span-book",title:"Elvis Presley: Antes y Ahora",subtitle:"Spanish Edition",author:"The Gifted Girl Kim",description:"The Spanish-language edition celebrating Elvis Presley’s enduring influence across generations.",cover:"/assets/books/ep-span-book.jpg",coverSource:"Kimberly_App_Studio/Graphics/Images/EP SPAN BOOK COVER.JPG",links:{amazon:"https://www.amazon.com/ELVIS-PRESLEY-ANTES-AHORA-GIFTED-GIRL-ebook/dp/B0GZFCRZ3R"},featured:!0,order:6},{id:"gifted-girl-kim-japanese",title:"The Gifted Girl Kim",subtitle:"Japanese Edition",author:"The Gifted Girl Kim",description:"The Japanese-language edition — sharing Kimberly’s voice and story with readers across the world.",cover:"/assets/books/gifted-girl-kim-japanese.jpg",coverSource:"Kimberly_App_Studio/Graphics/Images/EP THEN AND NOW COVER JAP.jpeg",links:{amazon:"https://www.amazon.ca/GIFTED-GIRL-KIM-Japanese-ebook/dp/B0GX2ZS37Z"},featured:!0,order:7}],T={books:E},p=[{href:"/",label:"Home",page:"index"},{href:"/apps.html",label:"Apps",page:"apps"},{href:"/books.html",label:"Books",page:"books"},{href:"/shop.html",label:"Shop",page:"shop"},{href:"/about.html",label:"About Kimberly",page:"about"},{href:"/support.html",label:"Support",page:"support"},{href:"/contact.html",label:"Contact",page:"contact"}];function D(){return r}function l(){return[...G.apps].sort((e,t)=>e.order-t.order)}function I(e=6){return l().filter(t=>t.featured).slice(0,e)}function $(e=8){return l().filter(t=>t.icon).slice(0,e)}function P(){return[...T.books].sort((e,t)=>e.order-t.order)}function d(){const t=(window.location.pathname.replace(/\/$/,"")||"/").split("/").pop()||"index.html";return t===""||t==="index.html"?"index":t.replace(".html","")}function c(e){const t=e.page===d()?" is-active":"";return`<a href="${e.href}" class="nav-link${t}">${e.label}</a>`}function L(){const e=d();return`
    <header class="site-header">
      <div class="container site-header__inner">
        <a href="/" class="brand-lockup" aria-label="${r.company} home">
          <img src="/assets/brand/company-logo.jpeg" alt="${r.company} logo" class="brand-lockup__logo" width="80" height="80">
          <div class="brand-lockup__text">
            <div class="brand-lockup__name">${r.company}</div>
            <div class="brand-lockup__role">${r.role}</div>
            <div class="brand-lockup__tag">${r.tagline}</div>
          </div>
        </a>
        <nav class="site-nav" aria-label="Main navigation">
          ${p.map(c).join("")}
        </nav>
        <a href="/contact.html" class="btn btn-primary header-cta">Get in Touch ✨</a>
        <button type="button" class="nav-toggle" aria-label="Open menu" aria-expanded="false" data-nav-toggle>
          <span></span>
        </button>
      </div>
      <nav class="container mobile-nav" data-mobile-nav aria-label="Mobile navigation">
        ${p.map(c).join("")}
        <a href="/privacy.html" class="nav-link${e==="privacy"?" is-active":""}">Privacy</a>
      </nav>
    </header>
  `}function K(){const e=new Date().getFullYear(),t=r.social||{},i=[t.instagram&&{href:t.instagram,label:"Instagram"},t.tiktok&&{href:t.tiktok,label:"TikTok"},t.youtube&&{href:t.youtube,label:"YouTube"},t.etsy&&{href:t.etsy,label:"Etsy"}].filter(Boolean);return`
    <footer class="site-footer">
      <div class="container footer-top">
        <div>
          <div class="footer-brand">${r.brandShort}</div>
          <p class="footer-motto">${r.motto}</p>
          <p class="footer-tagline">${r.role}</p>
          ${i.length?`
            <div class="footer-social" aria-label="Social links">
              ${i.map(o=>`<a href="${o.href}" target="_blank" rel="noopener noreferrer">${o.label} ↗</a>`).join("")}
            </div>
          `:""}
        </div>
        <div class="footer-newsletter">
          <h3>New apps, updates & inspiration</h3>
          <p>Join the list for app launches, book news, and studio updates.</p>
          <form class="newsletter-form" action="mailto:${r.email}?subject=Newsletter%20Signup" method="post">
            <label class="sr-only" for="newsletter-email">Email address</label>
            <input id="newsletter-email" type="email" name="email" placeholder="Your email address" required>
            <button type="submit">Sign Me Up ✨</button>
          </form>
        </div>
      </div>
      <div class="container footer-bottom">
        <div class="footer-links">
          <a href="/">Home</a>
          <a href="/apps.html">Apps</a>
          <a href="/books.html">Books</a>
          <a href="/shop.html">Shop</a>
          <a href="${r.etsyShop.url}" target="_blank" rel="noopener noreferrer">Etsy ↗</a>
          <a href="/about.html">About</a>
          <a href="/support.html">Support</a>
          <a href="/privacy.html">Privacy</a>
          <a href="/terms.html">Terms</a>
          <a href="/contact.html">Contact</a>
        </div>
        <div>© ${e} ${r.company}. All rights reserved.</div>
      </div>
    </footer>
  `}function N(){return`
    <section class="value-bar" aria-label="Studio values">
      <div class="container value-bar__grid">
        ${r.values.map(e=>`
          <article class="value-card">
            <div class="value-card__icon" aria-hidden="true">${e.icon}</div>
            <h3 class="value-card__title">${e.title}</h3>
            <p class="value-card__text">${e.text}</p>
          </article>
        `).join("")}
      </div>
    </section>
  `}function H(){const e=document.querySelector("[data-site-header]"),t=document.querySelector("[data-site-footer]");e&&(e.innerHTML=L()),t&&(t.innerHTML=K());const i=document.querySelector("[data-nav-toggle]"),o=document.querySelector("[data-mobile-nav]");i==null||i.addEventListener("click",()=>{const a=o==null?void 0:o.classList.toggle("is-open");i.setAttribute("aria-expanded",a?"true":"false")})}function M(e,t=!1){var s,n;const i=e.icon?`<img src="${e.icon}" alt="${e.name} app icon" class="app-card__icon" loading="lazy" width="72" height="72">`:`<div class="app-card__icon-fallback" aria-hidden="true">${e.name.charAt(0)}</div>`,o=t&&e.description.length>120?`${e.description.slice(0,117)}…`:e.description,a=(s=e.links)!=null&&s.ios?`<a class="app-card__link" href="${e.links.ios}" target="_blank" rel="noopener noreferrer">App Store →</a>`:(n=e.links)!=null&&n.android?`<a class="app-card__link" href="${e.links.android}" target="_blank" rel="noopener noreferrer">Google Play →</a>`:`<a class="app-card__link" href="${e.links.support||"/support.html"}">Learn More →</a>`;return`
    <article class="app-card" id="${e.id}">
      <div class="app-card__top">
        <div class="app-card__icon-wrap">${i}</div>
        <div class="app-card__meta">
          <h3 class="app-card__name">${e.name}</h3>
          <p class="app-card__tagline">${e.tagline}</p>
        </div>
      </div>
      <p class="app-card__desc">${o}</p>
      <div class="app-card__footer">
        <span class="status-pill">${e.status}</span>
        ${a}
      </div>
    </article>
  `}function C({featuredOnly:e=!1,limit:t=null,extraClass:i=""}={}){let o=e?I(t||99):l();return t&&(o=o.slice(0,t)),`<div class="app-grid ${i}">${o.map(a=>M(a,e)).join("")}</div>`}function F(e){var o;const t=(o=e.links)==null?void 0:o.amazon;let i='<span class="status-pill">Coming Soon</span>';if(t){const a=t.includes("amazon.ca")?"View on Amazon.ca →":"View on Amazon →";i=`<a class="app-card__link" href="${t}" target="_blank" rel="noopener noreferrer">${a}</a>`}return`
    <article class="book-card" id="${e.id}">
      <img src="${e.cover}" alt="${e.title} book cover" class="book-card__cover" loading="lazy">
      <div class="book-card__body">
        <h3 class="book-card__title">${e.title}</h3>
        ${e.subtitle?`<p class="book-card__subtitle">${e.subtitle}</p>`:""}
        <p class="book-card__desc">${e.description}</p>
        <div class="app-card__footer">${i}</div>
      </div>
    </article>
  `}function j(){return`<div class="book-grid">${P().map(F).join("")}</div>`}function x(){const e=$(8);if(e.length===0)return"";const t=e.map((o,a)=>`
    <div class="phone-carousel__slide${a===0?" is-active":""}" data-slide="${a}">
      <img src="${o.icon}" alt="${o.name}" class="phone-mockup__icon" width="96" height="96">
      <p class="phone-mockup__label">${o.name}</p>
      <p class="phone-mockup__tagline">${o.tagline}</p>
    </div>
  `).join(""),i=e.map((o,a)=>`
    <button type="button" class="phone-carousel__dot${a===0?" is-active":""}"
      data-carousel-dot="${a}"
      aria-label="Show ${o.name}"
      aria-selected="${a===0?"true":"false"}"></button>
  `).join("");return`
    <div class="hero__visual">
      <div class="phone-mockup" aria-label="Featured apps preview">
        <div class="phone-mockup__screen">
          <div class="phone-carousel" data-phone-carousel>
            ${t}
          </div>
          <div class="phone-carousel__dots" role="tablist" aria-label="App carousel">${i}</div>
        </div>
      </div>
      <blockquote class="hero__quote">“${r.hero.quote}” ♡ ${r.hero.quoteAuthor}</blockquote>
    </div>
  `}function O({limit:e=6}={}){return`
    <section class="featured-apps section-tight" aria-labelledby="featured-apps-heading">
      <div class="container">
        <div class="section-head section-head--left">
          <p class="eyebrow">The Studio</p>
          <h2 id="featured-apps-heading" class="section-head__title">Featured <em>Apps</em> ✨</h2>
          <p class="section-head__lead">Real apps from The Gifted Girl Kim — built with heart, privacy, and purpose.</p>
        </div>
        ${C({featuredOnly:!0,limit:e,extraClass:"app-grid--home app-grid--featured"})}
        <div class="center-actions">
          <a href="/apps.html" class="btn btn-secondary">View All Apps →</a>
        </div>
      </div>
    </section>
  `}function R({compact:e=!1}={}){const t=r.etsyShop;return e?`
      <section class="shop-promo shop-promo--compact" aria-label="Etsy shop">
        <div class="container shop-promo__inner">
          <div class="shop-promo__copy">
            <p class="eyebrow">Handmade & Heartfelt</p>
            <h2 class="shop-promo__title">Visit My <em>Etsy Shop</em> ♡</h2>
            <p class="shop-promo__lead">Faith-inspired gifts, creative finds, and special pieces from ${r.brandShort} — shipped with care from our Etsy studio.</p>
          </div>
          <div class="shop-promo__actions">
            <a href="${t.url}" class="btn btn-primary" target="_blank" rel="noopener noreferrer">Shop on Etsy →</a>
            <a href="/shop.html" class="btn btn-secondary">Learn More</a>
          </div>
        </div>
      </section>
    `:`
    <section class="shop-promo" aria-label="Etsy shop">
      <div class="container shop-promo__card">
        <div class="shop-promo__badge" aria-hidden="true">🛍️</div>
        <div class="shop-promo__copy">
          <p class="eyebrow">Etsy • ${t.handle}</p>
          <h2 class="shop-promo__title">${t.label}</h2>
          <p class="shop-promo__lead">Discover handmade and heart-led creations from The Gifted Girl Kim — perfect for gifting, encouraging, and adding a little sparkle to everyday life.</p>
          <ul class="shop-promo__list">
            <li>Faith-inspired & feminine designs</li>
            <li>Thoughtful gifts with personal meaning</li>
            <li>Secure checkout through Etsy</li>
          </ul>
          <div class="shop-promo__actions">
            <a href="${t.url}" class="btn btn-primary" target="_blank" rel="noopener noreferrer">Visit Etsy Shop →</a>
          </div>
          <p class="shop-promo__note">You’ll be taken to <strong>etsy.com/shop/${t.handle}</strong> to browse and purchase.</p>
        </div>
      </div>
    </section>
  `}export{j as a,x as b,O as c,N as d,R as e,G as f,D as g,H as m,C as r,r as s};
