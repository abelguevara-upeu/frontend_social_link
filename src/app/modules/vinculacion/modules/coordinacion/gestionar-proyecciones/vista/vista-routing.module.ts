import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarProyeccionComponent } from './pages/editar-proyeccion/editar-proyeccion.component';
import { InsertarProyeccionComponent } from './pages/insertar-proyeccion/insertar-proyeccion.component';
import { ListaProyeccionComponent } from './pages/lista-proyeccion/lista-proyeccion.component';
import { MostrarProyeccionComponent } from './pages/mostrar-proyeccion/mostrar-proyeccion.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'listarProyeccion', component: ListaProyeccionComponent},
      { path: 'insertarProyeccion', component: InsertarProyeccionComponent},
      { path: 'editarProyeccion/:id', component: EditarProyeccionComponent}, // Agregué ':id' para indicar que la ruta espera un parámetro
      { path: 'mostrarProyeccion/:id', component: MostrarProyeccionComponent},
      { path: '', redirectTo: 'listarProyeccion', pathMatch: 'full'},
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class VistaRoutingModule { }

