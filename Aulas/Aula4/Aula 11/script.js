/*let condicao1 = true
let condicao2 = false

if(condicao1 && condicao2) {
    console.log("Executouo if do operador &&")
}
if(condicao1||condicao2){
    console.log("Executou o if do operador ||")
}
if(!condicao1){
    console.log("Executou o if do operador !")
}
*/

/*const ensino = prompt("concluiu o ensino medio?").toLowerCase()==="sim"
const idade = Number(prompt("Digite sua idade"))>=18
const faculdade = prompt("voce faz faculdade?").toLowerCase()==="sim"
if(ensino&&idade&& !faculdade) {
    console.log("Voce pode entrar na faculdade")
}
else
console.log("Voce nao tem os requisitos para entrar na nossa faculdade")*/

/* Ele realiza um teste que verifica se o número tem resto 0 dividindo ele por 2, conferindo se é par
Ele comenta que passou no teste se tiver resto 0
Ele comenta que não passou se tiver outro resto, sendo assim um numero impar*/

/* Quando você escolher uma fruta aparecerá o preço da fruta ao lado.
O valor impresso será 5
O preço da fruta vai ser o que tiver no default no caso = 5

Esta criando uma variavel para perguntar ao usuario um numero.
A mensagem no terminal sera esse número passou no teste e se fosse o -10 nao iria aparece nada.
Havera erro, pois esta faltando o else. 
else 
console.log()
*/

const idade = Number (prompt("Quantos anos você tem?"))>=18
if(idade){
    console.log("Você pode dirigir!")
}
else
    console.log("Você não pode dirigir!")


let turno = prompt("Digite M(matutino), V(Vespertino), N(Noturno)").toUpperCase()

let turnoUsuario

switch(turno){
case "M":
turnoUsuario = "Bom dia!"
   break;
case "V":
turnoUsuario = "Boa tarde!"
   break;
case "N":
turnoUsuario = "Boa noite!"
   break;
}
console.log(turno, "=", turnoUsuario)

let turno2 = prompt("Digite M,V,N").toUpperCase()
if (turno2==="M"){
    console.log("Bom dia!")
}
else if (turno2==="V"){
    console.log("Boa tarde!")
}
else if (turno2==="N"){
    console.log("Boa noite!")
}
else 
console.log("Turno desconhecido")

let generoFilme = prompt("Qual o gênero do filme?")==="fantasia"
let preçoIngresso = Number(prompt("Qual o preço do ingresso?"))<=15
if(generoFilme&&preçoIngresso){
    console.log("Bom filme")
}
else
console.log("Escolha outro filme")
