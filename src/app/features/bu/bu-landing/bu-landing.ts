import { CommonModule } from '@angular/common';
import { Component, DestroyRef, computed, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { LangLinkPipe } from '../../../shared/pipes/lang-link.pipe';
import { DownloadGateComponent } from '../../../shared/sections/download-gate/download-gate';
import { BU } from '../bu.config';

type ServiceCard = {
  title: string;
  desc: string;
  link?: string;
  queryParams?: Record<string, any>;
  ctaLabel?: string;
  badge?: string;
};

@Component({
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    TranslateModule,
    LangLinkPipe,
    DownloadGateComponent,
  ],
  templateUrl: './bu-landing.html',
  styleUrl: './bu-landing.scss',
})
export class BuLandingComponent {
  private route = inject(ActivatedRoute);
  private destroyRef = inject(DestroyRef);

  key = signal<string>('');

  bu = computed(() => BU[this.key()]);

  serviceGroups = computed(() => {
    const b = this.bu();
    if (!b) return [];

    return (b.serviceGroups ?? [])
      .map(g => ({
        title: g.title,
        items: (g.items ?? [])
          .filter(x => x.enabled !== false)
          .map((x: any) => {
            const link = x.link ?? `/bu/${b.key}/service/${x.key}`;

            return {
              title: x.title,
              desc: x.desc,
              link,
              queryParams: x.queryParams,
              ctaLabel: x.ctaLabel ?? 'common.view_detail',
              badge: x.badge,
            } as ServiceCard;
          }),
      }))
      .filter(g => g.items.length > 0);
  });

  isDownloadLink(link: string): boolean {
    return link.endsWith('.pdf') || link.includes('/downloads/');
  }

  constructor() {
    this.route.paramMap
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(pm => {
        this.key.set(pm.get('key') ?? '');
      });
  }
}
