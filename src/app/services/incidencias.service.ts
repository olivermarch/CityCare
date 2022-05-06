import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { RespuestaIncidencias } from '../interfaces/interfaces';
import { UserService } from './user.service';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class IncidenciasService {

  page = 0;

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


}
