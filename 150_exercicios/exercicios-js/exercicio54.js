//54 - Crie um script que declare uma função que receba um array de strings 
// como parâmetro e retorne um novo array contendo apenas as strings que 
// começam com a letra "B".

const palavras = ["planta", "arvore", "celular", "bola"]

const comecaComB = palavras.filter(palavra => {
    return palavra.startsWith('b')
  })

  console.log(comecaComB)