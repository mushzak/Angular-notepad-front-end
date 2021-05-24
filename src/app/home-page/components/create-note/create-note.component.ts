import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.scss']
})
export class CreateNoteComponent implements OnInit {
  createForm: FormGroup;

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
      title: ['', [Validators.required, Validators.maxLength(255)]],
      description: ['', Validators.required],
    });
  }

  get title(): AbstractControl {
    return this.createForm.get('title');
  }

  get description(): AbstractControl {
    return this.createForm.get('description');
  }
}
