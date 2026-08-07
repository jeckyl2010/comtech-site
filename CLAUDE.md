# CLAUDE.md

This file provides guidance for working in this repository.

## Commands

```bash
npm install        # install dependencies
npm run dev        # start local Astro dev server with live reload
npm run build      # build site to ./dist
npm run preview    # preview the production build locally
npm run review     # build, preview, and capture screenshots with Playwright
```

## Architecture

This is an Astro static site for COM<tech> consulting, deployed to GitHub Pages via GitHub Actions on every push to `main`.

Key structure:
- `src/layouts/Layout.astro` — shared page shell, navigation, footer, and document head
- `src/pages/*.astro` — route-based pages for the marketing site
- `src/styles/global.css` — global design tokens, layout, typography, and shared components
- `public/` — static assets copied verbatim to the build output; currently used for `CNAME`
- `.github/workflows/deploy.yaml` — CI build and GitHub Pages deployment for the Astro site

## Conventions

- Prefer updating shared styles in `src/styles/global.css` before adding page-local styling.
- Keep page copy and layout decisions aligned with the current premium, calm, high-trust brand direction.
- Use Astro pages and layouts rather than reintroducing framework-specific legacy structure.
- Build output belongs in `dist/`; do not commit generated files unless explicitly requested.

## Deployment

GitHub Actions installs Node 26, runs `npm ci`, builds with `npm run build`, and deploys `./dist` to GitHub Pages.
Linting is not part of CI — run `npm run lint` locally.
The live site is at `https://comtechconsulting.dk/`.
