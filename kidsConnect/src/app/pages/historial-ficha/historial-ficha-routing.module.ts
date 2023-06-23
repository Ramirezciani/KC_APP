import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistorialFichaPage } from './historial-ficha.page';

const routes: Routes = [
  {
    path: '',
    component: HistorialFichaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistorialFichaPageRoutingModule {}
