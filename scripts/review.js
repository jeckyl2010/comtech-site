#!/usr/bin/env node
/**
 * Visual review script — builds the site, launches preview, screenshots all pages.
 * Usage: node scripts/review.js
 *        node scripts/review.js --no-build   (skip build, use existing dist/)
 *        node scripts/review.js --open        (open screenshots after capture)
 */

import { chromium } from 'playwright';
import { execSync, spawn } from 'child_process';
import { mkdirSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const OUT  = resolve(ROOT, 'screenshots');
const PORT = 4200;

const PAGES = [
  { path: '/',              name: 'home' },
  { path: '/services/',     name: 'services' },
  { path: '/about/',        name: 'about' },
  { path: '/testimonials/', name: 'testimonials' },
  { path: '/contact/',      name: 'contact' },
];

const args   = process.argv.slice(2);
const build  = !args.includes('--no-build');
const open   = args.includes('--open');

mkdirSync(OUT, { recursive: true });

if (build) {
  console.log('Building…');
  execSync('npx astro build --silent', { cwd: ROOT, stdio: 'inherit' });
}

console.log(`Starting preview on :${PORT}…`);
const server = spawn('npx', ['astro', 'preview', '--port', String(PORT)], {
  cwd: ROOT,
  stdio: 'pipe',
});

// Give the server a moment to bind.
await new Promise(r => setTimeout(r, 2500));

const browser = await chromium.launch();
const page    = await browser.newPage();
await page.setViewportSize({ width: 1440, height: 900 });

const captured = [];

for (const { path, name } of PAGES) {
  const url  = `http://localhost:${PORT}${path}`;
  const file = resolve(OUT, `${name}.png`);
  await page.goto(url, { waitUntil: 'networkidle' });
  await page.screenshot({ path: file, fullPage: true });
  captured.push(file);
  console.log(`  ✓ ${name.padEnd(14)} → screenshots/${name}.png`);
}

await browser.close();
server.kill();

console.log(`\nDone. ${captured.length} screenshots saved to ./screenshots/`);

if (open) {
  execSync(`open ${captured.join(' ')}`, { cwd: ROOT });
}
