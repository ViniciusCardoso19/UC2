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