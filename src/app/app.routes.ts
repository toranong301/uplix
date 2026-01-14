import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./features/home/home').then(m => m.HomeComponent) },

  { path: 'about', loadComponent: () => import('./features/about/about').then(m => m.AboutComponent) },
  { path: 'resources', loadComponent: () => import('./features/resources/resources').then(m => m.ResourcesComponent) },
  { path: 'contact', loadComponent: () => import('./features/contact/contact').then(m => m.ContactComponent) },
  { path: 'quote', loadComponent: () => import('./features/quote/quote').then(m => m.QuoteComponent) },

  { path: 'bu/:key', loadComponent: () => import('./features/bu/bu-landing/bu-landing').then(m => m.BuLandingComponent) },
  {
  path: 'learning/fire-fighting-training', loadComponent: () =>import('./features/learning/fire-fighting-training/fire-fighting-training').then(m => m.FireFightingTrainingComponent),
},


  { path: '**', redirectTo: '' }
];
