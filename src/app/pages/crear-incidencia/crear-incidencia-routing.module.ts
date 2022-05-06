import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrearIncidenciaPage } from './crear-incidencia.page';

const routes: Routes = [
  {
    path: '',
    component: CrearIncidenciaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrearIncidenciaPageRoutingModule {}
