/* Exercícios Variáveis*/

const nome = prompt("Qual o seu nome?")
const idade = prompt("Qual a sua idade?")
console.log(typeof(nome))
console.log(typeof(idade))

/*Number() conversor de string para number*/
const idadeNumero = Number(idade)
console.log(typeof(idadeNumero))
//toString conversor de number para string
const idadeTexto = idadeNumero.toString()
console.log(typeof(idadeTexto))

let 