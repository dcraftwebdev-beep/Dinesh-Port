import Reveal from '@/components/ui/Reveal/Reveal.jsx';
import styles from './ValuesGrid.module.css';

export default function ValuesGrid({ items }) {
  return (
    <ul className={styles.grid}>
      {items.map((v, i) => (
        <Reveal as="li" key={v.title} delay={i * 70} className={styles.card}>
          <h3 className={styles.title}>{v.title}</h3>
          <p className={styles.text}>{v.text}</p>
        </Reveal>
      ))}
    </ul>
  );
}
