import { Component, OnInit, inject } from '@angular/core';
import { SidebarCoordinacionService } from '../../../../shared/shared-coordinacion/services/sidebar-coordinacion.service';

@Component({
  selector: 'app-home',
  templateUrl: './home-coordinacion.component.html',
  styleUrls: ['./home-coordinacion.component.css']
})
export class HomeCoordinacionComponent implements OnInit{
  status:boolean = true;
  nombre:string = 'Josue'
  _sidebarService = inject(SidebarCoordinacionService)


  ngOnInit(): void {
    this._sidebarService.sidebarEffectButton$.subscribe(status =>{
      this.status = status
    })
  }

}
