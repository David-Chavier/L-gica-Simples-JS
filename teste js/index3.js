const CustoFabrica = parseFloat(prompt("Preço do carro"))
const PorcentagemDistribuidor = 28*CustoFabrica/100
const Impostos = 45*CustoFabrica/100
const CustoFinal = CustoFabrica+PorcentagemDistribuidor+Impostos


console.log(`${CustoFinal} Preço do carro`)