// Renders public/og-default.png (1200×630), the image LinkedIn and others show when the site
// is shared: the mark as a sculpture (scripts/assets/og-sculpture.webp, generated with Codex)\n// with the headline in Familjen Grotesk. Only the share image uses it; the site stays flat.
// Run: node scripts/gen-og.mjs
import { chromium } from 'playwright';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { readFileSync } from 'node:fs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
// Inlined: a page set from a string cannot load file:// fonts.
const font = (w) => {
  const data = readFileSync(path.join(root, `public/fonts/familjen-grotesk-latin-${w}-normal.woff2`)).toString('base64');
  return `url(data:font/woff2;base64,${data}) format('woff2')`;
};
const left = 'M150 18 L172 40 L72 140 L172 240 L150 262 L28 140 Z';
const right = 'M290 18 L268 40 L368 140 L268 240 L290 262 L412 140 Z';
const mark = (fill) => `<svg viewBox="0 0 440 280"><path fill="${fill}" d="${left}"/><path fill="${fill}" d="${right}"/><rect fill="#8b89ff" x="190" y="110" width="60" height="60"/></svg>`;

const sculpture = readFileSync(path.join(root, 'scripts/assets/og-sculpture.webp')).toString('base64');

const html = `<!doctype html><html><head><meta charset="utf-8"><style>
@font-face { font-family: 'FG'; font-weight: 600; src: ${font(600)}; }
@font-face { font-family: 'FG'; font-weight: 700; src: ${font(700)}; }
* { margin: 0; box-sizing: border-box; }
body { width: 1200px; height: 630px; overflow: hidden; background: #0d0e14; font-family: 'FG', sans-serif; color: #eef0f4; position: relative; }
.bg { position: absolute; top: 0; right: -150px; height: 100%; width: auto; max-width: none; }
.shade { position: absolute; inset: 0; background: linear-gradient(90deg, rgba(13,14,20,.85) 0%, rgba(13,14,20,.55) 38%, rgba(13,14,20,0) 52%); }
.text { position: absolute; left: 68px; top: 50%; width: 480px; transform: translateY(-50%); }
.logo { display: flex; align-items: center; gap: 16px; font-weight: 700; font-size: 30px; letter-spacing: -0.03em; }
.logo svg { width: 48px; height: 31px; }
.logo span { color: #8b89ff; font-weight: 600; letter-spacing: -0.01em; }
h1 { margin-top: 30px; font-weight: 600; font-size: 50px; line-height: 1.06; letter-spacing: -0.03em; }
</style></head><body>
<img class="bg" src="data:image/webp;base64,${sculpture}">
<div class="shade"></div>
<div class="text">
  <div class="logo">${mark('#eef0f4')}<div>COM<span>&lt;tech&gt;</span></div></div>
  <h1>Software architecture built for the places where it has to work.</h1>
</div>
</body></html>`;

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
await page.setContent(html, { waitUntil: 'load' });
await page.evaluate(() => document.fonts.ready);
await page.screenshot({ path: path.join(root, 'public/og-default.png') });
await browser.close();
console.log('wrote public/og-default.png');
