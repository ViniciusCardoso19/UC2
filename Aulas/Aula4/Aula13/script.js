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
/*let maiorNumero = 0
let array = [11, 15, 18, 14, 12, 13]
for(let i = 0; i<6; i++){
    if(maiorNumero>array[i]){
        maiorNumero = array[i]
    }
}*/

/*let soma = 0
const meuArray = [11, 15, 18, 14, 12, 13]
for(let i = 0; i<6; i++){
    if(meuArray[i]%2===0){
        soma = soma + meuArray[i]

    }
}
console.log("A soma dos números pares é", soma)*/

/*const numeros = [14, 67, 89, 15, 23]

for(let numero of numeros){
    console.log(numero)
}*/

/*let mensagem = ["Oi", "sumido", "tudo", "bem?", "Saudades"]

let palavra = ""
for(palavra of mensagem){
    palavra = palavra + mensagem[i] + " "

} 
console.log(palavra)*/

//Exercicios de fixação
//1.O código está fazendo um looping, somando todos os valores de 0 a 4. O valor impresso no console será 10.

//2.A) Vai ser impresso todos os números do array maiores que 18.
//B) Sim, é suficiente. Poderia ser usado 

// 3.No console seria impresso * ** *** **** em lista.

//Exercícios de fixação
let nomeDosBichinhos = []
let bichinho = Number(prompt("Quantos bichinhos de estimação você tem?"))
if (bichinho === 0) {
    console.log("Que pena! Você pode adotar um pet")
}
else if (bichinho > 0) {
    for (let i = 0; i < bichinho; i++) {
        let nomes = prompt("Digite o nome dos seus bichinhos")
        nomeDosBichinhos.push(nomes)
    }
}
console.log("Os nomes dos seus pets são:", nomeDosBichinhos)

let arrayOriginal = [10, 15, 20, 30, 40, 50, 55]
for (let numero of arrayOriginal) {
    console.log(numero)
}
for (let numero of arrayOriginal) {
    console.log(numero / 10)
}
let novoArray = []
for (let i = 0; i < 7; i++) {
    if (arrayOriginal[i] % 2 === 0) {
        novoArray.push(arrayOriginal[i])
       // console.log(novoArray[i])
    }
}console.log(novoArray)

let arrayString = []



