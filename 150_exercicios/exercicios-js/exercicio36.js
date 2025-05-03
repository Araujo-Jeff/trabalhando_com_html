//36 - Crie um script que declare uma função que receba um array de números
//  como parâmetro e retorne um novo array contendo apenas os números que são múltiplos de 5.

const numeros = [1, 5 , 8 , 9, 15, 30, 32, 45]

const multDeCinco = numeros.filter(numero => numero % 5 === 0)

console.log(multDeCinco)