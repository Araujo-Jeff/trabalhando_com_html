//68 - Crie um script que declare uma função que receba um array de números 
// como parâmetro e retorne um novo array contendo apenas os números que são 
// ímpares e maiores que 15.

const numeros = [1, 8, 9, 10, 11, 17, 18, 21];

const imparMaiorQuinze = numeros.filter(numero => {
    return numero % 2 !== 0 && numero > 15
})

console.log(imparMaiorQuinze)

