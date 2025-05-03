//74 - Crie um script que declare uma função que receba um array de strings como
//  parâmetro e retorne um novo array contendo apenas as strings que contêm a letra "i".

const palavras = ["planta", "arvore", "paraguai"]

const palavraLetraI = palavras.filter(palavra => {
    return palavra.includes("i")
})

console.log(palavraLetraI)