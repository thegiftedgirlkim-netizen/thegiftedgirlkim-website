import { resolve } from 'node:path';
import { defineConfig } from 'vite';

const pages = [
  'index',
  'apps',
  'books',
  'shop',
  'about',
  'support',
  'privacy',
  'contact'
];

export default defineConfig({
  root: '.',
  publicDir: 'public',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: Object.fromEntries(
        pages.map(name => [name, resolve(__dirname, `${name}.html`)])
      )
    }
  }
});
