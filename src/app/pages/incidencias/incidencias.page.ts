import { Component, OnInit } from '@angular/core';
import { Incidencia, Usuario } from 'src/app/interfaces/interfaces';
import { IncidenciasService } from '../../services/incidencias.service';
import { NavController } from '@ionic/angular';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-incidencias',
  templateUrl: './incidencias.page.html',
  styleUrls: ['./incidencias.page.scss'],
})
export class IncidenciasPage implements OnInit {

  incidencias: Incidencia[] = [];
  dataUser: Usuario = {
  };


  constructor(
    private incidenciasService: IncidenciasService,
    private userService: UserService) {

   }

  ngOnInit() {

    this.incidenciasService.getIncidencias().subscribe( response => {

       this.incidencias.push(...response.incidencias);
    });
    this.dataUser = this.userService.getUser();

  }


}
