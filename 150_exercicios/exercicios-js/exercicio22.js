// 22 - Crie um script que declare um array de números e utilize a função map() 
// para criar um novo array onde cada número seja multiplicado por 2. Imprima o novo array.

const numeros = [2, 3, 5, 8]

const dobro = numeros.map(numero => {
    return numero * 2
})

console.log(dobro)