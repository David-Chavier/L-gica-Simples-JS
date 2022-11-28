// As maçãs desta estação custam R$0,30 se forem compradas
// menos do que uma dúzia, e R$0,25 se forem compradas pelo menos
// doze. Desenvolva um algoritmo que leia o número de maçãs
// compradas, calcule e escreva o valor total da compra.

const Quantasmaças = parseFloat(prompt("Quantas maçãs"))

if (Quantasmaças < 12){
    console.log(`Valor total da compra R$${Quantasmaças*0.30}`)
}else {
    console.log(`Valor total da compra R$${Quantasmaças*0.25}`)
}