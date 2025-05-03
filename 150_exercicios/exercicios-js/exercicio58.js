//58 - Crie um script que declare uma função que receba um array de strings como
//  parâmetro e retorne um novo array contendo apenas as strings que contêm a letra "o".

const palavras = ["PLANTA", "ARVORE", "CELULAR", "BOLA"]

const temLetraO = palavras.filter(palavra => {
    return palavra.includes('O')
  })

  console.log(temLetraO)