import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

type BuItem = {
  label: string;
  route: string;
  enabled: boolean;
  badge?: string;
};

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,RouterLink, RouterLinkActive,TranslateModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class HeaderComponent {
  private router = inject(Router);
  private t = inject(TranslateService);
   get lang(): string {
    return this.t.currentLang || this.t.defaultLang || 'th';
  }

  setLang(lang: 'th' | 'en') {
    this.t.use(lang);
    localStorage.setItem('uplix_lang', lang);
    document.documentElement.lang = lang;
  }
  open = signal(false);
  toggle(){ this.open.update(v => !v); }
  close(){ this.open.set(false); }
  isBuRoute(): boolean {
    return this.router.url.startsWith('/bu');
  }
  
  buItems: BuItem[] = [
    { label: 'Experience & Innovative Learning', route: '/bu/learning', enabled: true, },
    { label: 'Personal protection equipment (PPE) & Fire Tank & Refill Service', route: '/bu/ppe', enabled: true },
    { label: 'Waste Management Solution & Technology', route: '/bu/waste', enabled: true,  },
  ];
  
}
