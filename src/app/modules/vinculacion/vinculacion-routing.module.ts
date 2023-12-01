import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VinculacionPageComponent } from './pages/vista-packages/vinculacion-page.component';

const routes: Routes = [
  {
    path: '',
    component: VinculacionPageComponent,
  },
  {
    path:'home-coordinacion',
    loadChildren: () => import('./modules/coordinacion/home/home-coordinacion.module').then(m => m.HomeCoordinacionModule),
  },
  {
    path:'home-proyeccion',
    loadChildren: () => import('./modules/proyecciones/home/home-proyeccion.module').then(m => m.HomeProyeccionModule),
  },
  {
    path:'home-validation',
    loadChildren: () => import('./modules/validaciones/home/home-validation.module').then(m => m.HomeValidationModule),
  },
  {
    path:'home-configuracion',
    loadChildren: () => import('./modules/configuracion/home/home-configuracion.module').then(m => m.HomeConfiguracionModule),
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VinculacionRoutingModule { }
