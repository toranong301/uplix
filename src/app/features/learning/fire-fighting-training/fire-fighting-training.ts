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
      ctaLink: 'bu.#outline',
    },
    {
      titleKey: 'bu.learning.fire_training.highlights.2.title',
      descKey: 'bu.learning.fire_training.highlights.2.desc',
      image: 'assets/learning/fire-training-evac.png',
      ctaKey: 'bu.learning.fire_training.actions.view_outline',
      ctaLink: 'bu.#outline',
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
