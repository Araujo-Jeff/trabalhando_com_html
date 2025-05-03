//64 - Crie um script que declare uma função que receba um array de números
//  como parâmetro e retorne um novo array contendo apenas os números que são maiores que 20.

const numeros = [ 2, 5, 7, 9, 14, 21, 23, 49, 50];

const maioresDeVinte = numeros.filter(numero => {
    return numero > 20
})

console.log(maioresDeVinte)