import { Component, OnInit } from '@angular/core';
import { IncidenciasService } from '../../services/incidencias.service';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';
import { Municipio } from 'src/app/interfaces/interfaces';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';
import { Camera, CameraResultType } from '@capacitor/camera';


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
    private dataService: DataService,
    private geolocation: Geolocation,
  ) { }

  ngOnInit() {

  this.municipios = this.dataService.getLocation();
  }

  getGPS(){

    if(!this.incidencia.toggle){
        this.incidencia.coordinates = null;
        return;
    }
    this.loadingGPS = true;

    this.geolocation.getCurrentPosition().then((resp) => {
      // resp.coords.latitude
      // resp.coords.longitude
      this.loadingGPS = false;
      const coordinates = `${resp.coords.latitude},${resp.coords.longitude}`;
      console.log(coordinates);
      this.incidencia.coordinates = coordinates;

     }).catch((error) => {
       console.log('Error getting location', error);
       this.loadingGPS = false;
     });
    console.log(this.incidencia);
  }


  // const takePicture = async () => {
  //   const image = await Camera.getPhoto({
  //     quality: 90,
  //     allowEditing: true,
  //     resultType: CameraResultType.Uri
  //   });
  //   var imageUrl = image.webPath;
  //   // Can be set to the src of an image now
  //   imageElement.src = imageUrl;
  // };

  createNewIncident(){
    console.log(this.incidencia);
    this.incidenciaService.postIncidencia(this.incidencia);
    this.navController.navigateRoot('/incidencias', {animated: true});
  }

}
