const prompt = require('prompt-sync')()

let idade = parseFloat(prompt("Digite sua idade: "))

const dias = 365

console.log(`Você tem: ${((idade*dias)/2).toFixed(1)} dias !!!`)