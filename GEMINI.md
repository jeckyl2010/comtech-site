# COM<tech> Website - Project Context

This project is a static website for COM<tech>, a software architecture and IT consultancy firm. It is built with Astro and deployed to GitHub Pages.

## Project Overview

- Framework: Astro
- Purpose: Professional portfolio and services site for COM<tech> (Anders Hybertz)
- Deployment: GitHub Pages via GitHub Actions

## Building and Running

### Prerequisites
- Node.js 20+
- npm

### Local Development
```bash
npm install
npm run dev
```

### Production Build
```bash
npm run build
npm run preview
```

## Architecture & Structure

- `astro.config.mjs`: Astro configuration
- `src/layouts/Layout.astro`: Shared document shell and site navigation
- `src/pages/`: Route-based pages for the site
- `src/styles/global.css`: Shared design system and global styling
- `public/`: Static assets copied directly into the final build
- `scripts/review.js`: Visual review workflow using Playwright screenshots
- `.github/workflows/deploy.yaml`: CI/CD pipeline for GitHub Pages

## Development Conventions

- Favor shared styling in `src/styles/global.css` over duplicated page-local CSS.
- Keep the visual language calm, premium, and credible.
- Optimize for mobile readability, clear hierarchy, and strong contact intent.
- Treat `dist/` as generated output.

## Key Technologies
- Astro
- CSS
- Playwright
- GitHub Actions
- GitHub Pages
