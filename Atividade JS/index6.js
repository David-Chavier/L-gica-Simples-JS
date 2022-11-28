// Desenvolva um algoritmo para ler dois valores e imprimir uma das
// três mensagens a seguir:
// a. ‘Números iguais’, caso os números sejam iguais;
// b. ‘Primeiro é maior’, caso o primeiro seja maior que o segundo;
// c. ‘Segundo maior’, caso o segundo seja maior que o primeiro.

const Valor1 = parseFloat(prompt("Digite um valor"))
const Valor2 = parseFloat(prompt("Digite um valor"))

if (Valor1==Valor2){
    console.log("Números iguais")
}else if(Valor1>Valor2){
    console.log("Primeiro é maior")
}else{
    console.log("Segundo é maior")
}