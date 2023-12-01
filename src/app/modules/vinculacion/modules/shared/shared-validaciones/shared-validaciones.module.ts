import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { SidebarValidationComponent } from './components/sidebar-validation/sidebar-validation.component';
import { ImgBrokenDirective } from './directives/img-broken.directive';



@NgModule({
  declarations: [
    SidebarValidationComponent,
    HeaderComponent,
    ImgBrokenDirective
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
    exports:[
    SidebarValidationComponent,
    HeaderComponent
  ]
})
export class SharedValidacionesModule { }
