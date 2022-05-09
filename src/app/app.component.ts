import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Menu } from './interfaces/interfaces';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  menu: Observable<Menu[]>;
  constructor(
    private dataService: DataService
  ) {
    this.initializeApp();
  }
  initializeApp() {
    this.menu = this.dataService.getMenu();
  }

}
