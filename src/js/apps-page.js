import { mountShell, renderAppGrid } from './layout.js';

mountShell();

const mount = document.querySelector('[data-apps-grid]');
if (mount) {
  mount.innerHTML = renderAppGrid({ extraClass: 'app-grid--full' });
}
