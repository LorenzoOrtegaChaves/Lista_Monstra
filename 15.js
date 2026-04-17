const prompt = require('prompt-sync')()

let repetir = true

let notas = 0

let aluno = 0

while(repetir == true){
    let pergunta = prompt("Deseja informar um nova nota?: ")
    if(pergunta == "sim" || pergunta == "SIM"){
         notas += parseFloat(prompt("Digite a nota a ser guardada! "))
         aluno++
    }else{
        repetir = false
    }
    
}
console.log(`Você tirou a media: ${(notas/aluno).toFixed(2)}`)
