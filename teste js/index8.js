const nome = prompt("Nome")
const idade = parseFloat(prompt("Idade"))
const data = new Date();
const dataAtual = data.getFullYear();
const anodoNascimento = dataAtual-idade

console.log(`Nome: ${nome}, tem ${nome.length} letras.`)
console.log(`Idade: ${idade} anos, nasceu em ${anodoNascimento}`)
