// Resume content — from Dinesh_Babu_Resume_v3.docx
// `logo`: see components/ui/LogoTile for the supported shapes (icon, mark, src, text).
import {
  siThreedotjs,
  siGsap,
  siAnimedotjs,
  siNextdotjs,
  siSupabase,
  siVercel,
  siClaude,
  siCursor,
  siGooglegemini,
  siJest,
  siLighthouse,
  siPostman,
  siFramer,
  siWebflow,
  siGithub,
  siPerplexity,
  siMiro,
} from 'simple-icons';

export const experience = [
  {
    role: 'Senior Developer',
    company: 'Firebrand Labs',
    period: '2026 - Present',
    location: 'Chennai',
    logo: { text: 'F', bg: '#04111f', fg: '#ff7a45' },
    description:
      'Design and develop websites using React.js, Next.js, WordPress, Webflow and Framer. Build scroll-based and interactive animations with GSAP and Framer Motion, develop Node.js APIs and integrate them with frontend applications, and optimize sites for speed, SEO and mobile responsiveness.',
  },
  {
    role: 'Senior Developer & Team Lead',
    company: 'Jayam Web Solutions',
    period: '2024 - 2025',
    location: 'Chennai',
    logo: { text: 'J', bg: '#1e6bff', fg: '#ffffff' },
    description:
      'Converted Figma designs into pixel-perfect, responsive React.js websites. Integrated REST APIs, managed state with Redux Toolkit, and built reusable UI components to speed up development across projects.',
  },
];

// Ordered to tell a story at a glance (first row = strongest impression):
// 3D & motion → full-stack → AI-native → UI craft → quality → shipping → everyday tools
// Logos: official simple-icons paths + multicolour marks in LogoTile/brandMarks.jsx.
// 21st.dev / Skiper UI use their own icons from /public/images/tools/.
export const tools = [
  // 3D & motion — the "wow" row
  { name: 'Three.js', use: '3D & WebGL experiences', href: 'https://threejs.org', logo: { icon: siThreedotjs, bg: '#000', fg: '#fff' } },
  { name: 'GSAP', use: 'Scroll & motion animation', href: 'https://gsap.com', logo: { icon: siGsap, bg: '#0e100f', fg: '#0ae448' } },
  { name: 'Anime.js', use: 'Micro-interactions', href: 'https://animejs.com', logo: { icon: siAnimedotjs, bg: '#fff', fg: '#ff4b4b' } },

  // Full-stack product building
  { name: 'Next.js', use: 'Full-stack React apps', href: 'https://nextjs.org', logo: { icon: siNextdotjs, bg: '#fff', fg: '#000' } },
  { name: 'Supabase', use: 'Database, auth, storage', href: 'https://supabase.com', logo: { icon: siSupabase, bg: '#1c1c1c', fg: '#3ecf8e' } },
  { name: 'Vercel', use: 'Deployment, edge hosting', href: 'https://vercel.com', logo: { icon: siVercel, bg: '#000', fg: '#fff' } },

  // AI-native workflow
  { name: 'Claude', use: 'Ideation, prototyping', href: 'https://claude.ai', logo: { icon: siClaude, bg: '#fff', fg: '#d97757' } },
  { name: 'Cursor', use: 'AI code editor', href: 'https://cursor.com', logo: { icon: siCursor, bg: '#141414', fg: '#fff' } },
  {
    name: 'Gemini',
    use: 'AI features, APIs',
    href: 'https://gemini.google.com',
    logo: { icon: siGooglegemini, bg: '#fff', gradient: ['#1c7dff', '#8e6cf0', '#d96570'] },
  },

  // UI craft & component libraries
  { name: 'Figma', use: 'UI Design', href: 'https://www.figma.com', logo: { mark: 'figma', bg: '#1e1e1e' } },
  { name: '21st.dev', use: 'Modern UI components', href: 'https://21st.dev', logo: { src: '/images/tools/21st-dev.svg' } },
  { name: 'Skiper UI', use: 'Animated UI components', href: 'https://skiper-ui.com', logo: { src: '/images/tools/skiper-ui.svg', bg: '#fff' } },

  // Quality & testing
  { name: 'Jest', use: 'Unit & integration tests', href: 'https://jestjs.io', logo: { icon: siJest, bg: '#fff', fg: '#c21325' } },
  { name: 'Lighthouse', use: 'Performance & SEO audits', href: 'https://developer.chrome.com/docs/lighthouse', logo: { icon: siLighthouse, bg: '#fff', fg: '#f44b21' } },
  { name: 'Postman', use: 'API testing', href: 'https://www.postman.com', logo: { icon: siPostman, bg: '#ff6c37', fg: '#fff' } },

  // Shipping websites
  {
    name: 'Framer',
    use: 'Web design, templates',
    href: 'https://www.framer.com',
    logo: { icon: siFramer, bg: 'linear-gradient(160deg, #22b8ff 0%, #0a66ff 55%, #0047e0 100%)', fg: '#fff' },
  },
  { name: 'Webflow', use: 'Websites, CMS', href: 'https://webflow.com', logo: { icon: siWebflow, bg: '#146ef5', fg: '#fff' } },
  { name: 'GitHub', use: 'Version control, CI', href: 'https://github.com', logo: { icon: siGithub, bg: '#181717', fg: '#fff' } },

  // Everyday thinking tools
  { name: 'Perplexity', use: 'Research, search', href: 'https://www.perplexity.ai', logo: { icon: siPerplexity, bg: '#0f3a3d', fg: '#20b8cd' } },
  { name: 'Miro', use: 'Brainstorming, workshops', href: 'https://miro.com', logo: { icon: siMiro, bg: '#ffd02f', fg: '#050038' } },
  { name: 'Craft', use: 'Writing', href: 'https://www.craft.do', logo: { mark: 'craft', bg: '#fff' } },
];

// Grouped skills — each group renders as a labelled row of chips
export const skills = [
  { label: 'Frontend', items: ['React.js', 'Next.js', 'JavaScript (ES6+)', 'HTML5', 'CSS3'] },
  { label: 'Backend', items: ['Node.js', 'REST APIs'] },
  { label: 'CMS & No-Code', items: ['WordPress', 'Webflow', 'Framer'] },
  { label: 'Animation', items: ['GSAP', 'ScrollTrigger', 'Framer Motion', 'Lenis', 'Lottie'] },
  { label: 'UI & State', items: ['Tailwind CSS', 'Material UI', 'Bootstrap', 'Sass', 'Redux Toolkit'] },
  { label: 'Tools', items: ['Git', 'GitHub', 'Vite', 'npm', 'Figma', 'Chrome DevTools', 'Lighthouse'] },
];

export const education = [
  { title: 'M.Sc. Computer Science', meta: '2022 to 2024 · Bharathidasan University' },
  { title: 'B.Sc. Computer Science', meta: '2019 to 2022 · Bharathidasan University' },
];

export const certifications = [
  { title: 'Frontend Development', meta: 'Besant Technologies' },
  { title: 'Claude AI Course', meta: 'Anthropic (Online)' },
];
