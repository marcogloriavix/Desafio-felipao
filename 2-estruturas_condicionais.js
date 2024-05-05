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
// Laços de Repetição
// FOR
console.log("----Laço de repetição : FOR")

for (let contador=0;contador<4;contador++){
    console.log(contador)
    console.log("Aumentar o contador")
}

let pontosVida=0
for(let i=0;i<11;i++){
    pontosVida +=1
    console.log("Tomou uma bebida que deu força " + i)
}
console.log (pontosVida + "Totais")

//********************************************* */
// Laço de Repetição "WHILE"
let contador=0
while(contador<3){
    console.log("olá")
    contador++
}

//************************************************ */
// DO WHILE   (faça enquanto)
let contador1=0
do{
    console.log("Olá Laço DO WHILE")
    contador1 ++
} while(contador1<3)

//************************************************ */



