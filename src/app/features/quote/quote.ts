import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ReactiveFormsModule, UntypedFormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './quote.html',
  styleUrl: './quote.scss'
})
export class QuoteComponent implements OnInit {
  private fb = inject(UntypedFormBuilder);
  private route = inject(ActivatedRoute);

  buOptions = [
    { key: 'ppe', label: 'PPE' },
    { key: 'firefighting-training', label: 'Firefighting Training (Coming soon)' },
    { key: 'hrd', label: 'HRD (Coming soon)' },
    { key: 'waste-management', label: 'Waste Management (Coming soon)' },
  ];

  ppeCategories = [
    'Head Protection',
    'Eye Protection',
    'Face Protection',
    'Respiratory Protection',
    'Hearing Protection',
    'Hand Protection',
    'Body Protection',
    'Fire Protection',
    'ARC Protection',
    'Welding Protection',
    'Foot Protection',
    'Fall Protection',
    'Emergency Equipment',
    'Spill Control',
    'Coverall / Protective Clothing'
  ];

  // ✅ เหลือ form แค่ตัวเดียว และมี field category/company/quantity ครบ
  form = this.fb.group({
    bu: ['ppe', Validators.required],
    category: [''],
    company: [''],
    name: ['', Validators.required],
    phone: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    quantity: [''],
    detail: ['']
  });

  ngOnInit(): void {
    // ✅ รับ /quote?bu=ppe&cat=xxx
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

  submit(): void {
    if (this.form.invalid) return;
    console.log('QUOTE:', this.form.value);
    alert('ส่งคำขอเรียบร้อย (ตัวอย่าง) — ต่อ API ได้เลย');
  }
}
