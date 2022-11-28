// Crie um algoritmo que armazene um número inteiro positivo, e gere
// um alerta com as seguintes mensagens:
// a. “Número é par!”, se o valor armazenado for par;
// b. “Número é impar!”, se o valor armazenado for ímpar;

const num = parseInt(prompt(`Digite um número`))

if (num%2 == 0){
    alert("Número é par")
}else {
   alert("Número é impar")
}