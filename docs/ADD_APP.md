# How to Add a New App

The app catalog lives in **`src/data/apps.json`**. The website reads this file at build time — you do not need to edit HTML.

## Steps

### 1. Add the official app icon

Copy the real app icon into:

```
public/assets/apps/your-app-slug.png
```

Recommended: **512×512** or **1024×1024** PNG. Use the icon from the app's iOS `AppIcon.appiconset` or Google Play store kit — not a screenshot or placeholder.

See [UPDATE_LOGOS.md](UPDATE_LOGOS.md) for source paths on KimT9Drive.

### 2. Add an entry to `apps.json`

Open `src/data/apps.json` and add an object to the `"apps"` array:

```json
{
  "id": "your-app-slug",
  "name": "Your App Name",
  "tagline": "Short one-line tagline.",
  "description": "Two sentences about what the app does and who it's for.",
  "icon": "/assets/apps/your-app-slug.png",
  "iconSource": "Kimberly_App_Studio/Apps/Your App/.../app-icon.png",
  "category": "Utilities",
  "status": "In Development",
  "featured": true,
  "order": 12,
  "links": {
    "ios": "",
    "android": "",
    "support": "/support.html#your-app-slug"
  }
}
```

| Field | Notes |
|-------|-------|
| `id` | Lowercase slug — used for HTML anchors and filenames |
| `featured` | `true` = shows on Home page (max 6 shown) |
| `order` | Sort order on Apps page (lower = first) |
| `icon` | Set to `null` if no official icon exists yet |
| `links.ios` / `links.android` | App Store / Play Store URLs when live |

### 3. Add a Support FAQ entry (optional but recommended)

In **`support.html`**, add a `<details>` block inside `.faq-list`:

```html
<details class="faq-item" id="your-app-slug">
  <summary>Your App Name</summary>
  <p>Short support blurb for this app.</p>
</details>
```

The `id` must match the app slug so `links.support` anchors work.

### 4. Preview and build

```bash
npm run dev      # check Home + Apps pages
npm run build    # production build
```

## Tips

- Keep descriptions warm and clear — match the tone of existing apps.
- Use real store links as soon as the app is live.
- Run `npm run sync-assets` if the icon source lives on KimT9Drive and you added it to `scripts/sync-assets.mjs`.
