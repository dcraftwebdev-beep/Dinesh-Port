// Case study: Media Boostrs — agency website
const SCREEN = 1920 / 947;
const DEMO = 1680 / 926; // scripted showcase recording (tools/showcase)

export default {
  intro:
    'I designed and developed the website for Media Boostrs, a full-service digital marketing agency. It’s a bold, conversion focused site that explains their services clearly and turns visitors into enquiries.',
  cover: {
    theme: 'sky',
    media: { type: 'video', src: '/projects/media-boostrs/website-demo.mp4', poster: '/projects/media-boostrs/website-demo-poster.webp', url: 'mediaboostrs.com', ratio: DEMO },
  },
  facts: [
    { label: 'Role', value: 'Design & Frontend Development' },
    { label: 'Client', value: 'Media Boostrs' },
    { label: 'Year', value: '2026' },
    { label: 'Platform', value: 'Marketing website' },
  ],
  sections: [
    {
      id: 'overview',
      nav: 'Overview',
      eyebrow: 'Overview',
      title: 'One agency, many services, one clear story',
      body: [
        'Media Boostrs offers SEO, social media, paid ads, video and web design. The challenge was presenting a wide range of services without overwhelming visitors, while keeping the path to “Get Started” obvious on every page.',
      ],
      blocks: [
        {
          type: 'media',
          browser: { type: 'video', src: '/projects/media-boostrs/website-demo.mp4', poster: '/projects/media-boostrs/website-demo-poster.webp', url: 'mediaboostrs.com', ratio: DEMO },
          caption: 'Homepage tour: the hero, services, the campaigns portfolio with filters, industries, client results, the latest articles and the strategy session form.',
        },
      ],
    },
    {
      id: 'features',
      nav: 'Features',
      eyebrow: 'Features',
      title: 'Designed to convert',
      body: [
        'Every section works towards an enquiry: strong headlines, focused service pages and calls to action placed where decisions happen.',
      ],
      blocks: [
        {
          type: 'cards',
          items: [
            { title: 'Hero slider', text: 'Rotating messages highlight different strengths, with numbered progress and arrow controls.' },
            { title: 'Floating navigation', text: 'A pill-shaped nav keeps Services, Portfolio, Blog and Contact one click away.' },
            { title: 'Always-on CTA', text: '“Get Started” stays visible so ready visitors never have to search for it.' },
          ],
        },
        {
          type: 'media',
          browser: { type: 'image', src: '/projects/media-boostrs/blog.webp', url: 'mediaboostrs.com/blog', ratio: SCREEN },
          caption: 'The blog, with search and category filters (SEO, Social Media, PPC, Content, Branding, Video).',
        },
      ],
    },
    {
      id: 'content',
      nav: 'Content',
      eyebrow: 'Content',
      title: 'Powered by a custom CMS',
      body: [
        'The blog is managed through a dashboard I built for the team, so new articles go live without touching code.',
      ],
      blocks: [
        {
          type: 'insights',
          items: [
            { title: 'Self-serve publishing', text: 'The team writes and publishes articles from their own admin workspace.' },
            { title: 'SEO foundations', text: 'Structured posts with categories and excerpts support organic growth.' },
          ],
        },
      ],
    },
  ],
};
