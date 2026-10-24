import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import about from '../data/about.json';

// Generated from src/data so the machine-readable summary can never drift from the pages.
export const GET: APIRoute = async () => {
  const byOrder = <T extends { data: { order: number } }>(a: T, b: T) => a.data.order - b.data.order;
  const services     = (await getCollection('services')).sort(byOrder);
  const awards       = (await getCollection('awards')).sort(byOrder);
  const clients      = (await getCollection('clients')).sort(byOrder);
  const testimonials = (await getCollection('testimonials')).sort(byOrder);

  const body = `# COM<tech> — comtechconsulting.dk

## Who

Anders Hybertz is a senior software architect and technical lead based in Copenhagen, Denmark.
COM<tech> is a one-person consultancy by design. Clients work directly with Anders from the first conversation and throughout the engagement.

Anders has three decades of experience in software architecture, technical leadership, and complex technical deliveries across regulated and demanding environments.

## What COM<tech> does

${services.map(s => `### ${s.data.name}\n${s.data.description}`).join('\n\n')}

## Industries

${about.domains.join(', ')}.

## Organisations worked with (most recent first)

${clients.map(c => `- ${c.data.name} (${c.data.sector}, ${c.data.years}): ${c.data.work}${c.data.link ? ` ${c.data.link.label}: ${c.data.link.href}` : ''}`).join('\n')}

## Recognition

${awards.map(a => `- ${a.data.title}, ${a.data.issuer} (${a.data.year})${a.data.detail ? `. ${a.data.detail}` : ''}`).join('\n')}

## Recommendations (verbatim excerpts)

${testimonials.map(t => `"${t.data.excerpt}" — ${t.data.name}, ${t.data.title}`).join('\n\n')}

## Contact

Email: anders@comtechconsulting.dk
LinkedIn: https://www.linkedin.com/in/andershybertz/
Based in Copenhagen. Working with clients across Denmark and internationally.
CVR 25567471

## Site structure

- / — Home: overview, services summary, recommendations
- /services/ — Full services detail and typical engagement situations
- /about/ — Background, focus areas, organisations worked with, industries, technologies, and recognition
- /testimonials/ — Recommendations in full
- /contact/ — How to get in touch and how engagements typically start
`;

  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
