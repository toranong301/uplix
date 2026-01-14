import { CommonModule } from '@angular/common';
import { Component, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

type ContactCard = {
  titleKey: string;
  descKey: string;
  ctaKey: string;
  href: string;
  external?: boolean;
  icon?: 'email' | 'line' | 'phone';
};

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, RouterLink, TranslateModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class ContactComponent {
  readonly email = 'tana.s@uplix.co.th';

  // 🔧 ใส่ LINE OA link จริงของคุณตรงนี้
  readonly lineUrl = 'https://line.me/R/ti/p/@uplix';

  // 🔧 ใส่เบอร์จริง (ถ้ามี)
  readonly phone = '+66XXXXXXXXX';

  // ข้อความสำหรับ mailto (ใช้ i18n key แต่ประกอบ string ใน TS)
  mailtoHref = computed(() => {
    const subject = encodeURIComponent('[UPLIX] Request / Contact');
    const body = encodeURIComponent(
      `Hello UPLIX,\n\nI would like to contact your team.\n\n- Name:\n- Company:\n- Phone:\n- Details:\n`
    );
    return `mailto:${this.email}?subject=${subject}&body=${body}`;
  });

  contactCards = computed<ContactCard[]>(() => [
    {
      titleKey: 'contact.cards.email.title',
      descKey: 'contact.cards.email.desc',
      ctaKey: 'contact.cards.email.cta',
      href: this.mailtoHref(),
      external: true,
      icon: 'email'
    },
    {
      titleKey: 'contact.cards.line.title',
      descKey: 'contact.cards.line.desc',
      ctaKey: 'contact.cards.line.cta',
      href: this.lineUrl,
      external: true,
      icon: 'line'
    }
    // ถ้าจะเปิด phone: เพิ่มการ์ดได้
  ]);

  trackByTitleKey = (_: number, c: ContactCard) => c.titleKey;
}
