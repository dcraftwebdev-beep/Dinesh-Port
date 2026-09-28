import Reveal from '@/components/ui/Reveal/Reveal.jsx';
import BlockRenderer from '../BlockRenderer/BlockRenderer.jsx';
import styles from './CaseSection.module.css';

/** A chapter of the case study: eyebrow, heading, intro text and content blocks. */
export default function CaseSection({ section }) {
  const { id, eyebrow, title, body = [], blocks = [] } = section;

  return (
    <section id={id} className={styles.section}>
      <Reveal>
        {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
        <h2 className={styles.title}>{title}</h2>
        {body.map((p) => (
          <p key={p.slice(0, 24)} className={styles.body}>
            {p}
          </p>
        ))}
      </Reveal>
      {blocks.length > 0 && (
        <div className={styles.blocks}>
          {blocks.map((block, i) => (
            <BlockRenderer key={`${block.type}-${i}`} block={block} first={i === 0} />
          ))}
        </div>
      )}
    </section>
  );
}
