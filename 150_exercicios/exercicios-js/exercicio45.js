//45 - Crie um script que declare uma função que receba um array de strings como 
// parâmetro e retorne um novo array onde cada string esteja em letras maiúsculas e invertida.

const palavras = ["planta", "arvore", "celular", "bola"]

const inverter = palavras.map(palavra => {
    return palavra.toUpperCase().split('').reverse().join('')
  })

  console.log(inverter)