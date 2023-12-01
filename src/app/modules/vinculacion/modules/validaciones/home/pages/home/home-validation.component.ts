import { Component, OnInit, inject } from '@angular/core';
import { SidebarValidacionesService } from '../../../../shared/shared-validaciones/services/sidebar-validaciones.service';

@Component({
  selector: 'app-home',
  templateUrl: './home-validation.component.html',
  styleUrls: ['./home-validation.component.css']
})
export class HomeValidationComponent implements OnInit{
  status:boolean = true;
  nombre:string = 'Josue'
  _sidebarService = inject(SidebarValidacionesService)


  ngOnInit(): void {
    this._sidebarService.sidebarEffectButton$.subscribe(status =>{
      this.status = status
    })
  }

}
