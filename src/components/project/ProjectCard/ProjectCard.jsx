import { Link } from 'react-router-dom';
import Reveal from '@/components/ui/Reveal/Reveal.jsx';
import ProjectCover from '../ProjectCover/ProjectCover.jsx';
import styles from './ProjectCard.module.css';

export default function ProjectCard({ project, delay = 0 }) {
  const { slug, title, client, year, featured } = project;

  return (
    <Reveal delay={delay}>
      <Link to={`/projects/${slug}`} className={styles.card}>
        <div className={styles.media}>
          <ProjectCover project={project} wide={featured} />
        </div>
        <div className={styles.meta}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.info}>
            {client}
            <span className={styles.dot} aria-hidden="true">•</span>
            {year}
          </p>
        </div>
      </Link>
    </Reveal>
  );
}
