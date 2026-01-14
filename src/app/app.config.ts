import { APP_INITIALIZER, ApplicationConfig, inject } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

import { provideHttpClient, withFetch } from '@angular/common/http';

import { provideTranslateService, TranslateService } from '@ngx-translate/core';
import { provideTranslateHttpLoader } from '@ngx-translate/http-loader';
import { firstValueFrom } from 'rxjs';

export function initI18nFactory() {
  const t = inject(TranslateService);

  return async () => {
    t.addLangs(['th', 'en']);

    const saved = typeof window !== 'undefined' ? localStorage.getItem('uplix_lang') : null;
    const browser = t.getBrowserLang();
    const lang = (saved as 'th' | 'en') ?? (browser === 'th' ? 'th' : 'en');

    await firstValueFrom(t.use(lang));
    if (typeof document !== 'undefined') document.documentElement.lang = lang;
  };
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withFetch()),
    provideRouter(routes),

    // ✅ v17+: ตั้งค่า loader แบบ provider function (ไม่ new TranslateHttpLoader(http, ...))
    provideTranslateService({
      loader: provideTranslateHttpLoader({ prefix: '/i18n/', suffix: '.json' }),
      fallbackLang: 'th'
    }),

    { provide: APP_INITIALIZER, useFactory: initI18nFactory, multi: true }
  ]
};
