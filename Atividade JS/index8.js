// Escreva um algoritmo que tenha como valores de entradas o nome
// e idade do usuário e imprima no terminal o nome e a quantidade de
// letras que o nome possui, bem como a idade e o ano de nascimento
// do usuário. Ex: “Nome: Pedro, 5 letras. Idade: 22 anos, nasceu em
// 2000”.

const nome = prompt("Nome")
const idade = parseFloat(prompt("Idade"))
const data = new Date();
const dataAtual = data.getFullYear();
const anodoNascimento = dataAtual-idade

console.log(`Nome: ${nome}, tem ${nome.length} letras.`)
console.log(`Idade: ${idade} anos, nasceu em ${anodoNascimento}`)
