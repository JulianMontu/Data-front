import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TransitionsService } from 'src/app/services/transitions.service';
import { ClientService } from '../services/client-service.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-form-create',
  templateUrl: './form-create.component.html',
  styleUrl: './form-create.component.css'
})
export class FormCreateComponent {

  formGroup = this.fb.group({
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

  constructor(private transitionsService:TransitionsService,
    private fb: FormBuilder,
    private clientService: ClientService,
    private messageService: MessageService
  ) { }

  volver(){
    this.transitionsService.navigateBack('/clientes');
  }

  onSubmit() {
    if (this.formGroup.valid) {
      console.log('Datos del formulario:', this.formGroup.value); // Verifica los valores
      this.clientService.create(this.formGroup.value).subscribe(
        (data) => {
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Registro creado exitosamente' });
          
          setTimeout(() => {this.transitionsService.navigateBack('/clientes');}, 1500);

          
          console.log('Cliente creado con éxito', data);
        },
        (error) => {
          this.messageService.add({ severity: 'error', summary: 'error', detail: 'No se creo el registro' });
          console.error('Error al crear cliente', error);
        }
      );
    } else {
      console.log('Formulario no válido');
    }
  }
  

}
