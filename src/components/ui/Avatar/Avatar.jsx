import styles from './Avatar.module.css';

/** size: 'lg' (hero) | 'sm' (footer). Falls back to initials when no image is set. */
export default function Avatar({ src, name, initials, size = 'lg' }) {
  return (
    <span className={`${styles.avatar} ${styles[size]}`}>
      {src ? (
        <img src={src} alt={name} className={styles.image} />
      ) : (
        <span className={styles.initials} aria-label={name}>
          {initials}
        </span>
      )}
    </span>
  );
}
