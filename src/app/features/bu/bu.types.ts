export type BuKey = 'firefighting-training' | 'ppe' | 'hrd' | 'waste-management';

export interface CtaLink {
  label: string;
  link: string;
  queryParams?: Record<string, any>; // ✅ เพิ่ม
}

export interface BuConfig {
  key: BuKey;
  title: string;
  tagline: string;
  heroImage: string;
  primaryCta: CtaLink;              
  secondaryCta?: CtaLink;           
  painSolutions: Array<{ title: string; desc: string; }>;
  previewItems: Array<{ title: string; desc: string; link: string; }>;
  process: Array<{ title: string; desc: string; }>;
  faqs: Array<{ q: string; a: string; }>;
}
