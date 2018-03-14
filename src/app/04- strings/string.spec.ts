import { saludar, minusculas } from "./strings";

describe('Pruebas con strings:', () => {
    it('debe llamar a la funcion saludar(rene) y devolver `Hola [rene]`', () => {
        expect(saludar('rene')).toContain('rene');
    });
    it('debe llamar a la función minusculas(str) y convertir el texto en minúsculas', () => {
      var str='TENGO MAYÚSCULAS';
        expect(minusculas(str)).toEqual((str.toLowerCase())); 
    });
});