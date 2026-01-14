import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink,TranslateModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class FooterComponent {
  year = new Date().getFullYear();

  buLinks = [
  { label: 'bu.learning.title_short', route: '/bu/learning' },
  { label: 'bu.ppe.title_short', route: '/bu/ppe' },
  { label: 'bu.waste.title_short', route: '/bu/waste' },
];

quickLinks = [
  { label: 'nav.resources', route: '/resources' },
  { label: 'nav.about', route: '/about' },
  { label: 'nav.contact', route: '/contact' },
  { label: 'nav.quote', route: '/quote' },
];
  email = 'tana.s@uplix.co.th';
  telephone = '081-749-5566';
}
