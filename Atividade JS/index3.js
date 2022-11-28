// O custo de um carro novo ao consumidor é a soma do custo de
// fábrica com a porcentagem do distribuidor e dos impostos
// (aplicados ao custo de fábrica). Supondo que o percentual do
// distribuidor seja de 28% e os impostos de 45%, escrever um
// algoritmo para ler o custo de fábrica de um carro,calcular e escrever
// o custo final ao consumidor.

const CustoFabrica = parseFloat(prompt("Preço do carro"))
const PorcentagemDistribuidor = 28*CustoFabrica/100
const Impostos = 45*CustoFabrica/100
const CustoFinal = CustoFabrica+PorcentagemDistribuidor+Impostos


console.log(`${CustoFinal} Preço do carro`)