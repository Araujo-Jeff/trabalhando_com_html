//55 - Crie um script que declare uma função que receba um array 
// de números como parâmetro e retorne um novo array onde cada número 
// seja dividido por 2.


const numeros = [1, 2, 20, 30]

const divididoPorDois = numeros.map(numero => {
    return numero/2
})

console.log(divididoPorDois)