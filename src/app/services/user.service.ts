import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Storage } from '@ionic/storage-angular';
import { environment } from '../../environments/environment';
import { Usuario } from '../interfaces/interfaces';
import { NavController } from '@ionic/angular';

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
  private user: Usuario ={};

  constructor(private storage: Storage, private httpClient: HttpClient, private navController: NavController) {

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

  getUser(){
    return {...this.user};
  }

  //Validation token
  async isTokenOk(): Promise<boolean>{

    await this.loadCredentials();

    if( !this.token){
      this.navController.navigateRoot('/login');
      return Promise.resolve(false);
    }

    return new Promise<boolean> (resolve => {
      const headers = new HttpHeaders({
        'x-token' : this.token
      });

      this.httpClient.get(`${URL}/user`, {headers}).subscribe( response =>{

        // eslint-disable-next-line @typescript-eslint/dot-notation
        if (response['ok']) {
          // eslint-disable-next-line @typescript-eslint/dot-notation
          this.user = response['usuario'];
          resolve(true);
        }else{
          this.navController.navigateRoot('/login');
          resolve(false);
        }
      });
    });
  }

  async loadCredentials(){
    this.token = await this.storage.get('token') || null;
  }

  logOut(){
    this.token = null;
    this.user = null;
    this.storage.clear();
    this.navController.navigateRoot('/login', {animated: true});
  }
}
