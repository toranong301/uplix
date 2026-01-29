import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { LangLinkPipe } from '../../pipes/lang-link.pipe';

@Component({
  selector: 'uplix-final-cta',
  standalone: true,
  imports: [CommonModule, RouterLink, TranslateModule, LangLinkPipe],
  templateUrl: './final-cta.html',
  styleUrl: './final-cta.scss'
})
export class FinalCtaComponent {
  @Input({ required: true }) title!: string;
  @Input() subtitle?: string;
  @Input({ required: true }) buttonLabel!: string;
  @Input({ required: true }) buttonLink!: string;
}
