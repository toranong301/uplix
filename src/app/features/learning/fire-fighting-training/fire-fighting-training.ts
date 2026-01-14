import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

type Pill = { titleKey: string; items: string[] };
type Stat = { valueKey: string; labelKey: string };
type TwoCol = { titleKey: string; descKey: string; image: string; ctaKey: string; ctaLink: string };

@Component({
  selector: 'uplix-fire-fighting-training',
  standalone: true,
  imports: [CommonModule, RouterLink, TranslateModule],
  templateUrl: './fire-fighting-training.html',
  styleUrl: './fire-fighting-training.scss',
})

export class FireFightingTrainingComponent {
  readonly heroImage = 'assets/learning/fire-training-hero.jpg';
  readonly galleryImage = 'assets/learning/fire-training-group.jpg';
  readonly featurePills = signal<Pill[]>([
    {
      titleKey: 'learning.fire_training.pill_1.title',
      items: [
        'learning.fire_training.pill_1.items.1',
        'learning.fire_training.pill_1.items.2',
        'learning.fire_training.pill_1.items.3',
      ],
    },
    {
      titleKey: 'learning.fire_training.pill_2.title',
      items: [
        'learning.fire_training.pill_2.items.1',
        'learning.fire_training.pill_2.items.2',
        'learning.fire_training.pill_2.items.3',
      ],
    },
    {
      titleKey: 'learning.fire_training.pill_3.title',
      items: [
        'learning.fire_training.pill_3.items.1',
        'learning.fire_training.pill_3.items.2',
        'learning.fire_training.pill_3.items.3',
      ],
    },
  ]);

  readonly stats = signal<Stat[]>([
    { valueKey: 'learning.fire_training.stats.1.value', labelKey: 'learning.fire_training.stats.1.label' },
    { valueKey: 'learning.fire_training.stats.2.value', labelKey: 'learning.fire_training.stats.2.label' },
    { valueKey: 'learning.fire_training.stats.3.value', labelKey: 'learning.fire_training.stats.3.label' },
  ]);

  readonly highlights = signal<TwoCol[]>([
    {
      titleKey: 'learning.fire_training.highlights.1.title',
      descKey: 'learning.fire_training.highlights.1.desc',
      image: 'assets/learning/fire-training-practice.jpg',
      ctaKey: 'learning.fire_training.actions.view_outline',
      ctaLink: '#outline',
    },
    {
      titleKey: 'learning.fire_training.highlights.2.title',
      descKey: 'learning.fire_training.highlights.2.desc',
      image: 'assets/learning/fire-training-evac.jpg',
      ctaKey: 'learning.fire_training.actions.view_outline',
      ctaLink: '#outline',
    },
  ]);

  readonly outline = signal<{ titleKey: string; points: string[] }[]>([
    {
      titleKey: 'learning.fire_training.outline.1.title',
      points: [
        'learning.fire_training.outline.1.points.1',
        'learning.fire_training.outline.1.points.2',
        'learning.fire_training.outline.1.points.3',
      ],
    },
    {
      titleKey: 'learning.fire_training.outline.2.title',
      points: [
        'learning.fire_training.outline.2.points.1',
        'learning.fire_training.outline.2.points.2',
        'learning.fire_training.outline.2.points.3',
      ],
    },
  ]);

  readonly faqs = signal<{ q: string; a: string }[]>([
    { q: 'learning.fire_training.faq.1.q', a: 'learning.fire_training.faq.1.a' },
    { q: 'learning.fire_training.faq.2.q', a: 'learning.fire_training.faq.2.a' },
    { q: 'learning.fire_training.faq.3.q', a: 'learning.fire_training.faq.3.a' },
  ]);

  readonly quoteLink = computed(() => ({
    link: '/quote',
    queryParams: { bu: 'learning', topic: 'learning.fire_training' },
  }));
}
