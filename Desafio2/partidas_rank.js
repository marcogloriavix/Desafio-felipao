//Instruções para entrega
// # 2️⃣ Calculadora de partidas Rankeadas
//    ** O Que deve ser utilizado **

//## Objetivo:

//Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
//depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo(vitórias - derrotas)

//Se vitórias for menor do que 10 = Ferro
//Se vitórias for entre 11 e 20 = Bronze
//Se vitórias for entre 21 e 50 = Prata
//Se vitórias for entre 51 e 80 = Ouro
//Se vitórias for entre 81 e 90 = Diamante
//Se vitórias for entre 91 e 100 = Lendário
//Se vitórias for maior ou igual a 101 = Imortal

//## Saída

//Ao final deve se exibir uma mensagem:
//"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"

//let nickName = "João Grandão"
//let XP = 15000
//console.log(nickName)

function saldoVitorias (vitorias, derrotas){

XP = vitorias-derrotas

if (XP < 10) {
    console.log("O Herói tem de saldo de " + XP +  " está no nível de " + "Ferro.");
} else if (XP >= 11 && XP <= 20) {
    console.log("O Herói tem de saldo de " + XP +  " está no nível de " + "Bronze.");
} else if (XP >= 21 && XP <= 50){
    console.log("O Herói tem de saldo de " + XP +  " está no nível de " + "Prata.");
}
else if (XP >= 51 && XP <= 80){
    console.log("O Herói tem de saldo de " + XP +  " está no nível de " + "Ouro.");
}
else if (XP >= 81 && XP <= 90){
    console.log("O Herói tem de saldo de " + XP +  " está no nível de " + "Diamante.");
}
else if (XP >= 91 && XP <= 100){
    console.log("O Herói tem de saldo de " + XP +  " está no nível de " + "Lendário.");
}
else if (XP >= 101){
    console.log("O Herói tem de saldo de " + XP + " está no nível de " + "Imortal.");
}
}

saldoVitorias (30,2)
