import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ReactiveFormsModule, UntypedFormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

type PpeCategoryKey =
  | 'ppe.head'
  | 'ppe.respiratory'
  | 'ppe.eye_face'
  | 'ppe.hand_foot'
  | 'ppe.fall'
  | 'ppe.energy_electrical'
  | 'ppe.hygiene'
  | 'ppe.fire_tank'
  | 'ppe.refill_service';

@Component({
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink, TranslateModule],
  templateUrl: './quote.html',
  styleUrl: './quote.scss'
})
export class QuoteComponent implements OnInit {
  private fb = inject(UntypedFormBuilder);
  private route = inject(ActivatedRoute);

  // ✅ label เป็น key เพื่อแปลได้
  buOptions = [
    { key: 'ppe', label: 'bu.ppe.title_short' },
    { key: 'experience-innovative', label: 'bu.learning.title_short' },
    { key: 'waste-management', label: 'bu.waste.title_short' }
  ];

  // ✅ ใช้ key ทั้งหมด (ตรงตามรายการใหม่)
  ppeCategories: PpeCategoryKey[] = [
    'ppe.head',
    'ppe.respiratory',
    'ppe.eye_face',
    'ppe.hand_foot',
    'ppe.fall',
    'ppe.energy_electrical',
    'ppe.hygiene',
    'ppe.fire_tank',
    'ppe.refill_service'
  ];

  form = this.fb.group({
    bu: ['ppe', Validators.required],
    category: ['' as string],
    company: [''],
    name: ['', Validators.required],
    phone: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    quantity: [''],
    detail: ['']
  });

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(q => {
      const bu = q.get('bu');
      const cat = q.get('cat');

      this.form.patchValue({
        bu: bu ?? this.form.get('bu')?.value,
        category: cat ?? this.form.get('category')?.value
      });
    });
  }

  get isPpe(): boolean {
    return this.form.get('bu')?.value === 'ppe';
  }

  sendEmail(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const msg = this.buildMessage();
    const to = 'tana.s@uplix.co.th';
    const subject = `UPLIX Request (${this.form.get('bu')?.value || 'n/a'})`;

    const mailtoUrl =
      `mailto:${to}` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(msg)}`;

    window.location.href = mailtoUrl;
  }

  sendLine(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const msg = this.buildMessage();
    const lineShareUrl = `https://line.me/R/share?text=${encodeURIComponent(msg)}`;
    window.open(lineShareUrl, '_blank', 'noopener');
  }

  private buildMessage(): string {
    const v = this.form.value;

    return [
      `UPLIX Order/Quote Request`,
      `BU: ${v.bu || '-'}`,
      `Category: ${v.category || '-'}`,
      `Company: ${v.company || '-'}`,
      `Name: ${v.name || '-'}`,
      `Phone: ${v.phone || '-'}`,
      `Email: ${v.email || '-'}`,
      `Quantity: ${v.quantity || '-'}`,
      ``,
      `Detail:`,
      `${v.detail || '-'}`,
    ].join('\n');
  }
}
