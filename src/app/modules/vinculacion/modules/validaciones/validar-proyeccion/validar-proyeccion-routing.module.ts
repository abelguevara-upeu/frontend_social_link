import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidarPageComponent } from './pages/proyeccionpage/validar-page.component';

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
export class ValidarProyeccionRoutingModule { }
