//47 - Crie um script que declare uma função que receba um array de 
// números como parâmetro e retorne um novo array onde cada número seja multiplicado por 10.

const numeros = [ 2, 5, 8, 9, 10, 15, 20];

const multiplicado = numeros.map(numero => {
    return numero * 10
})

console.log(multiplicado)