import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./features/home/home').then(m => m.HomeComponent) },
  { path: 'about', loadComponent: () => import('./features/about/about').then(m => m.AboutComponent) },
  { path: 'resources', loadComponent: () => import('./features/resources/resources').then(m => m.ResourcesComponent) },
  { path: 'contact', loadComponent: () => import('./features/contact/contact').then(m => m.ContactComponent) },
  { path: 'quote', loadComponent: () => import('./features/quote/quote').then(m => m.QuoteComponent) },
  { path: 'bu/:key', loadComponent: () => import('./features/bu/bu-landing/bu-landing').then(m => m.BuLandingComponent) },
  { path: 'bu/ppe/:cat',loadComponent: () =>import('./features/ppe/ppe-category/ppe-category.component').then(m => m.PpeCategoryComponent)},
  { path: 'bu/:bu/service/:serviceKey',loadComponent: () =>import('./features/bu/service-detail/service-detail.component').then(m => m.ServiceDetailComponent)},
  { path: '**', redirectTo: '' }
];
