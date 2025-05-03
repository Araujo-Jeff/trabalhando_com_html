// 27 - Crie um script que declare uma função que receba um array de números como 
// parâmetro e retorne um novo array onde cada número seja elevado ao quadrado.

const numeros = [2, 4, 5, 8];

const quadrado = numeros.map(numero => {
    return numero **= 2
})

console.log(quadrado)