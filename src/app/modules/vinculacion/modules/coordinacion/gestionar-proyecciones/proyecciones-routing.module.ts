import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProyeccionesComponent } from './proyecciones.component';

const routes: Routes = [
  { path: '',
    component: ProyeccionesComponent,
    loadChildren: () => import('./vista/vista.module').then(module => module.VistaModule)
  },
  {
    path: '**',
    redirectTo:'  ' //fixed
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class ProyeccionesRoutingModule {}
