import { useRef } from 'react';
import styles from './AffinityMap.module.css';

/**
 * FigJam-style clustering board on a dotted canvas.
 * Wider than the column — drag (or scroll sideways) to pan.
 */
export default function AffinityMap({ groups, caption }) {
  const boardRef = useRef(null);
  const drag = useRef(null);

  const onPointerDown = (e) => {
    if (e.pointerType !== 'mouse') return; // touch uses native scrolling
    drag.current = { x: e.clientX, left: boardRef.current.scrollLeft };
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e) => {
    if (!drag.current) return;
    boardRef.current.scrollLeft = drag.current.left - (e.clientX - drag.current.x);
  };

  const endDrag = () => {
    drag.current = null;
  };

  return (
    <figure className={styles.figure}>
      <div
        ref={boardRef}
        className={styles.board}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        aria-label="Research clusters"
        role="region"
        tabIndex={0}
      >
        <div className={styles.canvas}>
          {groups.map((g) => (
            <div key={g.label} className={`${styles.group} ${styles[g.color]}`}>
              <span className={styles.label}>{g.label}</span>
              <div className={styles.frame}>
                {g.notes.map((n) => (
                  <span key={n} className={styles.note}>
                    {n}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      {caption && <figcaption className={styles.caption}>{caption}</figcaption>}
    </figure>
  );
}
