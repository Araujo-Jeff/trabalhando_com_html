//75 - Crie um script que declare uma função que receba um array de números
//  como parâmetro e retorne um novo array onde cada número seja elevado à quarta potência.


const numeros = [ 2, 5, 7, 9];

const pot4 = numeros.map( numero => {
    return numero **= 4
})

console.log(pot4)