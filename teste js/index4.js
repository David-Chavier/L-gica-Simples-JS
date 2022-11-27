const SalarioFixo = parseFloat(prompt("Salário fixo"))
const ComissaoFixa = parseFloat(prompt("Comissão fixa"))
const CarrosVendidos = parseFloat(prompt("Quantos carros vendeu"))
const ValorTotaldosCarrosVendidos = parseFloat(prompt("Valor total dos carros vendidos"))

const ComissaoFixaTotal = (ComissaoFixa*CarrosVendidos)
const ComissaoFlex = (5*ValorTotaldosCarrosVendidos/100)

alert(`Salário total de R$${SalarioFixo+ComissaoFixaTotal+ComissaoFlex}`)
console.log(`Salário total de R$${SalarioFixo+ComissaoFixaTotal+ComissaoFlex}`)