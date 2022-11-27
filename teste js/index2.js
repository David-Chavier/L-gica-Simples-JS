const TotaldeEleitores = prompt(`Total de eleitores`)
const VotosBrancos = prompt(`Votos brancos`)
const VotosNulos = prompt(`Votos nulos`)
const VotosValidos = TotaldeEleitores-VotosBrancos-VotosNulos

console.log(VotosValidos*TotaldeEleitores/100+"% de Votos validos")
console.log(`${VotosBrancos*TotaldeEleitores/100}% de Votos brancos`)
console.log(`${VotosNulos*TotaldeEleitores/100}% de Votos nulos`)