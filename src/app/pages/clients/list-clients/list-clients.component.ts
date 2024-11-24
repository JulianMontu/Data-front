import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ClienteModelo } from 'src/app/modelos/cliente.model';
import { SpinnerService } from 'src/app/shared/components/spinner/services/spinner-service.service';
import { ClientService } from '../services/client-service.service';
import { Client } from 'src/app/modelos/client.model';

@Component({
  selector: 'app-list-clients',
  templateUrl: './list-clients.component.html',
  styleUrl: './list-clients.component.css'
})
export class ListClientsComponent {

  clients!: Client[];


  constructor(private spinnerService: SpinnerService,
    private messageService: MessageService,
  private clientService: ClientService){

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


  selectProduct(cliente: ClienteModelo) {
      //this.messageService.add({ severity: 'info', summary: 'Product Selected', detail: product.name });
  }

}
