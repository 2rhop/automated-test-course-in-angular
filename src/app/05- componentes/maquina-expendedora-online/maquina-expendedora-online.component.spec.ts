import { TestBed, async, fakeAsync, ComponentFixture, tick } from "@angular/core/testing";
import { MaquinaExpendedoraOnlineComponent } from "./maquina-expendedora-online.component";
import { DebugElement } from "@angular/core";
import { MaquinaExpendedoraService } from "./maquina-expendedora.service";
import { of } from "rxjs/observable/of";
import { OBJETOS } from "../maquina-expendedora-offline/maquina-expendedora";
import { By } from "@angular/platform-browser";
import { HttpModule } from "@angular/http";

fdescribe('Componente `maquina-expendedora-online`', () => {
    let fixt: ComponentFixture<MaquinaExpendedoraOnlineComponent>;
    let comp: MaquinaExpendedoraOnlineComponent;
    let debug: DebugElement;
    let servicio_falso: any;

    beforeEach(() => {
        // servicio_falso = {
        //     getObjetos: () => of(OBJETOS)
        // }
        // servicio_falso = jasmine.createSpyObj('MaquinaExpendedoraService', ['getObjetos']);
        // servicio_falso.getObjetos.and.returnValue(of(OBJETOS));

        TestBed.configureTestingModule({
            imports: [HttpModule],
            declarations: [MaquinaExpendedoraOnlineComponent],
            // providers: [{ provide: MaquinaExpendedoraService, useValue: servicio_falso }]
            providers: [MaquinaExpendedoraService]
        }).compileComponents();

        servicio_falso = TestBed.get(MaquinaExpendedoraService);
        spyOn(servicio_falso, 'getObjetos').and.returnValue(of(OBJETOS));

        fixt = TestBed.createComponent(MaquinaExpendedoraOnlineComponent);
        comp = fixt.componentInstance;
        debug = fixt.debugElement;

        fixt.detectChanges();
    });

    it('debe inicializar el componente e injectar el servicio_falso', () => {
        expect(comp).toBeTruthy();
        comp.ngOnInit();
        expect(comp.objetos).toBeDefined();
    });

    it('debe contener un elemento con la clase .status y el contenido `conectado`', () => {
        const elem = debug.query(By.css('.status')).nativeElement.textContent;
        expect(elem).toContain('conectado');
    });

    it('debe renderizar en el HTML la misma cantidad de elementos del servicio', () => {
        const elementos = debug.queryAll(By.css('.card'));
        expect(elementos.length).toBe(OBJETOS.length);
    });

    it('debe mostrar un cartel mostrando el objeto comprado, depues de dar click en comprar', () => {
        const boton = debug.query(By.css('.btn')).nativeElement;
        boton.click();
        fixt.detectChanges();
        expect(comp.objComprado).toBeDefined();
        const msj = debug.query(By.css('.notif')).nativeElement.textContent;
        expect(msj).toContain(comp.objComprado);
    });

    it('debe llamar al metodo getObjetosAsync() y esperar por el resultado (ASYNC)', async(() => {
        comp.getObjetosAsync();
        fixt.whenStable().then(() => {
            expect(comp.objetos).toBeDefined();
        })
    }));
    
});