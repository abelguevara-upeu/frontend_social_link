import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


import { Cargo, Ciclo, Curso, CursoDocente, Docente, Escuela, EstadoProyeccion, Facultad, Persona, Proyeccion, Semestre, TipoProyeccion } from '../../../core/models/proyeccion';

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

@Component({
  selector: 'app-mostrar-proyeccion',
  templateUrl: './mostrar-proyeccion.component.html',
})
export class MostrarProyeccionComponent {

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
    private activateRoute: ActivatedRoute
  ) {}


  ngOnInit(): void {
    this.getFacultades();
    this.getEscuelas();
    this.getSemestres();
    this.getCiclos();
    this.getCursos();
    this.getTiposProyecciones();
    this.getEstadosProyecciones();
    this.getCursosDocente();
    this.cargarProyeccion()
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

getFacultades() {
  this.facultadService.getFacultades().subscribe(
    (facultad) => {
      this.facultades = facultad;
      console.log('Facultades cargadas:', this.facultades);
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
      console.log('Tipos de Proyección cargados:', this.tiposProyeccion);
    },
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

editarProyeccion(){
  Swal.fire(
    'Good job!',
    'You clicked the button!',
    'success'
  )
  this.proyeccionService.actualizarProyeccion(this.nuevaProyeccion.id, this.nuevaProyeccion).subscribe(
    (proyeccionAgregada) => {
      console.log('Libro actualizado correctamente:', proyeccionAgregada);
      // Puedes realizar acciones adicionales después de agregar el libro
    },
    (error) => {
      console.error('Error al actualizar el libro:', error);
      // Manejo de errores aquí
    }
  )
}

cargarProyeccion() {
  this.activateRoute.params.subscribe(params => {
    let id = params['id'];
    if (id) {
      this.proyeccionService.getProyeccion(id).subscribe(
        (datos) => {
          this.nuevaProyeccion = new Proyeccion(
            datos.id,
            datos.nombreProyeccion,
            datos.descripcion,
            datos.ejeEstrategico,
            datos.objetivo,
            datos.zonaIntervencion,
            datos.archivoAdjunto,
            datos.fechaInicio,
            datos.fechaTermino,
            datos.estadoProyeccion,
            datos.tipoProyeccion,
            datos.cursoDocente
          );

          // Buscar y seleccionar manualmente la opción correcta en estadosProyeccion
          // const estadoSeleccionado = this.estadosProyeccion.find(e => e.estadoProyeccion === datos.estadoProyeccion?.estadoProyeccion);
          // if (estadoSeleccionado) {
          //   this.nuevaProyeccion.estadoProyeccion = estadoSeleccionado;
          // }

          const tipoSeleccionado = this.tiposProyeccion.find(e => e.tipoProyeccion === datos.tipoProyeccion.tipoProyeccion);
          if (tipoSeleccionado) {
            this.nuevaProyeccion.tipoProyeccion = tipoSeleccionado;
          }

          const cursoSeleccionado = this.cursosDocente.find(e => e.curso.curso === datos.cursoDocente?.curso.curso);
          if (cursoSeleccionado) {
            if (!this.nuevaProyeccion.cursoDocente) {
              this.nuevaProyeccion.cursoDocente = new CursoDocente();
            }
            this.nuevaProyeccion.cursoDocente.curso = cursoSeleccionado.curso;
          }
        },
        (error) => {
          console.error('Error al obtener la proyección:', error);
        }
      );
    }
  });
}
}
