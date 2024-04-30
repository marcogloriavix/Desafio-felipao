// Operadores aritméticos
//**********************************************//

let idade = 30
console.log("valor da minha idade: " + idade)

//Testando alguns operadores aritméticos
let precoProduto = 100.99
let valorComTaxa = precoProduto * 2
console.log("Valor com Taxa: " + valorComTaxa)

let notaMercado = 50
console.log("Vamos dividir por dois: " + notaMercado/2)
console.log ("Pegar o resto: " + notaMercado%2)

// Valores de incremento e decremento
//***********************************

let contador = 1
// '++' incremento
contador ++

// '--' decremento
contador --

console.log("Valor do contador: " + contador)

// Calcular e atribuir
//---------------------------------------------

let preco =10
preco +=8
console.log("Valor do preco: " + preco)

//Definindo Escopos - expressões matemáticas
//***************************************** */

let resultado = 2*5+5
console.log ("A expressão matemática é: " + resultado)



// Operadores relacionais ou comparação
// ************************************

let numero = "1"
console.log(numero == "1")

//  = é atribuição
// == é para comparar o valor
// === é para comparar o valor e o formato do conteúdo
// !== é diferente ?

let marca = "Apple"
console.log(marca === "Apple")
console.log(marca !== "Apple")

let idadeMinima = 18
let idadeUsuario = 17
let idadeComparada = idadeUsuario > idadeMinima
console.log(idadeComparada)

// depois de declarada a variavel, não posso chamar LET de novo ....
idadeComparada = idadeUsuario < idadeMinima
console.log(idadeComparada)
console.log (8<=8)


// Operadores Lógicos
//*******************************************************
// Operador AND (&&)

console.log("----------------------------------")
let age=18
let vistoVerificado  = true
console.log((idade >= 18) && (vistoVerificado === true))

let moedasColetadas = 100
let item = "estrela"
let result = (moedasColetadas ===100 && item ==='estrelas')
console.log(result)

// Operador OR (||)
let tempo = "sol"
let itemPessoal = "guarda chuva"
let podeSair = (tempo!=="chuva" || itemPessoal === "guarda chuva")
console.log("nosso personagem pode sair?  " + podeSair)

// Operador NOT ( ! ) - nega uma afirmação
let weather = "chuva"
console.log (!true)  // ! nega a afirmação

//---------------------------------------------------------------------------







