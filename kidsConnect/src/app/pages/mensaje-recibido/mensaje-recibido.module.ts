import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MensajeRecibidoPageRoutingModule } from './mensaje-recibido-routing.module';

import { MensajeRecibidoPage } from './mensaje-recibido.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MensajeRecibidoPageRoutingModule
  ],
  declarations: [MensajeRecibidoPage]
})
export class MensajeRecibidoPageModule {}
