/**
 * Showcase recorder — scripted, frame-perfect website demo videos.
 *
 *   node tools/showcase/record.js tools/showcase/shots/dental.json
 *
 * How it works: a headless Chromium renders the site; every output frame we set the exact
 * scroll / cursor / zoom state, advance the page clock by one frame, take a screenshot and
 * composite it into a browser window on a gradient background. Frames stream into ffmpeg.
 * Because time is advanced manually, the result is perfectly smooth on any machine.
 */
import { chromium } from 'playwright';
import sharp from 'sharp';
import ffmpegPath from 'ffmpeg-static';
import { spawn, spawnSync } from 'node:child_process';
import { readFileSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';

const shotFile = process.argv[2];
if (!shotFile) {
  console.error('Usage: node tools/showcase/record.js <shots.json>');
  process.exit(1);
}
const config = JSON.parse(readFileSync(shotFile, 'utf8'));

// ——— Output geometry ———
const FPS = config.fps ?? 60;
const OUT_W = 1920;
const OUT_H = 1080;
const SITE_W = config.siteWidth ?? 1680; // page viewport (rendered 1:1, no scaling blur)
const SITE_H = Math.round((SITE_W * 9) / 16);
const BAR_H = 44; // browser toolbar
const WIN_X = Math.round((OUT_W - SITE_W) / 2);
const WIN_Y = Math.round((OUT_H - (SITE_H + BAR_H)) / 2);
const RADIUS = 18;

// ——— Easing ———
const easeInOut = (t) => (t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2);
const lerp = (a, b, t) => a + (b - a) * t;

// ——— Static layers (built once) ———
function backgroundSvg() {
  const [c1, c2, c3] = config.background ?? ['#c3d6ef', '#e9c7e4', '#f6b3a4'];
  return Buffer.from(`
  <svg xmlns="http://www.w3.org/2000/svg" width="${OUT_W}" height="${OUT_H}">
    <defs>
      <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="${c1}"/><stop offset="0.6" stop-color="${c2}"/><stop offset="1" stop-color="${c3}"/>
      </linearGradient>
      <radialGradient id="glow" cx="0.75" cy="1" r="0.6">
        <stop offset="0" stop-color="#ff8f7a" stop-opacity="0.55"/><stop offset="1" stop-color="#ff8f7a" stop-opacity="0"/>
      </radialGradient>
      <filter id="shadow" x="-10%" y="-10%" width="120%" height="130%">
        <feDropShadow dx="0" dy="24" stdDeviation="30" flood-color="#1a2240" flood-opacity="0.35"/>
      </filter>
    </defs>
    <rect width="100%" height="100%" fill="url(#bg)"/>
    <rect width="100%" height="100%" fill="url(#glow)"/>
    <rect x="${WIN_X}" y="${WIN_Y}" width="${SITE_W}" height="${SITE_H + BAR_H}" rx="${RADIUS}" fill="#fff" filter="url(#shadow)"/>
    <rect x="${WIN_X}" y="${WIN_Y}" width="${SITE_W}" height="${BAR_H}" rx="${RADIUS}" fill="#f3f4f6"/>
    <rect x="${WIN_X}" y="${WIN_Y + BAR_H - RADIUS}" width="${SITE_W}" height="${RADIUS}" fill="#f3f4f6"/>
    <line x1="${WIN_X}" y1="${WIN_Y + BAR_H}" x2="${WIN_X + SITE_W}" y2="${WIN_Y + BAR_H}" stroke="#e5e7eb"/>
    ${[0, 1, 2].map((i) => `<circle cx="${WIN_X + 24 + i * 20}" cy="${WIN_Y + BAR_H / 2}" r="6.5" fill="${['#ff5f57', '#febc2e', '#28c840'][i]}"/>`).join('')}
    <rect x="${OUT_W / 2 - 220}" y="${WIN_Y + 9}" width="440" height="26" rx="13" fill="#fff" stroke="#e5e7eb"/>
    <text x="${OUT_W / 2}" y="${WIN_Y + 27}" font-family="Segoe UI, Arial" font-size="14" fill="#6b7280" text-anchor="middle">${config.label ?? new URL(config.url).host}</text>
  </svg>`);
}

// Rounded mask for the bottom corners of the page area
const contentMask = Buffer.from(`
  <svg xmlns="http://www.w3.org/2000/svg" width="${SITE_W}" height="${SITE_H}">
    <rect width="${SITE_W}" height="${SITE_H + RADIUS}" y="${-RADIUS}" rx="${RADIUS}" fill="#fff"/>
  </svg>`);

// ——— Cursor injected into the page (so it zooms with the content) ———
const CURSOR_SCRIPT = `
(() => {
  if (window.__cursor) return;
  const c = document.createElement('div');
  c.innerHTML = '<svg width="26" height="30" viewBox="0 0 26 30"><path d="M3 2 L3 24 L9 18.5 L13 27.5 L17 25.8 L13.2 17 L21.5 17 Z" fill="#111" stroke="#fff" stroke-width="2" stroke-linejoin="round"/></svg>';
  Object.assign(c.style, { position: 'fixed', left: 0, top: 0, zIndex: 2147483647, pointerEvents: 'none', filter: 'drop-shadow(0 2px 3px rgba(0,0,0,.35))', transformOrigin: '3px 2px', scale: '1.35' });
  const ring = document.createElement('div');
  Object.assign(ring.style, { position: 'fixed', width: '44px', height: '44px', marginLeft: '-22px', marginTop: '-22px', borderRadius: '50%', background: 'rgba(59,130,246,.28)', border: '2px solid rgba(59,130,246,.55)', zIndex: 2147483646, pointerEvents: 'none', opacity: 0 });
  document.documentElement.append(ring, c);
  window.__cursor = { c, ring };
  document.documentElement.style.scrollBehavior = 'auto';
})();`;

// Blurs any element whose own text contains an email address (privacy for real dashboards)
const BLUR_EMAILS_SCRIPT = `
(() => {
  const re = /[\\w.+-]+@[\\w-]+\\.[\\w.]+/;
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  for (let n = walker.nextNode(); n; n = walker.nextNode()) {
    const el = n.parentElement;
    if (el && re.test(n.nodeValue) && el.style.filter !== 'blur(6px)') el.style.filter = 'blur(6px)';
  }
  document.querySelectorAll('input').forEach((i) => { if (re.test(i.value)) i.style.filter = 'blur(6px)'; });
})();`;

async function main() {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: SITE_W, height: SITE_H },
    deviceScaleFactor: 1,
    ...(config.storageState ? { storageState: config.storageState } : {}), // saved by login.js
  });
  const page = await context.newPage();
  await page.clock.install(); // we drive time manually → animations stay in sync with frames

  const outFile = resolve(config.out);
  mkdirSync(dirname(outFile), { recursive: true });
  const ff = spawn(ffmpegPath, [
    '-y', '-loglevel', 'error', '-f', 'rawvideo', '-pix_fmt', 'rgb24', '-s', `${OUT_W}x${OUT_H}`, '-r', String(FPS), '-i', '-',
    '-c:v', 'libx264', '-preset', config.preset ?? 'medium', '-crf', String(config.crf ?? 24), '-pix_fmt', 'yuv420p', '-movflags', '+faststart', outFile,
  ], { stdio: ['pipe', 'inherit', 'inherit'] });

  const bg = await sharp(backgroundSvg()).removeAlpha().raw().toBuffer();
  const mask = await sharp(contentMask).ensureAlpha().raw().toBuffer();
  const RAW_BG = { width: OUT_W, height: OUT_H, channels: 3 };
  const RAW_MASK = { width: SITE_W, height: SITE_H, channels: 4 };
  const RAW_CONTENT = { width: SITE_W, height: SITE_H, channels: 4 };

  // ——— Live state ———
  const state = { x: SITE_W * 0.55, y: SITE_H * 0.6, zoom: 1, fx: SITE_W / 2, fy: SITE_H / 2, ripple: -1, follow: true };
  let frames = 0;

  async function renderFrame() {
    await page.clock.runFor(1000 / FPS);
    if (config.blurEmails && frames % 6 === 0) await page.evaluate(BLUR_EMAILS_SCRIPT);
    // Camera follows the cursor while zoomed in (Screen Studio-style)
    if (state.zoom > 1.001 && state.follow) {
      state.fx += (state.x - state.fx) * 0.08;
      state.fy += (state.y - state.fy) * 0.08;
    }
    const r = state.ripple >= 0 ? state.ripple : 1;
    await page.evaluate(
      ([x, y, r, ripple]) => {
        const k = window.__cursor;
        if (!k) return;
        k.c.style.transform = `translate(${x - 3}px, ${y - 2}px) scale(${ripple ? 0.86 : 1})`;
        k.ring.style.left = x + 'px';
        k.ring.style.top = y + 'px';
        k.ring.style.opacity = r < 1 ? String(1 - r) : '0';
        k.ring.style.transform = `scale(${0.4 + r * 0.9})`;
      },
      [state.x, state.y, r, state.ripple >= 0 && state.ripple < 0.35],
    );
    let shot = await page.screenshot({ type: 'jpeg', quality: 92, animations: 'allow' });

    if (state.zoom > 1.001) {
      // Round first, then clamp — keeps the crop box inside the frame at every zoom level
      const w = Math.min(SITE_W, Math.round(SITE_W / state.zoom));
      const h = Math.min(SITE_H, Math.round(SITE_H / state.zoom));
      const left = Math.min(Math.max(Math.round(state.fx - w / 2), 0), SITE_W - w);
      const top = Math.min(Math.max(Math.round(state.fy - h / 2), 0), SITE_H - h);
      shot = await sharp(shot).extract({ left, top, width: w, height: h }).resize(SITE_W, SITE_H).toBuffer();
    }
    // Raw buffers end-to-end (no PNG round-trips) — the biggest speed win
    const content = await sharp(shot).resize(SITE_W, SITE_H).ensureAlpha().composite([{ input: mask, raw: RAW_MASK, blend: 'dest-in' }]).raw().toBuffer();
    const frame = await sharp(bg, { raw: RAW_BG }).composite([{ input: content, raw: RAW_CONTENT, left: WIN_X, top: WIN_Y + BAR_H }]).removeAlpha().raw().toBuffer();
    if (!ff.stdin.write(frame)) await new Promise((r) => ff.stdin.once('drain', r));
    frames += 1;
    if (state.ripple >= 0) state.ripple = state.ripple + 1 / (0.45 * FPS) > 1 ? -1 : state.ripple + 1 / (0.45 * FPS);
    if (frames % FPS === 0) process.stdout.write(`\r  ${(frames / FPS).toFixed(0)}s recorded`);
  }

  // Animate any numeric state keys over `ms` with easing, optional per-frame hook
  async function tween(to, ms, onFrame) {
    const from = Object.fromEntries(Object.keys(to).map((k) => [k, state[k]]));
    const n = Math.max(1, Math.round((ms / 1000) * FPS));
    for (let i = 1; i <= n; i++) {
      const t = easeInOut(i / n);
      for (const k of Object.keys(to)) state[k] = lerp(from[k], to[k], t);
      if (onFrame) await onFrame(t);
      await renderFrame();
    }
  }

  const hold = async (ms) => { for (let i = 0; i < Math.round((ms / 1000) * FPS); i++) await renderFrame(); };
  const scrollY = () => page.evaluate(() => window.scrollY);

  // Find a visible element; if it's off-screen, smooth-scroll it to the middle first
  async function center(target) {
    const loc = page.locator(target).filter({ visible: true }).first();
    let box = await loc.boundingBox();
    if (!box) throw new Error(`Not found / not visible: ${target}`);
    // Only scroll when the element is really off-screen (avoids jumpy camera near sticky headers)
    if (box.y < 0 || box.y + box.height > SITE_H) {
      const start = await scrollY();
      const dest = Math.max(0, start + box.y + box.height / 2 - SITE_H * 0.5);
      await tween({}, 900, async (t) => page.evaluate((y) => window.scrollTo(0, y), start + (dest - start) * t));
      box = await loc.boundingBox();
    }
    return { loc, x: box.x + box.width / 2, y: box.y + box.height / 2 };
  }

  async function settle(ms = 900) {
    // let navigation / data loading finish while time keeps moving
    for (let t = 0; t < ms; t += 100) {
      await page.clock.runFor(100);
      await page.waitForTimeout(25);
    }
    await page.evaluate(CURSOR_SCRIPT);
    if (config.blurEmails) await page.evaluate(BLUR_EMAILS_SCRIPT);
  }

  // ——— Actions ———
  const actions = {
    async goto({ url }) {
      await page.goto(url ?? config.url, { waitUntil: 'networkidle' });
      await settle(2500);
    },
    async hold({ ms = 1000 }) {
      await hold(ms);
    },
    async move({ to, ms = 900 }) {
      const { x, y } = typeof to === 'string' ? await center(to) : { x: to[0], y: to[1] };
      await tween({ x, y }, ms);
    },
    async scroll({ to, by, ms = 2000 }) {
      const start = await scrollY();
      let target = by != null ? start + by : to;
      if (typeof to === 'string') {
        target = await page.evaluate(
          ([sel, sy]) => { const el = document.querySelector(sel); return el ? el.getBoundingClientRect().top + sy : sy; },
          [to, start],
        );
      }
      await tween({}, ms, async (t) => page.evaluate((y) => window.scrollTo(0, y), start + (target - start) * t));
    },
    async zoom({ scale = 1.5, on, ms = 800 }) {
      // Zooming on an element also brings the cursor there, so the camera stays on target
      const focus = on ? await center(on) : { x: state.x, y: state.y };
      await tween({ zoom: scale, fx: focus.x, fy: focus.y, x: focus.x, y: focus.y }, ms);
    },
    async click({ on, ms = 700, wait = 1200, silent = false }) {
      if (silent) {
        await page.locator(on).filter({ visible: true }).first().click({ timeout: 8000 });
        await settle(wait);
        return;
      }
      const { loc, x, y } = await center(on);
      await tween({ x, y }, ms);
      state.ripple = 0;
      await hold(180);
      await loc.click({ timeout: 5000 });
      await settle(wait);
      await hold(200);
    },
    async type({ into, text, cps = 14 }) {
      const { loc, x, y } = await center(into);
      await tween({ x, y }, 600);
      state.ripple = 0;
      await loc.click();
      for (const ch of text) {
        await loc.press(ch === ' ' ? 'Space' : ch);
        await hold(1000 / cps);
      }
    },
  };

  for (const { do: name, ...params } of config.shots) {
    if (!actions[name]) throw new Error(`Unknown action "${name}"`);
    console.log(`\n[t=${(frames / FPS).toFixed(2)}s] → ${name} ${JSON.stringify(params)}`);
    await actions[name](params);
  }

  ff.stdin.end();
  await new Promise((r) => ff.on('close', r));
  await browser.close();

  // Poster image from the first second
  spawnSync(ffmpegPath, ['-v', 'error', '-y', '-ss', '1', '-i', outFile, '-frames:v', '1', '-c:v', 'libwebp', '-quality', '82', outFile.replace(/\.mp4$/, '-poster.webp')]);
  console.log(`\n✓ ${frames} frames (${(frames / FPS).toFixed(1)}s) → ${config.out}`);
}

main().catch((err) => {
  console.error('\n✗', err);
  process.exit(1);
});
