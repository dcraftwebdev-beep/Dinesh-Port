import { useEffect, useState } from 'react';
import styles from './ImageCarousel.module.css';

/**
 * Auto-advancing, cross-fading photo carousel with dots and a caption.
 * slides: [{ src, caption, tone }] — `tone` is a gradient fallback while a photo is missing.
 */
export default function ImageCarousel({ slides, interval = 4500 }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [failed, setFailed] = useState({});

  useEffect(() => {
    if (paused || slides.length < 2) return undefined;
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), interval);
    return () => clearInterval(id);
  }, [paused, slides.length, interval]);

  return (
    <figure className={styles.figure}>
      <div
        className={styles.frame}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {slides.map((s, i) => (
          <div
            key={s.caption}
            className={`${styles.slide} ${styles[s.tone] ?? ''} ${i === index ? styles.active : ''}`}
            aria-hidden={i !== index}
          >
            {s.src && !failed[i] && (
              <img
                src={s.src}
                alt={s.caption}
                className={styles.image}
                loading={i === 0 ? 'eager' : 'lazy'}
                onError={() => setFailed((f) => ({ ...f, [i]: true }))}
              />
            )}
          </div>
        ))}

        <div className={styles.dots} role="tablist" aria-label="Choose photo">
          {slides.map((s, i) => (
            <button
              key={s.caption}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={s.caption}
              className={`${styles.dot} ${i === index ? styles.dotActive : ''}`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      </div>
      <figcaption key={index} className={styles.caption}>
        {slides[index].caption}
      </figcaption>
    </figure>
  );
}
