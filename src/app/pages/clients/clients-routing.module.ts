import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListClientsComponent } from './list-clients/list-clients.component';
import { FormCreateComponent } from './form-create/form-create.component';

const routes: Routes = [
  {
    path: '',
    component: ListClientsComponent
  },
  {
    path: 'users',
    component: FormCreateComponent
  },
  {
    path: 'edit?type=id',
    component: FormCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientsRoutingModule { }
