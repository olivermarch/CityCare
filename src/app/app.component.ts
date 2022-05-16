import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Menu, Usuario } from './interfaces/interfaces';
import { DataService } from './services/data.service';
import { UserService } from './services/user.service';
import { HomePage } from './home/home.page';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  menu: Observable<Menu[]>;
  user: Usuario = {};
  constructor(
    private dataService: DataService,
    private userService: UserService,
    private home: HomePage
  ) {
    this.initializeApp();
  }
  initializeApp() {
    this.menu = this.dataService.getMenu();
    // this.user = this.userService.getUser();
    // this.home.dataUser = this.user;
  }


}
