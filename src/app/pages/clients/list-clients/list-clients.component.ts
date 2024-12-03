import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ClienteModelo } from 'src/app/modelos/cliente.model';
import { SpinnerService } from 'src/app/shared/components/spinner/services/spinner-service.service';
import { ClientService } from '../services/client-service.service';
import { Client } from 'src/app/modelos/client.model';
import { Router } from '@angular/router';
import { TransitionsService } from 'src/app/services/transitions.service';

@Component({
  selector: 'app-list-clients',
  templateUrl: './list-clients.component.html',
  styleUrl: './list-clients.component.css'
})
export class ListClientsComponent {

  clients!: Client[];


  constructor(private spinnerService: SpinnerService,
    private messageService: MessageService,
  private clientService: ClientService,
private router: Router,
private transitionService: TransitionsService) {

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.spinnerService.show();
    setTimeout(() => { this.spinnerService.hide()}, 1500);

    this.getAll();
    
  }

  getAll() {
    this.clientService.getAll().subscribe((data: Client[]) => {
      this.clients = data
      console.log(data)
    })
  }


  selectProduct(id:string) {
    //this.router.navigate(['/clientes/users'], { queryParams: { id: id } });
    this.transitionService.navigateForwardQueryParam('clientes/users', { id: id });
  }

  createUser(){
    this.transitionService.navigateForward('clientes/users');
  }

}
