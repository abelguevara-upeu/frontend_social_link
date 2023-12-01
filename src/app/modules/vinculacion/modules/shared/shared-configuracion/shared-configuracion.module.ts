import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { SidebarConfiguracionComponent } from './components/sidebar-configuracion/sidebar-configuracion.component';
import { ImgBrokenDirective } from './directives/img-broken.directive';



@NgModule({
  declarations: [
    SidebarConfiguracionComponent,
    HeaderComponent,
    ImgBrokenDirective
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
    exports:[
    SidebarConfiguracionComponent,
    HeaderComponent
  ]
})
export class SharedConfiguracionModule { }
