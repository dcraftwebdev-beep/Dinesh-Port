import AboutIntro from '@/components/about/AboutIntro/AboutIntro.jsx';
import InterestChips from '@/components/about/InterestChips/InterestChips.jsx';
import ValuesGrid from '@/components/about/ValuesGrid/ValuesGrid.jsx';
import BookShelf from '@/components/about/BookShelf/BookShelf.jsx';
import Section from '@/components/sections/Section/Section.jsx';
import { intro, gallery, interests, values, books, readingList } from '@/data/about.js';

export default function About() {
  return (
    <>
      <AboutIntro intro={intro} gallery={gallery} />

      <Section title="What I’m into" subtitle="right now" layout="inline">
        <InterestChips items={interests} />
      </Section>

      <Section title="The values" subtitle="behind my work">
        <ValuesGrid items={values} />
      </Section>

      <Section title="Books" subtitle="I keep coming back to">
        <BookShelf books={books} />
      </Section>

      <Section title="On my reading list" subtitle="currently reading & up next" last>
        <BookShelf books={readingList} />
      </Section>
    </>
  );
}
