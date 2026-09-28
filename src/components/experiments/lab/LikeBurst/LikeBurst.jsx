import { useState } from 'react';
import styles from './LikeBurst.module.css';

const PARTICLES = 10;

/** A heart that pops, bursts into particles and rolls its counter when liked. */
export default function LikeBurst() {
  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState(128);
  const [burst, setBurst] = useState(0); // bump to replay the animation

  const toggle = () => {
    setLiked((l) => !l);
    setCount((c) => (liked ? c - 1 : c + 1));
    if (!liked) setBurst((b) => b + 1);
  };

  return (
    <div className={styles.wrap}>
      <button type="button" className={`${styles.heart} ${liked ? styles.liked : ''}`} onClick={toggle} aria-pressed={liked} aria-label="Like">
        <svg viewBox="0 0 24 24" width="44" height="44" aria-hidden="true">
          <path d="M12 20.5s-7.5-4.6-9.2-9.4C1.6 7.6 3.9 4.5 7.2 4.5c2 0 3.5 1.1 4.8 2.8 1.3-1.7 2.8-2.8 4.8-2.8 3.3 0 5.6 3.1 4.4 6.6-1.7 4.8-9.2 9.4-9.2 9.4z" />
        </svg>
        {liked && (
          <span key={burst} className={styles.burst} aria-hidden="true">
            {Array.from({ length: PARTICLES }, (_, i) => (
              <i key={i} style={{ '--a': `${(360 / PARTICLES) * i}deg` }} />
            ))}
          </span>
        )}
      </button>
      <span key={count} className={styles.count}>
        {count}
      </span>
    </div>
  );
}
