import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeProyeccionComponent } from './pages/home/home-proyeccion.component';

const routes: Routes = [
  {
    path:'',
    component: HomeProyeccionComponent,
    children: [
        {
          path: 'ejecutarProyeccion',
          loadChildren: () => import('../ejecutar-proyeccion/ejecutar-proyeccion.module').then(m => m.EjecutarProyeccionModule)
        },
        {
          path: 'gestionarAsistencia',
          loadChildren: () => import('../gestionar-asistencia/gestionar-asistencia.module').then(m => m.GestionarAsistenciaModule)
        },
        {
          path:'**',
          redirectTo:'ejecutarProyeccion'
        },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
