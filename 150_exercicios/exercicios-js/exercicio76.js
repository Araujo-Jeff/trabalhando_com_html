//76 - Crie um script que declare uma função que receba um array de números como
//  parâmetro e retorne um novo array contendo apenas os números que são múltiplos de 6.


const numeros = [ 2, 5, 6, 9, 18, 21, 23, 48];

const mult6 = numeros.filter(numero => {
    return numero % 6 === 0
})

console.log(mult6)