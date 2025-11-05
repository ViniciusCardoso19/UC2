/*const contagem = [1,2,3,4,5,6,7,8,9,10]
for(let i = 0; i<10;i++){
    console.log(contagem[i])
}*/
const contagem = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
for(let i = 0; i<20;i++){
    if(contagem[i]%2===0)
    console.log(contagem[i])
}

let numero = Number(prompt("Escolha um número de 1 a 10"))
for(let i = 1;i<=10;i++){
    let resultadoTabuada = numero*i
    console.log(numero,"x",i, "=",resultadoTabuada)
}

let somaTotal = 0
let numero2
for(let i = 0;i<5;i++){
    numero2 = Number(prompt("Insira um número"))
    somaTotal += numero2
}
console.log(somaTotal)

let notas
