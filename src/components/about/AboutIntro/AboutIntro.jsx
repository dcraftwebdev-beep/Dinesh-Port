import Container from '@/components/ui/Container/Container.jsx';
import Button from '@/components/ui/Button/Button.jsx';
import Reveal from '@/components/ui/Reveal/Reveal.jsx';
import ImageCarousel from '@/components/ui/ImageCarousel/ImageCarousel.jsx';
import { site } from '@/config/site.js';
import styles from './AboutIntro.module.css';

export default function AboutIntro({ intro, gallery }) {
  return (
    <section className={styles.section}>
      <Container className={styles.grid}>
        <Reveal>
          <ImageCarousel slides={gallery} />
        </Reveal>

        <Reveal delay={100} className={styles.text}>
          <h2 className={styles.heading}>
            <span className={styles.greeting}>{intro.greeting}</span>
            {intro.headline.map((line) => (
              <span key={line} className={styles.headline}>
                {line}
              </span>
            ))}
          </h2>

          <div className={styles.body}>
            {intro.paragraphs.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>

          <Button
            variant="secondary"
            size="sm"
            icon={intro.cta.icon}
            href={site.scheduleUrl}
            target="_blank"
            rel="noreferrer"
            className={styles.cta}
          >
            {intro.cta.label}
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
