# How to Deploy the Website

The site is a **static Vite build** — no server-side code. Deploy the `dist/` folder to any static host.

## Build

```bash
cd "/Volumes/KimT9Drive/Kimberly_App_Studio/Websites/thegiftedgirlkim-website"
npm run sync-assets   # optional — refresh icons first
npm run build
```

Output: **`dist/`** — upload this entire folder.

## Recommended hosts

| Host | Best for | Notes |
|------|----------|-------|
| **Cloudflare Pages** | Custom domain, free SSL | Connect git repo or drag-drop `dist/` |
| **Netlify** | Easy deploys | Drag `dist/` to Netlify Drop |
| **GitHub Pages** | Free hosting | Set `base: '/'` in vite.config (already default) |
| **Vercel** | Fast global CDN | Import repo, build command `npm run build`, output `dist` |

## Cloudflare Pages (example)

1. Push this folder to a GitHub repository.
2. In Cloudflare Dashboard → **Pages** → Create project → Connect Git.
3. Build settings:
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Node version:** 20+
4. Deploy. Cloudflare gives you a `*.pages.dev` URL immediately.
5. Add your custom domain under **Custom domains** (see [DOMAIN.md](DOMAIN.md)).

## Netlify Drop (quickest test)

1. Run `npm run build` locally.
2. Go to [https://app.netlify.com/drop](https://app.netlify.com/drop)
3. Drag the `dist/` folder onto the page.
4. You get a live URL in seconds.

## Pre-deploy checklist

- [ ] `npm run sync-assets` — icons current
- [ ] Store links filled in `apps.json` where apps are live
- [ ] Amazon links filled in `books.json`
- [ ] Privacy policy date accurate in `privacy.html`
- [ ] `site.json` email and social links correct
- [ ] Test all 7 pages locally with `npm run preview`

## Local preview of production build

```bash
npm run build
npm run preview
```

Opens at `http://localhost:4173` — this matches what visitors will see.
