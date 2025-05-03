//33 - Crie um script que declare um array de objetos, onde cada objeto representa um aluno 
// e possui as propriedades nome, idade e notas (um array de números). Utilize a função filter() 
// para criar um novo array contendo apenas os alunos com idade maior ou igual a 18 anos. Imprima o novo array.


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

const maior = alunos.filter(aluno => { 
    return aluno.idade >= 18
})


//const maior = alunos.filter(aluno => aluno.idade >= 18); //Jeito mais simplificado



 console.log(maior)
