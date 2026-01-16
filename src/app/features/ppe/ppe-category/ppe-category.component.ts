import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { QuoteCartService } from '../../../shared/services/quote-cart.service';

type PpeItem = {
  code: string;
  nameKey: string;
  descKey: string;
  image: string;
  colors?: string[];
  groupKey?: string;
  sizeKey?: string;
  standardsKey?: string; // ✅ เพิ่มบรรทัดนี้
};

type SelectedLine = {
  sku: string;
  color: string;
  qty: number;
};

@Component({
  selector: 'uplix-ppe-category',
  standalone: true,
  imports: [CommonModule, RouterLink, TranslateModule],
  templateUrl: './ppe-category.component.html',
  styleUrls: ['./ppe-category.component.scss'],
})
export class PpeCategoryComponent {
  constructor(private route: ActivatedRoute) {}

  cat = computed(() => this.route.snapshot.paramMap.get('cat') ?? '');

  // ✅ ใช้ signal (แก้ error find/some)
  selected = signal<SelectedLine[]>([]);

  categoryTitleKey = computed(() => {
    const c = this.cat();
    if (c === 'head-protection') return 'ppe_catalog.head.title';
    if (c === 'refill-service') return 'ppe_catalog.refill.title';
    return 'ppe_catalog.not_found.title';
  });

  items = computed<PpeItem[]>(() => {
  const c = this.cat();

  // Head protection
  if (c === 'head-protection') {
    return [
      {
        code: 'HEP101',
        nameKey: 'ppe_catalog.head.items.hep101.name',
        descKey: 'ppe_catalog.head.items.hep101.desc',
        image: 'assets/products/ppe/head/HEP101.png',
        colors: ['White', 'Green', 'Red', 'Orange', 'Yellow', 'Blue'],
        standardsKey: 'ppe_catalog.common.standards_ce_en397',
      },
      {
        code: 'HEP102',
        nameKey: 'ppe_catalog.head.items.hep102.name',
        descKey: 'ppe_catalog.head.items.hep102.desc',
        image: 'assets/products/ppe/head/HEP102.png',
        colors: ['White', 'Green', 'Red', 'Orange', 'Yellow', 'Blue'],
        standardsKey: 'ppe_catalog.common.standards_ce_en397_ansi',
      },
    ];
  }

  // Refill service
  if (c === 'refill-service') {
    return [
      {
      groupKey: 'ppe_catalog.refill.groups.dry',
      code: 'REFILL-DRY-2',
      nameKey: 'ppe_catalog.refill.items.dry_2.name',
      descKey: 'ppe_catalog.refill.items.dry_2.desc',
      image: 'assets/products/ppe/refill/dry.png',
      sizeKey: 'ppe_catalog.refill.sizes.2lb',
    },
    {
      groupKey: 'ppe_catalog.refill.groups.dry',
      code: 'REFILL-DRY-5',
      nameKey: 'ppe_catalog.refill.items.dry_5.name',
      descKey: 'ppe_catalog.refill.items.dry_5.desc',
      image: 'assets/products/ppe/refill/dry.png',
      sizeKey: 'ppe_catalog.refill.sizes.5lb',
    },
    {
      groupKey: 'ppe_catalog.refill.groups.dry',
      code: 'REFILL-DRY-10',
      nameKey: 'ppe_catalog.refill.items.dry_10.name',
      descKey: 'ppe_catalog.refill.items.dry_10.desc',
      image: 'assets/products/ppe/refill/dry.png',
      sizeKey: 'ppe_catalog.refill.sizes.10lb',
    },
    {
      groupKey: 'ppe_catalog.refill.groups.dry',
      code: 'REFILL-DRY-15',
      nameKey: 'ppe_catalog.refill.items.dry_15.name',
      descKey: 'ppe_catalog.refill.items.dry_15.desc',
      image: 'assets/products/ppe/refill/dry.png',
      sizeKey: 'ppe_catalog.refill.sizes.15lb',
    },
    {
      groupKey: 'ppe_catalog.refill.groups.dry',
      code: 'REFILL-DRY-20',
      nameKey: 'ppe_catalog.refill.items.dry_20.name',
      descKey: 'ppe_catalog.refill.items.dry_20.desc',
      image: 'assets/products/ppe/refill/dry.png',
      sizeKey: 'ppe_catalog.refill.sizes.20lb',
    },

    // CO2
    {
      groupKey: 'ppe_catalog.refill.groups.co2',
      code: 'REFILL-CO2-10',
      nameKey: 'ppe_catalog.refill.items.co2_10.name',
      descKey: 'ppe_catalog.refill.items.co2_10.desc',
      image: 'assets/products/ppe/refill/co2.png',
      sizeKey: 'ppe_catalog.refill.sizes.10lb',
    },
    {
      groupKey: 'ppe_catalog.refill.groups.co2',
      code: 'REFILL-CO2-15',
      nameKey: 'ppe_catalog.refill.items.co2_15.name',
      descKey: 'ppe_catalog.refill.items.co2_15.desc',
      image: 'assets/products/ppe/refill/co2.png',
      sizeKey: 'ppe_catalog.refill.sizes.15lb',
    },

    // Foam
    {
      groupKey: 'ppe_catalog.refill.groups.foam',
      code: 'REFILL-FOAM-9L',
      nameKey: 'ppe_catalog.refill.items.foam_9l.name',
      descKey: 'ppe_catalog.refill.items.foam_9l.desc',
      image: 'assets/products/ppe/refill/foam.png',
      sizeKey: 'ppe_catalog.refill.sizes.9l',
    },
  ];
}

  // Default: no items
  return [];
});


  // ---------- selection helpers ----------
  toggleSelect(sku: string, color: string, checked: boolean) {
    const key = `${sku}__${color}`;

    this.selected.update((arr: SelectedLine[]) => {
      const idx = arr.findIndex((x: SelectedLine) => `${x.sku}__${x.color}` === key);

      if (checked && idx === -1) return [...arr, { sku, color, qty: 1 }];
      if (!checked && idx !== -1) return arr.filter((x: SelectedLine) => `${x.sku}__${x.color}` !== key);

      return arr;
    });
  }

  isSelected(sku: string, color: string): boolean {
    return this.selected().some((x: SelectedLine) => x.sku === sku && x.color === color);
  }

  getQty(sku: string, color: string): number {
  return this.selected().find((x: SelectedLine) => x.sku === sku && x.color === color)?.qty ?? 0;
}


 setQty(sku: string, color: string, qtyRaw: unknown) {
  const lineExists = this.selected().some((x: SelectedLine) => x.sku === sku && x.color === color);
  if (!lineExists) return;

  const n = Number(qtyRaw);
  const qty = Number.isFinite(n) ? Math.max(1, Math.floor(n)) : 1;

  this.selected.update((arr: SelectedLine[]) =>
    arr.map((x: SelectedLine) =>
      x.sku === sku && x.color === color ? { ...x, qty } : x
    )
  );
}


  clearSelection() {
    this.selected.set([]);
  }

  quoteLinkParams() {
    const payload = this.selected().map((x: SelectedLine) => ({
      bu: 'ppe',
      category: 'ppe.head',
      sku: x.sku,
      color: x.color,
      qty: x.qty,
    }));

    return {
      bu: 'ppe',
      cat: 'ppe.head',
      items: encodeURIComponent(JSON.stringify(payload)),
    };
  }

  cart = inject(QuoteCartService);

addSelectedToCart() {
  // หากยังไม่เลือกอะไร ไม่ทำ
  if (this.selected().length === 0) return;

  // titleKey ของหมวด
  const categoryTitleKey = 'ppe_catalog.head.title';

  for (const line of this.selected()) {
    this.cart.addOrMerge({
      bu: 'ppe',
      titleKey: categoryTitleKey,
      categoryKey: 'ppe.head',
      sku: line.sku,
      colorKey: line.color,  // แนะนำให้เป็น key เช่น common.colors.white (ค่อยย้ายทีหลังได้)
      qty: line.qty,
    });
  }

  // optional: ล้างหลังเพิ่ม
  this.clearSelection();
}

qtyMap = signal<Record<string, number>>({});

getLineQty(code: string): number {
  return this.qtyMap()[code] ?? 0;
}

setLineQty(code: string, qtyRaw: unknown) {
  const n = Number(qtyRaw);
  const qty = Number.isFinite(n) ? Math.max(0, Math.floor(n)) : 0;

  this.qtyMap.update(m => ({ ...m, [code]: qty }));
}
refillGroups = computed(() => {
  if (this.cat() !== 'refill-service') return [];

  const all = this.items(); // items() คือ computed ของคุณ
  const groups = [
    { key: 'ppe_catalog.refill.groups.dry', items: all.filter(x => x.groupKey === 'ppe_catalog.refill.groups.dry') },
    { key: 'ppe_catalog.refill.groups.co2', items: all.filter(x => x.groupKey === 'ppe_catalog.refill.groups.co2') },
    { key: 'ppe_catalog.refill.groups.foam', items: all.filter(x => x.groupKey === 'ppe_catalog.refill.groups.foam') },
  ];
  return groups.filter(g => g.items.length > 0);
});
addRefillToCart() {
  if (this.cat() !== 'refill-service') return;

  const all = this.items();
  const selected = all
    .map(it => ({ it, qty: this.getLineQty(it.code) }))
    .filter(x => x.qty > 0);

  if (!selected.length) return;

  for (const x of selected) {
    this.cart.addOrMerge({
      bu: 'ppe',
      titleKey: 'ppe_catalog.refill.title',
      categoryKey: 'ppe.refill_service',
      sku: x.it.code,
      qty: x.qty,
      note: `${x.it.groupKey ?? ''} | ${x.it.sizeKey ?? ''}`
    });
  }
  this.qtyMap.set({});
}

cartRefillDisabled = computed(() => {
  if (this.cat() !== 'refill-service') return true;
  const all = this.items();
  return !all.some(it => (this.getLineQty(it.code) ?? 0) > 0);
});



}
