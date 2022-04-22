import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { IncidenciaComponent } from './incidencia/incidencia.component';
import { IncidenciasCompComponent } from './incidencias-comp/incidencias-comp.component';




@NgModule({
  declarations: [
    HeaderComponent,
    IncidenciaComponent,
    IncidenciasCompComponent

  ],
  exports: [
    HeaderComponent,
    IncidenciaComponent,
    IncidenciasCompComponent

  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
