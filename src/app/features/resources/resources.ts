import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { LangLinkPipe } from '../../shared/pipes/lang-link.pipe';
import { DownloadGateComponent } from '../../shared/sections/download-gate/download-gate';

type ResourceItem = {
  titleKey: string;
  descKey: string;
  ctaKey: string;
  href: string;
  external?: boolean;
  badgeKey?: string;   // optional เช่น "resources.badge.new"
  enabled?: boolean;   // เผื่อปิดชั่วคราว
};

@Component({
  selector: 'app-resources',
  standalone: true,
  imports: [CommonModule, RouterLink, TranslateModule, DownloadGateComponent, LangLinkPipe],
  templateUrl: './resources.html',
  styleUrl: './resources.scss',
})
export class ResourcesComponent {
  // เผื่ออนาคตมี filter: "all | downloads | guides"
  filter = signal<'all' | 'downloads' | 'guides'>('all');

  // รายการ Resources (ใช้ key ทั้งหมด)
  private readonly allItems: Array<ResourceItem & { type: 'downloads' | 'guides' }> = [
    {
      type: 'downloads',
      titleKey: 'resources.items.ppe_catalog.title',
      descKey: 'resources.items.ppe_catalog.desc',
      ctaKey: 'resources.items.ppe_catalog.cta',
      href: '/downloads/2025-PPE-Catalogue-UPLIX-Safety.pdf',
      external: true,
      badgeKey: 'resources.badge.popular',
      enabled: true
    }
    // อยากเพิ่มไฟล์อื่นก็เพิ่มต่อได้เลย โดยใช้ key ตามแพตเทิร์นเดียวกัน
  ];

  items = computed(() => {
    const f = this.filter();
    if (f === 'all') return this.allItems.filter(i => i.enabled !== false);
    return this.allItems.filter(i => i.type === f && i.enabled !== false);
  });

  setFilter(v: 'all' | 'downloads' | 'guides') {
    this.filter.set(v);
  }

  trackByTitleKey = (_: number, item: ResourceItem) => item.titleKey;

  isDownloadLink(link: string): boolean {
    return link.endsWith('.pdf') || link.includes('/downloads/');
  }
}
