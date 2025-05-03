//28 - Crie um script que declare uma função que receba um array de números como 
// parâmetro e retorne um novo array contendo apenas os números que são múltiplos de 3.

 const numeros = [1, 2, 3, 4, 9, 12, 14, 15, 20]

const multiplo3 = numeros.filter(numero =>{
    return numero % 3 === 0
})

console.log(multiplo3)


// function multiplo3(numeros){
//     return numeros.filter(n => n % 3 === 0)
// }

// console.log(multiplo3(numeros))