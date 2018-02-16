import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeadermenuComponent } from './headermenu/headermenu.component';


@NgModule({
  declarations: [
    AppComponent,
    HeadermenuComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
