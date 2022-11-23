export {};

declare global {
  type Job = {
    company: string;
    location: string;
    tenure: string;
    title: string;
  };

  export type Link = {
    description?: string;
    href: string;
    name: string;
    newTab?: boolean;
    text: string;
  };
}
