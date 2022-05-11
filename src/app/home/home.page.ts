import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { Menu, Usuario, Incidencia } from '../interfaces/interfaces';
import { UserService } from '../services/user.service';
import { Observable } from 'rxjs';
import { DataService } from '../services/data.service';
import { IncidenciasService } from '../services/incidencias.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  menu: Observable<Menu[]>;
  incidencias: Incidencia[] = [];

   dataUser: Usuario = {
     email: 'oola@gmail.com'
   };

  constructor(
    private userService: UserService,
    private menuController: MenuController,
    private dataService: DataService,
    private incidenciasService: IncidenciasService,
    private navController: NavController,
    ) {

  }


  ngOnInit(){
    this.dataUser = this.userService.getUser();
    this.menu = this.dataService.getMenu();
    this.incidenciasService.getIncidencias().subscribe( response => {
      this.incidencias.push(...response.incidencias);
    });

  }
  showMenu(){
    this.menuController.open('first');
  }


}
