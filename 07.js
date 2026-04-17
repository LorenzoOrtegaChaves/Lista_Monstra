const prompt = require('prompt-sync')()

let nome = (prompt("digite seu nome: "))

let idade =(prompt("digite sua idade: "))

let Valor = 30


if (idade >= 60) {
    console.log(`Você tem um desconto para idoso o valor será: ${ Valor -15} R$`)
}else if (desconto == "Sim" ||desconto == "sim" ) {
    let  desconto = (prompt("Você é estudante?: "))
    console.log(`O valor sera: ${Valor - 10} R$`)
}else{
    console.log(`O valor será: ${Valor} R$`)
}


