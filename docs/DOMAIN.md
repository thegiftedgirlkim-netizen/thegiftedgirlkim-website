# How to Point Your Domain to the Website

This guide covers pointing a custom domain (e.g. `thegiftedgirlkim.com`) to your deployed static site.

## Overview

1. Deploy the site to a host (Cloudflare Pages, Netlify, etc.)
2. Add your domain in the host's dashboard
3. Update DNS at your domain registrar
4. Wait for SSL certificate (usually automatic, 5–30 minutes)

---

## Option 1 — Cloudflare Pages (recommended)

Cloudflare gives you free SSL, fast CDN, and easy DNS if your domain is already on Cloudflare.

### If your domain uses Cloudflare DNS

1. Deploy the site to Cloudflare Pages (see [DEPLOY.md](DEPLOY.md)).
2. In your Pages project → **Custom domains** → **Set up a custom domain**.
3. Enter `thegiftedgirlkim.com` and `www.thegiftedgirlkim.com`.
4. Cloudflare adds DNS records automatically. Done.

### If your domain is elsewhere (GoDaddy, Namecheap, etc.)

**A) Move DNS to Cloudflare (best long-term)**

1. Create a free Cloudflare account.
2. Add your domain — Cloudflare scans existing DNS records.
3. At your registrar, change nameservers to the two Cloudflare nameservers shown.
4. Deploy to Cloudflare Pages and add custom domain as above.

**B) Keep registrar DNS**

After adding the domain in Cloudflare Pages, it will show required DNS records. At your registrar, add:

| Type | Name | Value |
|------|------|-------|
| CNAME | `www` | `your-project.pages.dev` |
| A or CNAME | `@` | Follow Cloudflare's apex instructions |

---

## Option 2 — Netlify

1. Deploy site to Netlify.
2. **Domain settings** → **Add custom domain** → enter your domain.
3. Netlify shows DNS records. At your registrar:

| Type | Name | Value |
|------|------|-------|
| CNAME | `www` | `your-site.netlify.app` |
| A | `@` | Netlify load balancer IP (shown in dashboard) |

4. Enable **HTTPS** — Netlify provisions Let's Encrypt automatically.

---

## Option 3 — GitHub Pages + custom domain

1. Deploy `dist/` contents to `gh-pages` branch or GitHub Actions.
2. Repo **Settings → Pages → Custom domain** → enter domain.
3. At registrar, add:

| Type | Name | Value |
|------|------|-------|
| CNAME | `www` | `yourusername.github.io` |
| A | `@` | GitHub Pages IPs (see GitHub docs) |

4. Add a `CNAME` file in your publish root if using user/org pages.

---

## www vs apex (root domain)

Visitors should reach the same site from both:

- `thegiftedgirlkim.com` (apex)
- `www.thegiftedgirlkim.com`

**Recommendation:** Pick one as primary and redirect the other. Cloudflare Pages and Netlify both offer one-click redirect (e.g. apex → www or www → apex).

---

## Email (optional)

Website hosting does **not** include email. Keep email DNS separate:

- If using Google Workspace / Microsoft 365, keep their MX records.
- Adding A/CNAME records for the website does not break email unless you remove MX records.

Support email `support@kimberlyhaggy.com` can stay on its current provider — no change needed for the website.

---

## Verify it's working

```bash
# Check DNS propagation
dig thegiftedgirlkim.com
dig www.thegiftedgirlkim.com

# Check HTTPS
curl -I https://thegiftedgirlkim.com
```

Or use [https://dnschecker.org](https://dnschecker.org) to see global DNS propagation.

---

## Quick reference

| Step | Action |
|------|--------|
| 1 | `npm run build` |
| 2 | Deploy `dist/` to host |
| 3 | Add custom domain in host dashboard |
| 4 | Update DNS at registrar |
| 5 | Wait for SSL (green padlock) |
| 6 | Test all pages on mobile + desktop |

Need help choosing a registrar or Cloudflare setup? Email flows through the Contact page once the site is live.
