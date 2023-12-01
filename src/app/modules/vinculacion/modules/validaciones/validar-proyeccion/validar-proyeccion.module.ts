import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ValidarProyeccionRoutingModule } from './validar-proyeccion-routing.module';
import { ValidarPageComponent } from './pages/proyeccionpage/validar-page.component';


@NgModule({
  declarations: [
    ValidarPageComponent
  ],
  imports: [
    CommonModule,
    ValidarProyeccionRoutingModule
  ]
})
export class ValidarProyeccionModule { }
