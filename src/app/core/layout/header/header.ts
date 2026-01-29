import { CommonModule } from '@angular/common';
import { Component, HostListener, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageService, type AppLang } from '../../i18n/language.service';
import { LangLinkPipe } from '../../../shared/pipes/lang-link.pipe';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, TranslateModule, LangLinkPipe],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class HeaderComponent {
  private router = inject(Router);
  private langService = inject(LanguageService);

  mobileOpen = signal(false);
  mobileProductsOpen = signal(false);
  sticky = signal(false);
  showProductsMenu = signal(false);

  productsMenu = {
    titleKey: 'nav.products_services',
    descKey: 'nav.products_desc',
    learning: [
      { labelKey: 'nav.products.learning_1', link: '/bu/learning' },
      { labelKey: 'nav.products.learning_2', link: '/bu/learning' },
      { labelKey: 'nav.products.learning_3', link: '/bu/learning' },
      { labelKey: 'nav.products.learning_4', link: '/bu/learning' }
    ],
    ppe: [
      { labelKey: 'nav.products.ppe_1', link: '/bu/ppe' },
      { labelKey: 'nav.products.ppe_2', link: '/bu/ppe' },
      { labelKey: 'nav.products.ppe_3', link: '/bu/ppe' },
      { labelKey: 'nav.products.ppe_4', link: '/bu/ppe' },
      { labelKey: 'nav.products.ppe_5', link: '/bu/ppe' },
      { labelKey: 'nav.products.ppe_6', link: '/bu/ppe' },
      { labelKey: 'nav.products.ppe_7', link: '/bu/ppe' }
    ],
    waste: [
      { labelKey: 'nav.products.waste_1', link: '/bu/waste' },
      { labelKey: 'nav.products.waste_2', link: '/bu/waste' },
      { labelKey: 'nav.products.waste_3', link: '/bu/waste' }
    ]
  };

  currentLang(): AppLang {
    return this.langService.lang();
  }

  switchLang(lang: AppLang): void {
    const nextUrl = this.langService.swapLangUrl(lang);
    this.router.navigateByUrl(nextUrl);
  }

  toggleMobile(): void {
    if (this.mobileOpen()) {
      this.closeMobile();
      return;
    }
    this.openMobile();
  }

  toggleMobileProducts(): void {
    this.mobileProductsOpen.update((value) => !value);
  }

  openProductsMenu(): void {
    if (this.mobileOpen()) return;
    this.showProductsMenu.set(true);
  }

  closeProductsMenu(): void {
    if (this.mobileOpen()) return;
    this.showProductsMenu.set(false);
  }

  openMobile(): void {
    this.mobileOpen.set(true);
    this.mobileProductsOpen.set(false);
    if (typeof document !== 'undefined') document.body.style.overflow = 'hidden';
  }

  closeMobile(): void {
    this.mobileOpen.set(false);
    this.mobileProductsOpen.set(false);
    if (typeof document !== 'undefined') document.body.style.overflow = '';
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.sticky.set((typeof window !== 'undefined' ? window.scrollY : 0) > 6);
  }
}
