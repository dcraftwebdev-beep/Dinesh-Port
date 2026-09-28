import Reveal from '@/components/ui/Reveal/Reveal.jsx';
import styles from './EntryList.module.css';

/** Title + meta (+ optional description) list — used for projects, education and certifications. */
export default function EntryList({ items }) {
  return (
    <ul className={styles.list}>
      {items.map((item, i) => (
        <Reveal as="li" key={item.title} delay={i * 60}>
          <h3 className={styles.title}>{item.title}</h3>
          <p className={styles.meta}>{item.meta}</p>
          {item.description && <p className={styles.description}>{item.description}</p>}
        </Reveal>
      ))}
    </ul>
  );
}
