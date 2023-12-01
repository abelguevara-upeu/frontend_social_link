import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { GestionarParticipantesRoutingModule } from './gestionar-participantes-routing.module';
import { ParticipantespagesComponent } from './pages/participantespages/participantespages.component';


@NgModule({
  declarations: [
    ParticipantespagesComponent
  ],
  imports: [
    CommonModule,
    GestionarParticipantesRoutingModule
  ]
})
export class GestionarParticipantesModule { }
