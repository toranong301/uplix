import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

export interface GridCard {
  title: string;
  desc: string;
  link?: string;
  ctaLabel?: string;
}

@Component({
  selector: 'uplix-card-grid',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './card-grid.html',
  styleUrl: './card-grid.scss'
})
export class CardGridComponent {
  @Input({ required: true }) items!: GridCard[];
}
