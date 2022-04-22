import { Component, OnInit, Input } from '@angular/core';
import { Incidencia } from '../../interfaces/interfaces';

@Component({
  selector: 'app-incidencias-comp',
  templateUrl: './incidencias-comp.component.html',
  styleUrls: ['./incidencias-comp.component.scss'],
})
export class IncidenciasCompComponent implements OnInit {

  @Input() incidencias: Incidencia []  = [];

  constructor() { }

  ngOnInit() {

    console.log(this.incidencias);
  }

}
