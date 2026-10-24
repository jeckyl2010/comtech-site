# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary visitors are people evaluating whether Anders Hybertz is the right senior technical
consultant for a specific situation:

- **Warm referrals and LinkedIn traffic** — someone already mentioned Anders, or they clicked
  through from his profile. They arrive with intent and need confirmation, not persuasion.
- **Client-side decision makers searching** — CTOs, engineering managers, and programme leads
  looking for an independent architect or an outside perspective on a technical decision.
- **Consultancy brokers and procurement** — 7N-style partners and procurement functions doing
  due diligence on behalf of an end client.
- **Legal and audit contexts** — parties looking specifically for an independent software expert
  or third-party auditor.

The site also serves two non-marketing roles that are load-bearing:

- A company page Anders links to in ordinary correspondence with clients and customers.
- Evidence to Danish authorities (SKAT) that COM<tech> operates as a company, not that Anders is
  a disguised employee.

## Product Purpose

COM<tech> is a one-person consultancy by design: clients work directly with Anders from the first
conversation through the whole engagement. The site's job is to make that credible and verifiable.

Success is both credibility and enquiry, weighted to credibility. Most visitors are already
somewhere in a process; the site's first duty is to remove doubt when someone checks. A qualified
direct email enquiry is the welcome secondary outcome. There is no funnel, no intake step, no
account manager.

## Positioning

Three decades of software architecture, technical leadership, and complex delivery in regulated and
demanding environments — carried by one person, not a team behind a brand. What sets the work apart
is the combination: AI taken into highly regulated production (GxP, GDPR, and the EU AI Act),
software architecture for the factory floor, and architecture and delivery led by the same person.

The voice matches the work: calm, direct, no performance. "Less, but better."

## Operating Context

Engagements start by email or LinkedIn and follow a stated three-step shape: the client writes with
whatever context they have, the problem is talked through to test fit, then both sides decide
whether to proceed. Based in Copenhagen, working across Denmark and internationally.

Service areas: software architecture & design; cloud and AI solutions; technical leadership and
mentoring; strategic IT advisory; independent software auditing and expert assessment.

Industries served: the list in `src/data/about.json` is canonical (pharmaceutical manufacturing,
financial services and insurance, manufacturing and industrial, energy and utilities, public sector,
telecom and mobile, healthcare and life sciences, banking).

## Capabilities and Constraints

- Static Astro site, plain CSS with design tokens, no UI framework. Built and deployed to GitHub
  Pages by GitHub Actions on every push to `main`. Live at `https://comtechconsulting.dk/`.
- **No backend and no forms.** Contact is `mailto:` and LinkedIn only. No contact form, no
  analytics backend.
- **English only.** No Danish version, despite the Copenhagen base.
- **No availability, rates, or pricing** anywhere on the site — no capacity status, no day rates,
  no packaged offerings.
- Routes: `/`, `/services/` (titled "How I work"), `/about/`, `/testimonials/` (titled
  "Recommendations"), `/contact/`, plus a branded `404.html`.
- Structured content lives in `src/data/*.json` (services, ways, strengths, awards, clients,
  testimonials, about). `/llms.txt` is generated from it at build time (`src/pages/llms.txt.ts`),
  and the pages read quotes, the three ways to work together, and the work history from it, so facts
  are stated once.
- The registered name is "COM-tech v/Anders Hybertz" (the CVR register does not accept `<` `>`); it
  appears only in structured data. The footer links the CVR number to its register entry. The
  registered address is private and never appears on the site.

## Brand Commitments

- Name is **COM\<tech\>**, written with the angle brackets around `tech`.
- Legal identity: CVR 25567471. Contact `anders@comtechconsulting.dk`.
- Typeface committed and self-hosted: Familjen Grotesk (400–700), in `public/fonts/`.
- The mark: two brackets holding one square (`src/components/Mark.astro`, `public/favicon.svg`).
- Voice is calm, plain, and unsold — it states what is true and stops. No hype, no urgency, no
  sales language. The site speaks in the first person ("I"), as a one-person company.
- Language is professional and specific to software and architecture. Headlines state facts about
  the work, never slogans.
- The 2022 court appointment was a one-off: never present it as a standing title or a headline
  credential. The patent is mentioned only in the work history.
  Recognition (`src/data/awards.json`) holds awards and nominations only, never roles.

## Evidence on Hand

Real, verifiable, and the only proof the site may use:

- Court appointment, Danmarks Domstole · Sø- og Handelsretten (2022): a one-off role, recorded in the
  work history (`src/data/clients.json`), not under recognition.
- PSQIT Innovation Prize, Novo Nordisk (for 2020, presented 2021); Best Individual Performance of the Year, 7N (2020,
  2016); Best Team nominee, 7N (2016) — same file.
- Named client testimonials with real people and affiliations —
  `src/data/testimonials*.json`.
- Technology and domain lists — `src/data/about.json`.
- Organisations worked with, with period and a one-line description of the work, taken from
  Anders' LinkedIn profile — `src/data/clients.json`. Brokers (7N, ProjectBinder) are channels, not
  clients, and are not listed. Names only: no client logos.

**Nothing may be fabricated.** No invented client logos, no made-up metrics or case studies, no
unattributed quotes, no synthetic company photography presented as real. Absences that future work
must not paper over: there are no published case studies, no project write-ups beyond those one-line descriptions, no
headcount, no revenue or delivery statistics.

## Product Principles

1. **Credibility before conversion.** Every element must survive someone checking whether it is
   true. When in doubt, say less.
2. **One person, directly.** The site never implies a team, an agency, or a process layer that does
   not exist.
3. **Only real proof.** Recognition, quotes, and claims trace to a source in `src/data/` or they do
   not appear.
4. **Less, but better.** Complexity is expensive to carry — in architecture and on this site.
5. **Serve the quiet jobs too.** It must work as a link in an email and as evidence of a real
   company, not only as a marketing page.
