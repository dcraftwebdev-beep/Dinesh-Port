import styles from './QuoteCard.module.css';

export default function QuoteCard({ text, name, role, avatar }) {
  const initials = name
    .split(' ')
    .map((w) => w[0])
    .join('')
    .slice(0, 2);

  return (
    <blockquote className={styles.card}>
      <svg className={styles.mark} viewBox="0 0 24 16" aria-hidden="true">
        <path
          d="M6.2 0C2.8 0 .6 2.3.6 5.4c0 3 2.1 5 4.8 5 .6 0 1.1-.1 1.5-.3-.6 2-2.2 3.4-4.4 3.9l.5 2C7.6 15 10.6 11.3 10.6 6.4 10.6 2.5 8.8 0 6.2 0zm12.6 0c-3.4 0-5.6 2.3-5.6 5.4 0 3 2.1 5 4.8 5 .6 0 1.1-.1 1.5-.3-.6 2-2.2 3.4-4.4 3.9l.5 2c4.6-1 7.6-4.7 7.6-9.6C23.2 2.5 21.4 0 18.8 0z"
          fill="currentColor"
        />
      </svg>
      <p className={styles.text}>“{text}”</p>
      <footer className={styles.author}>
        {avatar ? (
          <img src={avatar} alt="" className={styles.avatar} />
        ) : (
          <span className={styles.avatar}>{initials}</span>
        )}
        <div>
          <p className={styles.name}>{name}</p>
          <p className={styles.role}>{role}</p>
        </div>
      </footer>
    </blockquote>
  );
}
