import { Component, Input, inject } from '@angular/core';
import { SidebarProyeccionService } from '../../services/sidebar-proyeccion.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input()  nombre!:string;
  statusSidebar:boolean = true;
  _sidebarService = inject(SidebarProyeccionService)

  public effectSidebar(){
    this.statusSidebar = ! this.statusSidebar;
    this._sidebarService.largeSidebar(this.statusSidebar);
    // console.log(this.statusSidebar)
  }
}
