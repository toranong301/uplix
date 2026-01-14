import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

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
  imports: [CommonModule, RouterLink,TranslateModule],
  templateUrl: './card-grid.html',
  styleUrl: './card-grid.scss'
})
export class CardGridComponent {
  private router = inject(Router);
  @Input({ required: true }) items!: GridCard[];

  go(item: any){
  if (!item?.link) return;
  this.router.navigate([item.link], { queryParams: item.queryParams });
}
}
