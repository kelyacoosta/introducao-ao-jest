// Criar o cenário para carteira de motorista. >=18 anos pode dirigir, <18 anos não pode dirigir.
// ele deverá receber a idade do usuário e retornar um objeto no seguinte formato 
// { podeDirigir: true || false } 

function verificarCarteiraMotorista(idade) {
    if (idade >= 18) {
        return { podeDirigir: true };
    }
    return { podeDirigir: false };
}

module.exports = verificarCarteiraMotorista 
