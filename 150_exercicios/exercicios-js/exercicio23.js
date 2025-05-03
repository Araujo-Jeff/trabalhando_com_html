// 23 - Crie um script que declare um array de números e utilize a função reduce() 
// para calcular a soma de todos os números do array. Imprima o resultado.

const numeros = [2, 5, 8, 10]

const soma = numeros.reduce((acumulador,  atual) => {
    const total = acumulador + atual

    return total
})

console.log(soma)

