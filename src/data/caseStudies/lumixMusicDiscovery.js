// Case study: Lumix — Creating a music discovery app
export default {
  intro:
    'I designed a mobile listening experience that makes discovering new music feel personal and playful. It’s built around lyrics, moods and effortless browsing.',
  cover: { mockup: 'music', theme: 'blush' },
  facts: [
    { label: 'Role', value: 'Lead Product Designer' },
    { label: 'Timeline', value: 'Mar 2025 to Aug 2025' },
    { label: 'Team', value: '1 designer, 3 engineers' },
    { label: 'Platforms', value: 'iOS & Android' },
  ],
  sections: [
    {
      id: 'overview',
      nav: 'Overview',
      eyebrow: 'Overview',
      title: 'Helping listeners find music they’ll love',
      body: [
        'Lumix is a music app for people who want more than algorithmic playlists. The goal was to make discovery feel human again by surfacing lyrics, stories and moods alongside every track.',
      ],
      blocks: [
        {
          type: 'stats',
          items: [
            { value: '+48%', label: 'Weekly discovery sessions', meta: 'Compared to the previous app' },
            { value: '+27%', label: 'Tracks saved per user', meta: 'Within the first month' },
            { value: '4.8', label: 'App Store rating', meta: 'Across 2,300 reviews' },
          ],
        },
      ],
    },
    {
      id: 'problem',
      nav: 'Problem',
      eyebrow: 'Problem',
      title: 'Discovery felt repetitive and impersonal',
      body: [
        'Listeners told us they kept hearing the same songs. The existing player focused on playback controls, leaving little room for context that sparks curiosity.',
      ],
      blocks: [
        {
          type: 'cards',
          items: [
            { title: 'Same-y recommendations', text: 'Suggestions leaned heavily on past listening, creating an echo chamber.' },
            { title: 'No emotional context', text: 'Tracks lacked the lyrics and stories that make songs memorable.' },
            { title: 'Search felt like work', text: 'Finding something by mood or vibe required too many steps.' },
          ],
        },
      ],
    },
    {
      id: 'designs',
      nav: 'Designs',
      eyebrow: 'Designs',
      title: 'A player built around lyrics and mood',
      body: [
        'The final design puts artwork and lyrics front and centre, with gentle transitions between now playing, lyrics and search.',
      ],
      blocks: [
        { type: 'media', mockup: 'music', caption: 'Now playing, synced lyrics and mood search working together.' },
        {
          type: 'cards',
          items: [
            { title: 'Synced lyrics', text: 'Lyrics highlight in time with the music to deepen engagement.' },
            { title: 'Mood search', text: 'Search by feeling, like “calm”, “wave” or “late night”, not just by title.' },
            { title: 'Artwork-first', text: 'Large, expressive artwork makes every track feel distinct.' },
          ],
        },
      ],
    },
    {
      id: 'lessons',
      nav: 'Lessons',
      eyebrow: 'Lessons',
      title: 'Designing for curiosity',
      body: [
        'Small moments of delight, like a lyric, a colour or a smooth transition, did more for discovery than any extra recommendation row.',
      ],
      blocks: [
        {
          type: 'insights',
          items: [
            { title: 'Context drives curiosity', text: 'Lyrics and stories encouraged people to explore further.' },
            { title: 'Motion adds meaning', text: 'Transitions helped users understand where they were.' },
          ],
        },
      ],
    },
  ],
};
