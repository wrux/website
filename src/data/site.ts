/** URL to this site's public source code repository */
export const sourceUrl = 'https://github.com/wrux/website';

export const person = {
  name: 'Callum Bonnyman',
  role: 'Software Engineer',
  location: 'Oxford, UK',
  website: 'https://wrux.com',
  blog: 'https://callum.co.uk',
  contact: {
    email: 'callum@wrux.com',
    phone: '+447789336625',
    linkedin: 'https://www.linkedin.com/in/wrux',
    github: 'https://github.com/wrux',
  },
  summary:
    "Software Engineer building production-ready React and Next.js web apps and marketing sites. Crafts design systems and component libraries, led Silent Night's library and created React micro-frontends for clients like Triumph Motorcycles and Jotun. Delivered multiple CraftCMS and Sanity/Next.js catalog sites and web apps using React, TypeScript, Tailwind, and Vite.",
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
    'Tanstack Start',
    'React Query',
    'GraphQL',
    'HTMX',
    'AlpineJS',
    'Datastar',
    'Vercel',
    'Supabase',
    'Sanity',
    'Problem solving',
    'Critical thinking',
    'Attention to detail',
    'Flexibility',
  ],
};

export const socialLinks = [
  {
    name: 'website' as const,
    href: 'https://wrux.com',
    label: 'Website',
  },
  {
    name: 'blog' as const,
    href: 'https://callum.co.uk',
    label: 'Blog',
  },
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
    name: 'link' as const,
    href: 'https://perpetual.pizza',
    label: 'Perpetual Pizza',
  },
];

export const education = [
  {
    degree: 'BSc Computer Science',
    institution: 'University of Northampton',
    location: 'Northampton, UK',
    period: '2010 - 2013',
    summary: 'Graduated with a 2:1',
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
    subtitle: 'banburyshire.com',
    description:
      'Developing an independent digital guide and community platform for North Oxfordshire, leveraging high-conversion SEO strategies and modern content architecture to promote regional culture and tourism.',
    urls: [
      {
        label: 'banburyshire.com',
        href: 'https://banburyshire.com/',
      },
    ],
    skills: [
      'React',
      'TypeScript',
      'NextJS',
      'Turborepo',
      'SanityIO',
      'Vite',
      'React Query',
      'Tanstack tools',
      'Convex backend',
      'Resend',
      'ShadCN',
      'Tailwind',
      'Storybook',
      'Vercel',
    ],
  },
  {
    name: 'kacet',
    subtitle: 'kacet.com',
    description:
      'Currently architecting a specialised crypto freelance job marketplace, focusing on secure, high-performance transaction handling within the Web3 ecosystem.',
    urls: [
      {
        label: 'kacet.com',
        href: 'https://kacet.com/',
      },
    ],
    skills: [
      'React',
      'TypeScript',
      'NextJS',
      'Turborepo',
      'SanityIO',
      'Vite',
      'Tanstack Start',
      'Supabase backend',
      'Resend',
      'ShadCN',
      'Tailwind',
      'Storybook',
      'Vercel',
    ],
  },
  {
    name: 'Triumph Motorcycles Parts Finder',
    subtitle: 'triumphmotorcycles.com',
    description:
      'While at DEPT, I built a micro frontend React and TypeScript app with Vite and styled-components, querying a .NET backend for motorcycle parts catalogue data.',
    urls: [
      {
        label: 'Landing page',
        href: 'https://www.triumphmotorcycles.com/shop-accessories/parts-bike-selection',
      },
      {
        label: 'React app',
        href: 'https://www.triumphmotorcycles.com/shop-accessories/parts-bike-selection/parts-finder?&catalogPageId=25639&modelId=ZJ1&bikeId=f1f4c466-75be-439c-9f05-92c3c6e8a1d0',
      },
    ],
    skills: [
      'React',
      'TypeScript',
      'Vite',
      'styled-components',
      'micro frontend',
      '.NET backend',
    ],
  },
  {
    name: 'Illinois Humanities',
    subtitle: 'ilhumanities.org',
    description:
      'Designed and developed a public-facing digital platform to improve accessibility for state-wide cultural grants, programs, and community engagement initiatives.',
    urls: [
      {
        label: 'ilhumanities.org',
        href: 'https://ilhumanities.org/',
      },
    ],
    skills: ['CraftCMS', 'Tailwind', 'HTMX', 'AlpineJS'],
  },
  {
    name: 'Peggy Notebaert Nature Museum',
    subtitle: 'naturemuseum.org',
    description:
      "Modernised the museum's digital presence to enhance user experience, focusing on content-rich storytelling to drive community participation in conservation research and events.",
    urls: [
      {
        label: 'naturemuseum.org',
        href: 'https://naturemuseum.org/',
      },
    ],
    skills: ['CraftCMS', 'Tailwind', 'HTMX', 'AlpineJS'],
  },
  {
    name: 'First Lady & Cruise Chicago',
    subtitle: 'firstlady.com',
    description:
      "Delivered high-performance web solutions for Chicago's premier river cruise lines, focusing on conversion-optimised booking flows and scalable architecture for high-traffic tourism sites.",
    urls: [
      {
        label: 'firstlady.com',
        href: 'https://firstlady.com',
      },
    ],
    skills: ['CraftCMS', 'Tailwind', 'HTMX', 'AlpineJS'],
  },
  {
    name: 'Artist Assembly',
    subtitle: 'artistassembly.org',
    description:
      'Built a centralized event management and registration platform for national artist fellows, ensuring a seamless user journey for high-profile cultural convenings.',
    urls: [
      {
        label: 'artistassembly.org',
        href: 'https://www.artistassembly.org/',
      },
    ],
    skills: ['CraftCMS', 'GSAP', 'Tailwind', 'HTMX', 'AlpineJS'],
  },
];
