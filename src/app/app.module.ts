import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import {LayoutModule} from './shared/modules/layout/layout.module';
import {LoadingModule} from './shared/modules/loading/loading.module';
import {AppRoutingModule} from './app-routing.module';
import {interceptors} from './shared/interceptors/interceptors';
import {ShowMessageModule} from './shared/show-message/show-message.module';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    LayoutModule,
    LoadingModule,
    ShowMessageModule,
    SweetAlert2Module.forRoot()
  ],
  providers: [...interceptors],
  bootstrap: [AppComponent]
})
export class AppModule { }

