//80 - Crie um script que declare uma função que receba um array de números como
//  parâmetro e retorne um novo array contendo apenas os números que são divisíveis por 8.

const numeros = [ 2, 5, 6, 8, 18, 21, 40];

const divi8 = numeros.filter(numero => {
    return numero % 8 === 0
})

console.log(divi8)