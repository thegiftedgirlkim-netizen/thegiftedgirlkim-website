#!/usr/bin/env node
/**
 * Copy official brand, app, and book assets from KimT9Drive into public/assets/.
 * Run after updating source icons on the drive: npm run sync-assets
 */
import { mkdir, copyFile, access, writeFile } from 'node:fs/promises';
import { constants } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execSync } from 'node:child_process';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const studio = '/Volumes/KimT9Drive/Kimberly_App_Studio';

/** App icons from the live App Store listing (when app is published). */
const appStoreIcons = [
  {
    out: 'public/assets/apps/afterlife-network.png',
    appId: '6781073734'
  },
  {
    out: 'public/assets/apps/meditation-journey-444.png',
    appId: '6780117824'
  },
  {
    out: 'public/assets/apps/socialnature.png',
    appId: '6782241664'
  },
  {
    out: 'public/assets/apps/mappy-navigation.png',
    appId: '6780708874'
  }
];
/** Book covers sourced from Amazon when no local file exists on KimT9Drive. */
const amazonCovers = [
  {
    out: 'public/assets/books/attraverso-i-miei-occhi.jpg',
    url: 'https://m.media-amazon.com/images/I/814Dz7YoRpL.jpg'
  }
];

const copies = [
  ['Graphics/Images/logo resized.jpeg', 'public/assets/brand/company-logo.jpeg'],
  ['Apps/Screenshot Goblin/public/assets/mascot/app-icon-1024.png', 'public/assets/apps/screenshot-goblin.png'],
  ['Apps/Digital Chapel/CURRENT BUILD - Apple iPad Fix 2026-06-25/ios/App/App/Assets.xcassets/AppIcon.appiconset/AppIcon-512@2x.png', 'public/assets/apps/digital-chapel.png'],
  ['Apps/Widget Guru Studio/assets/brand-universe/widget-guru.png', 'public/assets/apps/widget-guru-studio.png'],
  ['Apps/Memories411/assets/brand/mr-polaroid-hero.png', 'public/assets/apps/memories411.png'],
  ['Apps/Language Engine/STORE_ASSETS/icon/app_icon_1024.png', 'public/assets/apps/language-engine-411.png'],
  ['Apps/Horoscopes 411/public/assets/logo-luna-nova.png', 'public/assets/apps/horoscope-411.png'],
  ['Archives/Interrupted Partial Copies/WidgetMe_partial_20260624_201612/assets/brand-universe/memory-friend.png', 'public/assets/apps/memory-friend.png'],
  ['Archives/Interrupted Partial Copies/WidgetMe_partial_20260624_201612/assets/brand-universe/mobile-eyes.png', 'public/assets/apps/mobile-eyes.png'],
  ['Graphics/Images/Through my eyes book cover.jpg', 'public/assets/books/through-my-eyes.jpg'],
  ['Graphics/Images/Elvis Presley Then and Now Cover.jpeg', 'public/assets/books/ep-then-and-now-en.jpg'],
  ['Graphics/Images/THE UNEXPECTED SOULMATE COVER .JPG', 'public/assets/books/the-unexpected-soulmate.jpg'],
  ['Graphics/Images/EP THEN AND NOW COVER JAP.jpeg', 'public/assets/books/gifted-girl-kim-japanese.jpg'],
  ['Graphics/Images/EP THEN AND NOW IT COVER.JPG', 'public/assets/books/ep-then-and-now-it.jpg'],
  ['Graphics/Images/EP SPAN BOOK COVER.JPG', 'public/assets/books/ep-span-book.jpg']
];

async function exists(path) {
  try {
    await access(path, constants.F_OK);
    return true;
  } catch {
    return false;
  }
}

async function main() {
  for (const dir of ['public/assets/brand', 'public/assets/apps', 'public/assets/books']) {
    await mkdir(join(root, dir), { recursive: true });
  }

  for (const [fromRel, toRel] of copies) {
    const from = join(studio, fromRel);
    const to = join(root, toRel);
    if (!(await exists(from))) {
      console.warn('SKIP (missing):', from);
      continue;
    }
    await copyFile(from, to);
    console.log('OK', toRel);
  }

  for (const { out, appId } of appStoreIcons) {
    try {
      const lookup = await fetch(`https://itunes.apple.com/lookup?id=${appId}`);
      const data = await lookup.json();
      const url = data?.results?.[0]?.artworkUrl512;
      if (!url) {
        console.warn('SKIP App Store icon lookup:', appId);
        continue;
      }
      const img = await fetch(url);
      if (!img.ok) continue;
      await writeFile(join(root, out), Buffer.from(await img.arrayBuffer()));
      console.log('OK', out, `(App Store ${appId})`);
    } catch (err) {
      console.warn('SKIP App Store icon:', appId, err.message);
    }
  }

  for (const { out, url } of amazonCovers) {
    const dest = join(root, out);
    const res = await fetch(url);
    if (!res.ok) {
      console.warn('SKIP Amazon cover:', url, res.status);
      continue;
    }
    await writeFile(dest, Buffer.from(await res.arrayBuffer()));
    console.log('OK', out, '(Amazon)');
  }

  const snowSrc = '/Users/kimberlyhaggy/Desktop/Snow Patrol/2f4a936e-f963-407c-ac52-7f1e7eb9e94e.png';
  if (await exists(snowSrc)) {
    await copyFile(snowSrc, join(root, 'public/assets/apps/snow-patrol.png'));
    console.log('OK public/assets/apps/snow-patrol.png');
  } else {
    console.warn('SKIP Snow Patrol icon — copy manually to public/assets/apps/snow-patrol.png');
  }

  const dreamZip = join(studio, 'Archives/Moved Folder Archives/Dream_Board_FULL_ARCHIVE_20260624_201612.zip');
  if (await exists(dreamZip)) {
    const out = join(root, 'public/assets/apps/dream-board.png');
    execSync(`unzip -p "${dreamZip}" "Dream Board/App Icon.png" > "${out}"`);
    console.log('OK public/assets/apps/dream-board.png (from zip)');
  }

  const gemSrc = join(root, 'public/assets/apps/gem-and-me.png');
  if (!(await exists(gemSrc))) {
    console.warn('NOTE: Gem & Me icon not found — add public/assets/apps/gem-and-me.png when available');
  }
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
