/*let matriz = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
]
 matriz[1][2] = 1

 console.log(matriz)
*/

/*let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

let soma = 0
for(let i = 0; i<matriz.length; i++){
    for(let j = 0; j<matriz[i].length;j++){
      soma += matriz[i][j]
    }
}
console.log(soma)*/

/*let matriz = [
    [1, 2, 3, 4], 
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
]
function percorrerSoma(){
    let soma = 0
    for(let i = 0; i<matriz.length;i++){
        for(let j = 0; j<matriz.length;j++){
            soma+= matriz[i][j]
            console.log(soma)
        }
    }
}
percorrerSoma()*/

let tabuleiro = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
]
let tentativa = 0
[10][10]

function posicionarNavio(){
 tabuleiro [1][2] = 1
 tabuleiro [4][3] = 2
 tabuleiro[4][4] = 2
}
let escolha = prompt("Escolha uma posição do navio")
function escolhaCelula(){
    if(escolha==="1,2") {
    console.log("Você acertou o navio");
    if (escolha==="4,3"){
        console.log("Você acertou o navio");
        if(escolha==="4,4"){
            console.log("Você acertou o navio");
        }
    }
    }  
    else 
        console.log("Você errou o navio")
}
posicionarNavio()
escolhaCelula()