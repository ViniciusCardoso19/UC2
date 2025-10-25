/*let i = 0

while(i<10){ //enquanto a condição for menor igual a 9
    console.log(i) //executa console
    i++ //incrementa o iterador
}

console.log("Chegou ao final do código")*/

/*let estomago = 0

while(estomago<100){
    console.log("Quero comer mais coxinhas", estomago)
    estomago += 10
}*/

/*let i 
let soma = 0

while(i!==0){
    i = Number(prompt("Digite um número"))
    soma += i
    
}
console.log("O resultado final é", soma)*/

/*let c = 1
do{
    console.log("o valor de C é", c)
    c++
}while(c<=6)*/

/*for(let i=0; i <=9 ; i++){
    console.log("O valor de i é:", i)
}
*/
/*let meuArray = [14, 67, 89, 15, 23]

for(let i = 0; i<6; i++){
    console.log(meuArray[i])
}*/
let maiorNumero = 0
let array = [11, 15, 18, 14, 12, 13]
for(let i = 0; i<6; i++){
    if(maiorNumero>array[i]){
        maiorNumero = array[i]
    }
}