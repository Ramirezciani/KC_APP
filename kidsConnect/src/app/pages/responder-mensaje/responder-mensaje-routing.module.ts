import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResponderMensajePage } from './responder-mensaje.page';

const routes: Routes = [
  {
    path: '',
    component: ResponderMensajePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResponderMensajePageRoutingModule {}
