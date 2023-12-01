import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedCoordinacionModule } from '../../shared/shared-coordinacion/shared-coordinacion.module';
import { HomeCoordinacionRoutingModule } from './home-coordinacion-routing.module';
import { HomeCoordinacionComponent } from './pages/home/home-coordinacion.component';


@NgModule({
  declarations: [
    HomeCoordinacionComponent
  ],
  imports: [
    CommonModule,
    HomeCoordinacionRoutingModule,
    SharedCoordinacionModule,
  ]
})
export class HomeCoordinacionModule { }
