const prompt = require('prompt-sync')();

    let repetir = true

    while(repetir == true){
        let pergunta = parseFloat(prompt(`Digite uma nota entre 0 a 10: `))
        if(pergunta <=10){
            console.log(`${pergunta}`)
        }else{
            repetir = false
        }
    }