import { useState } from 'react';
import Reveal from '@/components/ui/Reveal/Reveal.jsx';
import styles from './InterestChips.module.css';

/** Photo thumbnail that falls back to the gradient tone if the file is missing. */
function Thumb({ src, tone }) {
  const [failed, setFailed] = useState(false);

  return (
    <span className={`${styles.thumb} ${styles[tone] ?? ''}`}>
      {src && !failed && <img src={src} alt="" loading="lazy" onError={() => setFailed(true)} />}
    </span>
  );
}

/** Wrapping list of interest chips, each with a small photo thumbnail. */
export default function InterestChips({ items }) {
  return (
    <Reveal as="ul" className={styles.list}>
      {items.map((item) => (
        <li key={item.label} className={styles.chip}>
          <Thumb src={item.src} tone={item.tone} />
          {item.label}
        </li>
      ))}
    </Reveal>
  );
}
