import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MensajeRecibidoPage } from './mensaje-recibido.page';

const routes: Routes = [
  {
    path: '',
    component: MensajeRecibidoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MensajeRecibidoPageRoutingModule {}
