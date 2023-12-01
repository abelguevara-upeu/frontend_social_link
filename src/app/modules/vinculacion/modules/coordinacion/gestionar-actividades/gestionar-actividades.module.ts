import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionarActividadesRoutingModule } from './gestionar-actividades-routing.module';
import { ActividadespagesComponent } from './pages/actividadespages/actividadespages.component';


@NgModule({
  declarations: [
    ActividadespagesComponent
  ],
  imports: [
    CommonModule,
    GestionarActividadesRoutingModule
  ]
})
export class GestionarActividadesModule { }
