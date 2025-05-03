//3 - Crie um script que simule o registro de informações de um aluno. O script deve ter três variáveis:
//As variáveis nomeAluno e matricula devem estar em um escopo global. A variável curso deve estar dentro de uma função. 
// A função deve retornar uma string que concatene todas as informações do aluno 
// em uma única linha utilizando template literals ${var}.

var nomeAluno = "Jefferson";
const matricula= "123456";

function exibirCurso() {
    let curso = 'Algoritimo'
    return `Aluno: ${nomeAluno}, Matricula: ${matricula}, Curso: ${curso}`
}

console.log(exibirCurso());