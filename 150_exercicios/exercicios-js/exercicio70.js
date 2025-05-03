// 70 - Crie um script que declare uma função que receba um array 
// de strings como parâmetro e retorne um novo array contendo apenas
//  as strings que têm mais de 7 caracteres.


const palavras = ["planta", "arvore", "paraguai"]

const maisDeSete = palavras.filter( palavra => {
    return palavra.length > 7
})

console.log(maisDeSete)