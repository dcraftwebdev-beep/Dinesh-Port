import Reveal from '@/components/ui/Reveal/Reveal.jsx';
import LogoTile from '@/components/ui/LogoTile/LogoTile.jsx';
import styles from './ExperienceList.module.css';

export default function ExperienceList({ items }) {
  return (
    <ol className={styles.list}>
      {items.map((job, i) => (
        <Reveal as="li" key={`${job.company}-${job.period}`} delay={i * 60} className={styles.item}>
          <LogoTile logo={job.logo} size="sm" />
          <div>
            <h3 className={styles.role}>
              {job.role} <span className={styles.at}>@</span> {job.company}
            </h3>
            <p className={styles.meta}>
              <span>{job.period}</span>
              {job.location && (
                <>
                  <span className={styles.sep} aria-hidden="true" />
                  <span>{job.location}</span>
                </>
              )}
            </p>
            <p className={styles.description}>{job.description}</p>
          </div>
        </Reveal>
      ))}
    </ol>
  );
}
