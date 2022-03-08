import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CountryCapitalsComponent } from './country-capitals/country-capitals.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, CountryCapitalsComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
