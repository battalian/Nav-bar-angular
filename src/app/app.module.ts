import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NavElementComponent } from './nav-element/nav-element.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    NavBarComponent,
    NavElementComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
