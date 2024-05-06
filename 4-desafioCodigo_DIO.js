// Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print" : imprime um texto de saída (output), pulando linha.


//const nome = gets();
// Para converter os valores inseridos na entrada, utilizamos a função JavaScript parseInt() que converte a parte inicial da string em um número inteiro.
//const quantidade = parseInt(gets());

let nome = "espada"
let quantidade = 2

let inventario = [
    { nome: 'espada', quantidade: 1 },
    { nome: 'escudo', quantidade: 1 },
    { nome: 'poção de cura', quantidade: 6 },
    { nome: 'poção de mana', quantidade: 4 },
	{ nome: 'pergaminho', quantidade: 3 }
];

console.log(inventario[4])

// Utilizamos o metodo JavaScript find() para buscar o primeiro elemento no array que satisfaça a condição especificada por uma função de callback.
let item = inventario.find(item => item.nome === nome);


// TODO: Implemente a condição necessária para a exibição de cada mensagem

if (item && item.quantidade >= quantidade) {
    console.log("Disponível");
} else {
    console.log("Indisponível");
}

//***************************************************************** */

//let saldoInicial = 100
//let resultadoUltimoRound = "perdeu"
//let custoItem = 10


function decidirCompraOuEconomizar(saldoInicial, resultadoUltimoRound, custoItem) {
    let novoSaldo;
    let resultado;

    // TODO: Implemente a lógica para ajustar o saldo de acordo com o resultado do último round
    if (resultadoUltimoRound == "ganhou") {
        novoSaldo = saldoInicial * 0.15;
    } else if (resultadoUltimoRound =="perdeu"){
        novoSaldo = saldoInicial * 0.05;
    }
    else if (resultadoUltimoRound =="bônus"){
        novoSaldo = saldoInicial * 0.20;
    }
		// Utilizamos a função JavaScript Math.round() para arredondar um número para o inteiro mais próximo.
	    novoSaldo = Math.round(novoSaldo);
		

    // TODO: Implemente a lógica para verificar se o saldo é suficiente para comprar o item
    if (custoItem < novoSaldo) {
          resultado = "Comprar";
    } else {
             resultado = "Economizar";
    }
    return resultado
}

// TODO: Chame a função para imprimir o resultado
    console.log(decidirCompraOuEconomizar(100, "bônus", 10))


    //***************************************************************** */

    
