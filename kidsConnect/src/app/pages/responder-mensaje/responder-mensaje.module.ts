import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResponderMensajePageRoutingModule } from './responder-mensaje-routing.module';

import { ResponderMensajePage } from './responder-mensaje.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResponderMensajePageRoutingModule
  ],
  declarations: [ResponderMensajePage]
})
export class ResponderMensajePageModule {}
