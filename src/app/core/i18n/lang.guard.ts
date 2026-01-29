import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const langGuard: CanActivateFn = route => {
  const lang = route.paramMap.get('lang');
  if (lang === 'en' || lang === 'th') return true;
  return inject(Router).parseUrl('/en/home');
};
