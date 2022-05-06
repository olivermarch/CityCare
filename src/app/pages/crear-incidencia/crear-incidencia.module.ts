import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearIncidenciaPageRoutingModule } from './crear-incidencia-routing.module';

import { CrearIncidenciaPage } from './crear-incidencia.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearIncidenciaPageRoutingModule,
    ComponentsModule
  ],
  declarations: [CrearIncidenciaPage]
})
export class CrearIncidenciaPageModule {}
