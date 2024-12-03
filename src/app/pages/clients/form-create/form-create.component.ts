import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TransitionsService } from 'src/app/services/transitions.service';
import { ClientService } from '../services/client-service.service';
import { MessageService } from 'primeng/api';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-create',
  templateUrl: './form-create.component.html',
  styleUrls: ['./form-create.component.css']
})
export class FormCreateComponent implements OnInit {
  queryParamValue: string | null = null;
  clientId: string | null = null;  // Para almacenar el ID del cliente

  // Formulario con validaciones
  formGroup: FormGroup = this.fb.group({
    nationalId: ['', Validators.required],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    country: ['', Validators.required],
    city: [''],
    state: [''],
    address: [''],
    phone: [''],
    email: ['', [Validators.required, Validators.email]]
  });


  get titleTextButton(): string {
    return this.clientId ? 'Actualizar' : 'Crear';
  }

  constructor(
    private transitionsService: TransitionsService,
    private fb: FormBuilder,
    private clientService: ClientService,
    private messageService: MessageService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // Obtener el parámetro de consulta (id) desde la URL
    this.route.queryParams.subscribe(params => {
      this.clientId = params['id']; // Accede al parámetro 'id' desde la URL
      if (this.clientId) {
        this.loadClientData(this.clientId);  // Si hay un id, cargar los datos del cliente
      }
    });
  }

  // Función para cargar los datos del cliente para edición
  loadClientData(id: string) {
    this.clientService.getClientById(id).subscribe(
      (client) => {
        // Rellenar el formulario con los datos del cliente
        this.formGroup.patchValue(client);
      },
      (error) => {
        console.error('Error al cargar los datos del cliente:', error);
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'No se pudo cargar el cliente' });
      }
    );
  }

  // Función para volver a la lista de clientes
  volver() {
    this.transitionsService.navigateBack('/clientes');
  }

  // Función para manejar el envío del formulario
  onSubmit() {
    if (this.formGroup.valid) {
      if (this.clientId) {
        // Si hay un id, se trata de una edición
        //this.updateClient();
      } else {
        // Si no hay id, se trata de una creación
        this.createClient();
      }
    } else {
      console.log('Formulario no válido');
    }
  }

  // Función para crear un nuevo cliente
  createClient() {
    this.clientService.create(this.formGroup.value).subscribe(
      (data) => {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Cliente creado exitosamente' });
        setTimeout(() => { this.transitionsService.navigateBack('/clientes'); }, 1500);
        console.log('Cliente creado con éxito', data);
      },
      (error) => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'No se pudo crear el cliente' });
        console.error('Error al crear cliente', error);
      }
    );
  }

  // Función para actualizar un cliente existente
  // updateClient() {
  //   this.clientService.update(this.clientId, this.formGroup.value).subscribe(
  //     (data) => {
  //       this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Cliente actualizado exitosamente' });
  //       setTimeout(() => { this.transitionsService.navigateBack('/clientes'); }, 1500);
  //       console.log('Cliente actualizado con éxito', data);
  //     },
  //     (error) => {
  //       this.messageService.add({ severity: 'error', summary: 'Error', detail: 'No se pudo actualizar el cliente' });
  //       console.error('Error al actualizar cliente', error);
  //     }
  //   );
  // }
}
