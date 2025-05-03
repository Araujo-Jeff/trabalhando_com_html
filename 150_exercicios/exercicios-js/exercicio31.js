//31 - Crie um script que declare um array de objetos, onde cada objeto representa um aluno e possui as propriedades 
// nome, idade e notas (um array de números). Utilize um loop for para imprimir o nome de cada aluno.

let alunos = [
    {
        nome: "Carlos",
        idade: 17,
        notas: [7.5, 8.0, 9.2]
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

for (let i = 0; i < alunos.length; i++) {
    console.log(`Aluno(a) ${i + 1}: ${alunos[i].nome}`)
}