import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EvaluarProyeccionesRoutingModule } from './evaluar-proyecciones-routing.module';
import { ProyeccionespagesComponent } from './pages/proyeccionespages/proyeccionespages.component';


@NgModule({
  declarations: [
    ProyeccionespagesComponent
  ],
  imports: [
    CommonModule,
    EvaluarProyeccionesRoutingModule
  ]
})
export class EvaluarProyeccionesModule { }
