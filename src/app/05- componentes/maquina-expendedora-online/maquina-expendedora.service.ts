import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { OBJETOS } from '../maquina-expendedora-offline/maquina-expendedora';
import { Http } from '@angular/http';

@Injectable()
export class MaquinaExpendedoraService {

  constructor(private http: Http) { }

  getObjetos(): Observable<any> {
    // return of(OBJETOS);
    return this.http.get(<string>'http://localhost:3000/objetos');
  }

}
