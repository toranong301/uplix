import { Injectable, computed, inject, signal } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { filter, firstValueFrom } from 'rxjs';

export type AppLang = 'en' | 'th';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private router = inject(Router);
  private translate = inject(TranslateService);

  private langSig = signal<AppLang>('en');
  readonly lang = computed(() => this.langSig());

  async init(): Promise<void> {
    this.translate.addLangs(['th', 'en']);
    this.translate.setDefaultLang('en');

    const initial = this.getLangFromUrl(this.getLocationPath()) ?? 'en';
    await firstValueFrom(this.translate.use(initial));
    this.applyLang(initial, false);
    this.updateSeoLinks(this.router.url);

    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        const next = this.getLangFromUrl(this.router.url) ?? 'en';
        this.applyLang(next);
        this.updateSeoLinks(this.router.url);
      });
  }

  getLangFromUrl(url: string): AppLang | null {
    const clean = url.split('?')[0]?.split('#')[0] ?? '';
    const first = clean.replace(/^\/+/, '').split('/')[0];
    if (first === 'en' || first === 'th') return first;
    return null;
  }

  link(path: string): string {
    if (!path) return `/${this.langSig()}/home`;
    if (path.startsWith('http') || path.startsWith('mailto:') || path.startsWith('#')) return path;

    const clean = path.replace(/^\/+/, '');
    if (clean.startsWith('en/') || clean.startsWith('th/')) return `/${clean}`;

    return `/${this.langSig()}/${clean}`;
  }

  swapLangUrl(target: AppLang, currentUrl = this.router.url): string {
    const queryIndex = currentUrl.indexOf('?');
    const hashIndex = currentUrl.indexOf('#');
    const cutIndex =
      queryIndex >= 0 ? queryIndex : hashIndex >= 0 ? hashIndex : currentUrl.length;

    const pathOnly = currentUrl.slice(0, cutIndex);
    const query =
      queryIndex >= 0
        ? currentUrl.slice(queryIndex + 1, hashIndex >= 0 ? hashIndex : undefined)
        : '';
    const fragment = hashIndex >= 0 ? currentUrl.slice(hashIndex) : '';

    const segments = pathOnly.replace(/^\/+/, '').split('/').filter(Boolean);
    if (segments.length === 0) segments.push('home');

    if (segments[0] === 'en' || segments[0] === 'th') {
      segments[0] = target;
      if (segments.length === 1) segments.push('home');
    } else {
      segments.unshift(target);
    }

    return `/${segments.join('/')}${query ? `?${query}` : ''}${fragment}`;
  }

  private applyLang(lang: AppLang, updateTranslate = true): void {
    this.langSig.set(lang);
    if (updateTranslate && this.translate.currentLang !== lang) {
      this.translate.use(lang);
    }
    if (typeof document !== 'undefined') document.documentElement.lang = lang;
  }

  private getLocationPath(): string {
    if (typeof window !== 'undefined') return window.location.pathname + window.location.search + window.location.hash;
    return this.router.url;
  }

  private updateSeoLinks(currentUrl: string): void {
    if (typeof document === 'undefined' || typeof window === 'undefined') return;

    const canonicalHref = `${window.location.origin}${currentUrl}`;
    this.setLinkTag('canonical', canonicalHref);

    const enHref = `${window.location.origin}${this.swapLangUrl('en', currentUrl)}`;
    const thHref = `${window.location.origin}${this.swapLangUrl('th', currentUrl)}`;

    this.setAlternateLink('en', enHref);
    this.setAlternateLink('th', thHref);
  }

  private setLinkTag(rel: string, href: string, hreflang?: string): void {
    const selector = hreflang
      ? `link[rel="${rel}"][hreflang="${hreflang}"]`
      : `link[rel="${rel}"]`;
    let link = document.head.querySelector<HTMLLinkElement>(selector);
    if (!link) {
      link = document.createElement('link');
      link.rel = rel;
      if (hreflang) link.hreflang = hreflang;
      document.head.appendChild(link);
    }
    link.href = href;
  }

  private setAlternateLink(lang: AppLang, href: string): void {
    this.setLinkTag('alternate', href, lang);
  }
}
