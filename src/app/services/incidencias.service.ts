import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { RespuestaIncidencias } from '../interfaces/interfaces';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class IncidenciasService {

  page = 0;

  constructor( private httpClient: HttpClient) { }

  getIncidencias(){
    this.page ++;
    return this.httpClient.get<RespuestaIncidencias>(`${URL}/incidencia/?page=${this.page}`);
  }
}


