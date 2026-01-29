import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { NAV_ITEMS } from '../../core/navigation/nav.config';
import { LangLinkPipe } from '../../shared/pipes/lang-link.pipe';

@Component({
  standalone: true,
  imports: [CommonModule, RouterLink, TranslateModule, LangLinkPipe],
  templateUrl: './sitemap.html',
  styleUrl: './sitemap.scss',
})
export class SitemapComponent {
  navItems = NAV_ITEMS;
}
