import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClienteModelo } from 'src/app/modelos/cliente.model';
import { ClienteService } from 'src/app/servicios/cliente.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private fb: UntypedFormBuilder,
    private clienteService: ClienteService,
    private router: Router) { }
  fgValidacion = this.fb.group({
    cedula: ['', [Validators.required]],
    nombre: ['', [Validators.required]],
    apellido: ['', [Validators.required]],
    pais: ['', [Validators.required]],
    ciudad: ['', [Validators.required]],
    departamento: ['', [Validators.required]],
    direccion: ['', [Validators.required]],
    telefono: ['', [Validators.required, Validators.minLength(6)]],
    correo: ['', [Validators.required, Validators.email]],
  });


  ngOnInit(): void {
  }
  store() {
    let clientes = new ClienteModelo();
    clientes.nombre = this.fgValidacion.controls["nombre"].value;
    clientes.apellido = this.fgValidacion.controls["apellido"].value;
    clientes.cedula = this.fgValidacion.controls["cedula"].value;
    clientes.pais = this.fgValidacion.controls["pais"].value;
    clientes.ciudad = this.fgValidacion.controls["ciudad"].value;
    clientes.departamento = this.fgValidacion.controls["departamento"].value;
    clientes.direccion = this.fgValidacion.controls["direccion"].value;
    clientes.email = this.fgValidacion.controls["correo"].value;
    clientes.telefono = this.fgValidacion.controls["telefono"].value;

    this.clienteService.store(clientes).subscribe((data: ClienteModelo) => {
      Swal.fire('Creado correctamente!', '', 'success')
      this.router.navigate(['/clientes/get']);
    },
      (error: any) => {
        console.log(error)
        alert("Error en el envio");
      })
  }
}
