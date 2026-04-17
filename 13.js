const prompt = require('prompt-sync')()

let nota = parseFloat(prompt("Digite sua nota: "))

while(nota < 10 || nota > 0 ){
     nota = parseFloat(prompt("Digite sua nota: "))
}