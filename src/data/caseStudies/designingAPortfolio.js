// Case study: Designing a portfolio (personal project)
export default {
  intro:
    'A personal portfolio that shares not just my work, but the values, books and ideas that shape how I design.',
  cover: { mockup: 'values', theme: 'sunrise' },
  facts: [
    { label: 'Role', value: 'Designer & Developer' },
    { label: 'Timeline', value: '2025' },
    { label: 'Team', value: 'Solo project' },
    { label: 'Platforms', value: 'Web' },
  ],
  sections: [
    {
      id: 'overview',
      nav: 'Overview',
      eyebrow: 'Overview',
      title: 'A portfolio that feels personal',
      body: [
        'Most portfolios show outcomes. I wanted mine to also show the thinking and values behind the work, in a calm, minimal interface that lets projects speak for themselves.',
      ],
      blocks: [
        {
          type: 'cards',
          items: [
            { title: 'Clean systems', text: 'A small set of tokens and components keeps every page consistent.' },
            { title: 'Smooth interactions', text: 'Subtle motion guides attention without getting in the way.' },
            { title: 'Meaningful details', text: 'Values and books add personality beyond the case studies.' },
          ],
        },
      ],
    },
    {
      id: 'designs',
      nav: 'Designs',
      eyebrow: 'Designs',
      title: 'Values and influences, front and centre',
      body: ['The about page brings together the principles I work by and the books I keep coming back to.'],
      blocks: [{ type: 'media', mockup: 'values', caption: 'The values behind my work and the books that shaped it.' }],
    },
    {
      id: 'lessons',
      nav: 'Lessons',
      eyebrow: 'Lessons',
      title: 'Designing for yourself is the hardest brief',
      body: [
        'Treating my own portfolio like a client project, with clear goals, constraints and feedback rounds, kept it focused and helped me ship.',
      ],
    },
  ],
};
