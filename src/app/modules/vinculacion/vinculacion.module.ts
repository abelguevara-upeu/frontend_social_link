import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { VinculacionPageComponent } from './pages/vista-packages/vinculacion-page.component';
import { VinculacionRoutingModule } from './vinculacion-routing.module';


@NgModule({
  declarations: [
    VinculacionPageComponent
  ],
  imports: [
    CommonModule,
    VinculacionRoutingModule,
  ]
})
export class VinculacionModule { }
