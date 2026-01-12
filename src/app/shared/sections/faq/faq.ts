import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

export interface FaqItem { q: string; a: string; }

@Component({
  selector: 'uplix-faq',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faq.html',
  styleUrl: './faq.scss'
})
export class FaqComponent {
  @Input() title = 'FAQ';             
  @Input({ required: true }) faqs!: FaqItem[];
}
