import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'auth',
    loadChildren: ()=>import('./modules/auth/auth.module').then(m=>m.AuthModule),
  },
  {
    path:'vinculacion',
    loadChildren: () => import('./modules/vinculacion/vinculacion.module').then(m => m.VinculacionModule),
  },
  {
    path:'**',
    redirectTo:'auth',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
