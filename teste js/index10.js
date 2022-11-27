const idade = parseFloat(prompt("Idade"))
const data = new Date();
const dataAtual = data.getFullYear();
const anodoNascimento = dataAtual-idade

if (idade >= 16){
    console.log("Você poderá votar este ano")
}else console.log("Você não poderá votar este ano")