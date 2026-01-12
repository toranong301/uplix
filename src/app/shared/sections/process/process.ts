import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

export interface StepItem { title: string; desc: string; }

@Component({
  selector: 'uplix-process',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './process.html',
  styleUrl: './process.scss'
})
export class ProcessComponent {
  @Input() title = 'Process';         
  @Input({ required: true }) steps!: StepItem[];
}
