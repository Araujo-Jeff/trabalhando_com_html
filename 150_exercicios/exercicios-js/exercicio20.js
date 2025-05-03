// 20 - Crie um script que declare uma função que receba um array de números 
// como parâmetro e retorne a média dos números do array.

const numeros = [8, 10, 12, 20];


    let i = 0;
    let soma = 0;
    while (i < numeros.length) {
        soma += numeros[i];
        i++;
    }

    console.log(soma);

    function mediaNumero (numeros) {
        return media = soma/numeros.length
    }

    console.log(`A media dos numeros é: ${mediaNumero(numeros)}`)



    
