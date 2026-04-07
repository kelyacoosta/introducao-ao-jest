const soma = require('./soma');

describe('Função Soma', () => {
    test('Quando receber dois números deverá retornar a sua soma', () => {
        expect(soma(100, 279)).toBe(379)

    }),
        test('Deve retornar false caso não seja possível realizar a soma', () => {
            expect(soma(2, null)).toBe(false)
        })
})
