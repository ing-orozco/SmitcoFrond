import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-crud-form',
  templateUrl: './crud-form.component.html',
  styleUrls: ['./crud-form.component.css']
})
export class CrudFormComponent {
  @Input() formFields: { name: string; label: string; type: string }[] = [];
  @Input() formData: any = {};
  @Output() submitForm = new EventEmitter<any>();

  form!: FormGroup;
  fullObject: any = {}

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({});
    const safeFormData = this.formData || {};
    this.formFields.forEach(field => {
      this.form.addControl(field.name, this.fb.control(safeFormData[field.name] || ''));
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['formData'] && this.form) {
      this.fullObject = { ...this.formData }
      this.updateForm();
    }
  }

  updateForm() {
    this.form.patchValue(this.formData);
  }

  onSubmit() {
    if (this.form.valid) {
      const updatedObject = { ...this.fullObject, ...this.form.value };
      this.submitForm.emit(updatedObject);
      this.form.reset()
    }
  }

}
