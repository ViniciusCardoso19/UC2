/*const professor = {
    nome : "Lucas",
    idade: 28,
    tarefas:["Dar aula", "Responder dúvidas"],
    contarPiada: function(){
        console.log("É pavê ou pa come")
    }
}
console.log(professor.nome)*/

const filme = {
    nome: "Esposa de Mentirinha",
    direção: "Dennis Dugan",
    anoLancamento: 2011,
    elenco: [
        {nome:"Xuxa Meneghel", personagem: "Xuxa"},
        {nome: "Jennifer Aniston", personagem: "Katherine Murphy"},
        {nome: "Brooklyn Decker", personagem: "Palmer Dodge"},
        {nome: "Bailee Madison", personagem: "Maggie"}
    ],
    jaAssistiu: "Sim"



}
console.log("O ator é", filme.nome[1], "e o personagem é",)

console.log(filme.nome)
console.log(filme.direção)
console.log(filme[anoLançamento])
console.log(filme[elenco])
console.log(filme[jaAssistiu])

const pessoa = {
    nome: "Pedro",
    idade: 17,
    generoMusicalFav: "funk",

}
console.log("O nome da pessoa é", pessoa.nome,", ela tem", pessoa.idade,"anos e gosta muito de", pessoa.generoMusicalFav)

const professores = [
    {nome: "Lucas", modulo : 2},
    {nome: "Dal", modulo : 1},
    {nome: "Valter", modulo : 3}
]

console.log("O professor:", professores[1].nome,
"deu o modulo", professores[1].modulo)

