import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginUser = {
    email: 'oliver1@oliver.es',
    password: '123456'
  };

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  loger(fLogin: NgForm){

    if(fLogin.invalid){return;}

    this.userService.login(this.loginUser.email, this.loginUser.password);

  }

}
