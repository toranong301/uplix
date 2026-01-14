import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

export interface Cta {
  label: string;
  link: string;
  queryParams?: Record<string, any>;
}

@Component({
  selector: 'uplix-hero',
  standalone: true,
  imports: [CommonModule, RouterLink, TranslateModule],
  templateUrl: './hero.html',
  styleUrl: './hero.scss'
})
export class HeroComponent {
  @Input({ required: true }) title!: string;
  @Input({ required: true }) tagline!: string;
  @Input({ required: true }) heroImage!: string;
  @Input() primaryCta?: Cta;
  @Input() secondaryCta?: Cta;

  isDownloadLink(link: string): boolean {
    return link.endsWith('.pdf') || link.includes('/downloads/');
  }
}
