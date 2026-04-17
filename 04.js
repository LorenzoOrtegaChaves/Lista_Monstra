const prompt = require('prompt-sync')()

let numero = parseFloat(prompt("Digite seu numero: "))

if(numero %2 == 0 ){
console.log("Esse numero é par")
}else{
    console.log("Esse numero é impar")
}


