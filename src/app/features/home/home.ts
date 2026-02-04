import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageService } from '../../core/i18n/language.service';
import { DownloadGateComponent } from '../../shared/sections/download-gate/download-gate';

@Component({
  standalone: true,
  imports: [CommonModule, TranslateModule, MatIconModule, RouterLink, DownloadGateComponent],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class HomeComponent {
  readonly lang = inject(LanguageService);
}
