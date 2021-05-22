import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoteFormComponent } from './components/note-form/note-form.component';
import {ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [NoteFormComponent],
  exports: [
    NoteFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class NoteFormModule { }
