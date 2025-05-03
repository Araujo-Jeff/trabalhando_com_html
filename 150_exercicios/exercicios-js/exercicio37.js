//37 - Crie um script que declare uma função que receba um array de strings como parâmetro
//  e retorne um novo array onde cada string esteja invertida. Utilize a função reverse() para inverter as strings.

const palavras = ["Teclado", "Mouse" , "Monitor"]

 const inverter = palavras.map(palavra => {
    return palavra.split('').reverse().join('')
  })

  console.log(inverter)

// function inverterStrings(palavras) {
//     return palavras.map(s => s.split('').reverse().join(''))
//   }

  // console.log(inverterStrings(palavras))
