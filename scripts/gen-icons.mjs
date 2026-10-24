// Renders the home-screen and app icons from the mark: public/apple-touch-icon.png (iOS),
// public/icon-192.png and public/icon-512.png (web app manifest). Square, full-bleed night
// ground; iOS and Android apply their own corner rounding.
// Run: node scripts/gen-icons.mjs
import { chromium } from 'playwright';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const left = 'M150 18 L172 40 L72 140 L172 240 L150 262 L28 140 Z';
const right = 'M290 18 L268 40 L368 140 L268 240 L290 262 L412 140 Z';

const html = (size) => `<!doctype html><html><head><meta charset="utf-8"><style>
* { margin: 0; }
body { width: ${size}px; height: ${size}px; overflow: hidden; display: grid; place-items: center;
  background: radial-gradient(circle at 50% 50%, #2a2878 0%, #14152a 46%, #0d0e14 78%); }
svg { width: 72%; height: auto; overflow: visible; }
</style></head><body>
<svg viewBox="0 0 440 280">
  <defs><filter id="glow" x="-200%" y="-200%" width="500%" height="500%"><feGaussianBlur stdDeviation="14" /></filter></defs>
  <path fill="#eef0f4" d="${left}"/><path fill="#eef0f4" d="${right}"/>
  <rect fill="#8b89ff" x="190" y="110" width="60" height="60" filter="url(#glow)" opacity="0.9"/>
  <rect fill="#a3a1ff" x="190" y="110" width="60" height="60"/>
</svg></body></html>`;

const browser = await chromium.launch();
for (const [file, size] of [['apple-touch-icon.png', 180], ['icon-192.png', 192], ['icon-512.png', 512]]) {
  const page = await browser.newPage({ viewport: { width: size, height: size } });
  await page.setContent(html(size));
  await page.screenshot({ path: path.join(root, 'public', file) });
  await page.close();
  console.log(`wrote public/${file}`);
}
await browser.close();
