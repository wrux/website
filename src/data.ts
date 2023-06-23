export const description = `I'm Callum, a Frontend Engineer from the United Kingdom. I love anything frontend, focusing on design systems, accessibility and browser performance.`;

export const jobs: Array<Job> = [
  {
    company: 'Transom Design',
    location: 'Seattle, USA',
    tenure: '2022 - Present',
    title: 'Design System Engineer',
  },
  {
    company: 'DEPT®',
    location: 'London, United Kingdom',
    tenure: '2021 - 2022',
    title: 'Frontend Engineer',
  },
  {
    company: 'netzstrategen',
    location: 'Barcelona, Spain',
    tenure: '2019 - 2021',
    title: 'Frontend Developer',
  },
  {
    company: 'LFA Machines',
    location: 'Oxford, United Kingdom',
    tenure: '2014 - 2019',
    title: 'Full Stack Developer',
  },
];

export const links: Array<Link> = [
  {
    description: `My GitHub profile with various public repositories, including the  source
      code for <a href="https://github.com/wrux/website" target="_blank" rel="nofollow noreferer" class="link">this website<span class="sr-only"> (opens in new tab)</span></a> built with AstroJS and Tailwind.`,
    href: 'https://github.com/wrux',
    name: 'Github',
    newTab: true,
    text: 'View my Github profile',
  },
  {
    href: 'https://www.linkedin.com/in/callum-bonnyman',
    name: 'LinkedIn',
    newTab: true,
    text: 'View my LinkedIn profile',
  },
  {
    href: 'https://www.instagram.com/etocallum/',
    name: 'Instagram',
    newTab: true,
    text: 'Follow me on Instagram',
  },
  {
    description:
      'My travel blog of experiences from many countries all around the world. Sadly there has not been much to write about recently.',
    href: 'https://bloke.blog/',
    name: 'Blog',
    newTab: true,
    text: 'Check out my blog',
  },
];

export const services: Array<{
  description: string;
  icon: string;
  title: string;
}> = [
  {
    description:
      'We offer website design and development services that help businesses create a strong online presence.',
    icon: 'code',
    title: 'Website Design and Development',
  },
  {
    title: 'E-commerce Development',
    icon: 'commerce',
    description:
      'We offer e-commerce development services that help businesses create and manage successful online stores.',
  },
  {
    title: 'Content Management Systems (CMS)',
    icon: 'text',
    description:
      'We offer CMS services that help businesses  easily create, manage, and update their website content.',
  },
  {
    title: 'Web Hosting',
    icon: 'web',
    description:
      'We offer web hosting services that help businesses get their websites online and keep them running smoothly.',
  },
  {
    title: 'Search Engine Optimisation (SEO)',
    icon: 'search',
    description:
      "We offer SEO services that help businesses improve their website's visibility in search engines, resulting in more traffic and leads.",
  },
  {
    title: 'Website Accessibility Compliance',
    icon: 'accessibility',
    description:
      'We offer website accessibility compliance services that help businesses ensure their websites are accessible to people with disabilities, in accordance with the recommended guidelines.',
  },
];

export const recentWork: Array<Project> = [
  {
    description:
      'Built and managed the corporate site for Motorq.com using React, NextJS and Sanity CMS.',
    href: 'https://motorq.com/',
    name: 'Motorq',
    image: '/assets/projects/motorq.png',
  },
  {
    description:
      'I built numerous satellite sites ontop of a custom design system and CMS shared across all projects.',
    href: 'https://ethanstowellrestaurants.com/restaurants/quick',
    name: 'Ethan Stowell Restaurant Satellite Sites',
    image: '/assets/projects/esr.png',
  },
  {
    description:
      'Catalog website built with Tailwind, Typescript and CraftCMS.',
    href: 'https://schweickert.de/',
    name: 'Schweickert',
    image: '/assets/projects/schweickert.png',
  },
  {
    description:
      'Catalog website for health care professionals built with WordPress.',
    href: 'https://www.mental-aktiv.de/',
    name: 'Mental Aktiv',
    image: '/assets/projects/mental-aktiv.png',
  },
  {
    description:
      'Regional news website in Germany built on an enterprise news platform with over 100,000 articles.',
    href: 'https://bnn.de/',
    name: 'Badische Neueste Nachrichten',
    image: '/assets/projects/bnn.png',
  },
];
