export type BuKey = 'firefighting-training' | 'ppe' | 'hrd' | 'waste-management';

export interface BuConfig {
  key: BuKey;
  title: string;
  tagline: string;
  heroImage: string;
  primaryCta: { label: string; link: string; };
  secondaryCta?: { label: string; link: string; };

  painSolutions: Array<{ title: string; desc: string; }>;
  previewItems: Array<{ title: string; desc: string; link: string; }>;
  process: Array<{ title: string; desc: string; }>;
  faqs: Array<{ q: string; a: string; }>;
}
