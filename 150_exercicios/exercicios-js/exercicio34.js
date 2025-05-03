//34 - Crie um script que declare um array de objetos, onde cada objeto representa um aluno
//  e possui as propriedades nome, idade e notas (um array de números). Utilize a função reduce() 
// para calcular a média das idades dos alunos.

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
        nome: "Lunna",
        idade: 18,
        notas: [9.0, 9.5, 8.8]
      },
      {
        nome: "Thiaguinho",
        idade: 17,
        notas: [5.5, 6.0, 6.5]
      }
]

const somaIdade = alunos.reduce((acumulador, aluno) => acumulador + aluno.idade, 0 )
    const mediaIdade = somaIdade / alunos.length


//    const mediaIdade = alunos.reduce((acumulador, aluno) => acumulador + aluno.idade, 0 ) / alunos.length  // Jeito simplificado
 

console.log(mediaIdade)

 