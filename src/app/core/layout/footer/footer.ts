import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { NAV_ITEMS, POLICY_LINKS } from '../../navigation/nav.config';
import { LangLinkPipe } from '../../../shared/pipes/lang-link.pipe';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink, TranslateModule, LangLinkPipe],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class FooterComponent {
  year = new Date().getFullYear();

  navItems = NAV_ITEMS;
  policyLinks = POLICY_LINKS;

  email = 'tana.s@uplix.co.th';
  telephone = '081-749-5566';
  addressLines = [
    'footer.address.line1',
    'footer.address.line2',
    'footer.address.line3',
  ];
  lineUrl = 'https://line.me/R/ti/p/@uplix';
  facebookUrl = '';
}
