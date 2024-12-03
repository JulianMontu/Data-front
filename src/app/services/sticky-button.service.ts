import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StickyButtonService {

  private isVisible: boolean = true;

  constructor() {}

  // Método para ocultar el botón al iniciar una transición
  onNavigationStarts(): void {
    this.setVisibility(false);
  }

  // Método para mostrar el botón al finalizar una transición
  onNavigationEnds(): void {
    this.setVisibility(true);
  }

  // Controla la visibilidad del botón
  private setVisibility(isVisible: boolean): void {
    this.isVisible = isVisible;
    // Aquí puedes incluir lógica para aplicar clases CSS o estilos dinámicamente
  }

  // Retorna el estado actual del botón
  getVisibility(): boolean {
    return this.isVisible;
  }
}
