import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AtmComponent } from './atm/atm.component';

@NgModule({
  declarations: [AppComponent, AtmComponent],
  imports: [BrowserModule, BrowserAnimationsModule, MatCardModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
