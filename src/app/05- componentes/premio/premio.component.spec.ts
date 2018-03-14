import { PremioComponent } from "./premio.component";

describe('Pruebas al componente `premio`', () => {
    let componente:PremioComponent;
    beforeEach(() => {
        componente=new PremioComponent();
    });
    it('debe crear el componente', () => {
        expect(componente).toBeTruthy();
    });
    it('debe tener una variable [premio] con valor `lata de refresco` al llamar método recogerPremio()', () => {
        componente.recogerPremio();
        expect(componente.premio).toContain('lata de refresco');
    });
});