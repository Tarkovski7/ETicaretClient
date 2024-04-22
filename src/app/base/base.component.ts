import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

export class BaseComponent {
  constructor(private spinner: NgxSpinnerService) {}
  showSpinner(spinnerName: SpinnerType) {
    this.spinner.show(spinnerName);

    setTimeout(() => this.spinner.hide(spinnerName), 500);
  }
  hideSpinner(spinnerName: SpinnerType) {
    this.spinner.hide(spinnerName);
  }
}

export enum SpinnerType {
  BallSpinFadeRotating = 's1',
  SquareJellyBox = 's2',
  Timer = 's3',
}
