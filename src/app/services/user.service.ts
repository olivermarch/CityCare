import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage-angular';
import { environment } from '../../environments/environment';
import { Usuario } from '../interfaces/interfaces';

const URL =  environment.url;

interface ResponseLogin {
  ok: string;
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  token: string = null;

  constructor(private storage: Storage, private httpClient: HttpClient) {

    this.storage.create();
  }

  login(email: string, password: string){

    const dataLogin = {email, password};

    return new Promise( resolve => {

      this.httpClient.post(`${URL}/user/login`, dataLogin).subscribe(  response =>{
        console.log(response);

        // eslint-disable-next-line @typescript-eslint/dot-notation
        if (response['ok']) {
          // eslint-disable-next-line @typescript-eslint/dot-notation
         this.saveTokenInStorage(response['token']);
          resolve(true);
        }else{
          this.token = null;
          this.storage.clear();
          resolve(false);
        }
      });
    });
  }

  async saveTokenInStorage(token: string){
    this.token = token;
     await this.storage.set('token', token);
  }

  userRegistration(user: Usuario){

    return new Promise( resolve => {

      this.httpClient.post(`${URL}/user/create`, user).subscribe(  response =>{
        console.log(response);

        // eslint-disable-next-line @typescript-eslint/dot-notation
        if (response['ok']) {
        // eslint-disable-next-line @typescript-eslint/dot-notation
         this.saveTokenInStorage(response['token']);
          resolve(true);
        }else{
          this.token = null;
          this.storage.clear();
          resolve(false);
        }
      });

    });

  }
}
