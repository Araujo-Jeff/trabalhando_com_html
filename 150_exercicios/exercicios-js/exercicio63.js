//63 - Crie um script que declare uma função que receba um array de 
// números como parâmetro e retorne um novo array onde cada número 
// seja decrementado em 2.

const numeros = [ 2, 5, 8, 9, 10,];

const decremeDois = numeros.map(numero => {
    return numero -= 2
})

console.log(decremeDois)