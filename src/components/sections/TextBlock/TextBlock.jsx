import Container from '@/components/ui/Container/Container.jsx';
import Reveal from '@/components/ui/Reveal/Reveal.jsx';
import styles from './TextBlock.module.css';

/** Two-column section: label on the left, content on the right. */
export default function TextBlock({ label, children }) {
  return (
    <section className={styles.section}>
      <Container>
        <Reveal className={styles.inner}>
          <h2 className={styles.label}>{label}</h2>
          <div className={styles.body}>{children}</div>
        </Reveal>
      </Container>
    </section>
  );
}
