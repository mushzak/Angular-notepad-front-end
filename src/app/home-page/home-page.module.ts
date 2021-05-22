import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomePageComponent} from './components/home-page.component';
import {HomePageRoutingModule} from './home-page-routing.module';
import {SearchComponent} from './components/search/search.component';


@NgModule({
  declarations: [
    HomePageComponent,
    SearchComponent,
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule
  ]
})
export class HomePageModule {
}
