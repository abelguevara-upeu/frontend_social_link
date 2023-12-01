import { Component, OnInit, inject } from '@angular/core';
import { SidebarProyeccionService } from '../../../../shared/shared-proyecciones/services/sidebar-proyeccion.service';

@Component({
  selector: 'app-home',
  templateUrl: './home-proyeccion.component.html',
  styleUrls: ['./home-proyeccion.component.css']
})
export class HomeProyeccionComponent implements OnInit{
  status:boolean = true;
  nombre:string = 'Josue'
  _sidebarService = inject(SidebarProyeccionService)


  ngOnInit(): void {
    this._sidebarService.sidebarEffectButton$.subscribe(status =>{
      this.status = status
    })
  }

}
