# Showcase recorder

Scripted, frame-perfect demo videos of your websites (cursor, clicks, smooth scroll, zoom),
framed in a browser window on a gradient background — ready for the portfolio.

```bash
node tools/showcase/record.js tools/showcase/shots/dental.json
```

Output: the `.mp4` in `out` plus a `-poster.webp` next to it.

## Shot list (`shots/*.json`)

```json
{
  "url": "https://example.com/",
  "label": "example.com",              // text in the browser address bar
  "out": "public/projects/example/showcase.mp4",
  "fps": 60,                           // 30 renders twice as fast (good for drafts)
  "background": ["#c3d6ef", "#e9c7e4", "#f6b3a4"],
  "shots": [ { "do": "goto" }, ... ]
}
```

| Action | Options | What it does |
|---|---|---|
| `goto` | `url?` | Open the page (defaults to top-level `url`) |
| `hold` | `ms` | Pause on screen |
| `move` | `to` (selector or `[x, y]`), `ms` | Glide the cursor |
| `scroll` | `to` (px or selector) / `by` (px), `ms` | Smooth scroll |
| `zoom` | `scale` (1 = out), `on?` (selector), `ms` | Ease the camera in/out; follows the cursor while zoomed |
| `click` | `on`, `ms`, `wait` | Move, click with a ripple, wait for the page |
| `type` | `into`, `text`, `cps` | Click a field and type |

Selectors are [Playwright selectors](https://playwright.dev/docs/other-locators): `text=Book now`,
`button:has-text("Continue")`, `button:text-is("29")`, `input[name="email"]`, `... >> nth=2`.
Off-screen elements are smooth-scrolled into view automatically.

## Tips

- Draft at `"fps": 30`, render the final at 60.
- Never script the final submit/pay step on a live site — end on the confirmation screen.
- Scroll-driven animations (GSAP ScrollTrigger) work; page timers are driven frame-by-frame too.
