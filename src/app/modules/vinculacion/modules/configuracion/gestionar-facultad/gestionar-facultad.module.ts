import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { GestionarFacultadRoutingModule } from './gestionar-facultad-routing.module';
import { ListarFacultadPageComponent } from './pages/proyeccionpage/listar-facultad-page.component';


@NgModule({
  declarations: [
    ListarFacultadPageComponent
  ],
  imports: [
    CommonModule,
    GestionarFacultadRoutingModule
  ]
})
export class GestionarFacultadModule { }
