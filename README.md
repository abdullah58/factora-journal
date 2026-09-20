# factora Journal

One-page landing page for **factora Journal** — "How we know what we know."
Static HTML + CSS + tiny JS. Links out to [factsledger.com](https://factsledger.com)
as a sister publication.

## Preview locally

```bash
cd factora-journal
python3 -m http.server 8080
# open http://localhost:8080
```

## Push to GitHub

```bash
cd factora-journal
git init
git add .
git commit -m "factora Journal landing page"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/factora-journal.git
git push -u origin main
```

## Deploy to Vercel

1. Sign in at [vercel.com](https://vercel.com) with GitHub.
2. **Add New → Project** → select the `factora-journal` repository.
3. Framework preset: **Other**. No build command needed.
4. **Deploy** — `index.html` is served automatically.

## Files

| File | Purpose |
|---|---|
| `index.html` | The landing page (semantic HTML, SEO + OG meta included) |
| `styles.css` | All styling, responsive down to mobile |
| `script.js` | Newsletter form validation + footer year |
| `vercel.json` | Static hosting config + security headers |

## Before launch checklist

- [ ] Wire the newsletter form to a real provider (Buttondown, ConvertKit, …)
- [ ] If you use a custom domain, update `canonical` / `og:url` in `index.html`
- [ ] Decide the canonical domain vs. factsledger.com (see duplicate-content notes):
  add a `canonical` tag or `noindex` while the deployment is staging
