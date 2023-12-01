  export class Proyeccion {
    constructor(
      public id: number = 0,
      public nombreProyeccion: string = '',
      public descripcion: string = '',
      public ejeEstrategico: string = '',
      public objetivo: string = '',
      public zonaIntervencion: string = '',
      public archivoAdjunto: string = '',
      public fechaInicio: string = '',
      public fechaTermino: string = '',
      public estadoProyeccion: EstadoProyeccion | null = null,
      public tipoProyeccion: TipoProyeccion = new TipoProyeccion(),
      public cursoDocente: CursoDocente | null = null,
      //public actividades: Actividad[] = []
    ) {}
  }

  export class TipoProyeccion {
    constructor(
      public id: number = 0,
      public tipoProyeccion: string = '',
      public proyecciones: Proyeccion[] = []
    ) {}
  }

  export class EstadoProyeccion {
    constructor(
      public id: number = 0,
      public estadoProyeccion: string = '',
      public proyecciones: Proyeccion[] = []
    ) {}
  }

  export class CursoDocente {
    constructor(
      public id: number = 0,
      public curso: Curso = new Curso(),
      public docente: Docente = new Docente(),
      //public cursoDocenteAlumnos: CursoDocenteAlumno[] = [],
      public proyecciones: Proyeccion[] = []
    ) {}
  }

  export class Curso {
    constructor(
      public id: number = 0,
      public curso: string = '',
      public ciclo: Ciclo = new Ciclo(),
      public cursosDocentes: CursoDocente[] = []
    ) {}
  }

  export class Docente {
    constructor(
      public id: number = 0,
      public personaDocente: Persona = new Persona(),
      public cargo: Cargo | null = null,
      public cursosDocentes: CursoDocente[] = []
    ) {}
  }

  export class Persona {
    constructor(
      public id: number = 0,
      public nombre: string = '',
      public apellidoPaterno: string = '',
      public apellidoMaterno: string = '',
      public dni: string = '',
      public docente: Docente | null = null,
      //public alumno: Alumno | null = null,
      //public usuario: Usuario | null = null
    ) {}
  }

  export class Cargo {
    constructor(
      public id: number = 0,
      public nombreCargo: string = '',
      public docentes: Docente[] = []
    ) {}
  }

  export class Ciclo {
    constructor(
      public id: number = 0,
      public ciclo: string = '',
      public semestreRelacionado: Semestre = new Semestre(),
      public cursos: Curso[] = []
    ) {}
  }

  export class Semestre {
    constructor(
      public id: number = 0,
      public semestre: string = '',
      public escuelaRelacionada: Escuela = new Escuela(),
      public ciclos: Ciclo[] = []
    ) {}
  }

  export class Escuela {
    constructor(
      public id: number = 0,
      public escuela: string = '',
      public facultad: Facultad = new Facultad(),
      public semestres: Semestre[] = []
    ) {}
  }

  export class Facultad {
    constructor(
      public id: number = 0,
      public facultad: string = '',
      public escuelas: Escuela[] = []
    ) {}
  }
