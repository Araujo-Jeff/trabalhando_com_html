//29 - Crie um script que declare uma função que receba um array de strings 
// como parâmetro e retorne um novo array contendo apenas as strings que começam com a letra "A".

const palavras = ["Aluno", "Professor", "Atividade", "Exercicio", "Caneta"]

const comecaLetraA = palavras.filter(palavra => {
    return palavra.startsWith("A")  // Para escolher apenas as palavras que começa com a letra "A"
})

console.log(comecaLetraA)