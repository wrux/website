/** URL to this site's public source code repository */
export const sourceUrl = 'https://github.com/wrux/website';

export const person = {
  name: 'Callum Bonnyman',
  role: 'Software Engineer',
  location: 'Remote',
  website: 'https://callum.co.uk',
  contact: {
    email: 'callum@wrux.com',
    phone: '',
    linkedin: 'https://www.linkedin.com/in/wrux',
    github: 'https://github.com/wrux',
  },
  summary:
    'I’m a software engineer and product creator with a passion for simple, effective solutions. I focus on clean code, thoughtful design, and building tools that people enjoy using. I love turning complex problems into intuitive experiences.',
  bio: 'When I’m not coding, I enjoy exploring new tech and traveling the world while posting occasionally on callum.co.uk.',
  skills: [
    'TypeScript',
    'JavaScript',
    'React',
    'Next.js',
    'Astro',
    'Tailwind CSS',
    'Node.js',
    'Frontend architecture',
    'Design systems',
    'Product engineering',
    'Turborepo',
    'Vercel',
    'Supabase',
    'Sanity',
    'Rust',
  ],
};

export const socialLinks = [
  {
    name: 'github' as const,
    href: 'https://github.com/wrux',
    label: 'GitHub',
  },
  {
    name: 'linkedin' as const,
    href: 'https://www.linkedin.com/in/wrux',
    label: 'LinkedIn',
  },
  {
    name: 'instagram' as const,
    href: 'https://www.instagram.com/etocallum/',
    label: 'Instagram',
  },
];

export const featuredProjects = [
  {
    name: 'kacet' as const,
    href: 'https://kacet.com',
    label: 'kacet.com',
    color: '#0056f5',
  },
  {
    name: 'banburyshire' as const,
    href: 'https://banburyshire.com',
    label: 'banburyshire.com',
    color: '#152621',
  },
  {
    name: 'callum' as const,
    href: 'https://callum.co.uk',
    label: 'callum.co.uk',
    color: '#1f2937',
  },
  {
    name: 'pizza' as const,
    href: 'https://perpetual.pizza',
    label: 'perpetual.pizza',
    color: '#d10001',
  },
  {
    name: 'manhole' as const,
    href: 'https://manhole.gallery',
    label: 'manhole.gallery',
    color: '#f2a04f',
  },
  {
    name: 'butties' as const,
    href: 'https://butties.com',
    label: 'butties.com',
    color: '#003aad',
  },
];

export const professionalPortfolio = [
  {
    name: 'Banburyshire',
    description:
      'Developing an independent digital guide and community platform for North Oxfordshire, leveraging high-conversion SEO strategies and modern content architecture to promote regional culture and tourism.',
    urls: [
      {
        label: 'banburyshire.com',
        href: 'https://banburyshire.com/',
      },
    ],
    keywords: ['SEO', 'content architecture', 'community platform', 'tourism'],
  },
  {
    name: 'Kacet',
    description:
      'Currently architecting a specialized crypto freelance job marketplace, focusing on secure, high-performance transaction handling within the Web3 ecosystem.',
    urls: [
      {
        label: 'kacet.com',
        href: 'https://kacet.com/',
      },
    ],
    keywords: ['Web3', 'marketplace', 'crypto', 'transaction handling'],
  },
  {
    name: 'Ethan Stowell Restaurants (ESR) Portfolio',
    subtitle: 'Main Site & Restaurant Network',
    description:
      'Engineered a scalable, multi-tenant digital presence for a premier hospitality group using Sanity.io for content management, establishing a reusable design system to maintain brand consistency across diverse restaurant digital storefronts.',
    urls: [
      {
        label: 'ethanstowellrestaurants.com',
        href: 'https://ethanstowellrestaurants.com/',
      },
      {
        label: 'tavolata.com',
        href: 'https://tavolata.com/',
      },
      {
        label: 'ballardpizzacompany.com',
        href: 'https://ballardpizzacompany.com/',
      },
      {
        label: 'howtocookawolf.com',
        href: 'https://howtocookawolf.com/',
      },
      {
        label: 'victortavern.com',
        href: 'https://victortavern.com/',
      },
    ],
    keywords: ['Sanity.io', 'multi-tenant', 'design system', 'hospitality'],
  },
  {
    name: 'Illinois Humanities',
    description:
      'Designed and developed a public-facing digital platform to improve accessibility for state-wide cultural grants, programs, and community engagement initiatives.',
    urls: [
      {
        label: 'ilhumanities.org',
        href: 'https://ilhumanities.org/',
      },
    ],
    keywords: ['accessibility', 'grants', 'community engagement'],
  },
  {
    name: 'Peggy Notebaert Nature Museum',
    description:
      "Modernised the museum's digital presence to enhance user experience, focusing on content-rich storytelling to drive community participation in conservation research and events.",
    urls: [
      {
        label: 'naturemuseum.org',
        href: 'https://naturemuseum.org/',
      },
    ],
    keywords: ['UX', 'storytelling', 'museum', 'conservation'],
  },
  {
    name: 'First Lady & Cruise Chicago',
    description:
      "Delivered high-performance web solutions for Chicago's premier river cruise lines, focusing on conversion-optimised booking flows and scalable architecture for high-traffic tourism sites.",
    urls: [
      {
        label: 'firstlady.com',
        href: 'https://firstlady.com',
      },
    ],
    keywords: ['performance', 'booking flows', 'tourism', 'conversion'],
  },
  {
    name: 'Artist Assembly',
    description:
      'Built a centralized event management and registration platform for national artist fellows, ensuring a seamless user journey for high-profile cultural convenings.',
    urls: [
      {
        label: 'artistassembly.org',
        href: 'https://www.artistassembly.org/',
      },
    ],
    keywords: ['event management', 'registration', 'user journey'],
  },
  {
    name: 'Motorq',
    description:
      'Developed front-end architecture for a vehicle intelligence platform, translating complex, real-time automotive OEM data into intuitive, actionable insights for enterprise fleets.',
    urls: [
      {
        label: 'motorq.com',
        href: 'https://motorq.com/',
      },
    ],
    keywords: ['front-end architecture', 'OEM data', 'fleet intelligence'],
  },
  {
    name: 'Illinois Stop Hate',
    description:
      'Developed an accessible, mission-driven digital resource hub to facilitate community reporting and provide critical educational materials regarding social justice.',
    urls: [
      {
        label: 'ilstophate.org',
        href: 'https://ilstophate.org/',
      },
    ],
    keywords: ['accessibility', 'resource hub', 'social justice'],
  },
];
