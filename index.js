// 1️⃣ Desafio Classificador de nível de Herói
// Crie uma variável para armazenar o nome e a quantidade de experiência (XP) 
//de um herói.
//depois utilize uma estrutura de decisão para apresentar 
//alguma das mensagens abaixo:

//Se XP for menor do que 1.000 = Ferro
//Se XP for entre 1.001 e 2.000 = Bronze
//Se XP for entre 2.001 e 5.000 = Prata
//Se XP for entre 5.001 e 7.000 = Ouro
//Se XP for entre 7.001 e 8.000 = Platina
//Se XP for entre 8.001 e 9.000 = Ascendente
//Se XP for entre 9.001 e 10.000 = Imortal
//Se XP for maior ou igual a 10.001 = Radiante

//## Saída

//Ao final deve se exibir uma mensagem:
//"O Herói de nome **{nome}** está no nível de **{nivel}**"

let nickName = "João Grandão"
let XP = 15000
console.log(nickName)


if (XP < 1000) {
    console.log("O Herói de nome " + nickName +  " está no nível de " + "Ferro.");
} else if (XP >= 1000 && XP <= 2000) {
    console.log("O Herói de nome " + nickName +  " está no nível de " + "Bronze.");
} else if (XP >= 2000 && XP <= 5000){
    console.log("O Herói de nome " + nickName +  " está no nível de " + "Prata.");
}
else if (XP >= 5000 && XP <= 7000){
    console.log("O Herói de nome " + nickName +  " está no nível de " + "Ouro.");
}
else if (XP >= 7000 && XP <= 8000){
    console.log("O Herói de nome " + nickName +  " está no nível de " + "Platina.");
}
else if (XP >= 8000 && XP <= 9000){
    console.log("O Herói de nome " + nickName +  " está no nível de " + "Ascendente.");
}
else if (XP >= 9000 && XP <= 10000){
    console.log("O Herói de nome " + nickName +  " está no nível de " + "Imortal.");
}
else if (XP > 10000){
    console.log("O Herói de nome " + nickName +  " está no nível de " + "Radiante.");
}