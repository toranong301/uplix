// src/app/features/bu/service-detail/service-detail.component.ts
import { CommonModule } from '@angular/common';
import { Component, DestroyRef, computed, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { BU } from '../bu.config';
import type { BuKey, ServiceItem } from '../bu.types';

type ServiceVm = {
  buKey: BuKey;
  buTitleKey: string;
  serviceKey: string;

  titleKey: string;
  descKey: string;

  badge?: string;
  heroImage?: string;
  bullets?: string[];
  notes?: string;

  queryParams?: Record<string, any>;
};

// ✅ เพิ่ม type ของหน้า Fire Training
type Pill = { titleKey: string; items: string[] };
type Stat = { valueKey: string; labelKey: string };
type TwoCol = { titleKey: string; descKey: string; image: string; ctaKey: string; ctaLink: string };

@Component({
  selector: 'uplix-service-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, TranslateModule],
  templateUrl: './service-detail.component.html',
  styleUrl: './service-detail.component.scss',
})
export class ServiceDetailComponent {
  private route = inject(ActivatedRoute);
  private destroyRef = inject(DestroyRef);

  buKey = signal<BuKey>('learning');
  serviceKey = signal<string>('');

  constructor() {
    this.route.paramMap
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(pm => {
        this.buKey.set((pm.get('bu') as BuKey) || 'learning');
        this.serviceKey.set(pm.get('serviceKey') ?? '');
      });
  }

  bu = computed(() => BU[this.buKey()]);

  service = computed<ServiceItem | null>(() => {
    const b = this.bu();
    const sk = this.serviceKey();
    if (!b || !sk) return null;

    for (const g of b.serviceGroups ?? []) {
      const found = (g.items ?? []).find(x => x.key === sk);
      if (found) return found;
    }
    return null;
  });

  vm = computed<ServiceVm | null>(() => {
    const b = this.bu();
    const s = this.service();
    if (!b || !s) return null;

    return {
      buKey: b.key,
      buTitleKey: b.title,
      serviceKey: s.key,
      titleKey: s.title,
      descKey: s.desc,
      badge: s.badge,
      heroImage: s.heroImage,
      bullets: s.bullets,
      notes: s.notes,
      queryParams: s.queryParams,
    };
  });

  backToBuLink = computed(() => `/bu/${this.buKey()}`);

  quoteQueryParams = computed(() => {
    const v = this.vm();
    if (!v) return { bu: this.buKey() };
    return v.queryParams ? { ...v.queryParams } : { bu: v.buKey };
  });

  // ===============================
  // ✅ Special page: Fire Training (reuse old component)
  // /bu/learning/service/fire-drill-evacuation
  // ===============================
  isFireTraining = computed(
    () => this.buKey() === 'learning' && this.serviceKey() === 'fire-drill-evacuation'
  );

  readonly fireHeroImage = 'assets/learning/fire-training-hero.jpg';
  readonly fireGalleryImage = 'assets/learning/fire-training-group.jpg';

  readonly featurePills = signal<Pill[]>([
    {
      titleKey: 'bu.learning.fire_training.pill_1.title',
      items: [
        'bu.learning.fire_training.pill_1.items.1',
        'bu.learning.fire_training.pill_1.items.2',
        'bu.learning.fire_training.pill_1.items.3',
      ],
    },
    {
      titleKey: 'bu.learning.fire_training.pill_2.title',
      items: [
        'bu.learning.fire_training.pill_2.items.1',
        'bu.learning.fire_training.pill_2.items.2',
        'bu.learning.fire_training.pill_2.items.3',
      ],
    },
    {
      titleKey: 'bu.learning.fire_training.pill_3.title',
      items: [
        'bu.learning.fire_training.pill_3.items.1',
        'bu.learning.fire_training.pill_3.items.2',
        'bu.learning.fire_training.pill_3.items.3',
      ],
    },
  ]);

  readonly stats = signal<Stat[]>([
    { valueKey: 'bu.learning.fire_training.stats.1.value', labelKey: 'bu.learning.fire_training.stats.1.label' },
    { valueKey: 'bu.learning.fire_training.stats.2.value', labelKey: 'bu.learning.fire_training.stats.2.label' },
    { valueKey: 'bu.learning.fire_training.stats.3.value', labelKey: 'bu.learning.fire_training.stats.3.label' },
  ]);

  readonly highlights = signal<TwoCol[]>([
    {
      titleKey: 'bu.learning.fire_training.highlights.1.title',
      descKey: 'bu.learning.fire_training.highlights.1.desc',
      image: 'assets/learning/fire-training-practice.jpg',
      ctaKey: 'bu.learning.fire_training.actions.view_outline',
      ctaLink: '#outline',
    },
    {
      titleKey: 'bu.learning.fire_training.highlights.2.title',
      descKey: 'bu.learning.fire_training.highlights.2.desc',
      image: 'assets/learning/fire-training-evac.png',
      ctaKey: 'bu.learning.fire_training.actions.view_outline',
      ctaLink: '#outline',
    },
  ]);

  readonly outline = signal<{ titleKey: string; points: string[] }[]>([
    {
      titleKey: 'bu.learning.fire_training.outline.1.title',
      points: [
        'bu.learning.fire_training.outline.1.points.1',
        'bu.learning.fire_training.outline.1.points.2',
        'bu.learning.fire_training.outline.1.points.3',
      ],
    },
    {
      titleKey: 'bu.learning.fire_training.outline.2.title',
      points: [
        'bu.learning.fire_training.outline.2.points.1',
        'bu.learning.fire_training.outline.2.points.2',
        'bu.learning.fire_training.outline.2.points.3',
      ],
    },
  ]);

  readonly faqs = signal<{ q: string; a: string }[]>([
    { q: 'bu.learning.fire_training.faq.1.q', a: 'bu.learning.fire_training.faq.1.a' },
    { q: 'bu.learning.fire_training.faq.2.q', a: 'bu.learning.fire_training.faq.2.a' },
    { q: 'bu.learning.fire_training.faq.3.q', a: 'bu.learning.fire_training.faq.3.a' },
  ]);

  readonly quoteLink = computed(() => ({
    link: '/quote',
    queryParams: { bu: 'learning', topic: 'bu.learning.fire_training' },
  }));
}
