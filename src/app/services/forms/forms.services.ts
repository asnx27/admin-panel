import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class FormService {
  constructor(private fb: FormBuilder) {}

  createUserForm(data?: any): FormGroup {
    return this.fb.group({
      name: [data?.name || '', []],
      email: [data?.email || '', []],
      role: [data?.role || 'customer'],
      status: [data?.status || 'active'],
    });
  }

  createProductForm(data?: any): FormGroup {
    return this.fb.group({
      name: [data?.name || ''],
      description: [data?.description || ''],
      price: [data?.price || 0],
      category: [data?.category || ''],
      status: [data?.status || 'available'],
    });
  }
  resetForm(form: FormGroup) {
    form.reset();
  }
}
