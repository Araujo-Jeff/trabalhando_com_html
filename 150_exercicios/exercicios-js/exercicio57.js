//57 - Crie um script que declare uma função que receba um array de strings
//  como parâmetro e retorne um novo array onde cada string esteja em letras
//  minúsculas e invertida.


const palavras = ["PLANTA", "ARVORE", "CELULAR", "BOLA"]

const minuInverter = palavras.map(palavra => {
    return palavra.toLowerCase().split('').reverse().join('')
  })

  console.log(minuInverter)