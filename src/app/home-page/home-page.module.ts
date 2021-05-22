import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomePageComponent} from './components/home-page.component';
import {HomePageRoutingModule} from './home-page-routing.module';
import {SearchComponent} from './components/search/search.component';
import { CreateNoteComponent } from './components/create-note/create-note.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    HomePageComponent,
    SearchComponent,
    CreateNoteComponent,
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    ReactiveFormsModule
  ]
})
export class HomePageModule {
}
