import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedProyeccionModule } from '../../shared/shared-proyecciones/shared-proyeccion.module';
import { HomeRoutingModule } from './home-proyeccion-routing.module';
import { HomeProyeccionComponent } from './pages/home/home-proyeccion.component';


@NgModule({
  declarations: [
    HomeProyeccionComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedProyeccionModule,
  ]
})
export class HomeProyeccionModule { }
