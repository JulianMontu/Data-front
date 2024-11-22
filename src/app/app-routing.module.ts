import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './assets/error/error.component';
import { IndexComponent } from './assets/index/index.component';
import { LayoutComponent } from './shared/components/layout/layout.component';
 
const routes: Routes = [
  {
    path: '', // Ruta principal
    component: LayoutComponent, // Componente contenedor con el header
    children: [
      { path: 'index', loadChildren: () =>  import('./pages/index-page/index-page.module').then(m => m.IndexPageModule) },
      { path: 'seguridad', loadChildren: () => import('./modulos/seguridad/seguridad.module').then(m => m.SeguridadModule) },
      { path: 'admin', loadChildren: () => import('./modulos/admin/admin.module').then(m => m.AdminModule) },
      { path: 'encomiendas', loadChildren: () => import('./modulos/encomiendas/encomiendas.module').then(m => m.EncomiendasModule) },
      { path: 'clientes', loadChildren: () => import('./modulos/clientes/clientes.module').then(m => m.ClientesModule) },
      { path: 'servicios', loadChildren: () => import('./modulos/servicios/servicios.module').then(m => m.ServiciosModule) },
      { path: '', pathMatch: 'full', redirectTo: 'index' } // Redirección a la página de inicio
    ]
  },
  { path: 'error', component: ErrorComponent },
  { path: '**', redirectTo: 'error' } // Ruta por defecto para errores

];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }