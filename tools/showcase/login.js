/**
 * One-time sign-in helper for sites that need a login.
 *
 *   node tools/showcase/login.js <url> <state-file> ["text that appears after login"]
 *
 * Opens a visible Chrome window — YOU sign in yourself. As soon as the logged-in page
 * appears, the session (cookies + localStorage) is saved to <state-file> and the window
 * closes. The recorder then reuses it via "storageState" in the shot list.
 * Your password is never read or stored by these scripts.
 */
import { chromium } from 'playwright';
import { mkdirSync } from 'node:fs';
import { dirname } from 'node:path';

const [url, stateFile, readyText = 'Who’s in for lunch today?', clickFirst] = process.argv.slice(2);
if (!url || !stateFile) {
  console.error('Usage: node tools/showcase/login.js <url> <state-file> ["ready text"] ["tab to click first"]');
  process.exit(1);
}

// Use your installed Chrome/Edge (a real window); falls back to Playwright's Chromium
let browser;
for (const channel of ['chrome', 'msedge', undefined]) {
  try {
    browser = await chromium.launch({ headless: false, ...(channel ? { channel } : {}) });
    console.log(`Opened ${channel ?? 'chromium'}`);
    break;
  } catch (err) {
    console.log(`(${channel ?? 'chromium'} unavailable: ${err.message.split('\n')[0]})`);
  }
}
if (!browser) process.exit(1);
const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const page = await context.newPage();
await page.goto(url);
if (clickFirst) await page.getByRole('button', { name: clickFirst, exact: true }).click().catch(() => {});

console.log('\n👉 Please sign in in the Chrome window that just opened (waiting up to 5 minutes)…');
// Logged in = any dashboard-only text is visible (case- and quote-insensitive)
const ready = new RegExp(readyText.replace(/[’']/g, "['’]") + '|plates to cook|team roster|the register', 'i');
await page.getByText(ready).first().waitFor({ timeout: 5 * 60 * 1000 });

mkdirSync(dirname(stateFile), { recursive: true });
await context.storageState({ path: stateFile });
console.log(`✓ Signed in — session saved to ${stateFile}`);
await browser.close();
