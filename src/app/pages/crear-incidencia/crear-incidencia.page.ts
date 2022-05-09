import { Component, OnInit } from '@angular/core';
import { IncidenciasService } from '../../services/incidencias.service';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';
import { Municipio } from 'src/app/interfaces/interfaces';


@Component({
  selector: 'app-crear-incidencia',
  templateUrl: './crear-incidencia.page.html',
  styleUrls: ['./crear-incidencia.page.scss'],
})

export class CrearIncidenciaPage implements OnInit {

  loadingGPS = false;
  municipios: Observable<Municipio[]>;

  incidencia = {
    mensaje: '',
    title: '',
    coordinates: '',
    municipio: '',
    toggle: false
  };

  constructor(
    private incidenciaService: IncidenciasService,
    private navController: NavController,
    private dataService: DataService
  ) { }

  ngOnInit() {

  this.municipios = this.dataService.getLocation();
  }

  getGPS(){

    if(!this.incidencia.toggle){
        this.incidencia.coordinates = null;
        return;
    }
    console.log(this.incidencia);
  }

  createNewIncident(){
    console.log(this.incidencia);
    this.incidenciaService.postIncidencia(this.incidencia);
    this.navController.navigateRoot('/incidencias', {animated: true});
  }

}
