const prompt = require("prompt-sync")()

const tabuada = parseInt(prompt("Digite qual tabuada quer saber: "))

for(let contador = 0; contador <= 10; contador++){
    console.log(`${tabuada} x ${contador} = ${tabuada*contador}`)   
}