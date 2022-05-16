import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MisIncidenciasPageRoutingModule } from './mis-incidencias-routing.module';

import { MisIncidenciasPage } from './mis-incidencias.page';
import { ComponentsModule } from '../../components/components.module';
import { IncidenciasPageRoutingModule } from '../incidencias/incidencias-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisIncidenciasPageRoutingModule,
    ComponentsModule,
    IncidenciasPageRoutingModule
  ],
  declarations: [MisIncidenciasPage]
})
export class MisIncidenciasPageModule {}
