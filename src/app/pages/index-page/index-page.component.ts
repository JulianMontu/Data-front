import { Component } from '@angular/core';
import { SpinnerService } from 'src/app/shared/components/spinner/services/spinner-service.service';

@Component({
  selector: 'app-index-page',
  templateUrl: './index-page.component.html',
  styleUrl: './index-page.component.css'
})
export class IndexPageComponent {
  items:any = [
    {
      title: "1",
      subtitle:"1",
      description:"1"
    },
    {
      title: "2",
      subtitle:"1",
      description:"1"
    },
    {
      title: "2",
      subtitle:"1",
      description:"1"
    }
  ]

  constructor(private spinnerService: SpinnerService){

  }


  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.spinnerService.show();
    setTimeout(() => { this.spinnerService.hide()}, 1500);
  }
}
