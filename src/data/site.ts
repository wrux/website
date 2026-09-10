/** URL to this site's public source code repository */
export const sourceUrl = 'https://github.com/wrux/website';

export const person = {
  name: 'Callum Bonnyman',
  role: 'Senior Frontend Engineer',
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
    'Senior Frontend Engineer with 12 years shipping production web products in React and TypeScript. At DEPT I built the Triumph Motorcycles parts finder micro-frontend, and since 2022 I have taken three products of my own, kacet, Banburyshire and blot.tools, from idea to production. I specialise in codebases that stay maintainable: design systems and component libraries, content platforms on Next.js, Sanity and Craft CMS, and turning a rough brief into a shipped MVP. I own the frontend end to end, from architecture and tooling through accessibility, performance and release, working closely with designers, backend engineers and stakeholders.',
  bio: 'When I’m not coding, I enjoy exploring new tech and traveling the world while posting occasionally on callum.co.uk.',
  skills: [
    'TypeScript',
    'JavaScript',
    'React',
    'Next.js',
    'Astro',
    'HTML',
    'CSS',
    'Tailwind CSS',
    'Node.js',
    'Design systems',
    'Component libraries',
    'Storybook',
    'Accessibility',
    'Web performance',
    'Micro-frontends',
    'Turborepo',
    'TanStack Start',
    'React Query',
    'GraphQL',
    'REST APIs',
    'Supabase',
    'Sanity',
    'Craft CMS',
    'Vercel',
    'Rust',
    'WebAssembly',
    'Cloudflare Workers',
  ],
};

/**
 * The three or four strongest, most concrete pieces of evidence on the CV.
 * These sit directly under the summary so a reader gets them in the first
 * ten seconds. Keep them specific: named brands, named systems, real scope.
 */
export const cvHighlights = [
  'Built and expanded the bnn.de design system and component library at netzstrategen, giving the team one shared, accessible component set to ship pages from.',
  'Built the Triumph Motorcycles parts finder, a customer-facing React and TypeScript micro-frontend integrated with .NET catalogue APIs, live on triumphmotorcycles.com.',
  'Took kacet.com, a freelance marketplace, from concept to a deployable MVP: Next.js and TanStack Start in a Turborepo monorepo with Supabase, Storybook and Vercel.',
  'Built banburyshire.com in Rust compiled to WebAssembly on Cloudflare Workers, with a custom PostgreSQL backend and a bespoke design system; all client-side interactivity runs through sigmx, my own micro frontend library, in under 10 kB.',
  'Over five years at LFA Machines, led development of the Laravel ERP and manufacturing platform that ran the company’s operations, stock and production, alongside its Magento 2 storefront.',
];

export const cvSkillGroups = [
  {
    name: 'Core',
    skills: [
      'TypeScript',
      'JavaScript',
      'React',
      'Next.js',
      'Astro',
      'HTML',
      'CSS',
      'Tailwind CSS',
      'styled-components',
      'Node.js',
      'Rust (WebAssembly)',
    ],
  },
  {
    name: 'Architecture & tooling',
    skills: [
      'Design systems',
      'Component libraries',
      'Design tokens',
      'Storybook',
      'Turborepo monorepos',
      'Micro-frontends',
      'sigmx (own micro frontend library)',
      'Vite',
    ],
  },
  {
    name: 'Data & platforms',
    skills: [
      'REST and GraphQL APIs',
      'React Query',
      'TanStack Start',
      'Supabase',
      'PostgreSQL',
      'Sanity',
      'Craft CMS',
      'WordPress',
      'Magento 2',
      'Laravel',
      'Vercel',
      'Cloudflare Workers',
    ],
  },
  {
    name: 'Quality',
    skills: [
      'Accessibility',
      'Web performance',
      'Responsive design',
      'SEO-aware content architecture',
      'Incremental static regeneration',
    ],
  },
  {
    name: 'Also used',
    skills: [
      'HTMX',
      'Alpine.js',
      'GSAP',
      'Datastar',
      'PHP',
      '.NET API integration',
      'Resend',
      'shadcn/ui',
    ],
  },
];

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
  {
    degree: 'BTEC National Diploma in IT',
    institution: 'Oxford Cherwell Valley College',
    location: 'Oxford, UK',
    period: '2008 - 2010',
    summary: 'Graduated with a Distinction.',
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

/**
 * Selected work shown on the CV. One sentence each: what it is, what I did,
 * why it mattered. The stack list is what a reader would want to confirm.
 */
export const professionalPortfolio = [
  {
    name: 'kacet',
    kind: 'Own product',
    subtitle: 'kacet.com',
    description:
      'Freelance marketplace with smart-contract settlement, built from concept to MVP: onboarding, marketplace and transaction flows on Next.js, TanStack Start and Supabase in a Turborepo monorepo.',
    urls: [{ label: 'kacet.com', href: 'https://kacet.com/' }],
    skills: [
      'Next.js',
      'TanStack Start',
      'TypeScript',
      'Supabase',
      'Turborepo',
      'Storybook',
      'Tailwind CSS',
      'Vercel',
    ],
  },
  {
    name: 'Banburyshire',
    kind: 'Own product',
    subtitle: 'banburyshire.com',
    description:
      'Local guide and content platform I founded and run: Rust compiled to WebAssembly on Cloudflare Workers, a custom PostgreSQL backend and a bespoke design system. All client-side interactivity runs through sigmx, my own micro frontend library, in under 10 kB.',
    urls: [
      { label: 'banburyshire.com', href: 'https://banburyshire.com/' },
      { label: 'github.com/wrux/sigmx', href: 'https://github.com/wrux/sigmx' },
    ],
    skills: [
      'Rust',
      'WebAssembly',
      'Cloudflare Workers',
      'PostgreSQL',
      'sigmx',
      'Design systems',
      'SEO',
    ],
  },
  {
    name: 'blot.tools',
    kind: 'Own product',
    subtitle: 'blot.tools',
    description:
      'Suite of privacy-focused web tools launched in 2026, currently an AI agent and an email relay. A TanStack Start web app backed by a Rust and WebAssembly worker backend.',
    urls: [{ label: 'blot.tools', href: 'https://blot.tools/' }],
    skills: ['TanStack Start', 'React', 'TypeScript', 'Rust', 'WebAssembly'],
  },
  {
    name: 'Triumph Motorcycles Parts Finder',
    kind: 'Client work',
    subtitle: 'triumphmotorcycles.com',
    description:
      'Customer-facing parts discovery micro-frontend built at DEPT: React, TypeScript, Vite and styled-components over .NET catalogue APIs, embedded in the global Triumph site.',
    urls: [
      {
        label: 'triumphmotorcycles.com',
        href: 'https://www.triumphmotorcycles.com/shop-accessories/parts-bike-selection',
      },
    ],
    skills: [
      'React',
      'TypeScript',
      'Vite',
      'styled-components',
      'Micro-frontends',
      '.NET APIs',
    ],
  },
  {
    name: 'Illinois Humanities',
    kind: 'Client work',
    subtitle: 'ilhumanities.org',
    description:
      'Public Craft CMS platform for grants, programmes and community content for a state-wide cultural organisation, with accessibility and content structure treated as first-class requirements.',
    urls: [{ label: 'ilhumanities.org', href: 'https://ilhumanities.org/' }],
    skills: ['Craft CMS', 'Tailwind CSS', 'HTMX', 'Alpine.js', 'Accessibility'],
  },
  {
    name: 'Peggy Notebaert Nature Museum',
    kind: 'Client work',
    subtitle: 'naturemuseum.org',
    description:
      'Content-rich Craft CMS frontend covering exhibitions, events and conservation research, with publishing workflows the museum’s own team maintains.',
    urls: [{ label: 'naturemuseum.org', href: 'https://naturemuseum.org/' }],
    skills: ['Craft CMS', 'Tailwind CSS', 'HTMX', 'Alpine.js'],
  },
  {
    name: 'First Lady & Cruise Chicago',
    kind: 'Client work',
    subtitle: 'firstlady.com',
    description:
      'High-traffic tourism frontends for two Chicago river cruise brands, focused on conversion-oriented booking journeys and a content architecture that scales across sites.',
    urls: [{ label: 'firstlady.com', href: 'https://firstlady.com' }],
    skills: ['Craft CMS', 'Tailwind CSS', 'HTMX', 'Alpine.js'],
  },
];

/** Content for the bento home page. Short, specific, no filler. */
export const home = {
  headline: 'Hi, I’m Callum.',
  intro:
    'I’m a senior frontend engineer in Oxford with twelve years of experience. I’ve built the Triumph Motorcycles parts finder and launched two products of my own, blot.tools and kacet. Most of my work is React and TypeScript, with Rust when the bundle has to be small.',
  status: {
    label: 'Open to roles',
    detail: 'Senior frontend, remote or Oxford.',
  },
  latest: {
    name: 'blot.tools',
    href: 'https://blot.tools/',
    blurb:
      'Privacy-focused web tools. TanStack Start on a Rust and WebAssembly worker backend.',
    /** Blot's warm black with its blurred serif "Nothing" motif, drawn in CSS. */
    brand: {
      motif: 'Nothing',
      overlay: '#121110',
      fg: '#ffffff',
      muted: '#b8b4ad',
      accent: '#ffffff',
    },
  },
  products: [
    {
      name: 'Banburyshire',
      href: 'https://banburyshire.com/',
      blurb:
        'Rust compiled to WebAssembly on Cloudflare Workers. sigmx handles every interaction in under 10 kB.',
      /** Their own hero photograph, under an olive-to-transparent gradient. */
      brand: {
        image: 'banburyshire',
        overlay: '#2f3a24',
        fg: '#f3eddb',
        muted: '#dfe2cf',
        accent: '#e4d08a',
      },
    },
    {
      name: 'kacet',
      href: 'https://kacet.com/',
      blurb:
        'Freelance marketplace with smart-contract settlement, concept to MVP.',
      /** Their halftone hero field, under a black-to-transparent gradient. */
      brand: {
        image: 'kacet',
        overlay: '#050505',
        fg: '#ffffff',
        muted: '#bdbdbd',
        accent: '#3d7bff',
      },
    },
  ],
  clientWork: [
    {
      name: 'Illinois Humanities',
      href: 'https://ilhumanities.org/',
      meta: 'Cultural nonprofit · Craft CMS',
    },
    {
      name: 'Peggy Notebaert Nature Museum',
      href: 'https://naturemuseum.org/',
      meta: 'Museum · Craft CMS',
    },
    {
      name: 'First Lady & Cruise Chicago',
      href: 'https://firstlady.com',
      meta: 'Tourism · Craft CMS',
    },
    {
      name: 'Triumph Motorcycles parts finder',
      href: 'https://www.triumphmotorcycles.com/shop-accessories/parts-bike-selection',
      meta: 'DEPT · React micro-frontend',
    },
  ],
  stack: [
    'TypeScript',
    'React',
    'Next.js',
    'Astro',
    'TanStack Start',
    'Rust',
    'WebAssembly',
    'Cloudflare Workers',
    'PostgreSQL',
    'Sanity',
    'Craft CMS',
    'Storybook',
    'Tailwind CSS',
  ],
  offTheClock: [
    {
      name: 'callum.co.uk',
      href: 'https://callum.co.uk/',
      blurb: 'Travel notes, posted occasionally.',
    },
    {
      name: 'manhole.gallery',
      href: 'https://manhole.gallery/',
      blurb: 'Manhole covers spotted around the world.',
    },
    {
      name: 'perpetual.pizza',
      href: 'https://perpetual.pizza/',
      blurb: 'The never-ending pizza, a decade-old joke.',
    },
  ],
};
