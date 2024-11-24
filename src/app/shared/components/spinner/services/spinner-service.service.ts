import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {
  showSpinner: boolean = false;

  constructor() { }

  show(){
    return this.showSpinner = true;
  }

  hide(){
    return this.showSpinner = false;
  }
}
