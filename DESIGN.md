---
name: COM<tech>
description: A drafting-table calm — paper surfaces, hairline rules, and one indigo hand.
colors:
  indigo: "#5352cc"
  indigo-hover: "#4340b0"
  indigo-text: "#7c7bef"
  indigo-light: "#818cf8"
  indigo-dim: "rgba(83, 82, 204, 0.08)"
  indigo-border: "rgba(83, 82, 204, 0.2)"
  aurora-1: "#5352cc"
  aurora-2: "#7c3aed"
  aurora-3: "#1d4ed8"
  paper: "#f9f9f8"
  surface: "#ffffff"
  surface-sunk: "#f4f4f5"
  hairline: "#e4e4e7"
  hairline-faint: "#f0f0ef"
  hairline-strong: "#a1a1aa"
  hairline-hover: "#d4d4d8"
  featured-wash-from: "#fafaff"
  featured-wash-to: "#f0f0ff"
  ink: "#111112"
  ink-2: "#52525b"
  ink-3: "#6b6b75"
  night: "#0d0d10"
  night-surface: "#17171c"
  night-hairline: "#2a2a35"
  night-ink: "#f4f4f5"
  night-ink-2: "#a1a1aa"
  night-ink-3: "#7c7c7c"
typography:
  display:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "clamp(2.75rem, 5vw + 0.5rem, 4.75rem)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.025em"
  display-base:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "clamp(2.5rem, 5vw + 0.25rem, 4.5rem)"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "clamp(1.875rem, 3.5vw, 2.75rem)"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.03em"
  headline-2:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "clamp(1.5rem, 2.5vw, 2.125rem)"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.025em"
  title-lg:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "1.25rem"
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: "-0.02em"
  title-md:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "1.125rem"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "-0.015em"
  body-lg:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: "normal"
  body:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.75
    letterSpacing: "normal"
  body-sm:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: "normal"
  body-xs:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "0.875rem"
    fontWeight: 500
    lineHeight: 1.65
    letterSpacing: "normal"
  caption:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  micro:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "0.75rem"
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: "normal"
  label:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "0.6875rem"
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: "0.1em"
  mono:
    fontFamily: "'JetBrains Mono', 'Courier New', monospace"
    fontSize: "1.625rem"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "-0.03em"
rounded:
  xs: "2px"
  md: "8px"
  lg: "12px"
  pill: "999px"
spacing:
  xs: "0.375rem"
  sm: "0.75rem"
  md: "1.25rem"
  lg: "2rem"
  xl: "3.5rem"
  section: "5rem"
components:
  button-primary:
    backgroundColor: "{colors.indigo}"
    textColor: "#ffffff"
    typography: "{typography.label}"
    rounded: "{rounded.md}"
    padding: "0.625rem 1.25rem"
  button-primary-hover:
    backgroundColor: "{colors.indigo-hover}"
    textColor: "#ffffff"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink-2}"
    rounded: "{rounded.md}"
    padding: "0.625rem 1.25rem"
  button-ghost-hover:
    backgroundColor: "{colors.surface-sunk}"
    textColor: "{colors.ink}"
  button-ghost-dark:
    backgroundColor: "transparent"
    textColor: "{colors.night-ink-2}"
    rounded: "{rounded.md}"
    padding: "0.625rem 1.25rem"
  button-ghost-dark-hover:
    textColor: "{colors.night-ink}"
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink-2}"
    rounded: "{rounded.lg}"
    padding: "2rem"
  card-featured:
    backgroundColor: "{colors.indigo-dim}"
    textColor: "{colors.ink-2}"
    rounded: "{rounded.lg}"
    padding: "2rem"
  tag:
    backgroundColor: "{colors.surface-sunk}"
    textColor: "{colors.ink-3}"
    rounded: "{rounded.pill}"
    padding: "0.25rem 0.625rem"
  tag-accent:
    backgroundColor: "{colors.indigo-dim}"
    textColor: "{colors.indigo}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0.2rem 0.6rem"
  nav-link:
    backgroundColor: "transparent"
    textColor: "{colors.ink-2}"
    rounded: "{rounded.md}"
    padding: "0.4rem 0.875rem"
  nav-link-active:
    backgroundColor: "{colors.indigo-dim}"
    textColor: "{colors.indigo}"
---

# Design System: COM<tech>

## Overview

**Creative North Star: "The Architect's Drawing Room"**

This is a drafting table, not a storefront. The page is paper (#f9f9f8) — very slightly warm, never
pure white — and everything placed on it is drawn rather than decorated. Structure is carried by
hairline rules (1px, #e4e4e7) at the strength of a pencil line on vellum. Cards are drawings pinned
flat to the board: white sheets, thin borders, a shadow soft enough that you read the lift before
you notice the shadow. Type is one family, Inter, doing all the work through weight and scale;
JetBrains Mono appears exactly once, in the `<tech>` of the wordmark, as the mark of a technical
hand signing the sheet.

The system has a deliberate day/night structure. The hero and footer are night (#0d0d10) with three
slow, heavily blurred indigo aurora blobs and a 5.5% grain overlay — the only atmosphere in the
entire system, and it is confined to those bookends. Between them, the working middle is bright,
dense with information, and completely unatmospheric. That contrast is the composition: the drawing
room is lit; the drawings themselves are read in daylight.

Indigo (#5352cc) is the single hue in an otherwise fully neutral system, and it is allowed to work
broadly — as fill, as 8%-tint background, as 20%-alpha border, as the 3px left rule on a quote, as
the gradient wash on a featured card. What it may not do is multiply into a second accent. One hue,
many jobs.

**Key Characteristics:**
- Warm paper ground (#f9f9f8), never pure white as a page background
- Hairline borders as the primary structural device
- Softly lifted cards — resting shadow is present but almost subliminal, deepening on hover
- A single indigo hue carrying every accent job across the site
- Night bookends (hero, footer) with aurora + grain; bright, flat middle
- One typeface (Inter) plus one mono glyph-set used as a signature, not a system
- 1100px maximum measure; nothing ever runs full-bleed except the night sections

## Colors

A fully neutral zinc-family greyscale with one indigo running through it, doubled into a light
daylight set and a dark night set.

### Primary
- **Signal Indigo** (`--accent`): The system's only hue. Carries primary buttons, the `<tech>`
  wordmark, section labels, the current nav item, award years, bento links, and the 3px left rule
  on light-ground quotes. Its tinted forms — an 8% dim and a 20% border alpha — provide accent
  backgrounds and borders without introducing a second color.
- **Deep Indigo** (`--accent-hover`): Primary button hover only. Reads as pressure, not as a
  separate color.
- **Lifted Indigo** (`--accent-light`): The indigo that survives on night ground. Section labels
  inside dark sections, the hero quote's left rule, and hero award years. Never used on paper.
- **Reading Indigo** (`--accent-text`): Reserved for indigo body-scale text on dark ground where
  Signal Indigo would fall below contrast.

### Neutral — Daylight
- **Drafting Paper** (`--bg`): The page ground. Slightly warm off-white; the whole system is
  calibrated against it.
- **Sheet White** (`--surface`): Card and alt-section fills. Pure white exists only as a surface
  sitting *on* paper, never as the paper itself.
- **Sunk Grey** (`--surface-2`): Recessed fills — tags, nav hover, mini-quote grounds.
- **Hairline** (`--border`) and **Faint Hairline** (`--border-subtle`): Every structural edge in
  the system. Card borders, section rules, nav underline.
- **Strong Hairline** (`--border-strong`): Borders only, never text. Ghost-button hover edges.
- **Graphite** (`--text`) / **Pencil** (`--text-2`) / **Silverpoint** (`--text-3`): The three-step
  text ramp — headings and strong text, body prose, and metadata/attribution respectively.
  Silverpoint is calibrated to clear 4.5:1 on every ground it appears on, including the featured
  card's gradient wash (4.67:1), which is the tightest case in the system.

### Neutral — Night
- **Night** (`--dark-bg`): Hero and footer ground.
- **Night Surface** (`--dark-surface`): Panels on night ground — hero quote, award rows.
- **Night Hairline** (`--dark-border`): Structural edges on night ground.
- **Night Ink** (`--dark-text`) / **Night Pencil** (`--dark-text-2`) / **Night Silverpoint**
  (`--dark-text-3`): The night text ramp, mirroring the daylight one.

### Named Rules

**The One Hue Rule.** Indigo is the only chromatic color in the system, and it may work freely —
fill, tint, border, rule, gradient. But a second accent hue is never introduced. If something needs
to be distinguished, it is distinguished by weight, ground, or a hairline, not by a new color.

The single licensed exception is the **aurora set** (`--aurora-1/2/3`): indigo, violet, and blue at
12–20% opacity behind a 90px blur. The hue spread is deliberate — three tints of one hue band into
a flat wash, while three neighbouring hues resolve into a single indigo glow with depth in it. This
exception is confined to the hero atmosphere and never surfaces as a foreground color.

**The Contrast Floor Rule.** Every text token clears 4.5:1 against every ground it is used on. When
a neutral needs to be lighter than that, it becomes a border token, not a text token.

**The No Pure White Page Rule.** `#ffffff` is a surface, never a background. Any full-page or
section ground is Drafting Paper or Night.

**The Night Bookends Rule.** Dark ground belongs to the hero and the footer. A dark band in the
middle of a page breaks the day/night structure the whole system is built on.

## Typography

**Display / Body Font:** Inter (with `-apple-system`, `BlinkMacSystemFont`, `Segoe UI`, sans-serif)
**Signature Font:** JetBrains Mono 600 (with `Courier New`, monospace)

**Character:** One neutral, engineered grotesque doing everything through weight (400–800) and
negative tracking. The pairing has no contrast in the traditional sense — the mono is not a second
voice, it is a mark. Headings tighten as they grow (-0.015em at title scale down to -0.035em at the
wordmark), which is what keeps large type from reading as loud.

### Hierarchy
- **Display** (700, `clamp(2.75rem, 5vw + 0.5rem, 4.75rem)`, 1.05): Hero headline only. One per
  site. **Display Base** is the bare `h1` fallback (`clamp(2.5rem, 5vw + 0.25rem, 4.5rem)`).
- **Headline** (700, `clamp(1.875rem, 3.5vw, 2.75rem)`, 1.15): Page titles.
- **Headline 2** (700, `clamp(1.5rem, 2.5vw, 2.125rem)`, 1.15): Section openers.
- **Title LG / MD / base** (700/600, 1.25 / 1.125 / 1.0625rem): Featured card headings, bento and
  service card headings, and standard card headings respectively. Deliberately close to body size —
  hierarchy comes from weight and color, not scale.
- **Body LG** (400, 1.0625rem, 1.7): Page leads and the hero sub, capped at 68ch and 46ch.
- **Body** (400, 1rem, 1.75): All prose, in Pencil. The generous 1.75 leading is load-bearing.
- **Body SM** (400, 0.9375rem, 1.7): Card and quote prose — the site's most common text size.
- **Body XS** (500, 0.875rem, 1.65): Nav links, buttons, bento links, strength-item prose.
- **Caption** (400, 0.8125rem, 1.6): Attributions, award detail, hero award rows, footer email.
- **Micro** (500, 0.75rem, 1.5): Tags and bento attributions.
- **Label** (700, 0.6875rem, +0.1em, uppercase): Section labels, eyebrows, tag text, award years.
  The only uppercase in the system.
- **Signature** (JetBrains Mono 600, -0.03em): Exclusively the `<tech>` fragment of the wordmark.

The ramp below 1rem is fine-grained on purpose — five steps between 0.6875 and 0.9375rem. That
density is what lets dense information sections stay legible without any of them shouting.

### Named Rules

**The One Mono Rule.** JetBrains Mono appears in the `<tech>` of the wordmark and nowhere else. Not
in code samples, not in labels, not in metadata. Its scarcity is the entire point of loading it.

**The Measure Rule.** Prose never exceeds ~68ch; short-form leads sit at 46ch. Line length is
enforced with `max-width` in `ch`, not with column widths.

**The Weight-Not-Size Rule.** Card headings are barely larger than body text. When something needs
to stand out at small scale, raise weight to 600 and shift color to Graphite; do not raise size.

## Layout

A single centered 1100px measure (`--max-w`) with 2rem gutters, dropping to 1.25rem below 768px.
Nothing is full-bleed except the night sections and the alt-background bands, and even those hold
their inner content to the same measure.

Vertical rhythm is section-driven: 5rem top and bottom per section, compressing to 3.5rem below
768px. Sections alternate ground — paper, then Sheet White with hairlines top and bottom
(`.section-alt`) — instead of using dividers.

The fixed 64px navigation bar is translucent paper at 88% with a 16px backdrop blur; `main` carries
matching top padding so content never sits under it.

Grid behavior:
- **Card grid:** 3 columns, 1.25rem gap, collapsing to 1 column at 780px.
- **Bento grid:** 3 columns with one featured cell spanning 2; collapses to a single column at
  780px and the featured cell releases its span.
- **Strengths grid:** 3 → 2 (860px) → 1 (560px).
- **Awards:** `auto-fit, minmax(240px, 1fr)`, with the featured award spanning the full row.
- **Hero:** 1.15fr / 0.85fr two-column with a 5rem gap, stacking at 860px.

Breakpoints in use, largest to smallest: 860px (hero and strengths), 780px (card and bento grids),
768px (global density), 680px (nav collapses to a toggle), 560px, 480px (hero actions go
full-width and stack).

## Elevation & Depth

Softly lifted. Cards read as sheets resting a millimetre above the board: a hairline border defines
the edge, and a near-subliminal resting shadow (`0 1px 2px rgba(0,0,0,0.05)`) does the actual
separating. On hover the shadow deepens to a two-layer ambient cast and the border darkens to
#d4d4d8 — the sheet lifts slightly under the hand. Nothing translates, scales, or rotates on hover;
the lift is purely optical.

The night sections invert the logic: shadows are invisible on #0d0d10, so depth there comes from
tonal layering (Night Surface panels on Night ground) plus hairline borders.

### Shadow Vocabulary
- **Resting** (`box-shadow: 0 1px 2px rgba(0,0,0,0.05)`): Every card, blockquote, and list item at
  rest.
- **Lifted** (`box-shadow: 0 1px 3px rgba(0,0,0,0.08), 0 4px 12px rgba(0,0,0,0.04)`): Card and
  bento hover.
- **Overlay** (`box-shadow: 0 4px 6px rgba(0,0,0,0.06), 0 12px 24px rgba(0,0,0,0.06)`): Reserved
  for genuinely floating layers.
- **Menu** (`box-shadow: 0 8px 24px rgba(0,0,0,0.08)`): The mobile nav panel dropping over content.

### Named Rules

**The Optical Lift Rule.** Hover changes shadow and border color only. No `translateY`, no
`scale`, no rotation on cards. The sheet stays pinned to the board.

**The Shadowless Night Rule.** On night ground, depth is tonal and hairline-defined. Do not attempt
shadow-based elevation against #0d0d10.

## Shapes

One radius scale, applied lightly. The base is 8px (`--radius`) for buttons, nav items, panels, and
the skip link; cards use `calc(var(--radius) * 1.5)` = 12px; tags and pills use 999px; the focus
ring rounds at 2px.

Corners are the only softening in the system — there are no diagonals, no clip-paths, no
decorative shapes. The recurring form is the **3px left rule**: a thick indigo bar on the leading
edge of a quote (Signal Indigo on paper, Lifted Indigo on night), with the quote's own corners
squared on that edge (`border-radius: 0 8px 8px 0`) so the rule reads as an attached margin mark
rather than a border.

The one non-rectilinear element in the system is the hero aurora: three circles (560/420/320px) at
90px blur and 12–20% opacity, drifting on 11–18s ease-in-out loops, disabled entirely under
`prefers-reduced-motion`.

## Components

### Buttons
- **Shape:** Gently rounded (8px), 0.625rem × 1.25rem padding, 0.875rem/500 label, 1.0 line-height,
  `inline-flex` with a 0.375rem gap for optional icons.
- **Primary:** Signal Indigo fill, white text. Hover deepens to Deep Indigo. No border, no shadow.
- **Ghost (paper):** Transparent with a hairline border and Pencil text; hover fills Sunk Grey,
  darkens text to Graphite, and lifts the border to Silverpoint.
- **Ghost (night):** Transparent with a Night Hairline border and Night Pencil text; hover brightens
  text to Night Ink and the border to Night Silverpoint.
- **Transitions:** `all 0.15s ease`. In the hero, buttons take a 9rem min-width and center their
  label; below 480px they stretch full-width and stack.

### Cards / Containers
- **Corner Style:** 12px.
- **Background:** Sheet White. The featured bento cell instead takes a 135° wash from #fafaff to
  #f0f0ff with an indigo-alpha border.
- **Shadow Strategy:** Resting at rest, Lifted on hover (see Elevation).
- **Border:** 1px Hairline, darkening to #d4d4d8 on hover.
- **Internal Padding:** 2rem for cards and bento cells; 1.5rem for the denser strength and award
  items.

### Chips / Tags
- **Style:** Pill (999px), Sunk Grey fill, hairline border, Silverpoint text at 0.75rem/500. A
  `.tag-md` variant scales up to 0.8125rem with 0.375rem × 0.875rem padding.
- **Accent variant:** The bento tag inverts to Signal Indigo text on an indigo 8% dim, at label
  typography (0.6875rem, 700, +0.08em, uppercase).

### Navigation
- **Style:** Fixed 64px bar, paper at 88% opacity with a 16px backdrop blur and a hairline bottom
  border.
- **Links:** 0.875rem/500 Pencil, 8px radius. Hover shifts to Graphite on Sunk Grey. The current
  page takes Signal Indigo text on an indigo dim ground via `aria-current="page"`.
- **Mobile (≤680px):** A three-bar toggle whose bars rotate into an X via `aria-expanded`; links
  drop into a full-width Sheet White panel with a Menu shadow, links at 1rem with 0.875rem
  vertical padding.
- **Wordmark:** 1.625rem/800 at -0.035em, with the `<tech>` fragment in JetBrains Mono 600 Signal
  Indigo. Inverts to Night Ink on dark ground.

### Quotes
- **Style:** Sheet White ground, 3px Signal Indigo left rule, squared on that edge and 8px on the
  other three, 1.5rem × 1.75rem padding, 0.9375rem/1.75 Pencil text, Resting shadow.
- **Attribution:** 0.8125rem Silverpoint, upright (never italic), with the name in 600 Pencil.
- **Night variant:** Night Surface ground, Night Hairline border, Lifted Indigo left rule, and the
  attribution ramp shifts to the night text ramp.

### Motion
- **State transitions:** 0.15s ease on color, background, and border; 0.2s ease on shadow.
- **Page transitions:** Astro view transitions cross-fade at 150ms out / 200ms in.
- **Scroll reveal:** `.fade-up` elements fade in over 420ms on `cubic-bezier(0.22, 1, 0.36, 1)` —
  opacity only, no translation, and only when JS is present (`.js` gate) so no-JS content is never
  hidden.
- **Aurora:** 11–18s ease-in-out drift loops, translation and scale only.
- All of the above are disabled under `prefers-reduced-motion: reduce`.

## Do's and Don'ts

### Do:
- **Do** use Drafting Paper (#f9f9f8) for page grounds and Sheet White (#ffffff) only for surfaces
  sitting on it.
- **Do** define structure with 1px hairlines before reaching for a shadow.
- **Do** keep dark ground to the hero and footer bookends.
- **Do** raise weight to 600 and color to Graphite when small text needs emphasis, rather than
  raising its size.
- **Do** cap prose at ~68ch (46ch for hero-scale leads).
- **Do** put every new motion behind `prefers-reduced-motion: reduce`.
- **Do** reach for the existing indigo tints (`--accent-dim`, `--accent-border`) when an accent
  ground or edge is needed.
- **Do** keep the aurora and grain confined to the hero — they are the system's only atmosphere.

### Don't:
- **Don't** introduce a second accent hue. Indigo works alone.
- **Don't** use JetBrains Mono anywhere except the `<tech>` of the wordmark.
- **Don't** use pure white as a page or section background.
- **Don't** move cards on hover — no translate, no scale. Shadow and border color only.
- **Don't** use Signal Indigo (#5352cc) on night ground; use Lifted Indigo (#818cf8) there.
- **Don't** italicize quotes or attributions; the system is upright throughout.
- **Don't** add a radius outside the 2 / 8 / 12 / 999px scale.
- **Don't** attempt shadow-based elevation on #0d0d10.
