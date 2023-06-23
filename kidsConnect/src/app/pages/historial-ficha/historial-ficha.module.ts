import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistorialFichaPageRoutingModule } from './historial-ficha-routing.module';

import { HistorialFichaPage } from './historial-ficha.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistorialFichaPageRoutingModule
  ],
  declarations: [HistorialFichaPage]
})
export class HistorialFichaPageModule {}
