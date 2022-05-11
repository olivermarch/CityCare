import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { RespuestaIncidencias } from '../interfaces/interfaces';
import { UserService } from './user.service';
//import { FileTransfer, FileUploadOptions, FileTransferObject } from '@awesome-cordova-plugins/file-transfer/ngx';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class IncidenciasService {

  page = 0;

  ruta: string[];
  rutafinal: string;

  constructor( private httpClient: HttpClient, private user: UserService) { }

  getIncidencias(){
    this.page ++;
    return this.httpClient.get<RespuestaIncidencias>(`${URL}/incidencia/?page=${this.page}`);
  }



  postIncidencia(incidencia){
    console.log(incidencia);

    const headers = new HttpHeaders({
      'x-token': this.user.token
    });

    this.httpClient.post(`${URL}/incidencia`, incidencia, {headers})
    .subscribe( response => {
      console.log(response);
      console.log(headers);
    });
  }

  // uploadFile(file: string){

  //   console.log('me gaadfaf');

  //   const fileOptions: FileUploadOptions = {
  //     fileKey: 'image',
  //     headers: {'x-token': this.user.token}
  //   };

  //   const fileTransfer: FileTransferObject = this.fileTransfer.create();

  //   fileTransfer.upload(file, `${URL}/incidencia/upload`, fileOptions).then( data => {
  //     console.log(data);
  //   }).catch(err => {
  //     console.log('Failed to upload', err);
  //   });
  // };




}
