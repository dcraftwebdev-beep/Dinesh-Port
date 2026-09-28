// Global site content. Edit here to update the whole site.
export const site = {
  name: 'Dinesh Babu',
  initials: 'DB',
  // Drop your photo in /public/images/avatar.jpg and set: avatar: '/images/avatar.jpg'
  avatar: null,
  tagline: 'I build digital products that feel alive. Websites, web apps and dashboards with smooth micro interactions, cinematic motion and clean, fast code.',
  email: 'hello@dinesh.design',
  scheduleUrl: 'https://cal.com/',
  copyright: `Portfolio © ${new Date().getFullYear()} by Dinesh Babu`,
};

// Intro buttons, shown under the name on every page
export const heroActions = [
  { label: 'My latest work', to: '/', variant: 'primary', icon: 'sparkle' },
  {
    label: 'Let’s chat',
    href: site.scheduleUrl,
    target: '_blank',
    rel: 'noreferrer',
    variant: 'secondary',
    icon: 'phone',
  },
];

export const navLinks = [
  { label: 'Projects', to: '/' },
  { label: 'Experiments', to: '/experiments' },
  { label: 'About', to: '/about' },
  { label: 'Resume', to: '/resume' },
];

export const footerLinks = [
  { label: 'Work', to: '/' },
  { label: 'Experiments', to: '/experiments' },
  { label: 'About', to: '/about' },
  { label: 'Resume', to: '/resume' },
];

export const socialLinks = [
  { label: 'LinkedIn', icon: 'linkedin', href: 'https://www.linkedin.com/' },
  { label: 'Instagram', icon: 'instagram', href: 'https://www.instagram.com/' },
  { label: 'YouTube', icon: 'youtube', href: 'https://www.youtube.com/' },
];
