import { sumar, multiplicar } from "./numeros";

describe('Pruebas con numeros:', () => {
    it('debe llamar a la función sumar(56,35) y devolver 91', () => {
        expect(sumar(56,35)).toBe(91);
    });
    it('debe llamar a la función multiplicar(56,35) y devolver 1960', () => {
        expect(multiplicar(56,35)).toBe(1960);
    });
});