//66 - Crie um script que declare uma função que receba um array de strings 
// como parâmetro e retorne um novo array contendo apenas as strings que 
// começam com a letra "C".


const palavras = ["planta", "arvore", "celular", "bola"]

const comecaComC = palavras.filter(palavra => {
    return palavra.startsWith('c')
  })

  console.log(comecaComC)