import { Component, OnInit } from '@angular/core';
import { OBJETOS } from '../maquina-expendedora-offline/maquina-expendedora';
import { MaquinaExpendedoraService } from './maquina-expendedora.service';

@Component({
  selector: 'maq-exp-online',
  templateUrl: './maquina-expendedora-online.component.html',
  styleUrls: ['../maquina-expendedora-offline/maquina-expendedora-offline.component.css']
})
export class MaquinaExpendedoraOnlineComponent implements OnInit {

  objetos: any[];
  objComprado;
  estado;

  constructor(private service: MaquinaExpendedoraService) { }

  ngOnInit() {
    this.conectar();
  }

  comprarObjeto(obj, precio) {
    this.objComprado = obj;
  }

  conectar() {
    this.getObjetos();
  }

  setDesconectado() {
    this.estado = {
      info: 'sin conexión',
      class: 'text-danger alert-danger'
    }
  }
  setConectado() {
    this.estado = {
      info: 'conectado',
      class: 'text-success alert-success'
    }
  }

  getObjetos() {
    let obj: any[];
    this.service.getObjetos().subscribe(res => {
      console.log('conectado');
      obj = res;
    },
      error => {
        console.log('error');
        this.objetos = [];
        this.setDesconectado();
      },
      () => {
        console.log('completado');
        this.setConectado();
        this.objetos = obj;
      }
    )
  }

  getObjetosAsync() {
    setTimeout(() => {
      this.getObjetos();
    }, 3000);
  }

}