//56 - Crie um script que declare uma função que receba um array de números como 
// parâmetro e retorne um novo array contendo apenas os números que são múltiplos de 4.

const numeros = [1, 2, 20, 30]

const multiploDeQuatro = numeros.filter(numero => {
    return numero % 4 === 0
})

console.log(multiploDeQuatro)