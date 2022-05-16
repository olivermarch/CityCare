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
  dataUser: Usuario = {
    nombre: 'Pedro'
  };
  menu: Observable<Menu[]>;
  incidencias: Incidencia[] = [];


  constructor(
    private userService: UserService,
    private menuController: MenuController,
    private dataService: DataService,
    private incidenciasService: IncidenciasService,
    ) {

  }

  ngOnInit(){
    this.dataUser = this.userService.getUser();
    this.menu = this.dataService.getMenu();
    console.log(this.dataUser);

    //  // eslint-disable-next-line no-underscore-dangle
    //  this.incidenciasService.getIncidenciasByUser(this.dataUser._id).subscribe( response => {
    //     this.incidencias.push(...response.incidencias);
    //     });
  }


  showMenu(){
    this.menuController.open('first');
  }

  refreshPage(){
    this.dataUser = this.userService.getUser();
    location.reload();
    console.log('si');

  }

    showIncidencias(){
    // eslint-disable-next-line no-underscore-dangle
      this.incidenciasService.getIncidenciasByUser(this.dataUser._id).subscribe( response => {
      this.incidencias.push(...response.incidencias);
    });

    }




}
