import { useLayoutEffect, useRef, useState } from 'react';
import styles from './SlidingTabs.module.css';

const TABS = ['Overview', 'Integrations', 'Activity', 'Settings'];

/** A pill indicator that glides and resizes to the active tab. */
export default function SlidingTabs() {
  const [active, setActive] = useState(0);
  const [pill, setPill] = useState({ left: 0, width: 0 });
  const refs = useRef([]);

  useLayoutEffect(() => {
    const el = refs.current[active];
    if (el) setPill({ left: el.offsetLeft, width: el.offsetWidth });
  }, [active]);

  return (
    <div className={styles.tabs} role="tablist">
      <span className={styles.pill} style={{ transform: `translateX(${pill.left}px)`, width: pill.width }} aria-hidden="true" />
      {TABS.map((t, i) => (
        <button
          key={t}
          ref={(el) => (refs.current[i] = el)}
          type="button"
          role="tab"
          aria-selected={active === i}
          className={`${styles.tab} ${active === i ? styles.active : ''}`}
          onClick={() => setActive(i)}
        >
          {t}
        </button>
      ))}
    </div>
  );
}
