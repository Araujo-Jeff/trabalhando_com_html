// Função void (vazia)

let valor = 20
function incrementa() {
    console.log("Estou dentro da função")
}

incrementa()
console.log(valor)




//Função com parametro

function soma(numero1, numero2) {
    const somaDosNumeros = numero1 + numero2

    console.log(somaDosNumeros)
}


soma(10, 4)
soma(2, 5)


//Função return

function soma(numero1, numero2) {
    const somaDosNumeros = numero1 + numero2

    return somaDosNumeros
}

const meusNumeros = soma(4, 6)

console.log(meusNumeros)


// Arrow function

const multi = (numero1, numero2) => numero1 * numero2 // se escrever tudo na mesma linha nao precisa escrever o return

const multiplicacao = multi(2, 5)
console.log(multiplicacao)



// Map 
// .map((numeros, index, arrayCompleto)


// const numeros = [2, 4 ,6 ,8]

// const dobro = numeros.map((numero) => {
//     return numero * 2
// } )

// console.log(dobro)


const numeros = [2, 4 ,6 ,8]

const dobro = numeros.map((numero) => numero * 2)

console.log(dobro)