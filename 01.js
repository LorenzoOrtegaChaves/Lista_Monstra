const prompt = require('prompt-sync')()

let nota1 = parseFloat(prompt("Digite sua primeita nota: "))

let nota2 = parseFloat(prompt("Digite sua segunda nota: "))

console.log(`Você tirou a media: ${((nota1+nota2)/2).toFixed(2)}`)
