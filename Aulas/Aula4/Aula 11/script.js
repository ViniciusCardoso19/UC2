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

const ensino = prompt("concluiu o ensino medio?").toLowerCase()==="sim"
const idade = Number(prompt("Digite sua idade"))>=18
const faculdade = prompt("voce faz faculdade?").toLowerCase()==="sim"
if(ensino&&idade&& !faculdade) {
    console.log("Voce pode entrar na faculdade")
}
else
console.log("Voce nao tem os requisitos para entrar na nossa faculdade")

/* Ele realiza um teste que verifica se o número tem resto 0 dividindo ele por 2, conferindo se é par
Ele comenta que passou no teste se tiver resto 0
Ele comenta que não passou se tiver outro resto, sendo assim um numero impar*/
