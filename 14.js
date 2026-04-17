const prompt = require('prompt-sync')()

let numero = parseInt(prompt("digite seu numero: "))

let i 

let muti = 1

for(i = numero ; i>1 ; i--){
muti = muti * i
console.log(muti)
}