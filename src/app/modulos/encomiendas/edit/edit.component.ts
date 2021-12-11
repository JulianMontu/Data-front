import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EncomiendaModelo } from 'src/app/modelos/encomienda.model';
import { EncomiendaService } from 'src/app/servicios/encomienda.service';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {


  constructor(private fb: FormBuilder,
    private encomiendaService: EncomiendaService,
    private router: Router,
    private route: ActivatedRoute
  ) { }
  fgValidacion = this.fb.group({
    id: ['', [Validators.required]],
    descripcion: ['', [Validators.required]],
    nombre: ['', [Validators.required]],
    peso: ['', [Validators.required]],
    tipo: ['', [Validators.required]],
    presentacion: ['', [Validators.required]],
  });

  id: string = ''
  buscarRegistro(id: string) {
    this.encomiendaService.getWithId(id).subscribe((data: EncomiendaModelo) => {
      console.log(data)
      this.fgValidacion.controls["id"].setValue(id)
      this.fgValidacion.controls["nombre"].setValue(data.nombre)
      this.fgValidacion.controls["descripcion"].setValue(data.descripcion)
      this.fgValidacion.controls["peso"].setValue(data.peso)
      this.fgValidacion.controls["presentacion"].setValue(data.presentacion)
      this.fgValidacion.controls["tipo"].setValue(data.tipo)
    })
  }
  edit() {
    let usuario = new EncomiendaModelo();
    usuario.id = this.fgValidacion.controls["id"].value;
    usuario.nombre = this.fgValidacion.controls["nombre"].value;
    usuario.descripcion = this.fgValidacion.controls["descripcion"].value;
    usuario.peso = this.fgValidacion.controls["peso"].value;
    usuario.presentacion = this.fgValidacion.controls["presentacion"].value;
    usuario.tipo = this.fgValidacion.controls["tipo"].value;

    this.encomiendaService.update(usuario).subscribe((data: EncomiendaModelo) => {
      Swal.fire('Editado Correctamente!', '', 'success')
      this.router.navigate(['/encomiendas/get']);
    },
      (error: any) => {
        console.log(error)
        alert("Error en el envio");
      })
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"]
    this.buscarRegistro(this.id);

  }

}
