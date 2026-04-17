const prompt = require('prompt-sync')()

let reajuste = 1.15

let salario = parseFloat(prompt("Digite seu saláriio: "))

console.log(`Você teve um Reajuste!! seu salario atual é: ${((salario*reajuste)).toFixed(2)} R$`)
