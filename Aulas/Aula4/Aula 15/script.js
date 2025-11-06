/*function imprimirOlaMundo(){
    console.log("Olá Mundo!")
}
for(let i = 0;i<3;i++){
    imprimirOlaMundo()
}

function imprimirBemVindo(){
    console.log("Bem vindo Turma 25-2N!")
}
imprimirBemVindo()

function numeros(){
    const soma = 2 + 4
    console.log("A soma dos resultados é", soma)
}
numeros()

function numero(){
    const dobro = 5*2
    console.log(dobro)
}
numero()

function nomeUsuario(nome){
    console.log("Olá", nome)
}
nomeUsuario("Pedro")
nomeUsuario("Joao")
nomeUsuario("Leomar")

function soma(numero5,numero6){
    console.log("A soma é", numero5 + numero6)
}
soma(2,3)

const a = 1

function imprimeVariavel(){
    const b = 2
    console.log("A variavel a é", a)
    console.log("A variavel b é", b)
}
imprimeVariavel()
console.log("A variavel a é", a)
console.log("A variavel b é", b)

function calculaArea(altura, largura){
    let area = altura*largura
    return area
}
let resultadoArea = calculaArea(2,3)
console.log(resultadoArea)
console.log(calculaArea(2,3))*/

const k = 1
const z = 2
function somaNumeros(){
    return k + z
}
const resultadoSoma = somaNumeros()
console.log(resultadoSoma)

let numeros = [10, 20 , 30, 40 , 50]
function retornoArray(array){
    let novoArray = []
    novoArray.push(array[0]/2)
    novoArray.push(array[array.length-1]/2)
    return novoArray
}
console.log(retornoArray(numeros))


