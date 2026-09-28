// About page content. Photos go in /public/images/about/ — until then a soft gradient shows.
export const intro = {
  greeting: 'Hi, I am Dinesh.',
  headline: ['Product Designer focused', 'on clarity and real-world use'],
  paragraphs: [
    'I work on web and digital products that need to be both simple and reliable. Most of my work lives in SaaS tools and internal platforms, where clarity matters more than decoration.',
    'I started my career designing consumer apps, but quickly moved into more complex systems like dashboards, workflows and tools that teams use every day. That shift shaped how I think: structure first, visuals second.',
    'I care about making things understandable. Reducing friction, removing noise, and helping users move forward without thinking too much about the interface itself.',
    'Outside of work, I spend time exploring visual ideas, photography, and small side projects that let me experiment more freely.',
  ],
  cta: { label: 'Book a call', icon: 'phone' },
};

export const gallery = [
  { src: '/images/about/countryside.jpg', caption: 'Japanese countryside', tone: 'mountain' },
  { src: '/images/about/studio.jpg', caption: 'My desk setup', tone: 'studio' },
  { src: '/images/about/coffee.jpg', caption: 'Weekend coffee sketching', tone: 'coffee' },
  { src: '/images/about/street.jpg', caption: 'Street photography walk', tone: 'street' },
];

// Unsplash CDN image, cropped for the 40×35 chip thumbnail (2× for sharp retina display).
// Free under the Unsplash License — credit: kaarthy madhan (temple).
const unsplash = (id) => `https://images.unsplash.com/${id}?w=80&h=70&fit=crop&crop=entropy&q=75&auto=format`;

// Local photos live in /public/images/interests/; the gradient `tone` shows while a photo loads or if it's missing.
export const interests = [
  { label: 'AI tools', tone: 'sky', src: '/images/interests/ai-tools.avif' },
  { label: 'Minimal interfaces', tone: 'paper', src: '/images/interests/minimal-interfaces.avif' },
  { label: 'Gym workouts', tone: 'gym', src: '/images/interests/gym.avif' },
  { label: 'Design systems', tone: 'blueprint', src: '/images/interests/design-systems.avif' },
  { label: 'Running', tone: 'run', src: '/images/interests/running.avif' },
  { label: 'Long walks', tone: 'forest', src: '/images/interests/long-walks.avif' },
  { label: 'Black coffee', tone: 'coffee', src: '/images/interests/black-coffee.webp' },
  { label: 'Marina sunsets', tone: 'marina', src: '/images/interests/sunset.webp' },
  { label: 'Ambient music', tone: 'music', src: '/images/interests/ambient-music.avif' },
  { label: 'Watching Shōgun', tone: 'shogun', src: '/images/interests/shogun.webp' },
  { label: 'Temple architecture', tone: 'temple', src: unsplash('photo-1650566696029-4d1c8e92e077') },
];

export const values = [
  { title: 'Courage', text: 'I take initiative, explore new ideas, and make decisions even when the path isn’t clear.' },
  { title: 'Honesty', text: 'I communicate openly, give feedback, and focus on what truly matters for the outcome.' },
  { title: 'Adaptability', text: 'I stay flexible, learn quickly, and adjust to challenges without losing direction or focus.' },
  { title: 'Teamwork', text: 'I love collaborating, ownership, and believe the best results come from teamwork.' },
];

// `cover` = illustrated BookCover variant; add `src` to use a real cover photo
// Book covers live in /public/images/books/
export const books = [
  {
    title: 'fabulous. brilliant. loveable.',
    author: 'AVIS Viswanathan & Vaani Anand',
    src: '/images/books/fabulous-brilliant-loveable.webp',
  },
  { title: 'The Habit of Winning', author: 'Prakash Iyer', src: '/images/books/the-habit-of-winning.webp' },
  { title: 'Animal Farm', author: 'George Orwell', src: '/images/books/animal-farm.webp' },
  { title: 'The Richest Man in Babylon', author: 'George S. Clason', src: '/images/books/the-richest-man-in-babylon.webp' },
];

// Started or queued — shown in a separate "On my reading list" section
export const readingList = [
  { title: 'Atomic Design', author: 'Brad Frost', src: '/images/books/atomic-design.webp' },
  { title: 'Laws of UX', author: 'Jon Yablonski', src: '/images/books/laws-of-ux.webp' },
  { title: 'The Design of Everyday Things', author: 'Don Norman', src: '/images/books/the-design-of-everyday-things.webp' },
  { title: 'Don’t Make Me Think', author: 'Steve Krug', src: '/images/books/dont-make-me-think.webp', bg: '#953e3f' },
];
