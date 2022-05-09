import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Menu, Municipio } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  getLocation(){
    return this.httpClient.get<Municipio[]>('/assets/data/municipios.json');
  }

  getMenu(){
    return this.httpClient.get<Menu[]>('/assets/data/menu.json');
  }
}
