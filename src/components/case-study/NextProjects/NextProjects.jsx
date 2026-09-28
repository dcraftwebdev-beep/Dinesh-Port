import { Link } from 'react-router-dom';
import ProjectCover from '@/components/project/ProjectCover/ProjectCover.jsx';
import Reveal from '@/components/ui/Reveal/Reveal.jsx';
import styles from './NextProjects.module.css';

export default function NextProjects({ projects, title = 'What’s next' }) {
  return (
    <section className={styles.section} aria-labelledby="next-projects">
      <h2 id="next-projects" className={styles.title}>
        {title}
      </h2>
      <ul className={styles.grid}>
        {projects.map((p, i) => (
          <li key={p.slug}>
            <Reveal delay={i * 80}>
              <Link to={`/projects/${p.slug}`} className={styles.card}>
                <div className={styles.media}>
                  <ProjectCover project={p} />
                </div>
                <p className={styles.name}>{p.title}</p>
              </Link>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  );
}
