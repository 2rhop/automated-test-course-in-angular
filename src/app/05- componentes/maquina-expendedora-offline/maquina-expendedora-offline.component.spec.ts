import { MaquinaExpendedoraOfflineComponent } from "./maquina-expendedora-offline.component";
import { TestBed, ComponentFixture } from "@angular/core/testing";
import { DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";

describe('Componente `maquina-expendedora-offline`', () => {
    let fixt: ComponentFixture<MaquinaExpendedoraOfflineComponent>;
    let comp: MaquinaExpendedoraOfflineComponent;
    let debug: DebugElement;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [MaquinaExpendedoraOfflineComponent],
        }).compileComponents();

        fixt = TestBed.createComponent(MaquinaExpendedoraOfflineComponent);
        comp = fixt.componentInstance;
        debug = fixt.debugElement;

        comp.ngOnInit();
    });

    it('debe crear el componente e inicializar el arreglo de objetos', () => {
        expect(comp).toBeTruthy();
        expect(comp.objetos).toBeDefined();
    });

    it('debe contener un elemento con el texto `sin conexión`', () => {
        fixt.detectChanges();
        const elem=debug.query(By.css('.status')).nativeElement.textContent;
        expect(elem).toContain(`sin conexión`);
    });

    it('debe mostrar un mensaje con el objeto comprado cuando se de click en el boton `comprar`', () => {
        fixt.detectChanges();
        const button=debug.query(By.css('#btn')).nativeElement;
        button.click();
        fixt.detectChanges();
        const msj=debug.query(By.css('.notif')).nativeElement.textContent;
        expect(msj).toContain(comp.objComprado);
    });
});