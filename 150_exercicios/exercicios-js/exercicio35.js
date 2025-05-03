//35 - Crie um script que declare uma função que receba um array de números como parâmetro
//  e retorne um novo array onde cada número seja decrementado em 1.

const numeros = [2, 3, 8, 9, 11]

const numeroDecrementado = numeros.map(numero => {
    return numero = numero - 1
})

console.log(numeroDecrementado)