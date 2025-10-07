/*const nome = "Vinicius"
const idade = 16

//aspas duplas
const frase = "O meu nome é " + nome + " e minha idade é " + idade + " anos"
console.log(frase)
console.log(typeof(frase))

//aspas simples
const frase2 = 'O meu nome é ' + nome + ' e minha idade é ' + idade + ' anos'
console.log(frase2)
console.log(typeof(frase2))

//template
const frase3 = `O meu nome é ${nome} e minha idade é ${idade}`
console.log(frase3)
console.log(typeof(frase3))*/

const nome = prompt("Qual seu nome?")
const corFav = prompt("Qual a sua cor favorita?")

console.log("A cor favorita de", nome, "é", corFav)

const frase1 = "O meu nome é " + nome + " e minha cor favorita é " + corFav
console.log(frase1)

const frase2 = `O meu nome é ${nome} e minha cor favorita é ${corFav}`
console.log(frase2)

console.log(nome.length)

const fraseMaiuscula = "OieEEeEE!"
const fraseMinuscula = fraseMaiuscula.toLowerCase()
console.log(fraseMaiuscula, fraseMinuscula)

const fraseUpper = fraseMaiuscula.toUpperCase()
console.log(fraseMaiuscula, fraseUpper)

console.log(nome.trim())
const fraseCenoura = "Hoje eu comi cenoura, adoro cenoura"
console.log(fraseCenoura.includes("cenoura"))
console.log(fraseCenoura.includes("batata"))

const novaFrase = fraseCenoura.replaceAll("cenoura", "batata")
console.log(novaFrase)

const fraseUser = prompt("Escreva uma frase")
const fraseMaiuscula2 = fraseUser.toUpperCase()
console.log(fraseMaiuscula2)

const novaFrase2 = fraseUser.replaceAll("o", "i")
console.log(novaFrase)
console.log(fraseUser.length)

const listaDeCompras = ["abacate", "banana", "tomate"]

console.log(listaDeCompras[1])






