import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-atm',
  templateUrl: './atm.component.html',
  styleUrls: ['./atm.component.scss']
})
export class AtmComponent {
  cashInputControl = this.formBuilder.control(null, Validators.required);

  responses = [];

  constructor(private formBuilder: FormBuilder) {}
}
