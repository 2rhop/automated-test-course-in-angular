import { Component, OnInit } from '@angular/core';
import { OBJETOS } from './maquina-expendedora';

@Component({
  selector: 'maq-exp-offline',
  templateUrl: './maquina-expendedora-offline.component.html',
  styleUrls: ['./maquina-expendedora-offline.component.css']
})
export class MaquinaExpendedoraOfflineComponent implements OnInit {

  objetos: any[];
  objComprado;

  constructor() { }

  ngOnInit() {
    this.objetos = OBJETOS
  }

  comprarObjeto(obj, precio) {
    this.objComprado = obj;
  }

}
