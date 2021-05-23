import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HomePageService} from '../../../../../home-page/services/home-page.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.scss']
})
export class NoteFormComponent implements OnInit, OnDestroy {
  createForm: FormGroup;
  subscription: Subscription = new Subscription();
  @Input() type: string;
  @Input() editableData: string;
  @Output() editIsDone = new EventEmitter<void>();
  @Output() create = new EventEmitter<[]>();

  constructor(
    private fb: FormBuilder,
    private homePageService: HomePageService,
  ) {
  }

  ngOnInit(): void {
    this.initializeForm();
    this.initializeListeners();
  }

  initializeListeners(): void {
    this.subscription.add(
      this.homePageService.created$.subscribe(created => {
        if (created) {
          this.createForm.reset();
        }
      })
    );
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
        this.homePageService.submitted$.next({type: 'create', body: this.createForm.value});
      } else {
        this.editIsDone.emit();
        console.log('EDIT: ' + this.createForm.value);

      }
    }
  }

  cancel(): void {
    this.editIsDone.emit();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
