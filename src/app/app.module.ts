import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PlottyModule } from 'plotty'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, PlottyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
