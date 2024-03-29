import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomePageComponent} from './components/home-page.component';
import {HomePageRoutingModule} from './home-page-routing.module';
import {SearchComponent} from './components/search/search.component';
import { CreateNoteComponent } from './components/create-note/create-note.component';
import {ReactiveFormsModule} from '@angular/forms';
import { NoteListComponent } from './components/note-list/note-list.component';
import { NoteItemComponent } from './components/note-list/note-item/note-item.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import {NoteFormModule} from '../shared/modules/note-form/note-form.module';
import { CreationChartComponent } from './components/creation-chart/creation-chart.component';
import {BarChartModule, LineChartModule} from '@swimlane/ngx-charts';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';

@NgModule({
  declarations: [
    HomePageComponent,
    SearchComponent,
    CreateNoteComponent,
    NoteListComponent,
    NoteItemComponent,
    CreationChartComponent
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    ReactiveFormsModule,
    SweetAlert2Module,
    NoteFormModule,
    LineChartModule,
    BarChartModule,
    InfiniteScrollModule
  ]
})
export class HomePageModule {
}
