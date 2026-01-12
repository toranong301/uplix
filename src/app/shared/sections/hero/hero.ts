import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

export interface Cta {
  label: string;
  link: string;
}

@Component({
  selector: 'uplix-hero',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './hero.html',
  styleUrl: './hero.scss'
})
export class HeroComponent {
  @Input({ required: true }) title!: string;
  @Input({ required: true }) tagline!: string;
  @Input({ required: true }) heroImage!: string;

  @Input({ required: true }) primaryCta!: Cta;
  @Input() secondaryCta?: Cta;
}
