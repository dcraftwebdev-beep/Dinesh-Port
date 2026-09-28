import { useRef, useState } from 'react';
import styles from './MagneticButton.module.css';

const RADIUS = 140; // px around the button where the pull is felt
const PULL = 0.35; // how far the button follows the cursor

/** A button that leans toward the cursor; the label moves a little further for depth. */
export default function MagneticButton() {
  const ref = useRef(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const onMove = (e) => {
    const b = ref.current.getBoundingClientRect();
    const dx = e.clientX - (b.left + b.width / 2);
    const dy = e.clientY - (b.top + b.height / 2);
    const inRange = Math.hypot(dx, dy) < RADIUS;
    setOffset(inRange ? { x: dx * PULL, y: dy * PULL } : { x: 0, y: 0 });
  };

  return (
    <div className={styles.area} onPointerMove={onMove} onPointerLeave={() => setOffset({ x: 0, y: 0 })}>
      <button
        ref={ref}
        type="button"
        className={styles.button}
        style={{ transform: `translate(${offset.x}px, ${offset.y}px)` }}
      >
        <span style={{ transform: `translate(${offset.x * 0.35}px, ${offset.y * 0.35}px)` }}>Get in touch</span>
      </button>
    </div>
  );
}
