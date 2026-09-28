import useScaleToFit from '@/hooks/useScaleToFit.js';
import styles from './ScaledCanvas.module.css';

/**
 * Renders children on a fixed design canvas (default 667×500) and scales it
 * to the parent width, so mockups keep pixel-perfect proportions at any size.
 */
export default function ScaledCanvas({ width = 667, height = 500, children }) {
  const [ref, scale] = useScaleToFit(width);

  return (
    <div ref={ref} className={styles.frame} style={{ aspectRatio: `${width} / ${height}` }}>
      <div className={styles.canvas} style={{ width, height, transform: `scale(${scale})` }}>
        {children}
      </div>
    </div>
  );
}
