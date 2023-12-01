import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EjecutarProyeccionRoutingModule } from './ejecutar-proyeccion-routing.module';
import { ProyeccionpagesComponent } from './pages/proyeccionpages/proyeccionpages.component';

@NgModule({
  declarations: [
    ProyeccionpagesComponent
  ],
  imports: [
    CommonModule,
    EjecutarProyeccionRoutingModule
  ]
})
export class EjecutarProyeccionModule { }
