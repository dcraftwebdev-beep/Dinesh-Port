import styles from './FeatureCards.module.css';

/**
 * Row of cards with optional 01/02/03 numbering; `highlight` marks the chosen option.
 * columns: 3 (default) | 4 — use 4 for step-by-step flows.
 */
export default function FeatureCards({ items, numbered = true, columns = 3 }) {
  return (
    <div className={`${styles.grid} ${columns === 4 ? styles.four : ''}`}>
      {items.map((item, i) => (
        <div key={item.title} className={`${styles.card} ${item.highlight ? styles.highlight : ''}`}>
          {numbered && <p className={styles.index}>{String(i + 1).padStart(2, '0')}</p>}
          <p className={styles.title}>{item.title}</p>
          <p className={styles.text}>{item.text}</p>
        </div>
      ))}
    </div>
  );
}
