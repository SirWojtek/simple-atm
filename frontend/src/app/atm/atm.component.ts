import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AtmService, IWithdrawResponse } from './atm.service';

@Component({
  selector: 'app-atm',
  templateUrl: './atm.component.html',
  styleUrls: ['./atm.component.scss']
})
export class AtmComponent {
  cashInputControl = this.formBuilder.control(null, Validators.required);

  responses: IWithdrawResponse[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private atmService: AtmService,
    private snackbar: MatSnackBar
  ) {}

  onWithdrawClick() {
    const amount: number = this.cashInputControl.value;

    this.atmService
      .withdrawCash(amount)
      .subscribe(
        response => this.responses.push(response),
        err => this.snackbar.open(err)
      );
  }
}
