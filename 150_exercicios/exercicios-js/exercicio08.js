const mediaAprovacao = 7.0;
const notas = [5.6, 9.3, 10];

const media = ((notas[0] + notas[1] + notas[2])/notas.length).toFixed(1);

console.log(`A primeira nota do aluno é: ${notas[0]}`);
console.log(`A segunda nota do aluno é: ${notas[1]}`);
console.log(`A terceira nota do aluno é: ${notas[2]}`);
console.log(`A media do aluno é: ${media}`);

// if (media >= 7) {
//     console.log('O aluno esta APROVADO');
// } else {
//     console.log('O alunos esta REPROVADO');
// }

var situacaoAluno;

if (media >= mediaAprovacao) {
    situacaoAluno = 'APROVADO'
} else {
    situacaoAluno = 'REPROVADO'
}

console.log(`O aluno está: ${situacaoAluno}`)
