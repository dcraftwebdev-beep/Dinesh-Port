import { useRef } from 'react';
import styles from './SpotlightCard.module.css';

/** A dark card lit by a soft spotlight (and a glowing border) that follows the cursor. */
export default function SpotlightCard() {
  const ref = useRef(null);

  const onMove = (e) => {
    const b = ref.current.getBoundingClientRect();
    ref.current.style.setProperty('--x', `${e.clientX - b.left}px`);
    ref.current.style.setProperty('--y', `${e.clientY - b.top}px`);
  };

  return (
    <div ref={ref} className={styles.card} onPointerMove={onMove}>
      <p className={styles.eyebrow}>Firebrand Labs</p>
      <p className={styles.title}>Lunch Register</p>
      <p className={styles.text}>Basecamp bot + admin dashboard</p>
    </div>
  );
}
