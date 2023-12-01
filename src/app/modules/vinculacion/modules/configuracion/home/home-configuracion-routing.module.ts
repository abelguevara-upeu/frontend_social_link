import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeConfiguracionComponent } from './pages/home/home-configuracion.component';

const routes: Routes = [
  {
    path:'',
    component: HomeConfiguracionComponent,
    children: [
        {
          path: 'gestionarFacultad',
          loadChildren: () => import('../gestionar-facultad/gestionar-facultad.module').then(m => m.GestionarFacultadModule)
        },
        {
          path:'**',
          redirectTo:'gestionarFacultad'
        },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeConfiguracionRoutingModule { }
