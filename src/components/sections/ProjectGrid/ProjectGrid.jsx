import Container from '@/components/ui/Container/Container.jsx';
import ProjectCard from '@/components/project/ProjectCard/ProjectCard.jsx';
import styles from './ProjectGrid.module.css';

/** bare: render only the grid (when placed inside a <Section> that already has a container). */
export default function ProjectGrid({ projects, id = 'work', bare = false }) {
  const grid = (
    <ul className={styles.grid}>
      {projects.map((project, index) => (
        <li key={project.slug} className={project.featured ? styles.featured : undefined}>
          <ProjectCard project={project} delay={(index % 2) * 90} />
        </li>
      ))}
    </ul>
  );

  if (bare) return grid;

  return (
    <section id={id} className={styles.section} aria-label="Selected work">
      <Container>{grid}</Container>
    </section>
  );
}
