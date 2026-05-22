# COM<tech> Website - Project Context

This project is a static website for **COM<tech>**, a software architecture and IT consultancy firm. It is built using the **Hugo** static site generator and the **PaperMod** theme.

## Project Overview

- **Framework:** [Hugo](https://gohugo.io/) (Extended version required for processing SCSS/resources).
- **Theme:** [PaperMod](https://github.com/adityatelange/hugo-PaperMod).
- **Purpose:** Professional portfolio and services description for COM<tech> (Anders Hybertz).
- **Deployment:** [GitHub Pages](https://pages.github.com/) via GitHub Actions.

## Building and Running

### Prerequisites
- Hugo Extended version installed locally.

### Local Development
```bash
# Start the Hugo development server with drafts and future posts enabled
hugo server -D -F
```

### Production Build
```bash
# Generate the static site in the /public directory
hugo --minify
```

## Architecture & Structure

- `config.toml`: Central configuration for site parameters, menus, and theme settings.
- `content/`: Contains the site's pages in Markdown format.
    - `_index.md`: Homepage content.
    - `services.md`, `about.md`, `contact.md`, `testimonials.md`: Main site sections.
- `layouts/`: Hugo layout overrides.
    - `partials/extend_head.html`: Custom head elements (e.g., fonts, meta tags).
    - `partials/footer.html`: Custom footer implementation.
- `assets/css/extended/custom.css`: Project-specific CSS overrides. Focuses on:
    - Consistent background and "entry" styling across all pages.
    - Enhanced mobile responsiveness and touch target optimization.
    - Page transition effects.
- `static/`: Static assets like images (`comtech.jpg`), service icons (`services/*.svg`), and the `CNAME` file for the custom domain.
- `themes/PaperMod/`: The base theme (managed as a submodule or local directory).

## Development Conventions

- **Styling:** Use `assets/css/extended/custom.css` for all style modifications. Avoid editing the theme files directly to maintain upgradeability.
- **Content:** All pages should follow the "entry" styling pattern defined in `custom.css` for visual consistency.
- **Images:** Service-specific icons are stored in `static/services/` as SVG files.
- **Deployment:** Pushing to the `main` branch automatically triggers the `Deploy Hugo site to Pages` GitHub Action.

## Key Technologies
- Hugo (Static Site Generator)
- PaperMod (Theme)
- CSS (Custom styling with mobile-first focus)
- GitHub Actions (CI/CD)
- GitHub Pages (Hosting)
