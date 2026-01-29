import { Injectable } from '@angular/core';

// TODO: Replace SHEET_LOG_URL with a Google Apps Script/Webhook endpoint that can append rows.
// Sheet reference: https://docs.google.com/spreadsheets/d/1WqJF6WiJlrUnEia0NyZQeLybhOlQq578Ab0UDpxYuj4/edit?usp=sharing
const SHEET_LOG_URL = 'https://script.google.com/macros/s/AKfycby009fFhjm2zNdvnLCcxDkb00bvIEGvVEx2z8pT6WglSfpDceSgLME_FEkJnOgPA-8x/exec';

type DownloadLogPayload = {
  email: string;
  href: string;
  source?: string;
  titleKey?: string;
};

@Injectable({ providedIn: 'root' })
export class DownloadLogService {
  async logEmail(payload: DownloadLogPayload): Promise<void> {
    if (!SHEET_LOG_URL) return;

    const data = {
      email: payload.email,
      href: payload.href,
      source: payload.source,
      titleKey: payload.titleKey,
      page: typeof window !== 'undefined' ? window.location.href : '',
      timestamp: new Date().toISOString(),
    };

    try {
      await fetch(SHEET_LOG_URL, {
        method: 'POST',
        mode: 'no-cors',
        // Send JSON as plain text to avoid CORS preflight; Apps Script parses postData.contents.
        body: JSON.stringify(data),
      });
    } catch {
      // Ignore logging failures; download should still proceed.
    }
  }
}
