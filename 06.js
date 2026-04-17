const prompt = require(`prompt-sync`)()

const nome = prompt("Digite seu nome: ")

console.log(`Olá aluno ${nome}`)

const nota = parseFloat(prompt("Digite sua nota final: "))
const faltas = parseInt(prompt("Digite sua frequencia: "))

if(nota >=7 ){
    if (faltas >= 75){
 console.log("Você esta aprovado! ")
 }else{
    console.log("Voce passou com nota, Mas Reprovou em falta!!")
 }
}else if (nota >=4 && nota <7 ){
    console.log("Você está de exame ")
} else {
    console.log("Reprovou !")
}

if(nota >10 ){
    console.log("Nota somente entre 0 e 10")
}