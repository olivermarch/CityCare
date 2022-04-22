import { Component, OnInit, Input } from '@angular/core';
import { Incidencia } from '../../interfaces/interfaces';

@Component({
  selector: 'app-incidencia',
  templateUrl: './incidencia.component.html',
  styleUrls: ['./incidencia.component.scss'],
})
export class IncidenciaComponent implements OnInit {

  @Input() incidencia: Incidencia = {};

  constructor() { }

  ngOnInit() {}

}
