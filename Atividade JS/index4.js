// Uma revendedora de carros usados paga a seus funcionários
// vendedores um salário fixo por mês, mais uma comissão também
// fixa para cada carro vendido e mais 5% do valor das vendas por ele
// efetuadas. Escrever um algoritmo que leia o número de carros por
// ele vendidos, o valor total de suas vendas, o salário fixo e o valor que

// ele recebe por carro vendido. Calcule e escreva o salário final do
// vendedor.

const SalarioFixo = parseFloat(prompt("Salário fixo"))
const ComissaoFixa = parseFloat(prompt("Comissão fixa"))
const CarrosVendidos = parseFloat(prompt("Quantos carros vendeu"))
const ValorTotaldosCarrosVendidos = parseFloat(prompt("Valor total dos carros vendidos"))

const ComissaoFixaTotal = (ComissaoFixa*CarrosVendidos)
const ComissaoFlex = (5*ValorTotaldosCarrosVendidos/100)

alert(`Salário total de R$${SalarioFixo+ComissaoFixaTotal+ComissaoFlex}`)
console.log(`Salário total de R$${SalarioFixo+ComissaoFixaTotal+ComissaoFlex}`)