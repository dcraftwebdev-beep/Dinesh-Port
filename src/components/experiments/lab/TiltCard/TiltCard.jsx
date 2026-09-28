import { useRef, useState } from 'react';
import styles from './TiltCard.module.css';

const MAX_TILT = 14; // degrees

/** A card that tilts in 3D toward the cursor, with a glossy highlight sliding across it. */
export default function TiltCard() {
  const ref = useRef(null);
  const [t, setT] = useState({ rx: 0, ry: 0, gx: 50, gy: 50, active: false });

  const onMove = (e) => {
    const b = ref.current.getBoundingClientRect();
    const px = (e.clientX - b.left) / b.width; // 0 → 1
    const py = (e.clientY - b.top) / b.height;
    setT({ rx: (0.5 - py) * MAX_TILT * 2, ry: (px - 0.5) * MAX_TILT * 2, gx: px * 100, gy: py * 100, active: true });
  };

  return (
    <div className={styles.scene} onPointerMove={onMove} onPointerLeave={() => setT({ rx: 0, ry: 0, gx: 50, gy: 50, active: false })}>
      <div
        ref={ref}
        className={`${styles.card} ${t.active ? styles.active : ''}`}
        style={{ transform: `rotateX(${t.rx}deg) rotateY(${t.ry}deg)`, '--gx': `${t.gx}%`, '--gy': `${t.gy}%` }}
      >
        <span className={styles.chip} />
        <p className={styles.number}>4821 &nbsp;0936 &nbsp;7710 &nbsp;2468</p>
        <div className={styles.row}>
          <span>DINESH BABU</span>
          <span>09/29</span>
        </div>
        <span className={styles.shine} />
      </div>
    </div>
  );
}
