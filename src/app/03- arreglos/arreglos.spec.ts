import { monedas,lista_numerica } from "./arreglos";

describe('Pruebas con arreglos:', () => {
    it('debe llamar la función monedas() y devolver un arreglo que contenga [USD,CUC,CAD]', () => {
        var arreglo_monedas = monedas();
        expect(arreglo_monedas).toContain('USD');
        expect(arreglo_monedas).toContain('CUC');
        expect(arreglo_monedas).toContain('CAD');
    });
    it('debe llamar la función monedas() y devolver un arreglo que contenga [1, 2, 3.5, 4, 5.5]', () => {
        var lista_numeros = lista_numerica();
        expect(lista_numeros).toContain(1);
        expect(lista_numeros).toContain(2);
        expect(lista_numeros).toContain(3.5);
        expect(lista_numeros).toContain(4);
        expect(lista_numeros).toContain(5.5);
    });
});