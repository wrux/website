export {};

declare global {
  export type Link = {
    description?: string;
    href: string;
    icon?: string;
    name: string;
    rel?: string;
    text: string;
  };
}
