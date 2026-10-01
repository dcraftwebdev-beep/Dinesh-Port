// Case study: SVT Constructions — real client website
const RECORDING = 1208 / 540;
const SCREEN = 1920 / 947;
const DEMO = 1680 / 926; // scripted showcase recording (tools/showcase)

export default {
  intro:
    'I designed and developed a premium website for SVT Constructions, a Chennai builder of homes and commercial spaces. It uses cinematic, scroll-driven storytelling to make the brand feel as solid as the buildings it creates.',
  cover: {
    theme: 'sunrise',
    media: {
      type: 'video',
      src: '/projects/svt-constructions/showcase.mp4',
      poster: '/projects/svt-constructions/showcase-poster.webp',
      url: 'svtconstructions.com',
      ratio: DEMO,
    },
  },
  facts: [
    { label: 'Role', value: 'Design & Frontend Development' },
    { label: 'Client', value: 'SVT Constructions' },
    { label: 'Year', value: '2026' },
    { label: 'Platform', value: 'Marketing website' },
  ],
  sections: [
    {
      id: 'overview',
      nav: 'Overview',
      eyebrow: 'Overview',
      title: 'Building trust before the first site visit',
      body: [
        'Buying a home is one of the biggest decisions people make. SVT needed a website that communicates quality and credibility instantly by showcasing completed projects, explaining services clearly and guiding visitors towards exploring homes or getting in touch.',
      ],
      blocks: [
        {
          type: 'media',
          browser: { type: 'image', src: '/projects/svt-constructions/hero.webp', url: 'svtconstructions.com', ratio: SCREEN },
          caption: 'The homepage hero: a confident headline, social proof and a single clear call to action.',
        },
      ],
    },
    {
      id: 'experience',
      nav: 'Experience',
      eyebrow: 'Experience',
      title: 'Scroll-driven storytelling, page by page',
      body: [
        'The site uses motion with purpose: headlines reveal as you scroll, imagery moves with depth, and key numbers animate into view, so the brand story unfolds naturally instead of all at once.',
      ],
      blocks: [
        {
          type: 'media',
          browser: {
            type: 'video',
            src: '/projects/svt-constructions/showcase.mp4',
            poster: '/projects/svt-constructions/showcase-poster.webp',
            url: 'svtconstructions.com',
            ratio: DEMO,
          },
          caption: 'Homepage tour: the hero, the about story, each service, the Built by SVT gallery, the four step process and the closing call to action.',
        },
        {
          type: 'cards',
          items: [
            { title: 'Clear service navigation', text: 'A dropdown groups Home Construction, Commercial Construction and Renovation & Remodeling so visitors find their need in one click.' },
            { title: 'Animated proof points', text: 'Counters for projects completed, years in practice and returning clients build credibility as they scroll into view.' },
            { title: 'Projects showcase', text: 'A horizontal gallery of signature developments with their Chennai locations, inviting visitors to explore.' },
          ],
        },
      ],
    },
    {
      id: 'about',
      nav: 'About page',
      eyebrow: 'About page',
      title: 'An about page that feels like a film',
      body: [
        'The about page opens with a full-bleed architectural video and large typographic statements that fade in word by word, giving the company’s story the weight and craft of the homes it builds.',
      ],
      blocks: [
        {
          type: 'media',
          browser: {
            type: 'video',
            src: '/projects/svt-constructions/about.mp4',
            poster: '/projects/svt-constructions/about-poster.webp',
            url: 'svtconstructions.com/about',
            ratio: RECORDING,
          },
          caption: 'About page: cinematic intro, text reveals, company milestones and a warm closing call to action.',
        },
      ],
    },
    {
      id: 'details',
      nav: 'Details',
      eyebrow: 'Details',
      title: 'Crafted for every screen',
      body: [
        'Every section was built responsive-first, with smooth scrolling, optimised media and clear calls to action repeated at natural decision points.',
      ],
      blocks: [
        {
          type: 'insights',
          items: [
            { title: 'Premium visual language', text: 'Warm neutrals, bronze accents and generous spacing reflect a high-end builder.' },
            { title: 'Motion with meaning', text: 'Reveals and parallax guide attention without slowing the page down.' },
            { title: 'Conversion paths', text: '“Explore Homes” and “Contact us” stay visible at every stage of the journey.' },
            { title: 'Performance-minded', text: 'Compressed media and lazy loading keep a visually rich site fast.' },
          ],
        },
      ],
    },
  ],
};
