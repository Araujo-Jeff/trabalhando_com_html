//46 - Crie um script que declare uma função que receba um array de strings 
// como parâmetro e retorne um novo array contendo apenas as strings que contêm a letra "e".

var palavras = ["planta", "arvore", "celular", "bola"];

const contemLetraE = palavras.filter(palavra =>{
    return palavra.includes("e") 
})

console.log(contemLetraE)