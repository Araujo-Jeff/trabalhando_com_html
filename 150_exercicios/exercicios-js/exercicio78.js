//78 - Crie um script que declare uma função que receba um array de strings como 
// parâmetro e retorne um novo array contendo apenas as strings que contêm a letra "u".


const palavras = ["planta", "arvore", "paraguai"]

const palavraLetrau = palavras.filter(palavra => {
    return palavra.includes("u")
})

console.log(palavraLetrau)