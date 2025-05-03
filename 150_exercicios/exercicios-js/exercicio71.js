//71 - Crie um script que declare uma função que receba um array de números
//  como parâmetro e retorne um novo array onde cada número seja incrementado em 3.


const numeros = [2, 3, 8, 9, 11]

const numeroIncrementado = numeros.map(numero => {
    return numero += 3
})

console.log(numeroIncrementado)