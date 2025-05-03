// 19 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne o menor número do array. 
// Utilize a função Math.min() para encontrar o menor número.

const numeros = [3, 5, 10, 12];

function menorNumero(numeros){
    return Math.min(...numeros);
}

console.log(menorNumero(numeros));
