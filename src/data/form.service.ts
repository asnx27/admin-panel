import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class FormService {
  constructor(private fb: FormBuilder) {}

  toFormGroup(config: Record<string, any>): FormGroup {
    const group: Record<string, any> = {};
    for (const key in config) {
      group[key] = this.fb.control(config[key]);
    }
    return this.fb.group(group);
  }
}
