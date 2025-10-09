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
/*
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

const racasCachorro = ["pitbull", "pug", "pastor alemão", "husky", "bulldog"]
const numeroEscolhido = prompt("Escolha um número de 0 a 4")
const racaEscolhida = (racasCachorro[numeroEscolhido])
console.log(racaEscolhida)

const pokemon = ["bulbasauro", "squirtle", "charmander"]
console.log(pokemon.length)

const seriesBoas = ["Vikings", "The Big Bang Theory"]
console.log(seriesBoas.includes("Vikings"), seriesBoas.includes("GOT"))

const numeros = [1, 2, 3]

numeros.push(4)
console.log(numeros)

numeros.push(5,6,7)
console.log(numeros)

const meusPeixes = ["palhaço", "mandarim", "esturjão"]
meusPeixes.pop()
console.log(meusPeixes)
const letras = ["A", "B", "C", "D", "E", "F", "G", "H"]
letras.splice(1,1)

const numeros2 = ["1","2", "3", "4", "5", "6"]
console.log(numeros2.length)

numeros2.push(7)
console.log(numeros2)

numeros2.splice(3,2)
console.log(numeros2)
console.log(numeros2.length)*/

let array
console.log("a ", array)
//undefined

array = null
console.log("b ", array)
//null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log("c ", array.length)
//11

let i = 0
console.log("d ", array[i])
//3

array[i+1] = 19
console.log("e ", array)
// [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]

const valor = array[i+6]
console.log("f ", valor)
// 9

//2. SUBI NUM ONIBUS EM MIRROCOS, 27

//3
const nome = prompt("Qual seu nome?")
const email = prompt("Qual seu email?")

console.log("O email", email, "foi cadastrado com sucesso. Seja bem-vinda(o)", nome, "!")

let comidasFavoritas = ["estrogonofe", "lasanha", "sushi", "churrasco", "hamburguer"]
console.log(comidasFavoritas)
console.log("Essas são minhas comidas favoritas:")
console.log(comidasFavoritas[0])
console.log(comidasFavoritas[1])
console.log(comidasFavoritas[2])
console.log(comidasFavoritas[3])
console.log(comidasFavoritas[4])

const comidaPreferida = prompt("Qual sua comida preferida?")
comidasFavoritas[1] = comidaPreferida
console.log(comidasFavoritas)

const listaDeTarefas = []
let tarefasDia1 = prompt("Me diga uma tarefa para realizar no dia de hoje")
let tarefasDia2 = prompt("Me diga uma tarefa para realizar no dia de hoje")
let tarefasDia3 = prompt("Me diga uma tarefa para realizar no dia de hoje")
listaDeTarefas.push(tarefasDia1, tarefasDia2, tarefasDia3)
console.log(listaDeTarefas)

const indice = prompt("Digite o indice da tarefa que ja realizou(0, 1, 2)")
listaDeTarefas.splice(indice, 1)
console.log(listaDeTarefas)












