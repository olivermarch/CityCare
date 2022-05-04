import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AlertController, ModalController, NavController, IonRouterOutlet } from '@ionic/angular';
import { UserService } from '../../services/user.service';
import { Usuario } from '../../interfaces/interfaces';
import { RegistrationPage } from '../registration/registration.page';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginUser = {
    email: 'oliver5@oliver.es',
    password: '123456'
  };

  constructor(
    private userService: UserService,
    private navigatorControler: NavController,
    private alertController: AlertController,
    private modalController: ModalController,
    private routerOutlet: IonRouterOutlet) {
   }

  ngOnInit() {}

   async loger(fLogin: NgForm){

    if(fLogin.invalid){
      return;
    }

    const isOkLogin = await this.userService.login(this.loginUser.email, this.loginUser.password);

    if (isOkLogin) {

      console.log('esta bien');
     this.navigatorControler.navigateRoot('/home', {animated: true});
    }else{
      this.presentAlert();
    }
  }


  //Alerta para el fallo de usuario
  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Atención',
      message: 'Usuario o contraseña incorrectos',
      buttons: ['OK']
    });

    await alert.present();

}

async showRegistrationPage(){

  const modal = await this.modalController.create({
    component: RegistrationPage,
    cssClass: 'my-custom-class',
    mode: 'ios',
    swipeToClose: true,
    presentingElement: this.routerOutlet.nativeEl
  });
  await modal.present();
}
}
