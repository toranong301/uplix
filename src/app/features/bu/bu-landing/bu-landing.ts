import { CommonModule } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { CardGridComponent, GridCard } from '../../../shared/sections/card-grid/card-grid';
import { FaqComponent } from '../../../shared/sections/faq/faq';
import { FinalCtaComponent } from '../../../shared/sections/final-cta/final-cta';
import { HeroComponent } from '../../../shared/sections/hero/hero';
import { ProcessComponent } from '../../../shared/sections/process/process';
import { BU } from '../bu.config';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    HeroComponent,
    CardGridComponent,
    ProcessComponent,
    FaqComponent,
    FinalCtaComponent
  ],
  templateUrl: './bu-landing.html',
  styleUrl: './bu-landing.scss',
})
export class BuLandingComponent {
  private route = inject(ActivatedRoute);

  key = computed(() => this.route.snapshot.paramMap.get('key') ?? '');
  bu = computed(() => BU[this.key()]);

  // ✅ แก้ปัญหา map ใน template: ทำใน TS แทน
  highlightCards = computed<GridCard[]>(() =>
    (this.bu()?.previewItems ?? []).map(x => ({
      ...x,
      ctaLabel: 'ขอข้อมูล'
    }))
  );
}
