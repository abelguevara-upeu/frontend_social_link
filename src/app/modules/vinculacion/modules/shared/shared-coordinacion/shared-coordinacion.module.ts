import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { SidebarCoordinacionComponent } from './components/sidebar-coordinacion/sidebar-coordinacion.component';
import { ImgBrokenDirective } from './directives/img-broken.directive';



@NgModule({
  declarations: [
    SidebarCoordinacionComponent,
    HeaderComponent,
    ImgBrokenDirective
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
    exports:[
    SidebarCoordinacionComponent,
    HeaderComponent
  ]
})
export class SharedCoordinacionModule { }
