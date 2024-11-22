import { Component } from '@angular/core';

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
}
