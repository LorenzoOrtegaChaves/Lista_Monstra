const prompt = require("prompt-sync")()

let numerolimite = parseFloat(prompt("Digite seu numero limite: "))

let i 

for(i=0; i <=numerolimite ; i++ ){
    if(i % 2 == 0){
        console.log(i)
        }
        
}
