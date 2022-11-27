const Quantasmaças = parseFloat(prompt("Quantas maçãs"))

if (Quantasmaças < 12){
    console.log(`Valor total da compra R$${Quantasmaças*0.30}`)
}else {
    console.log(`Valor total da compra R$${Quantasmaças*0.25}`)
}