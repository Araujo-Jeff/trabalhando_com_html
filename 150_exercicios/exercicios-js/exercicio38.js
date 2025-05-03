//38 - Crie um script que declare uma função que receba um array de strings como parâmetro
//  e retorne um novo array contendo apenas as strings que terminam com a letra "a".

const palavras = ["Planta", "Arvore", "Celular", "Bola"]

const terminaLetraA = palavras.filter(palavra => {
    return palavra.endsWith("a")
})

console.log(terminaLetraA)