import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeProyeccionComponent } from './home/pages/home/home-proyeccion.component';

const routes: Routes = [
  {path:'',
  component: HomeProyeccionComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProyeccionesRoutingModule { }
