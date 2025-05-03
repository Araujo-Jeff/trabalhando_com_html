// 1 - Crie um script que tenha três variáveis:
//nome e cpf devem estar em um escopo global. sobreNome deve estar dentro de uma função. 
// A execução do programa deve imprimir o nome completo na ordem correta (com quebra de linha): 
// Nome Sobrenome CPF. Outra linha com uma mensagem concatenando os valores.


var nome = "Jefferson";
const cpf = "12345678912";

function exibirSobreNome() {
  let sobreNome = "Lima";
  return sobreNome;
}

console.log(nome);
console.log(exibirSobreNome());
console.log(cpf);
console.log(`O nome: ${nome} ${exibirSobreNome()} CPF: ${cpf}`);
