import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { fader, slider } from 'src/app/app.animations';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
  animations: [fader, slider]
})
export class LayoutComponent {

  prepareRoute(outlet: RouterOutlet) {
    return outlet?.activatedRouteData['animation'] || '';
  }
}
