let numeroAcessorios =  Number (prompt("Quantos acessorios você está usando?"))
let numeroCores = Number (prompt("Quantas cores tem no seu acessório?"))
let fatorBrilho = Number (prompt("Dê uma nota de 1 a 10 para o fator brilho:"))

 let Pontuacao = (numeroAcessorios*5) + (numeroCores*3) + (fatorBrilho*10)
console.log(Pontuacao, "pontos foi sua pontuação")

let metaPontuacao = 80
metaPontuacao = Number(metaPontuacao)

let aprovado = metaPontuacao <= Pontuacao
let naoAprovado = metaPontuacao > Pontuacao

if (aprovado === true) {console.log("Aprovado")}
else console.log(metaPontuacao - Pontuacao, "pontos, foi que faltou para você ser aprovado!")

