#!/usr/bin/env node
/**
 * Generate per-app support and privacy HTML pages for Vite multi-page build.
 */
import { mkdir, writeFile, rm } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { readFileSync } from 'node:fs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const site = JSON.parse(readFileSync(join(root, 'src/data/site.json'), 'utf8'));
const apps = JSON.parse(readFileSync(join(root, 'src/data/apps.json'), 'utf8')).apps;
const siteUrl = site.website.replace(/\/$/, '');

const HEAD = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="icon" href="/assets/brand/company-logo.jpeg" type="image/jpeg">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,600;0,9..40,700;0,9..40,800&family=Playfair+Display:ital,wght@0,600;0,700;1,600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="/src/css/base.css">
  <link rel="stylesheet" href="/src/css/components.css">
</head>`;

const TAIL = (script) => `
  <div data-site-footer></div>
  <script type="module" src="${script}"></script>
</body>
</html>`;

function ogBlock({ title, description, url, image = `${siteUrl}/assets/brand/company-logo.jpeg` }) {
  return `
  <title>${title}</title>
  <meta name="description" content="${description}">
  <link rel="canonical" href="${url}">
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="${site.company}">
  <meta property="og:title" content="${title}">
  <meta property="og:description" content="${description}">
  <meta property="og:url" content="${url}">
  <meta property="og:image" content="${image}">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${title}">
  <meta name="twitter:description" content="${description}">
  <meta name="twitter:image" content="${image}">`;
}

async function main() {
  const supportDir = join(root, 'support');
  const privacyDir = join(root, 'privacy');
  const marketingDir = join(root, 'marketing');

  await rm(supportDir, { recursive: true, force: true });
  await rm(privacyDir, { recursive: true, force: true });
  await rm(marketingDir, { recursive: true, force: true });
  await mkdir(supportDir, { recursive: true });
  await mkdir(privacyDir, { recursive: true });
  await mkdir(marketingDir, { recursive: true });

  for (const app of apps) {
    const supportUrl = `${siteUrl}/support/${app.id}.html`;
    const privacyUrl = `${siteUrl}/privacy/${app.id}.html`;
    const marketingUrl = `${siteUrl}/marketing/${app.id}.html`;
    const ogImage = app.icon ? `${siteUrl}${app.icon}` : `${siteUrl}/assets/brand/company-logo.jpeg`;

    const supportHtml = `${HEAD.replace('</head>', `${ogBlock({
      title: `${app.name} Support — ${site.company}`,
      description: `Get help with ${app.name} — support, FAQs, bug reports, and privacy for ${site.company}.`,
      url: supportUrl,
      image: ogImage
    })}
</head>`)}
<body class="page-shell" data-app-id="${app.id}">
  <a class="skip-link" href="#main">Skip to content</a>
  <div data-site-header></div>
  <main id="main" class="page-main" data-app-support></main>
${TAIL('/src/js/app-support-page.js')}`;

    const privacyHtml = `${HEAD.replace('</head>', `${ogBlock({
      title: `${app.name} Privacy Policy — ${site.company}`,
      description: `Privacy policy for ${app.name} by ${site.company} — what data is collected, on-device processing, and contact information.`,
      url: privacyUrl,
      image: ogImage
    })}
</head>`)}
<body class="page-shell" data-app-id="${app.id}">
  <a class="skip-link" href="#main">Skip to content</a>
  <div data-site-header></div>
  <main id="main" class="page-main" data-app-privacy></main>
${TAIL('/src/js/app-privacy-page.js')}`;

    await writeFile(join(supportDir, `${app.id}.html`), supportHtml);
    await writeFile(join(privacyDir, `${app.id}.html`), privacyHtml);

    const marketingHtml = `${HEAD.replace('</head>', `${ogBlock({
      title: `${app.name} — ${site.company}`,
      description: `${app.tagline} Learn about ${app.name}, features, pricing, and support from ${site.company}.`,
      url: marketingUrl,
      image: ogImage
    })}
</head>`)}
<body class="page-shell" data-app-id="${app.id}">
  <a class="skip-link" href="#main">Skip to content</a>
  <div data-site-header></div>
  <main id="main" class="page-main" data-app-marketing></main>
${TAIL('/src/js/app-marketing-page.js')}`;

    await writeFile(join(marketingDir, `${app.id}.html`), marketingHtml);
    console.log('OK', `support/${app.id}.html`, `privacy/${app.id}.html`, `marketing/${app.id}.html`);
  }

  console.log(`Generated ${apps.length} app support pages, ${apps.length} privacy pages, and ${apps.length} marketing pages.`);

  const staticPages = [
    ['/', 'weekly', '1.0'],
    ['/apps.html', 'weekly', '0.9'],
    ['/books.html', 'monthly', '0.8'],
    ['/shop.html', 'monthly', '0.7'],
    ['/about.html', 'monthly', '0.8'],
    ['/support.html', 'weekly', '0.9'],
    ['/privacy.html', 'weekly', '0.9'],
    ['/terms.html', 'yearly', '0.5'],
    ['/contact.html', 'yearly', '0.6']
  ];

  const appPages = apps.flatMap(app => [
    [`/support/${app.id}.html`, 'monthly', '0.7'],
    [`/privacy/${app.id}.html`, 'monthly', '0.7'],
    [`/marketing/${app.id}.html`, 'monthly', '0.7']
  ]);

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${[...staticPages, ...appPages].map(([loc, freq, priority]) => `  <url>
    <loc>${siteUrl}${loc === '/' ? '/' : loc}</loc>
    <changefreq>${freq}</changefreq>
    <priority>${priority}</priority>
  </url>`).join('\n')}
</urlset>
`;

  await writeFile(join(root, 'public/sitemap.xml'), sitemap);
  console.log('OK public/sitemap.xml');
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
