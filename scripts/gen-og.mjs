// Renders public/og-default.png (1200×630), the image LinkedIn and others show when the site
// is shared. Drawn in the site's own design: night ground, the mark, Familjen Grotesk.
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

const html = `<!doctype html><html><head><meta charset="utf-8"><style>
@font-face { font-family: 'FG'; font-weight: 400; src: ${font(400)}; }
@font-face { font-family: 'FG'; font-weight: 600; src: ${font(600)}; }
@font-face { font-family: 'FG'; font-weight: 700; src: ${font(700)}; }
* { margin: 0; box-sizing: border-box; }
body { width: 1200px; height: 630px; overflow: hidden; background: #0d0e14; font-family: 'FG', sans-serif; color: #eef0f4; position: relative; }
.light { position: absolute; width: 900px; height: 900px; right: -260px; top: -240px;
  background: radial-gradient(circle, rgba(91,88,255,.30) 0%, rgba(91,88,255,.10) 32%, rgba(13,14,20,0) 62%); }
.logo { position: absolute; left: 72px; top: 60px; display: flex; align-items: center; gap: 16px; font-weight: 700; font-size: 32px; letter-spacing: -0.03em; }
.logo svg { width: 50px; height: 32px; }
.logo span { color: #8b89ff; font-weight: 600; letter-spacing: -0.01em; }
h1 { position: absolute; left: 72px; top: 178px; width: 690px; font-weight: 600; font-size: 64px; line-height: 1.04; letter-spacing: -0.032em; }
.who { position: absolute; left: 72px; bottom: 64px; right: 72px; display: flex; justify-content: space-between; align-items: center;
  padding-top: 24px; border-top: 1px solid #272a38; font-size: 22px; color: #a9aebd; }
.who b { color: #eef0f4; font-weight: 600; }
.big { position: absolute; right: 64px; top: 150px; width: 330px; }
</style></head><body>
<div class="light"></div>
<div class="logo">${mark('#eef0f4')}<div>COM<span>&lt;tech&gt;</span></div></div>
<h1>Software architecture built for the places where it has to work.</h1>
<div class="big">${mark('#eef0f4')}</div>
<div class="who"><div><b>Anders Hybertz</b> · Senior software architect and technical lead · Copenhagen</div><div>comtechconsulting.dk</div></div>
</body></html>`;

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
await page.setContent(html, { waitUntil: 'load' });
await page.evaluate(() => document.fonts.ready);
await page.screenshot({ path: path.join(root, 'public/og-default.png') });
await browser.close();
console.log('wrote public/og-default.png');
