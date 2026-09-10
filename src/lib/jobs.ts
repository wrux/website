import type { CollectionEntry } from 'astro:content';

export type Job = CollectionEntry<'jobs'>;
export type Tenure = { from: string; to: string | null };

/** Dates in the jobs collection are written DD-MM-YYYY. */
export const parseDate = (value: string) => {
  const [day, month, year] = value.split('-').map(Number);
  return new Date(Date.UTC(year, month - 1, day));
};

export const formatMonthYear = (value: string) =>
  new Intl.DateTimeFormat('en-GB', {
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(parseDate(value));

export const formatISODate = (value: string) =>
  parseDate(value).toISOString().slice(0, 10);

/** "Jun 2022 – Present" */
export const formatTenure = (tenure: Tenure) => {
  const from = formatMonthYear(tenure.from);
  const to = tenure.to ? formatMonthYear(tenure.to) : 'Present';
  return `${from} – ${to}`;
};

/** "2022 – Present", "2014 – 2019" */
export const formatYearRange = (tenure: Tenure) => {
  const from = parseDate(tenure.from).getUTCFullYear();
  if (!tenure.to) return `${from} – Present`;
  const to = parseDate(tenure.to).getUTCFullYear();
  return `${from} – ${to}`;
};

/** Most recent first; open-ended roles sort above finished ones. */
export const sortJobs = (jobs: Job[]) =>
  [...jobs].sort((a, b) => {
    const aTo = a.data.tenure.to
      ? parseDate(a.data.tenure.to).getTime()
      : Number.POSITIVE_INFINITY;
    const bTo = b.data.tenure.to
      ? parseDate(b.data.tenure.to).getTime()
      : Number.POSITIVE_INFINITY;
    if (aTo !== bTo) return bTo - aTo;
    return (
      parseDate(b.data.tenure.from).getTime() -
      parseDate(a.data.tenure.from).getTime()
    );
  });
