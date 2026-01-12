import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './core/layout/footer/footer';
import { HeaderComponent } from './core/layout/header/header';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  template: `
    <app-header />
    <main style="padding: 18px 0 56px;">
      <router-outlet />
    </main>
    <app-footer />
  `
})
export class AppComponent {}
