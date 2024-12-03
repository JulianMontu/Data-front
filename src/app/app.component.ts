import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { fader, slider } from './app.animations';
import { TransitionsService } from './services/transitions.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [fader, slider]
})
export class AppComponent {
  title = 'amazon';

  constructor(private transitionsService: TransitionsService) {}

  // Prepara la ruta actual con la animación adecuada
  prepareRoute(outlet: RouterOutlet) {
    return outlet?.activatedRouteData['animation'] || '';
  }
}
