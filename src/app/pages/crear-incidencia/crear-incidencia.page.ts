import { Component, OnInit } from '@angular/core';
import { IncidenciasService } from '../../services/incidencias.service';

@Component({
  selector: 'app-crear-incidencia',
  templateUrl: './crear-incidencia.page.html',
  styleUrls: ['./crear-incidencia.page.scss'],
})
export class CrearIncidenciaPage implements OnInit {

  incidencia = {
    mensaje: '',
    title: '',
    coordinates: '8,8'
  };

  constructor(
    private incidenciaService: IncidenciasService
  ) { }

  ngOnInit() {
  }

  createNewIncident(){
    console.log(this.incidencia);
    this.incidenciaService.postIncidencia(this.incidencia);
  }

}
