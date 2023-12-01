import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarConfiguracionService {

  public sidebarEffectButton$:BehaviorSubject<boolean> = new BehaviorSubject(true);

  constructor() { }

  public largeSidebar(status:boolean){
    this.sidebarEffectButton$.next(status);
  }


}
