import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeConfiguracionComponent } from './home/pages/home/home-configuracion.component';

const routes: Routes = [
  {path:'',
  component: HomeConfiguracionComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfiguracionRoutingModule { }
