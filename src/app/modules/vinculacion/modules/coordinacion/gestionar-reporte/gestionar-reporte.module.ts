import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionarReporteRoutingModule } from './gestionar-reporte-routing.module';
import { ReportepageComponent } from './pages/reportepage/reportepage.component';


@NgModule({
  declarations: [
    ReportepageComponent
  ],
  imports: [
    CommonModule,
    GestionarReporteRoutingModule
  ]
})
export class GestionarReporteModule { }
