//72 - Crie um script que declare uma função que receba um array de números como 
// parâmetro e retorne um novo array contendo apenas os números que são menores que 30.

const numeros = [ 2, 5, 7, 9, 14, 21, 23, 49, 50];

const menoresQueTrinta = numeros.filter(numero => {
    return numero < 30
})

console.log(menoresQueTrinta)