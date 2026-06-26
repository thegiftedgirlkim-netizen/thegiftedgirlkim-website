# The Gifted Girl Kim LLC — Official Website

Dreamy pink, polished app-studio website for **The Gifted Girl Kim LLC** — apps, books, and digital media by Kimberly Haggy.

## Quick Start

```bash
cd "/Volumes/KimT9Drive/Kimberly_App_Studio/Websites/thegiftedgirlkim-website"
npm install
npm run sync-assets   # copy official logos from KimT9Drive
npm run dev           # preview at http://localhost:5173
npm run build         # output to dist/
```

## Project Structure

```
thegiftedgirlkim-website/
├── index.html              # Home
├── apps.html               # All apps
├── books.html              # Books
├── shop.html               # Etsy shop landing page
├── about.html              # About Kimberly
├── support.html            # Support / FAQs
├── privacy.html            # Privacy policy
├── contact.html            # Contact form
├── public/assets/          # Brand, app icons, book covers (synced)
├── src/
│   ├── data/
│   │   ├── apps.json       # App catalog (edit to add/update apps)
│   │   ├── books.json      # Book catalog
│   │   └── site.json       # Company info, hero, values
│   ├── css/                # Design system
│   └── js/                 # Shared layout + page scripts
├── scripts/sync-assets.mjs # Copy icons from KimT9Drive
└── docs/                   # Maintainer guides
```

## Maintainer Guides

| Guide | Purpose |
|-------|---------|
| [docs/ADD_APP.md](docs/ADD_APP.md) | Add a new app to the site |
| [docs/UPDATE_LOGOS.md](docs/UPDATE_LOGOS.md) | Refresh app/brand icons |
| [docs/DEPLOY.md](docs/DEPLOY.md) | Build and publish the site |
| [docs/UPDATE_BOOKS.md](docs/UPDATE_BOOKS.md) | Add Amazon links for books |

## Design Notes

- **Fonts:** Playfair Display (headlines) + DM Sans (UI)
- **Colors:** Pink crystal palette — see `src/css/tokens.css`
- **Icons:** Official assets only — never placeholder mascots
- **Data-driven:** Edit JSON files, not HTML, when adding apps/books

## Etsy Shop

The Etsy store URL lives in **`src/data/site.json`** under `etsyShop.url`:

```
https://www.etsy.com/shop/THEGIFTEDGIRLKIMSHOP
```

To change the shop link, update `site.json` only — the nav, footer, home promo, and Shop page update automatically.

## Missing Asset

**Gem & Me** has no official PNG icon on KimT9Drive yet. The site shows a typographic fallback until you add `public/assets/apps/gem-and-me.png` and set `"icon"` in `apps.json`.
