//39 - Crie um script que declare uma função que receba um array de números como parâmetro e 
// retorne um novo array onde cada número seja convertido para uma string com duas casas decimais. 
// Utilize a função toFixed() para formatar os números.


const numeros = [22, 101, 21, 51]

const numerosTransformados = numeros.map(numero => {
    return numero.toFixed(2)
})


console.log(numerosTransformados)
