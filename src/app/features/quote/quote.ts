import { CommonModule } from '@angular/common';
import { Component, OnInit, computed, effect, inject } from '@angular/core';
import { ReactiveFormsModule, UntypedFormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { QuoteCartService } from '../../shared/services/quote-cart.service';

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

type BuOption = {
  key: string;
  label: string;
  descKey: string;
};

type RequestTypeOption = {
  key: string;
  labelKey: string;
};

type QuoteItem = {
  bu?: string;
  category?: string; // เช่น ppe.head
  sku: string;       // เช่น HEP101
  color?: string;    // เช่น White
  qty?: number;      // เช่น 10
};

@Component({
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, TranslateModule],
  templateUrl: './quote.html',
  styleUrl: './quote.scss'
})
export class QuoteComponent implements OnInit {

  private CART_START = '--- UPLIX_CART_START ---';
private CART_END = '--- UPLIX_CART_END ---';

constructor() {
  // ✅ sync ทุกครั้งที่ cart เปลี่ยน (add/remove/clear/updateQty)
  effect(() => {
    this.syncCartIntoDetail();
  });
}

private syncCartIntoDetail() {
  const items = this.cartItems();
  const total = this.cartTotalQty();

  // 1) sync quantity:
  // - ถ้ามีของใน cart: เติม quantity ถ้ายังว่าง
  // - ถ้า cart ว่าง: ล้าง quantity (ตาม requirement "ล้างต้องล้างทั้งหมด")
  if (items.length) {
    if (!this.form.get('quantity')?.value) {
      this.form.patchValue({ quantity: String(total) }, { emitEvent: false });
    }
  } else {
    this.form.patchValue({ quantity: '' }, { emitEvent: false });
  }

  // 2) sync detail (เฉพาะบล็อก cart)
  const current = (this.form.get('detail')?.value || '').toString();

  // แยก note ที่ user พิมพ์เอง: ทุกอย่าง "นอก" marker ถือเป็นโน้ต
  const withoutCartBlock = this.stripCartBlock(current).trim();

  // สร้างบล็อก cart ใหม่
  const cartBlock = items.length ? this.buildCartBlock(items) : '';

  // รวมกลับ: (cartBlock + เว้นบรรทัด + notes)
  const merged = [
    cartBlock ? cartBlock : '',
    withoutCartBlock ? withoutCartBlock : ''
  ].filter(Boolean).join('\n\n');

  // ถ้าไม่มีอะไรเลย ให้เป็น '' ไม่ใช่ undefined
  this.form.patchValue({ detail: merged }, { emitEvent: false });
}

private stripCartBlock(text: string): string {
  const start = text.indexOf(this.CART_START);
  const end = text.indexOf(this.CART_END);

  if (start === -1 || end === -1) return text;

  const before = text.slice(0, start);
  const after = text.slice(end + this.CART_END.length);
  return `${before}\n${after}`.trim();
}

private buildCartBlock(items: any[]): string {
  const lines = items.map(it => {
    const parts = [
      it.sku ? `${it.sku}` : '',
      it.colorKey ? `Color: ${it.colorKey}` : '',
      it.categoryKey ? `Category: ${it.categoryKey}` : '',
      `Qty: ${it.qty}`
    ].filter(Boolean);

    return `- ${parts.join(' • ')}`;
  });

  return [
    this.CART_START,
    'Selected items from Quote Cart:',
    ...lines,
    this.CART_END
  ].join('\n');
}


clearCart() {
  this.cart.clear();
  // syncCartIntoDetail จะถูกเรียกจาก effect อยู่แล้ว
}

  private fb = inject(UntypedFormBuilder);
  private route = inject(ActivatedRoute);
  cart = inject(QuoteCartService);

cartItems = computed(() => this.cart.items());
cartTotalQty = computed(() => this.cart.items().reduce((s, x) => s + (Number(x.qty) || 0), 0));



  buOptions: BuOption[] = [
    { key: 'ppe', label: 'bu.ppe.title_short', descKey: 'home.bu.cards.ppe.desc' },
    { key: 'experience-innovative', label: 'bu.learning.title_short', descKey: 'home.bu.cards.learning.desc' },
    { key: 'waste-management', label: 'bu.waste.title_short', descKey: 'home.bu.cards.waste.desc' }
  ];

  requestTypeOptions: RequestTypeOption[] = [
    { key: 'quotation', labelKey: 'quote.rfq.types.quotation' },
    { key: 'solution', labelKey: 'quote.rfq.types.solution' },
    { key: 'compare', labelKey: 'quote.rfq.types.compare' },
    { key: 'unsure', labelKey: 'quote.rfq.types.unsure' }
  ];

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
    detail: [''],
    requestType: ['quotation', Validators.required]
  });

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(q => {
      const bu = q.get('bu');
      const cat = q.get('cat');
      const items = q.get('items');

      this.form.patchValue({
        bu: bu ?? this.form.get('bu')?.value,
        category: cat ?? this.form.get('category')?.value
      });

      if (items) {
        const parsed = this.safeParseItems(items);
        if (parsed.length) {
          const derivedBu = 'ppe';
          const derivedCat = (parsed[0].category || cat || 'ppe.head') as string;

          const totalQty = parsed.reduce((sum, x) => sum + (Number(x.qty) || 0), 0);

          const lines = parsed.map((x) => {
            const color = x.color ? `, Color: ${x.color}` : '';
            const qty = Number(x.qty) ? `, Qty: ${x.qty}` : '';
            return `- ${x.sku}${color}${qty}`;
          });

          const header = `Selected items (${derivedCat}):`;
          const existingDetail = (this.form.get('detail')?.value || '').toString().trim();

          const mergedDetail = [
            header,
            ...lines,
            '',
            existingDetail ? `Notes:\n${existingDetail}` : 'Notes:'
          ].join('\n');

          this.form.patchValue({
            bu: derivedBu,
            category: derivedCat,
            quantity: totalQty ? String(totalQty) : this.form.get('quantity')?.value,
            detail: mergedDetail
          });
        }
      }
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

  private safeParseItems(itemsParam: string): QuoteItem[] {
    try {
      const raw = decodeURIComponent(itemsParam);
      const data = JSON.parse(raw);

      if (!Array.isArray(data)) return [];

      return data
        .filter((x: any) => x && typeof x.sku === 'string')
        .map((x: any) => ({
          bu: x.bu,
          category: x.category,
          sku: x.sku,
          color: typeof x.color === 'string' ? x.color : undefined,
          qty: Number.isFinite(Number(x.qty)) ? Number(x.qty) : undefined,
        }));
    } catch {
      return [];
    }
  }

  private buildMessage(): string {
    const v = this.form.value;

    return [
      `UPLIX Order/Quote Request`,
      `Request Type: ${v.requestType || '-'}`,
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
