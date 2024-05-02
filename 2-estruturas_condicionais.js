// estruturas condicionais if, else if, else
// www.w3schools.com

let ligado = false

if (ligado == true) {
    console.log ("executou...ué !")
}

console.log("fim!")

//------------------------------------------
// Estrutura if -else

let possuiOvos = true
let itensComprados =""

if(possuiOvos){
    itensComprados = "leite"
}
else{
    console.log("passou na sessão de congelados")
    itensComprados  = "leite"
}

//-----------------------------------------
// Estrutura ELSE-IF
let nivelFome = 1

if(nivelFome === 1){
    console.log("nem consegue respirar!!!")

} else if (nivelFome ===2) {
    console.log("está fraco !!!")
    
} else if (nivelFome === 3) {
    console.log ("está mais ou menos")
    
}else{
    console.log ("Você come demais")
}

//------------------------------------------
// Switch Case - multiplas opções em uma única pergunta
//switch  / case/ break/ default

let fruta  = "banana"
switch (fruta){   // dentro da condição do switch case, posso colocar numeros
    case "laranja": // dentro do "case", posso fazer o meu código com várias estruturas
        console.log("suco de laranja")
        break

    case "banana": // dentro do "case", posso fazer o meu código com várias estruturas
    case "morango":
        console.log("vitamina de banana ou morango")
        break

    case "maça":
        console.log("vitamina de maça")
        break
    
    default:
    console.log ("suco genérico")
}

// *************************************************
//************************************************* */




