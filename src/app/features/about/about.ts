import { CommonModule } from '@angular/common';
import { Component, computed } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

type ValueCard = { titleKey: string; descKey: string };
type TimelineItem = { titleKey: string; descKey: string };

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterLink, TranslateModule,RouterModule],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class AboutComponent {
  values = computed<ValueCard[]>(() => [
    { titleKey: 'about.values.items.1.title', descKey: 'about.values.items.1.desc' },
    { titleKey: 'about.values.items.2.title', descKey: 'about.values.items.2.desc' },
    { titleKey: 'about.values.items.3.title', descKey: 'about.values.items.3.desc' }
  ]);

  timeline = computed<TimelineItem[]>(() => [
    { titleKey: 'about.timeline.items.1.title', descKey: 'about.timeline.items.1.desc' },
    { titleKey: 'about.timeline.items.2.title', descKey: 'about.timeline.items.2.desc' },
    { titleKey: 'about.timeline.items.3.title', descKey: 'about.timeline.items.3.desc' }
  ]);

  trackByKey = (_: number, x: { titleKey: string }) => x.titleKey;
}
