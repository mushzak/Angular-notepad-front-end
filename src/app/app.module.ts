import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {LayoutModule} from './shared/modules/layout/layout.module';
import {LoadingModule} from './shared/modules/loading/loading.module';
import {AppRoutingModule} from './app-routing.module';
import {interceptors} from './shared/interceptors/interceptors';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    LoadingModule
  ],
  providers: [...interceptors],
  bootstrap: [AppComponent]
})
export class AppModule { }

