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
demanding environments — carried by one person, not a team behind a brand. The claim a neighbouring
consultancy cannot truthfully copy: appointed by Danmarks Domstole (Sø- og Handelsretten) in 2022 to
a five-member expert panel as an independent software expert in a commercial software dispute.

The voice matches the work: calm, direct, no performance. "Less, but better."

## Operating Context

Engagements start by email or LinkedIn and follow a stated three-step shape: the client writes with
whatever context they have, the problem is talked through to test fit, then both sides decide
whether to proceed. Based in Copenhagen, working across Denmark and internationally.

Service areas: software architecture & design; cloud and AI solutions; technical leadership and
mentoring; strategic IT advisory; independent software auditing and expert assessment.

Industries served: pharmaceutical manufacturing, financial services, insurance, banking, energy and
utilities, manufacturing and industrial, telecom and mobile, healthcare and life sciences, public
sector.

## Capabilities and Constraints

- Static Astro site, plain CSS with design tokens, no UI framework. Built and deployed to GitHub
  Pages by GitHub Actions on every push to `main`. Live at `https://comtechconsulting.dk/`.
- **No backend and no forms.** Contact is `mailto:` and LinkedIn only. No contact form, no
  analytics backend.
- **English only.** No Danish version, despite the Copenhagen base.
- **No availability, rates, or pricing** anywhere on the site — no capacity status, no day rates,
  no packaged offerings.
- Routes: `/`, `/services/`, `/about/`, `/testimonials/`, `/contact/`.
- Structured content lives in `src/data/*.json` (services, strengths, awards, testimonials, about)
  and is mirrored for machine readers in `public/llms.txt`.

## Brand Commitments

- Name is **COM\<tech\>**, written with the angle brackets around `tech`.
- Legal identity: CVR 25567471. Contact `anders@comtechconsulting.dk`.
- Typefaces already committed and self-hosted: Inter (400–800) and JetBrains Mono (600), in
  `public/fonts/`.
- Voice is calm, plain, and unsold — it states what is true and stops. No hype, no urgency, no
  sales language.

## Evidence on Hand

Real, verifiable, and the only proof the site may use:

- Court appointment, Danmarks Domstole · Sø- og Handelsretten (2022) — `src/data/awards.json`.
- PSQIT Innovation Prize, Novo Nordisk (2021); Best Individual Performance of the Year, 7N (2020,
  2016); Best Team nominee, 7N (2016) — same file.
- Named client testimonials with real people and affiliations —
  `src/data/testimonials*.json`.
- Technology and domain lists — `src/data/about.json`.

**Nothing may be fabricated.** No invented client logos, no made-up metrics or case studies, no
unattributed quotes, no synthetic company photography presented as real. Absences that future work
must not paper over: there are no published case studies, no named-client project write-ups, no
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
