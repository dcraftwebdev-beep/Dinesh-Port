import styles from './Prose.module.css';

/** Sub-heading with one or more paragraphs. `first` removes the extra top spacing. */
export default function Prose({ title, body = [], first = false }) {
  return (
    <div className={`${styles.prose} ${title && !first ? styles.spaced : ''}`}>
      {title && <h3 className={styles.title}>{title}</h3>}
      {body.map((p) => (
        <p key={p.slice(0, 24)} className={styles.text}>
          {p}
        </p>
      ))}
    </div>
  );
}
