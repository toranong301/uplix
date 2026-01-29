import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './careers.html',
  styleUrl: './careers.scss',
})
export class CareersComponent {}
