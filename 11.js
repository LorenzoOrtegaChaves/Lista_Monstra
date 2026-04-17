const prompt = require("prompt-sync")()

let numeros

let total = 0

do{
     numeros = parseInt(prompt("Digite numeros: "))
     total += numeros
}while(numeros != 0){
    
}console.log(`Soma total: ${total}`)
