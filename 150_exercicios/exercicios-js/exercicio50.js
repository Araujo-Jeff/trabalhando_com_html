//50 - Crie um script que declare uma função que receba um array de strings como parâmetro e 
// retorne um novo array contendo apenas as strings que têm exatamente 4 caracteres.


const palavras = ["planta", "arvore", "celular", "bola", "palco", "cinco"]

const caracteres = palavras.filter(palavra => {
    return palavra.length === 5
})
console.log(caracteres)