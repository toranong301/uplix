import { CommonModule } from '@angular/common';
import { Component, computed } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TranslateModule } from '@ngx-translate/core';
import { CardGridComponent, GridCard } from '../../shared/sections/card-grid/card-grid';
import { FinalCtaComponent } from '../../shared/sections/final-cta/final-cta';
import { HeroComponent } from '../../shared/sections/hero/hero';
import { ProcessComponent } from '../../shared/sections/process/process';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    HeroComponent,
    CardGridComponent,
    ProcessComponent,
    FinalCtaComponent,
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class HomeComponent {
  hero = {
    heroImage: 'assets/hero/home.gif',
    primaryCta: { label: 'home.hero.primary', link: '#bu' },
    secondaryCta: { label: 'home.hero.secondary', link: '/quote' }
  };

  buCards = computed<GridCard[]>(() => ([
    {
      title: 'home.bu.cards.learning.title',
      desc: 'home.bu.cards.learning.desc',
      link: '/bu/learning',
      ctaLabel: 'home.bu.cards.learning.cta',
    },
    {
      title: 'home.bu.cards.ppe.title',
      desc: 'home.bu.cards.ppe.desc',
      link: '/bu/ppe',
      ctaLabel: 'home.bu.cards.ppe.cta',
    },
    {
      title: 'home.bu.cards.waste.title',
      desc: 'home.bu.cards.waste.desc',
      link: '/bu/waste',
      ctaLabel: 'home.bu.cards.waste.cta',
    }
  ]));
  process = [
    { title: 'home.process.steps.1.title', desc: 'home.process.steps.1.desc' },
    { title: 'home.process.steps.2.title', desc: 'home.process.steps.2.desc' },
    { title: 'home.process.steps.3.title', desc: 'home.process.steps.3.desc' },
  ];
}
