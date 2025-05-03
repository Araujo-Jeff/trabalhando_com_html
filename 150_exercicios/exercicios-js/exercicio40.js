//40 - Crie um script que declare uma função que receba um array de números como parâmetro e 
// retorne um novo array contendo apenas os números que são maiores que 10.

const numeros = [1, 2, 5, 11, 15, 6, 21]

const maiorQue10 = numeros.filter(numero => numero > 10)

console.log(maiorQue10)