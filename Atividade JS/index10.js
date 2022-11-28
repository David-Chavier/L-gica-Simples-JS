// Escreva um algoritmo que armazene o ano atual e o ano de
// nascimento de uma pessoa. Escrever uma mensagem no console
// que diga se ela poderá ou não votar este ano (não é necessário
// considerar o mês em que a pessoa nasceu).

const idade = parseFloat(prompt("Idade"))
const data = new Date();
const dataAtual = data.getFullYear();
const anodoNascimento = dataAtual-idade

if (idade >= 16){
    console.log("Você poderá votar este ano")
}else console.log("Você não poderá votar este ano")