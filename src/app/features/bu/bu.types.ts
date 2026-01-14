export type BuKey = 'learning' | 'ppe' | 'waste';

export interface CtaLink {
  label: string;
  link: string;
  queryParams?: Record<string, any>;
}

export interface ServiceItem {
  title: string;
  desc: string;
  link?: string;
  queryParams?: Record<string, any>;
  ctaLabel?: string;
  enabled?: boolean;
  badge?: string;
}

export interface ServiceGroup {
  title: string;
  items: ServiceItem[];
}

export interface BuConfig {
  key: BuKey;
  title: string;
  tagline: string;
  heroImage: string;
  primaryCta: CtaLink;
  secondaryCta?: CtaLink;
  painSolutions: Array<{ title: string; desc: string }>;
  serviceGroups: ServiceGroup[];  
  process: Array<{ title: string; desc: string }>;
  faqs: Array<{ q: string; a: string }>;
}