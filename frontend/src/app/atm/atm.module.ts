import { NgModule, ModuleWithProviders } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatChipsModule } from '@angular/material/chips';

import { AtmService } from './atm.service';
import { AtmComponent } from './atm.component';
import { NotesComponent } from './notes.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    MatChipsModule
  ],
  declarations: [AtmComponent, NotesComponent],
  providers: [AtmService],
  exports: [AtmComponent]
})
export class AtmModule {}
