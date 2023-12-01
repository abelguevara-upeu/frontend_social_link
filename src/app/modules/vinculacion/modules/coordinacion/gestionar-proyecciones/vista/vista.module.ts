import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { VistaRoutingModule } from './vista-routing.module';

import { FormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { EditarProyeccionComponent } from './pages/editar-proyeccion/editar-proyeccion.component';
import { InsertarProyeccionComponent } from './pages/insertar-proyeccion/insertar-proyeccion.component';
import { ListaProyeccionComponent } from './pages/lista-proyeccion/lista-proyeccion.component';
import { MostrarProyeccionComponent } from './pages/mostrar-proyeccion/mostrar-proyeccion.component';



@NgModule({
  declarations: [
    ListaProyeccionComponent,
    InsertarProyeccionComponent,
    EditarProyeccionComponent,
    MostrarProyeccionComponent
  ],
  imports: [
    CommonModule,
    VistaRoutingModule,
    FormsModule,
    BsDropdownModule.forRoot(),
  ]
})
export class VistaModule { }
