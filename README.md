# factoJournal

A one-page landing page for **factoJournal** — an independent journal of remarkable facts.
Static HTML + CSS + a tiny JS enhancement. Links out to [factsledger.com](https://factsledger.com).

## Preview locally

```bash
cd factojournal
python3 -m http.server 8080
# open http://localhost:8080
```

## Deploy to GitHub

```bash
cd factojournal
git init
git add .
git commit -m "factoJournal landing page"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/factojournal.git
git push -u origin main
```

Or create the repo on github.com first, then push.

## Deploy to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub.
2. Click **Add New → Project**, select the `factojournal` repository.
3. Framework preset: **Other**. No build command, no output directory changes needed.
4. Click **Deploy**.

Vercel will serve `index.html` automatically. Your site will be live at
`https://factojournal.vercel.app` (or your custom domain).

## Files

| File | Purpose |
|---|---|
| `index.html` | The landing page (semantic, SEO meta + OG tags included) |
| `styles.css` | All styling, responsive down to mobile |
| `script.js` | Newsletter form validation + footer year |
| `vercel.json` | Static hosting config + security headers |

## Before launch checklist

- [ ] Wire the newsletter form to a real provider (e.g. Buttondown, ConvertKit, Mailchimp)
- [ ] Update the `canonical` / `og:url` in `index.html` if you use a custom domain
- [ ] Replace demo stats (120+ facts etc.) with real numbers
