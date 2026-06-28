import site from '../data/site.json';
import appsData from '../data/apps.json';
import hubData from '../data/support-hub.json';

const SITE_URL = site.website.replace(/\/$/, '');

export function getSupportHub() {
  return hubData;
}

export function getSupportApps() {
  return [...appsData.apps].sort((a, b) => a.order - b.order);
}

export function getSupportApp(id) {
  const app = appsData.apps.find(entry => entry.id === id);
  if (!app) return null;
  const meta = hubData.apps[id] || {};
  return {
    ...app,
    ...meta,
    supportUrl: `/support/${id}.html`,
    privacyUrl: `/privacy/${id}.html`,
    marketingUrl: `/marketing/${id}.html`
  };
}

export function supportEmail() {
  return site.email;
}

export function mailtoSupport({ appName, subject, body = '' }) {
  const params = new URLSearchParams();
  const fullSubject = appName ? `[${appName}] ${subject}` : subject;
  params.set('subject', fullSubject);
  if (body) params.set('body', body);
  return `mailto:${site.email}?${params.toString()}`;
}

export function mailtoBugReport(app) {
  return mailtoSupport({
    appName: app.name,
    subject: 'Bug Report',
    body: `App: ${app.name}\nVersion: ${app.version || 'Unknown'}\nDevice:\nOS Version:\n\nWhat happened:\n\nSteps to reproduce:\n`
  });
}

export function mailtoFeatureRequest(app) {
  return mailtoSupport({
    appName: app.name,
    subject: 'Feature Request',
    body: `App: ${app.name}\nVersion: ${app.version || 'Unknown'}\n\nFeature I'd love to see:\n\nWhy it would help:\n`
  });
}

export function canonicalUrl(path) {
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
}

export function renderSupportAppIcon(app) {
  if (app.icon) {
    return `<img src="${app.icon}" alt="" class="support-app-card__icon" width="56" height="56" loading="lazy">`;
  }
  return `<div class="support-app-card__icon-fallback" aria-hidden="true">${app.name.charAt(0)}</div>`;
}
