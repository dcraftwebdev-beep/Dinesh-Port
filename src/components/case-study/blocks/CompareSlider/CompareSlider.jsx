import { useCallback, useRef, useState } from 'react';
import ScaledCanvas from '@/components/ui/ScaledCanvas/ScaledCanvas.jsx';
import { mockups } from '@/components/mockups/index.js';
import styles from './CompareSlider.module.css';

/** Drag (or use arrow keys) to reveal the "after" design over the "before" one. */
export default function CompareSlider({ before, after, caption, beforeLabel = 'Before', afterLabel = 'After' }) {
  const [pos, setPos] = useState(50);
  const frameRef = useRef(null);
  const Before = mockups[before];
  const After = mockups[after];

  const moveTo = useCallback((clientX) => {
    const rect = frameRef.current.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(100, Math.max(0, pct)));
  }, []);

  const onPointerDown = (e) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    moveTo(e.clientX);
  };

  const onPointerMove = (e) => {
    if (e.currentTarget.hasPointerCapture(e.pointerId)) moveTo(e.clientX);
  };

  const onKeyDown = (e) => {
    if (e.key === 'ArrowLeft') setPos((p) => Math.max(0, p - 5));
    if (e.key === 'ArrowRight') setPos((p) => Math.min(100, p + 5));
  };

  return (
    <figure className={styles.figure}>
      <div
        ref={frameRef}
        className={styles.frame}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        role="slider"
        tabIndex={0}
        aria-label="Compare before and after"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(pos)}
        onKeyDown={onKeyDown}
      >
        <div className={styles.layer}>
          <ScaledCanvas>{Before && <Before />}</ScaledCanvas>
        </div>
        <div className={`${styles.layer} ${styles.after}`} style={{ clipPath: `inset(0 0 0 ${pos}%)` }}>
          <ScaledCanvas>{After && <After />}</ScaledCanvas>
        </div>

        <div className={styles.handle} style={{ left: `${pos}%` }}>
          <span className={styles.knob} aria-hidden="true">
            ‹ ›
          </span>
        </div>

        <span className={`${styles.label} ${styles.labelLeft}`}>{beforeLabel}</span>
        <span className={`${styles.label} ${styles.labelRight}`}>{afterLabel}</span>
      </div>
      {caption && <figcaption className={styles.caption}>{caption}</figcaption>}
    </figure>
  );
}
