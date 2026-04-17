const prompt = require('prompt-sync')()

let nome = (prompt("digite seu nome: "))

let senha =(prompt("Salve sua senha: "))

let senhasalva = (prompt("digite sua senha: "))

if(senha == senhasalva){
    console.log(`${nome} Você entrou !!!`)
}else{
    console.log(`${nome} Seu login esta errado !!`)
}