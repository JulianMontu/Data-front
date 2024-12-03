import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsRoutingModule } from './clients-routing.module';
import { FormCreateComponent } from './form-create/form-create.component';
import { ListClientsComponent } from './list-clients/list-clients.component';
import { PrimengModule } from 'src/app/primeng/primeng.module';
import { ClientService } from './services/client-service.service';
import { MessageService } from 'primeng/api';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FormCreateComponent,
    ListClientsComponent
  ],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    PrimengModule,
    ReactiveFormsModule,
    FormsModule,
    
  ],
  providers:[
    ClientService,
    MessageService
  ]
})
export class ClientsModule { }
