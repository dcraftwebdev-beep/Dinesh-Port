import Reveal from '@/components/ui/Reveal/Reveal.jsx';
import styles from './ExperimentCard.module.css';

/** Frame for one live interaction demo: stage + title, description, tags and a "try it" hint. */
export default function ExperimentCard({ title, text, tags = [], hint, delay = 0, children }) {
  return (
    <Reveal as="li" delay={delay} className={styles.card}>
      <div className={styles.stage}>
        {hint && <span className={styles.hint}>{hint}</span>}
        {children}
      </div>
      <div className={styles.meta}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.text}>{text}</p>
        <ul className={styles.tags}>
          {tags.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}
