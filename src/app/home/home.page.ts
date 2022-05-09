import { Component, OnInit } from '@angular/core';
import { Usuario } from '../interfaces/interfaces';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

   dataUser: Usuario = {
     email: 'oola@gmail.com'
   };

  constructor(private userService: UserService ) {

  }


  ngOnInit(){
    this.dataUser = this.userService.getUser();
    console.log(this.dataUser);
  }

}
