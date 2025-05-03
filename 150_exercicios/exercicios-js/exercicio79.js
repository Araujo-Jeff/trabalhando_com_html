//79 - Crie um script que declare uma função que receba um array de números como 
// parâmetro e retorne um novo array onde cada número seja multiplicado por 7.

const numeros = [1, 4 , 12, 15];

const mult7 = numeros.map( numero => {
    return numero * 7
})

console.log(mult7)