//67 - Crie um script que declare uma função que receba um array de números 
// como parâmetro e retorne um novo array onde cada número seja multiplicado por 5.

const numeros = [ 2, 5, 8, 9, 10,];

const multiPorCinco = numeros.map(numero => {
    return numero * 5
})

console.log(multiPorCinco)