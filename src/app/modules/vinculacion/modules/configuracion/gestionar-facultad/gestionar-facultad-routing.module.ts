import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // { path: 'gestionar', component: ValidarPageComponent,
  //   loadChildren: () => import('./vista/validarProyeccion.module').then(module => module.VistaModule)
  // },
  {
    path: '**',
    redirectTo:'  ' //fixed
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionarFacultadRoutingModule { }
