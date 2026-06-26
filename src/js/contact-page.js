import { mountShell, getSite } from './layout.js';

mountShell();

const site = getSite();
const form = document.querySelector('[data-contact-form]');
form?.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const name = data.get('name');
  const email = data.get('email');
  const topic = data.get('topic');
  const message = data.get('message');
  const subject = encodeURIComponent(`Website Contact: ${topic}`);
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nTopic: ${topic}\n\n${message}`);
  window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
});
