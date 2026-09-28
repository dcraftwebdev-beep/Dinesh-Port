import ProjectGrid from '@/components/sections/ProjectGrid/ProjectGrid.jsx';
import { workProjects } from '@/data/projects.js';
import styles from './Home.module.css';

export default function Home() {
  return (
    <div className={styles.page}>
      <ProjectGrid projects={workProjects} />
    </div>
  );
}
