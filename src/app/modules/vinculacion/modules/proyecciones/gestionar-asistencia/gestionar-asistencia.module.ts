import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionarAsistenciaRoutingModule } from './gestionar-asistencia-routing.module';
import { AsistenciapagesComponent } from './pages/asistenciapages/asistenciapages.component';


@NgModule({
  declarations: [
    AsistenciapagesComponent
  ],
  imports: [
    CommonModule,
    GestionarAsistenciaRoutingModule
  ]
})
export class GestionarAsistenciaModule { }
