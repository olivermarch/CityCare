import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Usuario } from '../../interfaces/interfaces';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {

  dataUser: Usuario = {
  };

  constructor(
    private userService: UserService) { }

  ngOnInit() {
    this.dataUser = this.userService.getUser();
    console.log(this.dataUser);
  }

  logout(){
    console.log('sales');
    this.userService.logOut();
  }
}
