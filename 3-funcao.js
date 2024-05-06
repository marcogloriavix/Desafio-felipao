// Funções
function torrar (){
    console.log("torrando pão")   
    injetarPao()
}

function injetarPao(){
    console.log("Preparando para injetar o pão")
    console.log("finalizado")
}

torrar()
console.log("teste")

//*****************************************
// Nome de funções não ter numeros
//Nome da função - colocar verbos
//Nome da função - não colocar pontuação
//Função que executa somente uma coisa só
//precisando de mais funções, vamos criar mais funções.
//Função pode chamar função.
// ter uma função principal e dessa principal chamar as funções secundárias
// Itemtação é importante para o codigo ficar mais fácil de ler

function principal(){
    data()
    check()
    send()
}

principal()  // ATENÇÂO  - CHAMAR A FUNÇÃO

function data(){
    console.log("pegando dados")
}

function check(){
    console.log("validando dados")
}

function send(){
    console.log("cadastrando dados")
}

//********************************************************* */
