/* vai ser impresso no console.log "Matheus Nachtergaele"
no segundo vai ser a "Virginia  Cavendish"
vai imprimir {canal: "Globo", horario:"14h"}*/

/* 2. vai ser impresso tudo que esta dentro das chaves em cada variavel
a sintaxe dos tres pontos cria a copia do objeto cachorro*/

/*3. Undefined e false
a altura nao esta definida*/

const pessoa = {
    nome: "Vinícius",
    apelidos: ["Bruxo", "Parceiro", "Irmao"]
}
console.log("Eu sou o", pessoa.nome, "mas pode me chamar de", pessoa.apelidos[0], ",", pessoa.apelidos[1],",", pessoa.apelidos[2])

function imprimirMensagem(){
    console.log()
}