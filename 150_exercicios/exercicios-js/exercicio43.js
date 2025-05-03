//43 - Crie um script que declare uma função que receba um array de números 
// como parâmetro e retorne um novo array onde cada número seja multiplicado por 3.

const numeros = [ 1, 3, 4, 8, 10]

const multiplicaPorTres = numeros.map(numero => {
    return numero * 3
})

console.log(multiplicaPorTres)