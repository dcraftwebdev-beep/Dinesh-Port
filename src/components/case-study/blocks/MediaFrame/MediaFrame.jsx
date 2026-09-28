import { useState } from 'react';
import ScaledCanvas from '@/components/ui/ScaledCanvas/ScaledCanvas.jsx';
import BrowserFrame from '@/components/ui/BrowserFrame/BrowserFrame.jsx';
import { mockups } from '@/components/mockups/index.js';
import styles from './MediaFrame.module.css';

/**
 * Grey panel holding one of:
 * - `mockup` — a coded mockup, optionally with markers [{ n, x, y }] (centres in canvas px, 667 wide)
 * - `browser` — a real screenshot / screen recording in a browser frame: { type, src, poster, url, ratio }
 * - `src` — a full-bleed photo
 */
export default function MediaFrame({
  mockup,
  browser,
  src,
  alt = '',
  caption,
  markers = [],
  aspect = '16 / 10',
  canvasHeight = 500,
}) {
  const [failed, setFailed] = useState(false);
  const Mockup = mockups[mockup];

  return (
    <figure className={styles.figure}>
      <div
        className={`${styles.frame} ${src ? styles.photo : ''} ${browser ? styles.browser : ''}`}
        style={src ? { aspectRatio: aspect } : undefined}
      >
        {Mockup && (
          <ScaledCanvas height={canvasHeight}>
            <Mockup />
            {markers.map((m) => (
              <span key={m.n} className={styles.marker} style={{ left: m.x, top: m.y }}>
                {String(m.n).padStart(2, '0')}
              </span>
            ))}
          </ScaledCanvas>
        )}

        {browser && <BrowserFrame media={{ alt: caption, ...browser }} />}

        {src && !failed && (
          <img src={src} alt={alt} className={styles.image} loading="lazy" onError={() => setFailed(true)} />
        )}
        {src && failed && (
          <div className={styles.placeholder}>
            <span>Add image</span>
            <code>public{src}</code>
          </div>
        )}
      </div>
      {caption && <figcaption className={styles.caption}>{caption}</figcaption>}
    </figure>
  );
}
