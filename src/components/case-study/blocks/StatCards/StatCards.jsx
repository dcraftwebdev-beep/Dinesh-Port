import styles from './StatCards.module.css';

/** Headline metrics — e.g. { value: '+32%', label: 'Faster balance checks', meta: '4.1s → 2.8s' } */
export default function StatCards({ items }) {
  return (
    <div className={styles.grid}>
      {items.map((s) => (
        <div key={s.label} className={styles.card}>
          <p className={styles.value}>{s.value}</p>
          <p className={styles.label}>{s.label}</p>
          {s.meta && <p className={styles.meta}>{s.meta}</p>}
        </div>
      ))}
    </div>
  );
}
