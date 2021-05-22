import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ShowMessageComponent} from './components/show-message/show-message.component';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';


@NgModule({
  declarations: [ShowMessageComponent],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule
  ],
  exports: [ShowMessageComponent]
})

export class ShowMessageModule {
}
