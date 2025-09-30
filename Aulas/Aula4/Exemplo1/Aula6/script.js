let a = 10
let b = 10

console.log(b)

b = 5
console.log(a, b)

/* Devido a variável ser declarada com "let" ela pode mudar seu valor conforme o código, assim como b antes era 10, 
depois assumiu como 5. O console.log roda as variáveis. Ao rodar o código no GoLive no html, ao inspecionar, as
váriaveis irão aparecer no console como 10, 10, 5.
*/

let x = 10
let y = 20
z = x
y = z
x = y

console.log(x, y, z)

/* Ao inspecionar, no console irá aparecer 10, 10 e 10.*/

let horasDiarias = prompt("Quantas horas você trabalha por dia?")
let salarioDiario = prompt("Quanto você recebe por dia?")
console.log("Você recebe", horasDiarias, "/", salarioDiario,"por hora")

/* Esse código executa essas perguntas ao usuário ao abrir o GoLive no html, e deixa as informações fornecidas
no console do inspecionar com a frase do console.log e as informações do usuário.
Console: Você recebe horasDiarias/salarioDiario por hora */

let nome
let idade

console.log(typeof(nome), typeof(idade))

// Esse tipo foi impresso pois nao assumimos valor á variavel //

nome = prompt("Qual seu nome?")
idade = prompt("Qual a sua idade?")

console.log("Meu nome é:", nome, "e eu tenho:", idade, "anos")

console.log(typeof(nome), typeof(idade))

// string e string





