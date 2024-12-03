import { Injectable } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { StickyButtonService } from './sticky-button.service';

@Injectable({
  providedIn: 'root'
})
export class TransitionsService {

  transitions: any = ["isRight", "isLeft","enter"];
  selectedTransition: any;
  redirectCompleted: boolean = false;

  constructor(private router: Router, private stickyButtonService: StickyButtonService) {
  }

  // Maneja los eventos de navegación y actualiza el estado de redirección
  routerNavigation() {
    this.router.events.subscribe(e => {
      if (e instanceof NavigationStart) {
        this.redirectCompleted = false;
      }

      if (e instanceof NavigationEnd) {
        this.stickyButtonService.onNavigationEnds();
        setTimeout(() => {
          this.redirectCompleted = true;
        }, 1500);
      }
    });
  }

  // Encuentra la ruta actual y ajusta la transición
  findRoute(path: string, transition: any) {
    if (this.router.url) {
      const actualRoute = this.router.config.find(r => r.path === path.substring(1));
      if (actualRoute) {
        actualRoute.data = { animation: transition };
      }
    }
  }

  // Setea la transición para las rutas hijas
  setTransitionChild(path: string, transition: string, route: any) {
    const childs = route.routeConfig?.children;
    if (!childs) return;

    const child = childs.find((r:any) => r.path === path.substring(1));
    if (child) {
      child.data = { animation: transition };
    }
  }

  // Navegar hacia adelante con la transición especificada
  navigateForward(path: string) {
    this.findRoute(path, this.transitions[0]);
    this.navigate(path);
  }

  // Navegar hacia atrás con la transición especificada
  navigateBack(path: string) {
    this.findRoute(path, this.transitions[1]);
    this.navigate(path);
  }

  navigateForwardQueryParam(url: string, queryParams: any = {}) {
    // Establece la animación antes de navegar
    this.findRoute(url, this.transitions[2]);  // Aquí eliges la transición deseada
    
    // Forzar la recarga de la ruta para activar la animación
    this.router.navigateByUrl('/empty', { skipLocationChange: true }).then(() => {
      this.router.navigate([url], { queryParams: queryParams });
    });
  }
  

  // Método de navegación general
  navigate(path: string) {
    this.stickyButtonService.onNavigationStarts();
    setTimeout(() => {
      this.router.navigate([path]);
    }, 1);
  }
}
