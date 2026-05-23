# comtech-site

Static marketing site for [COM\<tech\>](https://comtechconsulting.dk) — a software architecture and technical leadership consultancy based in Copenhagen.

Built with [Astro](https://astro.build), deployed to GitHub Pages via GitHub Actions on every push to `main`.

## Commands

```bash
npm install        # install dependencies
npm run dev        # start local dev server with live reload
npm run build      # build to ./dist
npm run preview    # preview the production build locally
npm run review     # build, preview, and capture screenshots with Playwright
```

## Stack

- Astro (static output)
- Plain CSS with design tokens (no framework)
- GitHub Actions — build and deploy on push to `main`
- GitHub Pages — live at comtechconsulting.dk

## Structure

```
src/
  layouts/Layout.astro   — shared shell, nav, footer, head
  pages/*.astro          — route-based pages
  styles/global.css      — design tokens, layout, typography, shared components
public/
  favicon.svg            — site favicon
  og-default.png         — default Open Graph image
  CNAME                  — custom domain for GitHub Pages
  robots.txt             — search engine directives
.github/workflows/
  deploy.yaml            — CI build and GitHub Pages deployment
```

## Deployment

GitHub Actions installs Node 20, runs `npm ci`, builds with `npm run build`, and deploys `./dist` to GitHub Pages. The `CNAME` file in `public/` maps the deployment to `comtechconsulting.dk`.
