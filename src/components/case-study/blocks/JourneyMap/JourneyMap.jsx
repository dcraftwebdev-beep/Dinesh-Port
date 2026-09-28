import styles from './JourneyMap.module.css';

const rows = [
  { key: 'goals', label: 'Goals' },
  { key: 'pains', label: 'Pain points' },
  { key: 'needs', label: 'Needs' },
];

/** Journey stages as columns, each with goals / pain points / needs. */
export default function JourneyMap({ stages }) {
  return (
    <div className={styles.grid}>
      {stages.map((stage, i) => (
        <div key={stage.title} className={styles.stage}>
          <div className={styles.head}>
            <p className={styles.index}>{String(i + 1).padStart(2, '0')}</p>
            <p className={styles.title}>{stage.title}</p>
          </div>
          {rows.map(({ key, label }) => (
            <div key={key} className={styles.row}>
              <span className={`${styles.tag} ${styles[key]}`}>{label}</span>
              <p className={styles.text}>{stage[key]}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
