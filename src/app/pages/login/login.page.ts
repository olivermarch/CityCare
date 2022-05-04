import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';
import { UserService } from '../../services/user.service';

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

  constructor(private userService: UserService, private navigatorControler: NavController, private alertController: AlertController) {
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

onClick(){
  this.presentAlert();
}
}
