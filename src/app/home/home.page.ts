import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Menu, Usuario } from '../interfaces/interfaces';
import { UserService } from '../services/user.service';
import { Observable } from 'rxjs';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  menu: Observable<Menu[]>;

   dataUser: Usuario = {
     email: 'oola@gmail.com'
   };

  constructor(
    private userService: UserService,
    private menuController: MenuController,
    private dataService: DataService ) {

  }


  ngOnInit(){
    this.dataUser = this.userService.getUser();
    this.menu = this.dataService.getMenu();
  }
  showMenu(){
    this.menuController.open('first');
  }

}
