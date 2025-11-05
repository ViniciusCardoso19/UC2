function imprimirOlaMundo(){
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
console.log(calculaArea(2,3))

function soma(numero1, numero2){
const soma = numero1+numero2
return soma
}
let resultadoSoma = soma(1,2)
console.log(resultadoSoma)
