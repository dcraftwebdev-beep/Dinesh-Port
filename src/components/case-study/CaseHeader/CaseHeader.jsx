import ProjectCover from '@/components/project/ProjectCover/ProjectCover.jsx';
import styles from './CaseHeader.module.css';

export default function CaseHeader({ project, study }) {
  return (
    <header className={styles.header}>
      <p className={styles.meta}>
        {project.client}
        <span aria-hidden="true">•</span>
        {project.year}
      </p>
      <h1 className={styles.title}>{project.title}</h1>
      <p className={styles.intro}>{study.intro}</p>

      <ProjectCover
        project={project}
        mockup={study.cover?.mockup}
        media={study.cover?.media}
        theme={study.cover?.theme}
        className={styles.cover}
      />

      <dl className={styles.facts}>
        {study.facts.map((f) => (
          <div key={f.label}>
            <dt className={styles.factLabel}>{f.label}</dt>
            <dd className={styles.factValue}>{f.value}</dd>
          </div>
        ))}
      </dl>
    </header>
  );
}
