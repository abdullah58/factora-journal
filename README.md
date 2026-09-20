# factora Journal

A static evidence journal about **how we know what we know**. The site publishes ten individual investigations, an Articles index, About Us, legal pages, and Contact information.

## Preview locally

```bash
python3 -m http.server 8080
# open http://localhost:8080
```

## Site routes

- `/index.html` — homepage
- `/posts/index.html` — Articles index
- `/posts/*.html` — ten individual investigations
- `/about.html` — About Us and Emilio Lopez’s biography
- `/privacy-policy.html` — Privacy Policy
- `/terms.html` — Terms and Conditions
- `/cookie-policy.html` — Cookie Policy
- `/editorial-policy.html` — Editorial Policy
- `/contact.html` — Contact, corrections, and story tips

## Deploy to Vercel

The repository is linked to Vercel and deploys from the `main` branch. For a new Vercel project, import this GitHub repository, use the **Other** framework preset, and leave the build command empty. `index.html` is served automatically.

## Content

The source Word documents are retained in `content/`. Each article page includes its evidence note and dedicated source citations. External FactsLedger links have been removed from the published site.

The legal pages are editorial templates supplied for the site. They contain placeholders such as `[CONTACT EMAIL]`, `[NEWSLETTER PROVIDER]`, and `[JURISDICTION]`; replace those values and obtain qualified legal review before treating them as final legal notices.

## Before launch

- Wire the newsletter form to a real provider.
- Replace all bracketed legal placeholders.
- Have the legal pages reviewed by a qualified attorney in the applicable jurisdiction.
- Update canonical and Open Graph URLs when the production domain is finalized.
