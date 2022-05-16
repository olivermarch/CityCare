import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Incidencia, Usuario } from '../../interfaces/interfaces';
import { IncidenciasService } from '../../services/incidencias.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {

  incidencias: Incidencia[] = [];
  dataUser: Usuario = {
  };

  constructor(
    private userService: UserService,
    ) { }

  ngOnInit() {
    this.dataUser = this.userService.getUser();
    console.log(this.dataUser);

  }

  logout(){
    console.log('sales');
    this.userService.logOut();
  }
}
