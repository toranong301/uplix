import { Routes } from '@angular/router';
import { LangShellComponent } from './core/layout/lang-shell/lang-shell';
import { langGuard } from './core/i18n/lang.guard';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'en/home' },
  {
    path: ':lang',
    component: LangShellComponent,
    canActivate: [langGuard],
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'home' },
      { path: 'home', loadComponent: () => import('./features/home/home').then(m => m.HomeComponent) },
      { path: 'about', loadComponent: () => import('./features/about/about').then(m => m.AboutComponent) },
      {
        path: 'investor-relations',
        loadComponent: () => import('./features/investor-relations/investor-relations').then(m => m.InvestorRelationsComponent),
      },
      {
        path: 'corporate-governance',
        loadComponent: () => import('./features/corporate-governance/corporate-governance').then(m => m.CorporateGovernanceComponent),
      },
      {
        path: 'sustainability',
        loadComponent: () => import('./features/sustainability/sustainability').then(m => m.SustainabilityComponent),
      },
      {
        path: 'news-and-articles',
        loadComponent: () => import('./features/news-articles/news-articles').then(m => m.NewsArticlesComponent),
      },
      {
        path: 'careers',
        loadComponent: () => import('./features/careers/careers').then(m => m.CareersComponent),
      },
      {
        path: 'information-inquiry',
        loadComponent: () => import('./features/information-inquiry/information-inquiry').then(m => m.InformationInquiryComponent),
      },
      {
        path: 'information-inquiry/inquiry-form',
        loadComponent: () => import('./features/inquiry-form/inquiry-form').then(m => m.InquiryFormComponent),
      },
      {
        path: 'terms',
        loadComponent: () => import('./features/policy/terms').then(m => m.TermsComponent),
      },
      {
        path: 'privacy',
        loadComponent: () => import('./features/policy/privacy').then(m => m.PrivacyComponent),
      },
      {
        path: 'cookie-policy',
        loadComponent: () => import('./features/policy/cookie-policy').then(m => m.CookiePolicyComponent),
      },
      { path: 'resources', loadComponent: () => import('./features/resources/resources').then(m => m.ResourcesComponent) },
      { path: 'contact', loadComponent: () => import('./features/contact/contact').then(m => m.ContactComponent) },
      { path: 'quote', loadComponent: () => import('./features/quote/quote').then(m => m.QuoteComponent) },
      { path: 'bu/:key', loadComponent: () => import('./features/bu/bu-landing/bu-landing').then(m => m.BuLandingComponent) },
      { path: 'bu/ppe/:cat', loadComponent: () => import('./features/ppe/ppe-category/ppe-category.component').then(m => m.PpeCategoryComponent) },
      { path: 'bu/:bu/service/:serviceKey', loadComponent: () => import('./features/bu/service-detail/service-detail.component').then(m => m.ServiceDetailComponent) },
      { path: '**', redirectTo: 'home' },
    ],
  },
  { path: '**', redirectTo: 'en/home' },
];
