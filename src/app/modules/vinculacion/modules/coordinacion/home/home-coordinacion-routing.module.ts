import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeCoordinacionComponent } from './pages/home/home-coordinacion.component';

const routes: Routes = [
  {
    path:'',
    component: HomeCoordinacionComponent,
    children: [
        {
          path: 'gestionarProyeccion',
          loadChildren: () => import('../gestionar-proyecciones/proyecciones.module').then(m => m.ProyeccionesModule)
        },
        {
          path: 'gestionarActividades',
          loadChildren: () => import('../gestionar-actividades/gestionar-actividades.module').then(m => m.GestionarActividadesModule)
        },
        {
          path: 'gestionarParticipantes',
          loadChildren: () => import('../gestionar-participantes/gestionar-participantes.module').then(m => m.GestionarParticipantesModule)
        },
        {
          path: 'gestionarHoras',
          loadChildren: () => import('../gestionar-horas/gestionar-horas.module').then(m => m.GestionarHorasModule)
        },
        {
          path: 'gestionarReporte',
          loadChildren: () => import('../gestionar-reporte/gestionar-reporte.module').then(m => m.GestionarReporteModule)
        },
        {
          path: 'evaluarProyeccion',
          loadChildren: () => import('../evaluar-proyecciones/evaluar-proyecciones.module').then(m => m.EvaluarProyeccionesModule)
        },
        {
          path:'**',
          redirectTo:'gestionarProyeccion'
        },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeCoordinacionRoutingModule { }
