import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HomePageService} from '../../../../../home-page/services/home-page.service';
import {Subscription} from 'rxjs';
import {Note} from '../../../../../home-page/model/note.model';

@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.scss']
})
export class NoteFormComponent implements OnInit, OnDestroy {
  noteForm: FormGroup;
  subscription: Subscription = new Subscription();
  @Input() type: string;
  @Input() editableData: Note;
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
          this.noteForm.reset();
        }
      })
    );
  }

  /**
   * Initializes noteForm property with the corresponding fields (title,description)
   */
  initializeForm(): void {
    this.noteForm = this.fb.group({
      title: [this.editableData?.title ?? '', [Validators.required, Validators.maxLength(255)]],
      description: [this.editableData?.description ?? '', Validators.required],
    });
  }

  get title(): AbstractControl {
    return this.noteForm.get('title');
  }

  get description(): AbstractControl {
    return this.noteForm.get('description');
  }

  submitNoteForm(): void {
    if (this.noteForm.invalid) {
      this.noteForm.markAllAsTouched();
      return;
    }
    if (this.type === 'create') {
      this.homePageService.submitted$.next({type: 'create', body: this.noteForm.value, id: null});
    } else {
      this.editIsDone.emit();
      this.homePageService.submitted$.next({type: 'edit', body: this.noteForm.value, id: this.editableData.id});
    }

  }

  cancel(): void {
    this.editIsDone.emit();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
