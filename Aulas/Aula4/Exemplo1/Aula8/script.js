const interruptor1 = false
const interruptor2 = true

//const resultado = interruptor1 && interruptor2
//console.log(resultado)

const a = true
const b = false
const c = true

/*const resultado2 = a && b
const resultado3 = b && c
const resultado4 = a && c
const resultado5 = a && b && c
console.log(resultado2, resultado3, resultado4, resultado5)*/

/*const resultado = interruptor1 || interruptor2
console.log(resultado)

const resultado1 = a || b
const resultado2 = b || c
const resultado3 = a || c
const resultado4 = a || b || c
console.log(resultado1, resultado2, resultado3, resultado4)*/

/*let nome = prompt("Qual seu nome?")
let anoNascimento = prompt("Que ano voce nasceu?")
let anoAtual = prompt("Qual o ano atual?")
anoAtual = Number(anoAtual)
let idade = anoAtual - anoNascimento
const maiorIdade = 18 <= idade
anoNascimento = Number(anoNascimento)
idade = Number(idade)


console.log("Nome:", nome)
console.log("Idade:", idade)
console.log("É maior de idade?", maiorIdade)
console.log("Idade em 2050:", idade + 25)*/

// a. false
// b. false
// c. true
// d. boolean

//No console vai apenas colocar o número grudado, por ser uma string. Exemplo: 2 + 3 = 23
// Ele deve transformar o prompt em Number.

let idade1 = prompt("Qual a sua idade?")
let idadeMelhorAmigo = prompt("Qual a idade do seu melhor amigo/amiga?")
idade1 = Number(idade1)
idadeMelhorAmigo = Number(idadeMelhorAmigo)

console.log("Sua idade é maior do que a do seu melhor amigo?", idade1>idadeMelhorAmigo)

let numero = prompt("Insira um número par")
console.log(numero%2)
//o resto sempre vai dar 0
// o resto sempre vai ser impar

let idade = prompt("Qual sua idade?")
idade = Number(idade)
idadeMeses = idade*12
idadeDias = idadeMeses*30

console.log(idadeMeses)
console.log(idadeDias)
console.log(idadeDias*24)

let numero1 = prompt("Escolha um número")
let numero2 = prompt("Escolha outro número")
console.log("O primeiro numero é maior que segundo?", numero1>numero2)
console.log("O primeiro numero é igual ao segundo?", numero1 === numero2)
console.log("O primeiro numero é divisível pelo segundo?", numero1/numero2)
console.log("O segundo numero é divisível pelo primeiro?", numero2/numero1)

let farenheit = 77
let farenheitEmKelvin = (77 - 32)*5/9 + 273.15
console.log("Farenheit transformado em kelvin é", farenheitEmKelvin,"kelvins")
let celsius = 80
let celsiusEmFarenheit = 80*(9/5) + 32
console.log("Celsius transformado em farenheit é", celsiusEmFarenheit, "farenheit")
celsius = 30 
celsiusEmFarenheit2 = 30*(9/5) + 32
celsiusEmKelvin = 30 + 273.15
console.log("Celsius transformado em farenheit é", celsiusEmFarenheit2, "F")
console.log("Celsius transformado em kelvin é", celsiusEmKelvin, "K")

NAO FEITO PORRAAAA

QuilowattHora = 0.05
console.log(QuilowattHora*280)
console.log()














