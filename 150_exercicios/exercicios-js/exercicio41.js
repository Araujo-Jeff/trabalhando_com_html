//41 - Crie um script que declare uma função que receba um array de strings 
// como parâmetro e retorne um novo array onde cada string tenha a primeira letra em maiúscula.
//  Utilize a função toUpperCase() para converter a primeira letra.

const palavras = ["planta", "arvore", "celular", "bola"]

const primeiraLetraMaiuscula = palavras.map(palavra => {
    return palavra.charAt(0).toUpperCase() + palavra.slice(1)
})

console.log(primeiraLetraMaiuscula)