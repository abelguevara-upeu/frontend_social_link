
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { Cargo, Persona, Ciclo, Curso, CursoDocente, Docente, Escuela, EstadoProyeccion, Facultad, Proyeccion, Semestre, TipoProyeccion } from '../../../core/models/proyeccion';

import { CargoService } from '../../../core/service/cargo.service';
import { CicloService } from '../../../core/service/ciclo.service';
import { CursoService } from '../../../core/service/curso.service';
import { CursoDocenteService } from '../../../core/service/cursoDocente.service';
import { DocenteService } from '../../../core/service/docente.service';
import { EscuelaService } from '../../../core/service/escuela.service';
import { EstadoProyeccionService } from '../../../core/service/estadoProyeccion.service';
import { FacultadService } from '../../../core/service/facultad.service';
import { PersonaService } from '../../../core/service/persona.service';
import { ProyeccionService } from '../../../core/service/proyeccion.service';
import { SemestreService } from '../../../core/service/semestre.service';
import { TipoProyeccionService } from '../../../core/service/tipoProyeccion.service';
import Swal from 'sweetalert2';
import { Route, Router } from '@angular/router';


@Component({
  selector: 'app-insertar-proyeccion',
  templateUrl: './insertar-proyeccion.component.html'
})

export class InsertarProyeccionComponent implements OnInit{

  nuevaProyeccion: Proyeccion = new Proyeccion();

  facultades: Facultad[] = [];
  escuelas: Escuela[] = [];
  semestres: Semestre[] = [];
  ciclos: Ciclo[] = [];
  cursos: Curso[] = [];
  docentes: Docente[] = [];
  cursosDocente: CursoDocente[] = [];
  tiposProyeccion: TipoProyeccion[] = [];
  estadosProyeccion: EstadoProyeccion[] = [];
  cargos: Cargo[] = [];
  personas: Persona[] = []


  constructor(
    private proyeccionService: ProyeccionService,
    private tipoProyeccionService: TipoProyeccionService,
    private estadoProyeccionService: EstadoProyeccionService,
    private cursoDocenteService: CursoDocenteService,
    private docenteService: DocenteService,
    private cursoService: CursoService,
    private cicloService: CicloService,
    private semestreService: SemestreService,
    private escuelaService: EscuelaService,
    private facultadService: FacultadService,
    private cargoService: CargoService,
    private personaService: PersonaService,
    private router: Router,
  ) {}

  ngOnInit(): void {
      this.getFacultades();
      this.getTiposProyecciones();
      this.getEstadosProyecciones();
      this.getCursosDocente()
  }

  getSemestres(){
    this.semestreService.getSemestres().subscribe(
      (semestre) => {
        this.semestres = semestre;
      }
      ,
      (error) => {
        console.error('Error al obtener los semestres', error);
        // Manejo de errores aquí
      }
    )
  }

  getFacultades(){
    this.facultadService.getFacultades().subscribe(
      (facultad) => {
        this.facultades = facultad;
      },
      (error) => {
        console.error('Error al obtener las facultades:', error);
        // Manejo de errores aquí
      }
    )
  }

  getEscuelas(){
    this.escuelaService.getEscuelas().subscribe(
      (escuelas) => {
        this.escuelas = escuelas;
      }
      ,
      (error) => {
        console.error('Error al obtener las escuelas:', error);
        // Manejo de errores aquí
      }
    )
  }

  getCiclos() {
    this.cicloService.getCiclos().subscribe(
      (ciclo) => {
        this.ciclos = ciclo;
      }
      ,
      (error) => {
        console.error('Error al obtener las escuelas:', error);
        // Manejo de errores aquí
      }
    )
  }

  getCursosDocente() {
    this.cursoDocenteService.getCursosDocente().subscribe(
      (cursoDocente) => {
        this.cursosDocente = cursoDocente;
        console.log('Cursos con Docente:', this.cursosDocente); // Agrega este log para verificar los datos
      },
      (error) => {
        console.error('Error al obtener los cursos docente:', error);
        // Manejo de errores aquí
      }
    );
  }



  getCursos() {
    this.cursoService.getCursos().subscribe(
      (curso) => {
        this.cursos = curso;
      }
      ,
      (error) => {
        console.error('Error al obtener las escuelas:', error);
        // Manejo de errores aquí
      }
    )
  }

  getDocentes() {
    this.docenteService.getDocentes().subscribe(
      (docentes) => {
        this.docentes = docentes;
      }
      ,
      (error) => {
        console.error('Error al obtener las escuelas:', error);
        // Manejo de errores aquí
      }
    )
  }

  getPersona() {
    this.personaService.getPersonas().subscribe(
      (lista) => {
        this.personas = lista;
      }
      ,
      (error) => {
        console.error('Error al obtener las escuelas:', error);
        // Manejo de errores aquí
      }
    )
  }

  getCargo() {
    this.cargoService.getCargos().subscribe(
      (lista) => {
        this.cargos = lista;
      }
      ,
      (error) => {
        console.error('Error al obtener las escuelas:', error);
        // Manejo de errores aquí
      }
    )
  }


  getTiposProyecciones() {
    this.tipoProyeccionService.getTipoProyecciones().subscribe(
      (tipoProyeccion) => {
        this.tiposProyeccion = tipoProyeccion;
      }
      ,
      (error) => {
        console.error('Error al obtener los tipos:', error);
        // Manejo de errores aquí
      }
    )
  }

  getEstadosProyecciones() {
    this.estadoProyeccionService.getEstadoProyecciones().subscribe(
      (estadoProyeccion) => {
        this.estadosProyeccion = estadoProyeccion;
      }
      ,
      (error) => {
        console.error('Error al obtener los tipos:', error);
        // Manejo de errores aquí
      }
    )
  }

  agregarProyeccion(): void {
    Swal.fire(
      'Good job!',
      'You clicked the button!',
      'success'
    )
      console.log('Datos a enviar:', this.nuevaProyeccion);

    this.proyeccionService.agregarProyeccion(this.nuevaProyeccion)
      .subscribe(
        (proyeccion) => {
          // Manejar el éxito
          console.log('Proyección agregada con éxito:', proyeccion);
          this.router.navigate(['/vinculacion/home-coordinacion/gestionarProyeccion/listarProyeccion'], { replaceUrl: true });
        },
        (error) => {
          // Manejar el error
          console.error('Error al agregar la proyección:', error);

          // Imprimir detalles adicionales del error en la consola
          if (error instanceof HttpErrorResponse) {
            console.error('Detalles del error:', error.error);
          }
        }
      );
  }

}
