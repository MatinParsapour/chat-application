import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EntrancementComponent } from './components/entrancement/entrancement.component';
import { PhoneNumberComponent } from './components/phone-number/phone-number.component';

@NgModule({
  declarations: [
    AppComponent,
    EntrancementComponent,
    PhoneNumberComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
