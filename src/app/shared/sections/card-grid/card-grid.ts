import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { LangLinkPipe } from '../../pipes/lang-link.pipe';
import { LanguageService } from '../../../core/i18n/language.service';

export interface GridCard {
  title: string;
  desc: string;
  link?: string;
  queryParams?: Record<string, any>;
  ctaLabel?: string;
  enabled?: boolean;
  badge?: string;
}


@Component({
  selector: 'uplix-card-grid',
  standalone: true,
  imports: [CommonModule, RouterLink, TranslateModule, LangLinkPipe],
  templateUrl: './card-grid.html',
  styleUrl: './card-grid.scss'
})
export class CardGridComponent {
  private router = inject(Router);
  private lang = inject(LanguageService);
  @Input({ required: true }) items!: GridCard[];

  go(item: any){
  if (!item?.link) return;
  const target = this.lang.link(item.link);
  const tree = this.router.createUrlTree([target], { queryParams: item.queryParams });
  this.router.navigateByUrl(tree);
}
}
