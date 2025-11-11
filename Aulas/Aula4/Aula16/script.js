const soma = function(){
    const num1 = 5
    const num2 = 6
    const resultado = num1 + num2
    console.log(resultado)
}
const oDobro = () =>{
    let dobrinho = 20*2
    console.log("O dobro será", dobrinho)
}


function determinaMonstro(temPeleGelada, transformaLuaCheia, brilhaAoSol, temSedeDeSangue, temPelosGrossos) {
    if(temPeleGelada&&brilhaAoSol&&temSedeDeSangue){
        console.log("Vampiro")
    }
    if(transformaLuaCheia&&temPelosGrossos){
        console.log("Lobisomem")
    }
    else(determinaMonstro())
        console.log("Humano")
    
}
determinaMonstro(true,false,true, true, false)

//Exercicios de Fixação
//1. a) vai ser impresso 10 e 50 no console.log
// b) nada vai ser impresso

//2. a)Confere se o texto do usuario tem a palavra "cenoura", caso tenha imprimira true
//b) Ira resultar true em todos no console.log

//1.

function imprimirInfo(){
    console.log("Eu sou o Vinícius, tenho 17 anos, moro no Rio Grande do Sul e sou estudante")
}

//3.

let num1 = Number(prompt("Digite o primeiro número"))
let num2 = Number (prompt("Digite o segundo número"))

function soma(num1,num2){
    return num1+num2
}

console.log("Numeros inseridos", num1, num2)
console.log("Soma:", soma(num1,num2))