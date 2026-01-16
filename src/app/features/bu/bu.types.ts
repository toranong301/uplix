export type BuKey = 'learning' | 'ppe' | 'waste';

export interface CtaLink {
  label: string;
  link: string;
  queryParams?: Record<string, any>;
}

export interface ServiceItem {
  key: string;               // ✅ เพิ่ม: slug/route key เช่น 'basic-fire-fighting'
  title: string;
  desc: string;

  // CTA
  link?: string;
  queryParams?: Record<string, any>;
  ctaLabel?: string;
  enabled?: boolean;
  badge?: string;

  // ✅ optional: หน้า detail จะเอาไปแสดงเพิ่มได้
  heroImage?: string;
  bullets?: string[];        // i18n keys ก็ได้
  notes?: string;            // i18n key
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
