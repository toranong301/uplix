import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './quote.html',
  styleUrl: './quote.scss'
})
export class QuoteComponent {
  private fb = inject(FormBuilder);

  form = this.fb.group({
    name: ['', Validators.required],
    phone: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    bu: [''],
    detail: ['']
  });

  submit() {
    if (this.form.invalid) return;
    console.log('QUOTE:', this.form.value);
    alert('ส่งคำขอเรียบร้อย (ตัวอย่าง)');
  }
}
