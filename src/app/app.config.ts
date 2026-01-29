import { APP_INITIALIZER, ApplicationConfig, inject } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

import { provideHttpClient, withFetch } from '@angular/common/http';

import { provideTranslateService } from '@ngx-translate/core';
import { provideTranslateHttpLoader } from '@ngx-translate/http-loader';
import { LanguageService } from './core/i18n/language.service';

export function initI18nFactory() {
  const lang = inject(LanguageService);
  return () => lang.init();
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
