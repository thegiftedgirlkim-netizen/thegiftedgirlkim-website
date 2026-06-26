import { mountShell, renderShopPromo } from './layout.js';

mountShell();

const mount = document.querySelector('[data-shop-full]');
if (mount) {
  mount.innerHTML = renderShopPromo();
}
