import { Component, OnInit, inject } from '@angular/core';
import { SidebarConfiguracionService } from '../../../../shared/shared-configuracion/services/sidebar-configuracion.service';

@Component({
  selector: 'app-home',
  templateUrl: './home-configuracion.component.html',
  styleUrls: ['./home-configuracion.component.css']
})
export class HomeConfiguracionComponent implements OnInit{
  status:boolean = true;
  nombre:string = 'Josue'
  _sidebarService = inject(SidebarConfiguracionService)


  ngOnInit(): void {
    this._sidebarService.sidebarEffectButton$.subscribe(status =>{
      this.status = status
    })
  }

}
