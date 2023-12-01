import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedConfiguracionModule } from '../../shared/shared-configuracion/shared-configuracion.module';
import { HomeConfiguracionRoutingModule } from './home-configuracion-routing.module';
import { HomeConfiguracionComponent } from './pages/home/home-configuracion.component';


@NgModule({
  declarations: [
    HomeConfiguracionComponent
  ],
  imports: [
    CommonModule,
    HomeConfiguracionRoutingModule,
    SharedConfiguracionModule,
  ]
})
export class HomeConfiguracionModule { }
