import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ScullyLibModule } from '@scullyio/ng-lib';

import { AppComponent } from './app.component';

import { JobsSectionModule } from '@elewa-group/pages/elewa/home'
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, 
    ScullyLibModule,
    BrowserModule,
    JobsSectionModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
