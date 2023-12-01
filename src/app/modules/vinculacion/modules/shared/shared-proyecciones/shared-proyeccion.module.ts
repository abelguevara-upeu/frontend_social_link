import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { SidebarProyeccionComponent } from './components/sidebar-proyeccion/sidebar-proyeccion.component';
import { ImgBrokenDirective } from './directives/img-broken.directive';



@NgModule({
  declarations: [
    SidebarProyeccionComponent,
    HeaderComponent,
    ImgBrokenDirective
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
    exports:[
    SidebarProyeccionComponent,
    HeaderComponent
  ]
})
export class SharedProyeccionModule { }
