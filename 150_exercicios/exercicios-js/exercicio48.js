//48 - Crie um script que declare uma função que receba um array de números como parâmetro e 
// retorne um novo array contendo apenas os números que são ímpares.

const numeros = [ 2, 5, 8, 9, 10, 15, 20];

const impares = numeros.filter(numero => {
    return numero % 2 != 0
})

console.log(impares)