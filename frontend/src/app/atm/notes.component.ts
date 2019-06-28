import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-notes',
  template: `
  <mat-chip-list>
    <mat-chip
      *ngFor="let note of notes"
    >{{ note }}</mat-chip>
  </mat-chip-list>
  `
})
export class NotesComponent {
  @Input()
  notes: number[] = [];
}
