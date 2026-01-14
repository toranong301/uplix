import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

export interface FaqItem { q: string; a: string; }

@Component({
  selector: 'uplix-faq',
  standalone: true,
  imports: [CommonModule,TranslateModule],
  templateUrl: './faq.html',
  styleUrl: './faq.scss'
})
export class FaqComponent {  
  @Input() title: string = 'common.faq';         
  @Input({ required: true }) faqs!: FaqItem[];


}
