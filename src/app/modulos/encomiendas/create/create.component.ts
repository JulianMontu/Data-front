import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EncomiendaModelo } from 'src/app/modelos/encomienda.model';
import { EncomiendaService } from 'src/app/servicios/encomienda.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private fb: FormBuilder,
    private encomiendaService: EncomiendaService,
    private router: Router) { }
  fgValidacion = this.fb.group({
    descripcion: ['', [Validators.required]],
    nombre: ['', [Validators.required]],
    peso: ['', [Validators.required]],
    tipo: ['', [Validators.required]],
    presentacion: ['', [Validators.required]],
  });


  ngOnInit(): void {
  }
  store() {
    let encomiendas = new EncomiendaModelo();
    encomiendas.nombre = this.fgValidacion.controls["nombre"].value;
    encomiendas.descripcion = this.fgValidacion.controls["descripcion"].value;
    encomiendas.peso = this.fgValidacion.controls["peso"].value;
    encomiendas.tipo = this.fgValidacion.controls["tipo"].value;
    encomiendas.presentacion = this.fgValidacion.controls["presentacion"].value;

    this.encomiendaService.store(encomiendas).subscribe((data: EncomiendaModelo) => {
      Swal.fire('Creado correctamente!', '', 'success')
      this.router.navigate(['/encomiendas/get']);
    },
      (error: any) => {
        console.log(error)
        alert("Error en el envio");
      })
  }
}
