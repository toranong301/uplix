export type NavLink = {
  labelKey: string;
  path: string;
  descKey?: string;
  external?: boolean;
};

export type NavGroup = {
  titleKey: string;
  links: NavLink[];
};

export type NavItem = {
  key: string;
  labelKey: string;
  path: string;
  descKey: string;
  groups?: NavGroup[];
};

export const NAV_ITEMS: NavItem[] = [
  {
    key: 'home',
    labelKey: 'nav.home',
    path: '/home',
    descKey: 'nav_desc.home',
    groups: [
      {
        titleKey: 'nav_groups.highlights',
        links: [
          { labelKey: 'nav_links.home.kpi', path: '/home#kpi' },
          { labelKey: 'nav_links.home.products', path: '/home#products' },
          { labelKey: 'nav_links.home.updates', path: '/home#updates' },
        ],
      },
    ],
  },
  {
    key: 'about',
    labelKey: 'nav.about',
    path: '/about',
    descKey: 'nav_desc.about',
    groups: [
      {
        titleKey: 'nav_groups.company',
        links: [
          { labelKey: 'nav_links.about.overview', path: '/about#overview' },
          { labelKey: 'nav_links.about.values', path: '/about#values' },
          { labelKey: 'nav_links.about.milestones', path: '/about#milestones' },
        ],
      },
    ],
  },
  {
    key: 'products-services',
    labelKey: 'nav.products_services',
    path: '/bu/learning',
    descKey: 'nav_desc.products_services',
    groups: [
      {
        titleKey: 'nav_groups.business_units',
        links: [
          { labelKey: 'nav_links.products.learning', path: '/bu/learning' },
          { labelKey: 'nav_links.products.ppe', path: '/bu/ppe' },
          { labelKey: 'nav_links.products.waste', path: '/bu/waste' },
        ],
      },
    ],
  },
  {
    key: 'investor-relations',
    labelKey: 'nav.investor_relations',
    path: '/investor-relations',
    descKey: 'nav_desc.investor_relations',
    groups: [
      {
        titleKey: 'nav_groups.investor',
        links: [
          { labelKey: 'nav_links.ir.latest_docs', path: '/investor-relations#latest-docs' },
          { labelKey: 'nav_links.ir.set', path: '/investor-relations#set' },
          { labelKey: 'nav_links.ir.press', path: '/investor-relations#press' },
        ],
      },
    ],
  },
  {
    key: 'corporate-governance',
    labelKey: 'nav.corporate_governance',
    path: '/corporate-governance',
    descKey: 'nav_desc.corporate_governance',
    groups: [
      {
        titleKey: 'nav_groups.governance',
        links: [
          { labelKey: 'nav_links.gov.policies', path: '/corporate-governance#policies' },
          { labelKey: 'nav_links.gov.board', path: '/corporate-governance#board' },
          { labelKey: 'nav_links.gov.committees', path: '/corporate-governance#committees' },
        ],
      },
    ],
  },
  {
    key: 'sustainability',
    labelKey: 'nav.sustainability',
    path: '/sustainability',
    descKey: 'nav_desc.sustainability',
    groups: [
      {
        titleKey: 'nav_groups.sustainability',
        links: [
          { labelKey: 'nav_links.sustainability.social', path: '/sustainability#social' },
          { labelKey: 'nav_links.sustainability.governance', path: '/sustainability#governance' },
          { labelKey: 'nav_links.sustainability.environment', path: '/sustainability#environment' },
        ],
      },
    ],
  },
  {
    key: 'news-articles',
    labelKey: 'nav.news_articles',
    path: '/news-and-articles',
    descKey: 'nav_desc.news_articles',
    groups: [
      {
        titleKey: 'nav_groups.news',
        links: [
          { labelKey: 'nav_links.news.company', path: '/news-and-articles#company' },
          { labelKey: 'nav_links.news.investor', path: '/news-and-articles#investor' },
          { labelKey: 'nav_links.news.sustainability', path: '/news-and-articles#sustainability' },
        ],
      },
    ],
  },
  {
    key: 'careers',
    labelKey: 'nav.careers',
    path: '/careers',
    descKey: 'nav_desc.careers',
    groups: [
      {
        titleKey: 'nav_groups.careers',
        links: [
          { labelKey: 'nav_links.careers.openings', path: '/careers#openings' },
          { labelKey: 'nav_links.careers.benefits', path: '/careers#benefits' },
          { labelKey: 'nav_links.careers.life', path: '/careers#life' },
        ],
      },
    ],
  },
  {
    key: 'information-inquiry',
    labelKey: 'nav.information_inquiry',
    path: '/information-inquiry',
    descKey: 'nav_desc.information_inquiry',
    groups: [
      {
        titleKey: 'nav_groups.inquiry',
        links: [
          { labelKey: 'nav_links.inquiry.form', path: '/information-inquiry/inquiry-form' },
          { labelKey: 'nav_links.inquiry.contact', path: '/information-inquiry#contact' },
        ],
      },
    ],
  },
];

export const POLICY_LINKS: NavLink[] = [
  { labelKey: 'footer.terms', path: '/terms' },
  { labelKey: 'footer.privacy', path: '/privacy' },
  { labelKey: 'footer.cookie', path: '/cookie-policy' },
  { labelKey: 'footer.sitemap', path: '/sitemap' },
];
