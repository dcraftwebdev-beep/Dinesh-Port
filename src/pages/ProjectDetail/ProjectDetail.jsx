import { useParams } from 'react-router-dom';
import Container from '@/components/ui/Container/Container.jsx';
import CaseNav from '@/components/case-study/CaseNav/CaseNav.jsx';
import CaseHeader from '@/components/case-study/CaseHeader/CaseHeader.jsx';
import CaseSection from '@/components/case-study/CaseSection/CaseSection.jsx';
import NextProjects from '@/components/case-study/NextProjects/NextProjects.jsx';
import { projects, getProjectBySlug } from '@/data/projects.js';
import { getCaseStudy } from '@/data/caseStudies/index.js';
import NotFound from '../NotFound/NotFound.jsx';
import styles from './ProjectDetail.module.css';

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);
  const study = getCaseStudy(slug);

  if (!project || !study) return <NotFound />;

  const navItems = study.sections.map(({ id, nav }) => ({ id, label: nav }));
  // Suggest projects from the same category first (client work → client work)
  const others = projects
    .filter((p) => p.slug !== slug && p.category !== 'concept') // concepts are no longer listed anywhere
    .sort((a, b) => (b.category === project.category) - (a.category === project.category))
    .slice(0, 3);

  return (
    <article className={styles.page}>
      <CaseNav
        sections={navItems}
        back={project.category === 'work' ? undefined : { to: '/experiments', label: 'Experiments' }}
      />
      <Container size="narrow">
        <CaseHeader project={project} study={study} />
        {study.sections.map((section) => (
          <CaseSection key={section.id} section={section} />
        ))}
        <NextProjects projects={others} />
      </Container>
    </article>
  );
}
