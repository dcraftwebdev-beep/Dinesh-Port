// Case study: Media Boostrs — custom CMS dashboard
const RECORDING = 1208 / 540;
const SCREEN = 1920 / 947;

export default {
  intro:
    'I built a custom content management dashboard for Media Boostrs, a digital marketing agency, giving their team one simple workspace to write, organise and publish articles straight to their website.',
  cover: {
    theme: 'ember',
    media: {
      type: 'video',
      src: '/projects/media-boostrs/dashboard.mp4',
      poster: '/projects/media-boostrs/dashboard-poster.webp',
      url: 'mediaboostrs.com/admin',
      ratio: RECORDING,
    },
  },
  facts: [
    { label: 'Role', value: 'Full-stack Development' },
    { label: 'Client', value: 'Media Boostrs' },
    { label: 'Year', value: '2026' },
    { label: 'Platform', value: 'Web app (admin dashboard)' },
  ],
  sections: [
    {
      id: 'overview',
      nav: 'Overview',
      eyebrow: 'Overview',
      title: 'Publishing without the overhead',
      body: [
        'The agency wanted full control over its blog without the complexity of a heavy third-party CMS. The goal: a focused admin workspace that anyone on the team could use on day one, connected directly to the live website.',
      ],
      blocks: [
        {
          type: 'media',
          browser: { type: 'image', src: '/projects/media-boostrs/dashboard.webp', url: 'mediaboostrs.com/admin', ratio: SCREEN },
          caption: 'The Content Library: every post at a glance, with status, category and date.',
        },
      ],
    },
    {
      id: 'workflow',
      nav: 'Workflow',
      eyebrow: 'Workflow',
      title: 'From idea to published article in one flow',
      body: [
        'Writers move from the library to a clean editor, fill in the essentials, and publish, or save as a draft to finish later.',
      ],
      blocks: [
        {
          type: 'media',
          browser: {
            type: 'video',
            src: '/projects/media-boostrs/dashboard.mp4',
            poster: '/projects/media-boostrs/dashboard-poster.webp',
            url: 'mediaboostrs.com/admin',
            ratio: RECORDING,
          },
          caption: 'Creating a new article: title, excerpt, rich-text body, cover image, category, author, read time and tags.',
        },
        {
          type: 'cards',
          items: [
            { title: 'Content Library', text: 'Search posts and filter by category like SEO, PPC, Social Media, Web Design and more.' },
            { title: 'Rich-text editor', text: 'Headings, formatting, lists, links and images, with a live draft/publish toggle.' },
            { title: 'Live & Drafts', text: 'Sidebar counts show what is published and what still needs work.' },
          ],
        },
      ],
    },
    {
      id: 'website',
      nav: 'Website',
      eyebrow: 'Connected website',
      title: 'Published posts appear on the site instantly',
      body: [
        'Articles published from the dashboard flow straight into the agency’s public blog, complete with category filters and search.',
      ],
      blocks: [
        {
          type: 'media',
          browser: { type: 'image', src: '/projects/media-boostrs/blog.webp', url: 'mediaboostrs.com/blog', ratio: SCREEN },
          caption: 'The public blog, searchable and filterable by category.',
        },
      ],
    },
    {
      id: 'details',
      nav: 'Details',
      eyebrow: 'Details',
      title: 'Small touches that make it feel reliable',
      body: [
        'An admin tool is only useful if people trust it. Clear states, sensible defaults and a secure sign-in made the dashboard easy to adopt.',
      ],
      blocks: [
        {
          type: 'insights',
          items: [
            { title: 'Secure admin access', text: 'Sign-in, sign-out and change-password flows protect the workspace.' },
            { title: 'Status at a glance', text: 'Published and Draft badges keep the content pipeline visible.' },
            { title: 'SEO-ready fields', text: 'Excerpts, categories, tags and read time support discoverability.' },
            { title: 'Media uploads', text: 'Drag-and-drop cover images with format and size guidance.' },
          ],
        },
      ],
    },
  ],
};
