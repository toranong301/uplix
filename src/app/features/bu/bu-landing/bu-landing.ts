import { CommonModule } from '@angular/common';
import { Component, computed, DestroyRef, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { BU } from '../bu.config';

import { TranslateModule } from '@ngx-translate/core';
import { LangLinkPipe } from '../../../shared/pipes/lang-link.pipe';
import { CardGridComponent, GridCard } from '../../../shared/sections/card-grid/card-grid';
import { FaqComponent } from '../../../shared/sections/faq/faq';
import { FinalCtaComponent } from '../../../shared/sections/final-cta/final-cta';
import { HeroComponent } from '../../../shared/sections/hero/hero';
import { ProcessComponent } from '../../../shared/sections/process/process';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    HeroComponent,
    CardGridComponent,
    ProcessComponent,
    FaqComponent,
    FinalCtaComponent,
    TranslateModule,
    LangLinkPipe
  ],
  templateUrl: './bu-landing.html',
  styleUrl: './bu-landing.scss',
})
export class BuLandingComponent {
  private route = inject(ActivatedRoute);
  private destroyRef = inject(DestroyRef);

  key = signal<string>('');

  bu = computed(() => BU[this.key()]);

  // ✅ แปลง serviceGroups -> ให้ CardGrid ใช้ได้
 serviceGroups = computed(() => {
  const b = this.bu();
  if (!b) return [];

  return (b.serviceGroups ?? []).map(g => ({
    title: g.title,
    items: (g.items ?? []).map((x: any) => {
      const link = x.link ?? `/bu/${b.key}/service/${x.key}`;

      return {
        title: x.title,
        desc: x.desc,
        link,
        queryParams: x.queryParams,
        ctaLabel: x.ctaLabel ?? 'common.view_detail',
        badge: x.badge
      } as GridCard;
    })
  }));
});


  constructor() {
    this.route.paramMap
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(pm => {
        this.key.set(pm.get('key') ?? '');
      });
  }
}
