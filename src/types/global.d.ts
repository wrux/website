import { SanityImageAssetDocument } from '@sanity/client';

export {};

declare global {
  type job = {
    company: string;
    location: string;
    title: string;
    period: string;
  };
}
