# How to Update App & Brand Logos

All website images live in **`public/assets/`**. The site never generates or invents icons — only official files from your project folders.

## Folder Layout

```
public/assets/
├── brand/
│   └── company-logo.jpeg      # Header/footer logo
├── apps/
│   ├── screenshot-goblin.png
│   ├── digital-chapel.png
│   └── ...
└── books/
    ├── through-my-eyes.jpg
    └── ...
```

## Option A — Automatic sync (recommended)

The script copies known official assets from KimT9Drive:

```bash
npm run sync-assets
```

Source paths are defined in **`scripts/sync-assets.mjs`**. Edit that file when an app's icon location changes on the drive.

### Current KimT9Drive sources

| Website file | Source on KimT9Drive |
|--------------|----------------------|
| `brand/company-logo.jpeg` | `Graphics/Images/logo resized.jpeg` |
| `apps/screenshot-goblin.png` | `Apps/Screenshot Goblin/public/assets/mascot/app-icon-1024.png` |
| `apps/digital-chapel.png` | `Apps/Digital Chapel/CURRENT BUILD.../AppIcon-512@2x.png` |
| `apps/afterlife-network.png` | `Apps/Afterlife Network/.../mipmap-xxxhdpi/ic_launcher.png` |
| `apps/mappy-navigation.png` | `Archives/.../brand-universe/mappy.png` |
| `apps/meditation-journey-444.png` | `Archives/.../brand-universe/meditation-journey.png` |
| `apps/memory-friend.png` | `Archives/.../brand-universe/memory-friend.png` |
| `apps/socialnature.png` | `Releases/SocialNature/.../SocialNature_App_Icon_512.png` |
| `apps/mobile-eyes.png` | `Archives/.../brand-universe/mobile-eyes.png` |
| `apps/dream-board.png` | Extracted from `Dream_Board_FULL_ARCHIVE...zip` |
| `apps/snow-patrol.png` | `~/Desktop/Snow Patrol/2f4a936e-....png` |

## Option B — Manual copy

1. Find the official icon in the app's iOS or Android project (or Play Store kit).
2. Copy it to `public/assets/apps/{slug}.png`.
3. Ensure `src/data/apps.json` has `"icon": "/assets/apps/{slug}.png"`.

## Company logo

Replace `public/assets/brand/company-logo.jpeg` with your latest official logo. The header and About page use this file.

Official sources on KimT9Drive:
- `Graphics/Images/logo resized.jpeg` (1024×1024)
- `Graphics/Images/THEGIFTEDGIRLLOGO.JPg`

## Book covers

Copy cover JPG/PNG files to `public/assets/books/` and update paths in **`src/data/books.json`**.

## After updating

```bash
npm run build
```

Hard-refresh the browser (or clear CDN cache after deploy) to see new images.

## Gem & Me — icon still needed

No official PNG exists on KimT9Drive yet. When you create one:

1. Save as `public/assets/apps/gem-and-me.png`
2. In `apps.json`, set `"icon": "/assets/apps/gem-and-me.png"`
