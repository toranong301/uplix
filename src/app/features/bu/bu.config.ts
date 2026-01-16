import { BuConfig } from './bu.types';

export const BU: Record<string, BuConfig> = {
  learning: {
    key: 'learning',
    title: 'bu.learning.title',
    tagline: 'bu.learning.tagline',
    heroImage: 'assets/hero/learning.png',

    primaryCta: { label: 'common.request_quote', link: '/quote', queryParams: { bu: 'learning' } },

    painSolutions: [
      { title: 'bu.learning.pain.1.title', desc: 'bu.learning.pain.1.desc' },
      { title: 'bu.learning.pain.2.title', desc: 'bu.learning.pain.2.desc' },
      { title: 'bu.learning.pain.3.title', desc: 'bu.learning.pain.3.desc' },
    ],

    serviceGroups: [
      {
        title: 'bu.learning.groups.11.title',
        items: [
          {
            key: 'learning-program',
            title: 'bu.learning.groups.11.items.111.title',
            desc: 'bu.learning.groups.11.items.111.desc',
            enabled: true,
            link: '/bu/learning/service/learning-program',
            ctaLabel: 'common.view_detail'
          },
        ]
      },
      {
        title: 'bu.learning.groups.12.title',
        items: [
          {
            key: 'she-academy',
            title: 'bu.learning.groups.12.items.1.title',
            desc: 'bu.learning.groups.12.items.1.desc',
            enabled: true,
            link: '/bu/learning/service/she-academy',
            ctaLabel: 'common.view_detail'
          },
        ]
      },
      {
        title: 'bu.learning.groups.13.title',
        items: [
          {
            key: 'fire-drill-evacuation',
            title: 'bu.learning.groups.13.items.2.title',
            desc: 'bu.learning.groups.13.items.2.desc',
            enabled: true,
            link: '/bu/learning/service/fire-drill-evacuation',
            ctaLabel: 'common.view_detail'
          },
      
        ]
      },
      {
        title: 'bu.learning.groups.14.title',
        items: [
          {
            key: 'people-engagement-program',
            title: 'bu.learning.groups.14.items.141.title',
            desc: 'bu.learning.groups.14.items.141.desc',
            enabled: true,
            link: '/bu/learning/service/people-engagement-program',
            ctaLabel: 'common.view_detail'
          },
          {
            key: 'idp-compass-platform',
            title: 'bu.learning.groups.14.items.142.title',
            desc: 'bu.learning.groups.14.items.142.desc',
            enabled: true,
            link: '/bu/learning/service/idp-compass-platform',
            ctaLabel: 'common.view_detail'
          },
        ]
      }
    ],

    process: [
      { title: 'bu.learning.process.1.title', desc: 'bu.learning.process.1.desc' },
      { title: 'bu.learning.process.2.title', desc: 'bu.learning.process.2.desc' },
      { title: 'bu.learning.process.3.title', desc: 'bu.learning.process.3.desc' },
      { title: 'bu.learning.process.4.title', desc: 'bu.learning.process.4.desc' },
    ],

    faqs: [
      { q: 'bu.learning.faq.1.q', a: 'bu.learning.faq.1.a' },
      { q: 'bu.learning.faq.2.q', a: 'bu.learning.faq.2.a' },
    ],
  },

  ppe: {
    key: 'ppe',
    title: 'bu.ppe.title',
    tagline: 'bu.ppe.tagline',
    heroImage: 'assets/hero/ppe.jpg',

    primaryCta: { label: 'common.request_quote', link: '/quote', queryParams: { bu: 'ppe' } },
    secondaryCta: { label: 'bu.ppe.catalog', link: '/downloads/2025-PPE-Catalogue-UPLIX-Safety.pdf' },

    painSolutions: [
      { title: 'bu.ppe.pain.1.title', desc: 'bu.ppe.pain.1.desc' },
      { title: 'bu.ppe.pain.2.title', desc: 'bu.ppe.pain.2.desc' },
      { title: 'bu.ppe.pain.3.title', desc: 'bu.ppe.pain.3.desc' },
    ],

    serviceGroups: [
      {
        title: 'bu.ppe.groups.ppe.title',
        items: [
          {
            key: 'head-protection',
            title: 'bu.ppe.items.head.title',
            desc: 'bu.ppe.items.head.desc',
            enabled: true,
            link: '/bu/ppe/head-protection',
            ctaLabel: 'common.view_detail'
          },
          {
            key: 'respiratory',
            title: 'bu.ppe.items.respiratory.title',
            desc: 'bu.ppe.items.respiratory.desc',
            enabled: true,
            link: '/quote',
            queryParams: { bu: 'ppe', cat: 'ppe.respiratory' },
            ctaLabel: 'common.view_detail'
          },
          {
            key: 'eye-face',
            title: 'bu.ppe.items.eye_face.title',
            desc: 'bu.ppe.items.eye_face.desc',
            enabled: true,
            link: '/quote',
            queryParams: { bu: 'ppe', cat: 'ppe.eye_face' },
            ctaLabel: 'common.view_detail'
          },
          {
            key: 'hand-foot',
            title: 'bu.ppe.items.hand_foot.title',
            desc: 'bu.ppe.items.hand_foot.desc',
            enabled: true,
            link: '/quote',
            queryParams: { bu: 'ppe', cat: 'ppe.hand_foot' },
            ctaLabel: 'common.view_detail'
          },
          {
            key: 'fall-protection',
            title: 'bu.ppe.items.fall.title',
            desc: 'bu.ppe.items.fall.desc',
            enabled: true,
            link: '/quote',
            queryParams: { bu: 'ppe', cat: 'ppe.fall' },
            ctaLabel: 'common.view_detail'
          },
          {
            key: 'energy-electrical',
            title: 'bu.ppe.items.energy.title',
            desc: 'bu.ppe.items.energy.desc',
            enabled: true,
            link: '/quote',
            queryParams: { bu: 'ppe', cat: 'ppe.energy_electrical' },
            ctaLabel: 'common.view_detail'
          },
          {
            key: 'hygiene',
            title: 'bu.ppe.items.hygiene.title',
            desc: 'bu.ppe.items.hygiene.desc',
            enabled: true,
            link: '/quote',
            queryParams: { bu: 'ppe', cat: 'ppe.hygiene' },
            ctaLabel: 'common.view_detail'
          }
        ]
      },
      {
        title: 'bu.ppe.groups.fire.title',
        items: [
          {
            key: 'fire-tank',
            title: 'bu.ppe.items.fire_tank.title',
            desc: 'bu.ppe.items.fire_tank.desc',
            enabled: true,
            link: '/bu/ppe/fire-tank',
            queryParams: { bu: 'ppe', cat: 'ppe.fire_tank' },
            ctaLabel: 'common.view_detail'
          },
          {
            key: 'refill-service',
            title: 'bu.ppe.items.refill_service.title',
            desc: 'bu.ppe.items.refill_service.desc',
            enabled: true,
            link: '/bu/ppe/refill-service',
            queryParams: { bu: 'ppe', cat: 'ppe.refill_service' },
            ctaLabel: 'common.view_detail'
          }
        ]
      }
    ],

    process: [
      { title: 'bu.ppe.process.1.title', desc: 'bu.ppe.process.1.desc' },
      { title: 'bu.ppe.process.2.title', desc: 'bu.ppe.process.2.desc' },
      { title: 'bu.ppe.process.3.title', desc: 'bu.ppe.process.3.desc' },
    ],

    faqs: [
      { q: 'bu.ppe.faq.1.q', a: 'bu.ppe.faq.1.a' },
      { q: 'bu.ppe.faq.2.q', a: 'bu.ppe.faq.2.a' },
    ],
  },

  waste: {
    key: 'waste',
    title: 'bu.waste.title',
    tagline: 'bu.waste.tagline',
    heroImage: 'assets/hero/waste.png',

    primaryCta: { label: 'common.request_quote', link: '/quote', queryParams: { bu: 'waste' } },

    painSolutions: [
      { title: 'bu.waste.pain.1.title', desc: 'bu.waste.pain.1.desc' },
      { title: 'bu.waste.pain.2.title', desc: 'bu.waste.pain.2.desc' },
      { title: 'bu.waste.pain.3.title', desc: 'bu.waste.pain.3.desc' },
    ],

    serviceGroups: [
      {
        title: 'bu.waste.groups.31.title',
        items: [
          {
            key: 'non-hazardous-waste',
            title: 'bu.waste.groups.31.items.1.title',
            desc: 'bu.waste.groups.31.items.1.desc',
            enabled: true,
            link: '/bu/waste/service/non-hazardous-waste',
            ctaLabel: 'common.view_detail'
          },
        ]
      },
      {
        title: 'bu.waste.groups.32.title',
        items: [
          {
            key: 'hazardous-waste',
            title: 'bu.waste.groups.32.items.1.title',
            desc: 'bu.waste.groups.32.items.1.desc',
            enabled: true,
            link: '/bu/waste/service/hazardous-waste',
            ctaLabel: 'common.view_detail'
          },
        ]
      },
      {
        title: 'bu.waste.groups.33.title',
        items: [
          {
            key: 'waste-logistics-transport',
            title: 'bu.waste.groups.33.items.1.title',
            desc: 'bu.waste.groups.33.items.1.desc',
            enabled: true,
            link: '/bu/waste/service/waste-logistics-transport',
            ctaLabel: 'common.view_detail'
          },
        ]
      },
    ],

    process: [
      { title: 'bu.waste.process.1.title', desc: 'bu.waste.process.1.desc' },
      { title: 'bu.waste.process.2.title', desc: 'bu.waste.process.2.desc' },
      { title: 'bu.waste.process.3.title', desc: 'bu.waste.process.3.desc' },
    ],

    faqs: [
      { q: 'bu.waste.faq.1.q', a: 'bu.waste.faq.1.a' },
      { q: 'bu.waste.faq.2.q', a: 'bu.waste.faq.2.a' },
    ],
  },
};
