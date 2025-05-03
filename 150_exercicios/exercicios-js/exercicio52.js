//52 - Crie um script que declare uma função que receba um array de números como 
// parâmetro e retorne um novo array contendo apenas os números que são menores que 50.


const numeros = [ 2, 5, 8, 9, 10, 51, 52, 81];

const menores = numeros.filter(numero => {
    return numero < 50
})

console.log(menores)