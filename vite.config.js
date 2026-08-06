import { resolve, join } from 'node:path';
import { readdirSync, existsSync } from 'node:fs';
import { defineConfig } from 'vite';

const rootPages = [
  'index',
  'apps',
  'books',
  'shop',
  'about',
  'support',
  'privacy',
  'terms',
  'contact',
  '404'
];

function collectGeneratedPages(dir, prefix) {
  const fullDir = join(__dirname, dir);
  if (!existsSync(fullDir)) return [];
  return readdirSync(fullDir)
    .filter(name => name.endsWith('.html') && !name.startsWith('._'))
    .map(name => {
      const slug = name.replace('.html', '');
      return [`${prefix}-${slug}`, resolve(fullDir, name)];
    });
}

const pages = [
  ...rootPages.map(name => [name, resolve(__dirname, `${name}.html`)]),
  ...collectGeneratedPages('support', 'support'),
  ...collectGeneratedPages('privacy', 'privacy'),
  ...collectGeneratedPages('marketing', 'marketing'),
  ...collectGeneratedPages('community', 'community')
];

export default defineConfig({
  root: '.',
  publicDir: 'public',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: Object.fromEntries(pages)
    }
  }
});
