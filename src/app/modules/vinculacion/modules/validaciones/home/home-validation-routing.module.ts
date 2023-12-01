import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeValidationComponent } from './pages/home/home-validation.component';

const routes: Routes = [
  {
    path:'',
    component: HomeValidationComponent,
    children: [
        {
          path: 'validarProyeccion',
          loadChildren: () => import('../validar-proyeccion/validar-proyeccion.module').then(m => m.ValidarProyeccionModule)
        },
        {
          path:'**',
          redirectTo:'validarProyeccion'
        },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeValidationRoutingModule { }
