import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IncidenciasPageRoutingModule } from './incidencias-routing.module';


import { IncidenciasPage } from './incidencias.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IncidenciasPageRoutingModule,
    ComponentsModule
  ],
  declarations: [IncidenciasPage]
})
export class IncidenciasPageModule {}
