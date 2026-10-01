// Project list.
// category: 'work' (real client projects → Home) | 'concept' (design explorations → Experiments)
// Cover: `media` (screenshot / screen recording in a browser frame) or `mockup` (coded UI, see components/mockups).
// Media files live in /public/projects/<slug>/ (optimised copies; originals are in /source-media).

const SCREEN = 1920 / 947; // website screenshots

export const projects = [
  // ——— Client work ———
  {
    slug: 'lunch-register',
    category: 'work',
    title: 'Automating the office lunch register with a Basecamp bot',
    client: 'Firebrand Labs',
    year: 2026,
    theme: 'ember',
    media: {
      type: 'video',
      src: '/projects/lunch-register/dashboard-demo.mp4',
      poster: '/projects/lunch-register/dashboard-demo-poster.webp',
      url: 'fbl-lunch.vercel.app',
      ratio: 1680 / 926, // scripted showcase recording
    },
    summary:
      'An internal tool that turns a daily chat roll-call into an automatic lunch list. Teammates opt in on Basecamp, the admin dashboard keeps the register, and the kitchen gets the final count on time.',
  },
  {
    slug: 'svt-constructions',
    category: 'work',
    title: 'A cinematic website for a Chennai construction brand',
    client: 'SVT Constructions',
    year: 2026,
    theme: 'sunrise',
    media: {
      type: 'video',
      src: '/projects/svt-constructions/showcase.mp4',
      poster: '/projects/svt-constructions/showcase-poster.webp',
      url: 'svtconstructions.com',
      ratio: 1680 / 926, // scripted showcase recording
    },
    summary:
      'A premium real-estate website with scroll-driven storytelling, a featured-projects showcase and clear paths to explore homes or start a conversation.',
  },
  {
    slug: 'media-boostrs-cms',
    category: 'work',
    title: 'A custom CMS dashboard for a marketing team',
    client: 'Media Boostrs',
    year: 2026,
    theme: 'ember',
    media: {
      type: 'video',
      src: '/projects/media-boostrs/admin-demo.mp4',
      poster: '/projects/media-boostrs/admin-demo-poster.webp',
      url: 'mediaboostrs.com/admin',
      ratio: 1680 / 926, // scripted showcase recording
      focus: 'left top', // keep the sidebar in view when the card crops the sides
    },
    summary:
      'A lightweight admin workspace where the team writes, organises and publishes blog content, with no third party CMS needed.',
  },
  {
    slug: 'media-boostrs-website',
    category: 'work',
    title: 'A growth-focused website for a digital agency',
    client: 'Media Boostrs',
    year: 2026,
    theme: 'sky',
    media: { type: 'video', src: '/projects/media-boostrs/website-demo.mp4', poster: '/projects/media-boostrs/website-demo-poster.webp', url: 'mediaboostrs.com', ratio: 1680 / 926 },
    summary:
      'A bold, conversion-focused agency site presenting SEO, social, ads and content services, with a searchable, filterable blog.',
  },
  {
    slug: 'dental-care',
    category: 'work',
    title: 'A calm, trustworthy website for a dental clinic',
    client: 'Dr. Amin’s Dental Care',
    year: 2025,
    theme: 'blush',
    media: {
      type: 'video',
      src: '/projects/dental-care/tour-demo.mp4',
      poster: '/projects/dental-care/tour-demo-poster.webp',
      url: 'dr-amins.netlify.app',
      ratio: 1680 / 926, // scripted showcase recording
      focus: 'left top',
    },
    summary:
      'A friendly clinic website with a guided online booking flow, designed to reassure new patients and make booking effortless.',
  },

  // ——— Product ideas (shown first on Experiments) ———
  {
    slug: 'adpeek',
    category: 'idea',
    title: 'AdPeek: see every ad your competitor is running',
    client: 'Chrome extension idea',
    year: 2026,
    mockup: 'adpeek',
    theme: 'sky',
    summary:
      'A browser extension that shows any brand’s Meta and Google ads, offers and landing pages in one click, with a shared swipe file for small teams.',
  },

  {
    slug: 'chatfollow',
    category: 'idea',
    title: 'Chatfollow: never lose a WhatsApp lead again',
    client: 'Chrome extension idea',
    year: 2026,
    mockup: 'chatfollow',
    theme: 'ember',
    summary:
      'A WhatsApp Web sidebar that adds lead stages, follow up reminders and a simple pipeline for businesses that sell on chat.',
  },

  // ——— Concepts (shown on Experiments) ———
  {
    slug: 'aviera-financial-data',
    category: 'concept',
    title: 'Making financial data easier to understand',
    client: 'Aviera concept',
    year: 2026,
    mockup: 'finance',
    theme: 'sky',
    summary:
      'A calmer credit dashboard that turns balances, limits and spending patterns into something people can read at a glance.',
  },
  {
    slug: 'lumix-music-discovery',
    category: 'concept',
    title: 'Creating a music discovery app',
    client: 'Lumix concept',
    year: 2025,
    mockup: 'music',
    theme: 'blush',
    summary:
      'A playful listening experience built around lyrics, moods and effortless discovery of new sounds.',
  },
  {
    slug: 'designing-a-portfolio',
    category: 'concept',
    title: 'Designing a portfolio',
    client: 'Personal project',
    year: 2025,
    mockup: 'values',
    theme: 'sunrise',
    summary:
      'A personal space that shares the values, books and ideas that shape the way I design.',
  },
  {
    slug: 'aviera-finance-teams',
    category: 'concept',
    title: 'Expanding Aviera for finance teams',
    client: 'Aviera concept',
    year: 2024,
    mockup: 'approvals',
    theme: 'ember',
    summary:
      'Approval workflows, team spending and automations that help finance teams move faster with confidence.',
  },
];

export const workProjects = projects.filter((p) => p.category === 'work');
export const conceptProjects = projects.filter((p) => p.category === 'concept');
export const ideaProjects = projects.filter((p) => p.category === 'idea');

export const getProjectBySlug = (slug) => projects.find((p) => p.slug === slug);
