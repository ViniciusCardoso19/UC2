ouroTotal = 75000
membrosTripulacao = 9
recompensaBaseLuffy = 3000000000
aumentoRecompensa = 150000000
bonusExperiencia = 500
forcaTripulacao = 95

ouroPorMembro = ouroTotal / membrosTripulacao
restoOuro = ouroTotal%membrosTripulacao
novaRecompensaLuffy = recompensaBaseLuffy + aumentoRecompensa
 let poderLuffy = recompensaBaseLuffy*bonusExperiencia
 reducaoAumento = aumentoRecompensa - 50000000

 console.log(ouroPorMembro)
 console.log(restoOuro)
 console.log(novaRecompensaLuffy)
 console.log(poderLuffy)
 console.log(reducaoAumento)

 forçaInimigo = 120
 chanceVitoria = 0.7
 limiteSeguranca = 0.8
 temAkumaNoMi = true
 inimigoTemHaki = true
 combateJusto = "sim"
 combateRapido = "sim"

 podeVencer = forcaTripulacao>=forçaInimigo
 riscoAlto = chanceVitoria<limiteSeguranca
 batalhaFacil = combateJusto==combateRapido

 console.log("A forçaTripulaçao é maior ou igual que a forçaInimigo?", podeVencer)
 console.log("A chanceVitoria é menor que o limiteSeguranca?", riscoAlto)
 console.log("O combateJusto é igual ao combate rapido?", batalhaFacil)