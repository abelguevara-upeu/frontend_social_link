import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeValidationComponent } from './home/pages/home/home-validation.component';

const routes: Routes = [
  {path:'',
  component: HomeValidationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ValidacionesRoutingModule { }
