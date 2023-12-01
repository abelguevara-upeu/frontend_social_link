import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedValidacionesModule } from '../../shared/shared-validaciones/shared-validaciones.module';
import { HomeValidationRoutingModule } from './home-validation-routing.module';
import { HomeValidationComponent } from './pages/home/home-validation.component';


@NgModule({
  declarations: [
    HomeValidationComponent
  ],
  imports: [
    CommonModule,
    HomeValidationRoutingModule,
    SharedValidacionesModule,
  ]
})
export class HomeValidationModule { }
