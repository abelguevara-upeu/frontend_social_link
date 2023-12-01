import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

import { FormsModule } from '@angular/forms';
import { ProyeccionesRoutingModule } from './proyecciones-routing.module';
import { ProyeccionesComponent } from './proyecciones.component';

@NgModule({
  declarations: [
    ProyeccionesComponent
  ],
  imports: [
    CommonModule,
    ProyeccionesRoutingModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot()
  ]
})
export class ProyeccionesModule { }
