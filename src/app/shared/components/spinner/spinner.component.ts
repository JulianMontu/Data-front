import { Component } from '@angular/core';
import { SpinnerService } from './services/spinner-service.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrl: './spinner.component.css'
})
export class SpinnerComponent {

  get isLoading() {
    return this.spinnerService.showSpinner;
  }

  constructor(private spinnerService:SpinnerService){}

}
