import Section from '@/components/sections/Section/Section.jsx';
import ExperienceList from '@/components/resume/ExperienceList/ExperienceList.jsx';
import ToolGrid from '@/components/resume/ToolGrid/ToolGrid.jsx';
import SkillList from '@/components/resume/SkillList/SkillList.jsx';
import EntryList from '@/components/resume/EntryList/EntryList.jsx';
import { experience, tools, skills, education, certifications } from '@/data/resume.js';

export default function Resume() {
  return (
    <>
      <Section>
        <ExperienceList items={experience} />
      </Section>

      <Section title="Tools" subtitle="powering my work" layout="inline" size="sm">
        <ToolGrid items={tools} />
      </Section>

      <Section title="Skills" size="sm">
        <SkillList items={skills} />
      </Section>

      <Section title="Education" size="sm">
        <EntryList items={education} />
      </Section>

      <Section title="Certification" size="sm" last>
        <EntryList items={certifications} />
      </Section>
    </>
  );
}
