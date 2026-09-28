import Section from '@/components/sections/Section/Section.jsx';
import ProjectGrid from '@/components/sections/ProjectGrid/ProjectGrid.jsx';
import { ideaProjects } from '@/data/projects.js';

export default function Experiments() {
  return (
    <Section title="Product ideas" subtitle="my own ideas for problems I keep seeing, designed end to end" last>
      <ProjectGrid projects={ideaProjects} bare />
    </Section>
  );
}
