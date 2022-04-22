import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage-angular';
import { environment } from '../../environments/environment';

const URL =  environment.url;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  token: string = null;

  constructor(private storage: Storage, private httpClient: HttpClient) { }

  login(email: string, password: string){

    const dataLogin = {email, password};
    this.httpClient.post(`${URL}/user/login`, dataLogin).subscribe( response =>{
      console.log(response);
    });
  }
}
