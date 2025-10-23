const velocidadeMadeira = Number(20)
const velocidadePedra = Number(30) //velocidade de cada picareta
const velocidadeFerro = Number(50)
const velocidadeDiamante = Number(80)
const blocoMinerar = prompt("O que você vai minerar?").toLowerCase() //pergunta ao usuário o que ele vai minerar com a resposta sendo minúscula
// se o bloco for de pedra
if(blocoMinerar === "pedra") //imprimirá a picareta adequada e com sua velocidade
   { console.log (" Picareta de Ferro ou Pedra é o ideal: Velocidade", velocidadeFerro,"ou", velocidadePedra)
}
// se o bloco for de diamante
else if(blocoMinerar==="minério de diamante") 
//imprimira no console a picareta adequada para o bloco e com sua velocidade
    {console.log("Use Picareta de Diamante: Velocidade", velocidadeDiamante)
}
// se o bloco for de obsidiana
else if(blocoMinerar==="obsidiana")
   { console.log("Use Picareta de Diamante: Velocidade", velocidadeDiamante)
}
// se o bloco não for especifico como os acima, ele imprimira essa mensagem
else console.log("Qualquer ferramenta funciona, mas a de Madeira é a mais simples")

let danoEspada = Number(6)
let forcaEncantamento = Number(1.5)
let armaduraInimiga = Number(2)
let vidaInimiga = Number(20)
const danoBruto = danoEspada*forcaEncantamento //multiplicação das variaveis
const danoFinal = danoBruto - armaduraInimiga
vidaInimiga -= danoFinal //forma mais simples de subtração

if(vidaInimiga<=0)  // se a vida do inimigo for menor ou igual a 0, ele será derrotado
   { console.log("O creeper foi derrotado! Você sobreviveu a explosão!")
} // se a vida do inimigo for maior, ele ficara vivo
else console.log("O creeper ainda esta vivo com", vidaInimiga, "de vida. Corra!")

const temDiamantes = true 
let nivelMesaCrafting = Number(2)
const temGravetos = false
let temFerro = Number(10)
//se as condições forem de acordo
if(temGravetos!==false||nivelMesaCrafting<3&&temDiamantes===true&&temFerro>=8){
    console.log("Picareta de Diamante criada! Hora de buscar obsidiana!") // imprimira essa mensagem se for tudo de acordo
}
else console.log("Faltam recursos ou as condições de crafting não são atendidas") //caso não esteja de acordo, imprimira esta.
