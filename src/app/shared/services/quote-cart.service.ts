import { computed, Injectable, signal } from '@angular/core';

export type BuKey = 'learning' | 'ppe' | 'waste';

export type QuoteCartItem = {
  id: string;              // unique line id
  bu: BuKey;

  // ใช้ key แปลเพื่อสลับภาษาได้
  titleKey: string;        // เช่น 'ppe_catalog.head.title' หรือ 'bu.learning.fire_training.hero.title'
  categoryKey?: string;    // เช่น 'ppe.head'
  sku?: string;            // เช่น 'HEP101'
  colorKey?: string;       // เช่น 'common.colors.white' หรือ 'White' (แนะนำเป็น key)
  qty: number;             // จำนวน
  note?: string;           // ข้อความเพิ่ม (optional)
};

const STORAGE_KEY = 'uplix_quote_cart_v1';

function safeRead(): QuoteCartItem[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const data = JSON.parse(raw);
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
}

function safeWrite(items: QuoteCartItem[]) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch {
    // ignore
  }
}

function makeId() {
  // good enough for MVP
  return `${Date.now()}_${Math.random().toString(16).slice(2)}`;
}

@Injectable({ providedIn: 'root' })
export class QuoteCartService {
  private _items = signal<QuoteCartItem[]>([]);

  // expose readonly
  items = computed(() => this._items());
  count = computed(() => this._items().length);

  constructor() {
    // only in browser
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      this._items.set(safeRead());
    }
  }

  private persist() {
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      safeWrite(this._items());
    }
  }

  clear() {
    this._items.set([]);
    this.persist();
  }

  remove(id: string) {
    this._items.update(arr => arr.filter(x => x.id !== id));
    this.persist();
  }

  updateQty(id: string, qty: number) {
    const q = Math.max(1, Math.floor(Number(qty || 1)));
    this._items.update(arr => arr.map(x => (x.id === id ? { ...x, qty: q } : x)));
    this.persist();
  }

  addOrMerge(item: Omit<QuoteCartItem, 'id'>) {
    // merge rule: bu + sku + colorKey + categoryKey + titleKey
    this._items.update(arr => {
      const idx = arr.findIndex(x =>
        x.bu === item.bu &&
        (x.sku ?? '') === (item.sku ?? '') &&
        (x.colorKey ?? '') === (item.colorKey ?? '') &&
        (x.categoryKey ?? '') === (item.categoryKey ?? '') &&
        x.titleKey === item.titleKey
      );

      if (idx === -1) return [...arr, { ...item, id: makeId(), qty: Math.max(1, Math.floor(item.qty || 1)) }];

      const merged = [...arr];
      merged[idx] = { ...merged[idx], qty: merged[idx].qty + Math.max(1, Math.floor(item.qty || 1)) };
      return merged;
    });

    this.persist();
  }

  // helper: แปลงเป็น payload สำหรับส่งใน quote (ถ้าต้องการ)
  toPayload() {
    return this._items().map(x => ({
      bu: x.bu,
      category: x.categoryKey,
      sku: x.sku,
      color: x.colorKey,
      qty: x.qty,
      titleKey: x.titleKey,
      note: x.note
    }));
  }
}
