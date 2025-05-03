//18 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne o maior número do array. 
// Utilize a função Math.max() para encontrar o maior número.

const numerosArray = [10, 20, 30, 50]

function maiorNumero(numerosArray) {
    return Math.max(...numerosArray); // (...numerosArray) os ... busca os numeros que esta no array
}

console.log(maiorNumero(numerosArray));
