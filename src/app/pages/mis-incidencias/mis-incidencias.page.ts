import { Component, OnInit } from '@angular/core';
import { Incidencia, Usuario } from 'src/app/interfaces/interfaces';
import { IncidenciasService } from 'src/app/services/incidencias.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-mis-incidencias',
  templateUrl: './mis-incidencias.page.html',
  styleUrls: ['./mis-incidencias.page.scss'],
})
export class MisIncidenciasPage implements OnInit {

  incidencias: Incidencia[] = [];
  dataUser: Usuario = {
  };

  constructor(
    private incidenciasService: IncidenciasService,
    private userService: UserService) {

   }
  ngOnInit() {

    this.dataUser = this.userService.getUser();
    console.log(this.dataUser);
        // eslint-disable-next-line no-underscore-dangle
        this.incidenciasService.getIncidenciasByUser(this.dataUser._id).subscribe( response => {

          // eslint-disable-next-line no-underscore-dangle
          if (this.dataUser._id) {
            if (this.incidencias.push(...response.incidencias)) {
              this.incidencias.push(...response.incidencias);
            }else{
              return;
            }
            return;
          }
        });
  }

}
