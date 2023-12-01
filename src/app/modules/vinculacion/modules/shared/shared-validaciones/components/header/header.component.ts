import { Component, Input, inject } from '@angular/core';
import { SidebarValidacionesService } from '../../services/sidebar-validaciones.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input()  nombre!:string;
  statusSidebar:boolean = true;
  _sidebarService = inject(SidebarValidacionesService)

  public effectSidebar(){
    this.statusSidebar = ! this.statusSidebar;
    this._sidebarService.largeSidebar(this.statusSidebar);
    // console.log(this.statusSidebar)
  }
}
