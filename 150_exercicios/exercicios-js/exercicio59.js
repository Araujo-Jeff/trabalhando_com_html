//59 - Crie um script que declare uma função que receba um array de números
//  como parâmetro e retorne um novo array onde cada número seja elevado ao cubo.


const numeros = [ 2, 5, 8, 9, 10,];

const elevadoAoCubo = numeros.map(numero => {
    return numero **= 3
})

console.log(elevadoAoCubo)