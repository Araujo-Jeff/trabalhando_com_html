// 6 - Crie um script que contenha um objeto literal chamado pessoa. O objeto deve armazenar informações sobre uma pessoa, incluindo:
// nome: O nome da pessoa.
//cpf: O CPF da pessoa.
//cidade: A cidade onde a pessoa mora. Declare e inicialize o objeto pessoa com valores para nome, cpf e cidade.
//Imprima cada uma das propriedades do objeto pessoa usando console.log.

let pessoa = {
    nome: 'Jefferson',
    cpf: 12345678912,
    cidade: 'João Pessoa'
}

//Assim imprime todas as informações

console.log(pessoa); 

//Assima vai imprimir as informações separadas

console.log(pessoa.nome);
console.log(pessoa.cpf);
console.log(pessoa.cidade);

//concatenando para ficar mais organizado

console.log(`O nome da pessoa é: ${pessoa.nome}`);
console.log(`O CPF da pessoa é: ${pessoa.cpf}`);
console.log(`A Cidade da pessoa é: ${pessoa.cidade}`);
