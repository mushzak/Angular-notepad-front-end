import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.scss']
})
export class NoteFormComponent implements OnInit {
  createForm: FormGroup;
  @Input() type: string;
  @Input() editableData: string;
  @Output() editIsDone = new EventEmitter<void>();

  constructor(
    private fb: FormBuilder,
  ) {
  }

  ngOnInit(): void {
    this.initializeForm();
  }

  /**
   * Initializes createForm property with the corresponding fields (title,description)
   */
  initializeForm(): void {
    this.createForm = this.fb.group({
      // @ts-ignore
      title: [this.editableData?.title ?? '', [Validators.required, Validators.maxLength(255)]],
      // @ts-ignore
      description: [this.editableData?.description ?? '', Validators.required],
    });
  }

  get title(): AbstractControl {
    return this.createForm.get('title');
  }

  get description(): AbstractControl {
    return this.createForm.get('description');
  }

  submitCreateForm(): void {
    if (this.createForm.invalid) {
      this.createForm.markAllAsTouched();
    } else {
      if (this.type === 'create') {
        console.log('CREATE: ' + this.createForm.value);
      } else {
        this.editIsDone.emit();
        console.log('EDIT: ' + this.createForm.value);

      }
    }
  }

  cancel(): void {
    this.editIsDone.emit();
  }
}
