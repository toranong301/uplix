import { CommonModule } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { DownloadLogService } from '../../services/download-log.service';

@Component({
  selector: 'uplix-download-gate',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslateModule],
  templateUrl: './download-gate.html',
  styleUrl: './download-gate.scss',
})
export class DownloadGateComponent {
  @Input({ required: true }) href!: string;
  @Input({ required: true }) labelKey!: string;
  @Input() buttonClass = 'btn btn-secondary';
  @Input() source?: string;
  @Input() titleKey?: string;

  isOpen = false;
  email = '';
  errorKey = '';
  loading = false;

  private logService = inject(DownloadLogService);

  openGate(): void {
    this.errorKey = '';
    this.isOpen = true;

    if (!this.email) {
      try {
        const saved = localStorage.getItem('uplix_download_email');
        if (saved) this.email = saved;
      } catch {
        // Ignore storage errors.
      }
    }
  }

  closeGate(): void {
    this.isOpen = false;
    this.errorKey = '';
  }

  async submit(): Promise<void> {
    const email = this.email.trim();
    if (!this.isValidEmail(email)) {
      this.errorKey = 'download_gate.errors.email';
      return;
    }

    this.loading = true;
    this.errorKey = '';

    try {
      localStorage.setItem('uplix_download_email', email);
    } catch {
      // Ignore storage errors.
    }

    await this.logService.logEmail({
      email,
      href: this.href,
      source: this.source,
      titleKey: this.titleKey,
    });

    this.triggerDownload();
    this.loading = false;
    this.closeGate();
  }

  private triggerDownload(): void {
    const link = document.createElement('a');
    link.href = this.href;
    link.target = '_blank';
    link.rel = 'noopener';
    link.download = '';
    link.click();
  }

  private isValidEmail(value: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }
}
