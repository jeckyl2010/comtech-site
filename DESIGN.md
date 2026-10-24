---
name: COM<tech>
description: Night bookends, a ruled daylight middle, and one square of signal held between two brackets.
colors:
  night: "#0d0e14"
  night-2: "#161823"
  night-line: "#272a38"
  night-text: "#eef0f4"
  night-text-2: "#a9aebd"
  glow: "#8b89ff"
  paper: "#f3f5f7"
  surface: "#ffffff"
  ink: "#0e0f12"
  ink-2: "#454b55"
  ink-3: "#646b78"
  rule: "#d5dae0"
  signal: "#3d3ad8"
  signal-deep: "#2b28a8"
  signal-bright: "#4f4cf0"
  signal-tint: "rgba(61, 58, 216, 0.16)"
typography:
  display:
    fontFamily: "'Familjen Grotesk', system-ui, sans-serif"
    fontSize: "clamp(40px, 4.6vw, 70px)"
    fontWeight: 600
    lineHeight: 1.04
    letterSpacing: "-0.032em"
  page-title:
    fontFamily: "'Familjen Grotesk', system-ui, sans-serif"
    fontSize: "clamp(36px, 4vw, 60px)"
    fontWeight: 600
    lineHeight: 1.04
    letterSpacing: "-0.03em"
  h2:
    fontFamily: "'Familjen Grotesk', system-ui, sans-serif"
    fontSize: "clamp(28px, 3vw, 44px)"
    fontWeight: 600
    lineHeight: 1.08
    letterSpacing: "-0.026em"
  h2-sm:
    fontFamily: "'Familjen Grotesk', system-ui, sans-serif"
    fontSize: "clamp(22px, 2vw, 28px)"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.018em"
  lead:
    fontFamily: "'Familjen Grotesk', system-ui, sans-serif"
    fontSize: "19px"
    fontWeight: 400
    lineHeight: 1.6
  body:
    fontFamily: "'Familjen Grotesk', system-ui, sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.7
  small:
    fontFamily: "'Familjen Grotesk', system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.55
rounded:
  sm: "8px"
  md: "10px"
  lg: "14px"
spacing:
  gutter: "clamp(16px, 4.5vw, 64px)"
  section: "96px"
  section-mobile: "64px"
  max-width: "1320px"
components:
  button-primary:
    backgroundColor: "{colors.signal}"
    textColor: "#ffffff"
    rounded: "{rounded.md}"
    padding: "0 24px"
    height: "52px"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    border: "1.5px solid {colors.rule}"
  ladder-card:
    backgroundColor: "{colors.paper}"
    rounded: "{rounded.lg}"
    border: "1px solid {colors.rule}"
    padding: "28px"
---

# Design System: COM<tech>

## Overview

**North star: one clear signal held between two lines.** The mark is two brackets holding a single square. Everything in the system follows from it: the brackets are the structure (night bands, ruled lines, plain grotesk type), and the square is the one signal (indigo, used for actions, markers, and the thing that matters on each page).

Every page has the same three movements. It opens in **night** (#0d0e14) with one soft indigo light, the header, and the page's opening. The **day** middle is paper (#f3f5f7) and white bands separated by hairline rules, where the content is read. It closes in **night** again with a conversational call and the legal line. The middle never has atmosphere; the bookends never hold dense content.

The design's voice matches the copy: senior, technical, calm. No slogans set large, no decorative effects, one authored animation.

## Colours

- **Signal** (`--signal`, #3d3ad8): the only hue. Primary buttons, links, depth squares, list markers, highlighted quotes (`--signal-tint`). Hover states use `--signal-deep` on day ground and `--signal-bright` on night.
- **Glow** (`--glow`, #8b89ff): the signal as it appears on night ground. The mark's square, the current-page marker, evidence lines, the closing email underline.
- **Night** (`--night`, `--night-2`, `--night-line`, `--night-text`, `--night-text-2`): the bookends.
- **Day** (`--paper`, `--surface`, `--ink`, `--ink-2`, `--ink-3`, `--rule`): the middle. Ink-3 is the quietest text colour and clears 4.5:1 on both paper (4.9:1) and white (5.4:1).

**One signal rule.** No second accent. If something needs to stand out, it gets weight, a rule, or the signal colour, never a new hue.

## Typography

One family, **Familjen Grotesk** (400–700), self-hosted in `public/fonts/`. Hierarchy comes from size and weight, with tight negative tracking on large sizes. Numerals are tabular.

- **Display**: the home headline only.
- **Page title**: the night intro of every other page.
- **h2 / h2-sm**: section titles. `h2-sm` carries the small signal square before it.
- **Lead / body**: 19px and 18px. Body is held to `--measure` (58ch); lead to 50ch (46ch in page intros).

**No kicker rule.** Nothing small and uppercase sits above a heading.

## Layout

A centred container (`--max-w` 1320px) with a fluid `--gutter`. Day sections are 96px top and bottom (64px on phones), separated by a 1px rule, alternating paper and white. Recurring patterns:

- **Split**: heading left, body right.
- **Ruled columns**: three columns, each topped by a 2px ink rule.
- **Ladder**: the three ways to work together, as cards with one to three filled depth squares.
- **Voice**: one large quote with its attribution beside it.
- **Steps**: numbered in a small outlined signal square.
- **Timeline** (`src/components/Timeline.astro`): the work history drawn to scale from `src/data/clients.json`, one hairline track per organisation with a solid ink-3 bar for its period. The ongoing engagement is the only bar in the signal colour, fading out at its open end. It is a chart of real data, never decoration.
- **Ledger lists**: earlier work and recognition on About, as year + text rows divided by hairlines.

## The mark and motion

The mark (`src/components/Mark.astro`) is SVG: two bracket paths in `currentColor` and a square in `--glow`. It appears static in the header and as the favicon. On the home page it plays its one animation: the brackets slide in from each side, the square settles between them, and a single halo expands from it once.

Other motion: the night light breathes slowly, sections fade in on scroll (opacity only), and page transitions cross-fade. All of it is off under `prefers-reduced-motion`.

## Do and don't

- **Do** open and close every page in night, and keep content in the day middle.
- **Do** give the signal colour one job per element: action, marker, or highlight.
- **Do** give every link and button a 44px target.
- **Don't** add a second accent colour, gradients on content, or coloured side borders.
- **Don't** set slogans large. Headlines state facts about the work.
- **Don't** add effects that are not the mark's own motion.
