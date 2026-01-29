import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './sustainability.html',
  styleUrl: './sustainability.scss',
})
export class SustainabilityComponent {}
