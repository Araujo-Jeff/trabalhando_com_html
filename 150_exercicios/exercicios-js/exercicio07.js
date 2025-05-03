
let pessoa = {
    nome: 'João',
    cpf: 12345678912,
    cidade: 'Rio de Janeiro'
}

//Array de notas
const notas=[8.5, 9.1, 10, 5.5];

///imprimindo os dados da pessoa
console.log('Dados do Aluno.')
console.log(`Aluno: ${pessoa.nome}`);
console.log(`CPF: ${pessoa.cpf}`);
console.log(`Cidade: ${pessoa.cidade}\n`);

//Imprimindo as notas
console.log('As notas do Aluno são:');
console.log(`A primeira nota é: ${notas[0]}`);
console.log(`A segunda nota é: ${notas[1]}`);
console.log(`A terceira nota é: ${notas[2]}`);
console.log(`A quarta nota é: ${notas[3]}\n`);

//Calculando a media das notas
const media = ((notas[0] + notas[1] + notas[2] + notas[3])/notas.length).toFixed(1); 

//Imprimindo a media
console.log(`A media do aluno é: ${media}\n`);

//Escolhendo uma nota aleatoria
var notaAleatoria = notas[Math.floor(Math.random() * notas.length)];

//Convertendo a nota da escala de 0 a 10, para a escla de 0 a 100
let notaConvertida = notaAleatoria * 10;

//Imprimindo a nota aleatoria e a que foi convertida
console.log(`A nota escolhida aleatoria foi: ${notaAleatoria}, e quando convertida na escala de 100 foi: ${notaConvertida}\n`);





