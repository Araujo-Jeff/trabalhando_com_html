//32 - Crie um script que declare um array de objetos, onde cada objeto representa um aluno e possui as propriedades nome, 
// idade e notas (um array de números).Utilize a função map() para criar um novo array contendo 
// apenas os nomes dos alunos. Imprima o novo array.

var alunos = [
    {
        nome: 'João',
        idade: 45,
        notas: [7.5, 5.5, 9.0] 
    },
    {
        nome: "Sofia",
        idade: 16,
        notas: [6.8, 7.0, 7.5]
      },
      {
        nome: "Mateus",
        idade: 18,
        notas: [9.0, 9.5, 8.8]
      },
      {
        nome: "Isabela",
        idade: 17,
        notas: [5.5, 6.0, 6.5]
      }
]

// const nomeAlunos = alunos.map(function(alunos) {
//     return alunos.nome
// })

const nomeAlunos = alunos.map(alunos => alunos.nome)
console.log(nomeAlunos)