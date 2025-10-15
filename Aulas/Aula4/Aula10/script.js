
/*if(condicao1){
    console.log("Entrei no if 1")
}
if(condicao2){
    console.log("Entrei no if 2")
}*/

/*let num1 = Number (prompt("Digite um número"))
let num2 = Number (prompt("Digite outro numero"))

const condicao1 = (num1 === num2)

if(condicao1){console.log("Parabéns seus números são iguais")}

else{
    console.log("Os números sao diferentes")
}

if(condicao1){
    console.log("Entrou no if 1")
}
else if(condicao2){
    console.log("Entrou no else if 1")

}
else if(condicao3){
    console.log("Entrou no else if 2")

}
else
console.log("Entrou no else")*/

let num1 = Number(prompt("Digite um número"))
let num2 = Number(prompt("Digite outro número"))

const condicao1 = num1>num2
const condicao2 = num1<num2
const condicao3 = num1 === num2

if(condicao1) {console.log("O primeiro número é maior que o segundo")}
else if(condicao2) {console.log("O primeiro número é menor que o segundo")}
else if(condicao3) {console.log("O primeiro número é igual ao segundo")}

let paisOrigem = prompt("Digite seu país de origem")

switch(paisOrigem.toLowerCase){
    case 'brasil' :
        console.log("nacionalidade brasileira")
        console.log("Entrou no case1")
        break
        case 'eua' :
            console.log("nacionalidade americana")
            console.log("Entrou no case2")
            break
            case 'india' :
                console.log("nacionalidade indiano")
                console.log("Entrou no case3")
                break
                default :
console.log("nacionalidade nao encontrada")
break
}

let pokemonEscolhido = prompt("Escolha seu pokémon")

switch(pokemonEscolhido.toLowerCase()) {
    case 'charmander' :
        console.log("fogo")
        break
    case 'bulbasaur' :
        console.log("planta e veneno")
        break
    case 'squirtle' :
        console.log("água")
        break
    default :
        console.log("pokémon não encontrado")
        break

}