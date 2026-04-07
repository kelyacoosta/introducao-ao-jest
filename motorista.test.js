// Criar o cenário para carteira de motorista. >=18 anos pode dirigir, <18 anos não pode dirigir.
// ele deverá receber a idade do usuário e retornar um objeto no seguinte formato 
// { podeDirigir: true || false } 

const motorista = require('./motorista');

describe('Função Verificar Carteira de Motorista', () => {
    test('Quando o usuário tiver 18 anos ou mais, deverá retornar true', () => {
        expect(motorista(18)).toEqual({ podeDirigir: true });
    }),

        test('Quando o usuário tiver menos de 18 anos, deverá retornar false', () => {
            expect(motorista(17)).toEqual({ podeDirigir: false });
        })
})