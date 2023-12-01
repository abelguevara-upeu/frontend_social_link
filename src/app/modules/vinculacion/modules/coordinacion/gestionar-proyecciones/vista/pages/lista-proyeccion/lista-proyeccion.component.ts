import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Proyeccion } from '../../../core/models/proyeccion';
import { ProyeccionService } from '../../../core/service/proyeccion.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-lista-proyeccion',
  templateUrl: './lista-proyeccion.component.html'
})

export class ListaProyeccionComponent implements OnInit {
  proyecciones: Proyeccion[] = [];
  nuevaProyeccion: Proyeccion = new Proyeccion();

  constructor(
    private proyeccionService: ProyeccionService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getProyecciones();
  }

  //gets
  getProyecciones(): void {
    this.proyeccionService.getProyecciones().subscribe(
      (proyecciones: Proyeccion[]) =>  {
        console.log(proyecciones);
        this.proyecciones = proyecciones;
      }
    );
  }

  eliminarProyeccion(ProyeccionId: number): void {
    if (confirm('¿Estás seguro de que quieres eliminar este libro?')) {
      this.proyeccionService.eliminarProyeccion(ProyeccionId).subscribe(
        () => {
          this.getProyecciones();
          //window.location.reload();
          this.router.navigate(['/vinculacion/home-coordinacion/gestionarProyeccion/listarProyeccion'], { replaceUrl: true });
      },
        (error) => {
          console.error('Error al eliminar el libro:', error);

          // Imprimir el cuerpo de la respuesta si está disponible
          if (error instanceof HttpErrorResponse && error.error) {
            console.error('Detalles del error:', error.error);
          }
        }
      );
    }
  }

  //funciones
  seleccionarAccion(event: any, proyeccion: Proyeccion): void {
    const accionSeleccionada = event.target.value;

    switch (accionSeleccionada) {
      case 'editar':
        break;
      case 'eliminar':
        Swal.fire(
          'Good job!',
          'You clicked the button!',
          'success'
        )
        this.eliminarProyeccion(proyeccion.id);
        break;
      default:
        break;
    }
  }

}
