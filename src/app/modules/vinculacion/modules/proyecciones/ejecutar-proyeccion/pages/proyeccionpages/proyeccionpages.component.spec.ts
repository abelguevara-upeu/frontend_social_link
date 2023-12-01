import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyeccionpagesComponent } from './proyeccionpages.component';

describe('ProyeccionpagesComponent', () => {
  let component: ProyeccionpagesComponent;
  let fixture: ComponentFixture<ProyeccionpagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProyeccionpagesComponent]
    });
    fixture = TestBed.createComponent(ProyeccionpagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
