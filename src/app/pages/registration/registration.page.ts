import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController, NavController } from '@ionic/angular';
import { Municipio, Usuario } from 'src/app/interfaces/interfaces';
import { UserService } from '../../services/user.service';
import { NgForm } from '@angular/forms';
import { PRIMARY_OUTLET } from '@angular/router';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

  municipios: Observable<Municipio[]>;

  newUser: Usuario = {
    email: '',
    password: '',
    nombre: '',
    apellidos: '',
    municipio: ''
  };

  constructor(
    private modalController: ModalController,
    private userService: UserService,
    private toastController: ToastController,
    private navController: NavController,
    private dataService: DataService) { }

  ngOnInit() {
    this.municipios = this.dataService.getLocation();
  }


  async registerUser(fNewUser: NgForm){
    if ( fNewUser.invalid ) { return; }

    const isNewUserOk = await this.userService.userRegistration(this.newUser);

    if(isNewUserOk){
      this.navController.navigateRoot('/home', {animated: true});
      this.presentToast('Usuario creado correctamente');
      this.closeModal();
    }else{
      this.presentToast('El usuario no se ha podido crear');
    }
  }

  closeModal(){
    this.modalController.dismiss();
  }

  // Toast to show errors or confirm the new user
  async presentToast(messageToShow: string) {
    const toast = await this.toastController.create({
      message: messageToShow,
      animated: true,
      color: PRIMARY_OUTLET,
      cssClass: 'toastRegistration',
      icon: 'information-circle',
      duration: 5000
    });
    toast.present();
  }

}
