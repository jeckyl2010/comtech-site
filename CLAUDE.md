# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
hugo server          # local dev server with live reload
hugo                 # build site to ./public
hugo --minify        # production build (matches CI)
```

The PaperMod theme is a git submodule — after cloning, run `git submodule update --init --recursive`.

## Architecture

This is a Hugo static site for COM\<tech\> consulting, deployed to GitHub Pages via GitHub Actions on every push to `main`.

**Theme**: PaperMod (`themes/PaperMod/`), loaded as a git submodule. Never edit files inside `themes/` — override via the mechanisms below instead.

**Customisation layers** (Hugo precedence: project files win over theme files):
- `assets/css/extended/custom.css` — extends the theme's CSS; PaperMod automatically merges any file in this directory
- `layouts/partials/footer.html` — overrides the theme footer; includes page-transition JS and mobile touch optimisations
- `layouts/partials/extend_head.html` — injected into `<head>`; sets mobile viewport meta tags and iOS-specific CSS

**Content** (`content/*.md`): Each file becomes a page. Front matter uses `title` and `description`. Raw HTML is allowed in Markdown because `markup.goldmark.renderer.unsafe = true` is set in `config.toml`. The services page uses custom HTML (`<div class="service-heading">`) for icon+heading pairs.

**Static assets** (`static/`): Copied verbatim to the build output. Images for each page live in a subdirectory matching the page name (e.g. `static/services/`).

**Deployment**: `.github/workflows/deploy.yaml` — builds with `hugo --minify` on `ubuntu-latest` using `peaceiris/actions-hugo@v2 (extended: true)`, then deploys `./public` to GitHub Pages. The live site is at `https://comtechconsulting.dk/`.
