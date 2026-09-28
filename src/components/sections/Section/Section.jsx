import Container from '@/components/ui/Container/Container.jsx';
import Reveal from '@/components/ui/Reveal/Reveal.jsx';
import styles from './Section.module.css';

/**
 * Page section with a divider line and a two-tone heading.
 * layout: 'inline' → "What I'm into right now" | 'stacked' → "The values / behind my work"
 * size: 'lg' (About page) | 'sm' (Resume page headings)
 * last: drops bottom padding so the footer spacing takes over.
 */
export default function Section({
  title,
  subtitle,
  layout = 'stacked',
  size = 'lg',
  divider = true,
  last = false,
  children,
}) {
  return (
    <section className={`${styles.section} ${divider ? styles.divider : ''} ${last ? styles.last : ''}`}>
      <Container>
        <div className={styles.inner}>
          {title && (
            <Reveal as="h2" className={`${styles.heading} ${styles[layout]} ${styles[size]}`}>
              <span className={styles.title}>{title}</span>
              {subtitle && <span className={styles.subtitle}>{subtitle}</span>}
            </Reveal>
          )}
          {children}
        </div>
      </Container>
    </section>
  );
}
