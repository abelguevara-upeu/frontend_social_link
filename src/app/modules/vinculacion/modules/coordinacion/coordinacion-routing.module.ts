import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeCoordinacionComponent } from './home/pages/home/home-coordinacion.component';

const routes: Routes = [
  {path:'',
  component: HomeCoordinacionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoordinacionRoutingModule { }
