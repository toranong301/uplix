import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

export interface StepItem { title: string; desc: string; }

@Component({
  selector: 'uplix-process',
  standalone: true,
  imports: [CommonModule,TranslateModule],
  templateUrl: './process.html',
  styleUrl: './process.scss'
})
export class ProcessComponent {
 @Input() title: string = 'common.process';     
 @Input({ required: true }) steps!: StepItem[];
}
