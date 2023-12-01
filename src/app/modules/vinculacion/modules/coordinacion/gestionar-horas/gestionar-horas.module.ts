import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionarHorasRoutingModule } from './gestionar-horas-routing.module';
import { HoraspageComponent } from './pages/horaspage/horaspage.component';


@NgModule({
  declarations: [
    HoraspageComponent
  ],
  imports: [
    CommonModule,
    GestionarHorasRoutingModule
  ]
})
export class GestionarHorasModule { }
