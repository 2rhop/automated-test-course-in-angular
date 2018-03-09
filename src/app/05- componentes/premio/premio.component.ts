import { Component } from '@angular/core';

@Component({
    selector: 'premio',
    template: `<h2>Click en el botón para recoger su premio</h2>
                <button (click)='recogerPremio()'>recoger</button>
                <div *ngIf='premio'>Ud ha obtenido: <strong>{{premio}}</strong></div>`
})

export class PremioComponent {
    premio;

    constructor() { }

    recogerPremio() {
        this.premio = 'lata de refresco';
    }
}