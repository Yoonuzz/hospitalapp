import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { SearchdeptComponent } from './searchdept/searchdept.component';
import { ViewdoctorComponent } from './viewdoctor/viewdoctor.component';

@NgModule({
  declarations: [
    AppComponent,
    FrontpageComponent,
    SearchdeptComponent,
    ViewdoctorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
