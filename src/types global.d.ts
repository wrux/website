export {};

declare global {
  type Job = {
    company: string;
    location: string;
    summary?: string;
    tenure: string;
    title: string;
  };

  export type Link = {
    description?: string;
    href: string;
    icon?: string;
    name: string;
    rel?: string;
    text: string;
  };

  export type Project = {
    description?: string;
    href: string;
    name: string;
    image: string;
  };
}
