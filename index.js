const readlineSync = require('readline-sync');

//Mensagem de Início
console.log("Bem vindo ao Desafio Classificador de Nível de Herói.")

//Declaração das variáveis 
let nomeHeroi = readlineSync.question("Digite seu nome: ")
let xpHeroi = Number(readlineSync.question("Digte um numero entre 1.000 ate 10.001 : "))
let nivelHeroi = " ";

// Laço de repetição
do {
  xpHeroi = Number(readlineSync.question("Digite um numero entre 1.000 ate 10.001: "));
  if (xpHeroi < 1000 || xpHeroi > 10001) {
    console.log("Valor inválido! Tente novamente.");
  }
} while (xpHeroi < 1000 || xpHeroi > 10001);


//Condições 
if (xpHeroi <= 1000) {
  nivelHeroi = "Ferro"
} else if (xpHeroi <= 2000) {
  nivelHeroi = "Bronze"
} else if (xpHeroi <= 5000) {
  nivelHeroi = "Prata"
} else if (xpHeroi <= 7000) {
  nivelHeroi = "Ouro"
} else if (xpHeroi <= 8000) {
  nivelHeroi = "Platina"
} else if (xpHeroi <= 9000) {
  nivelHeroi = "Ascendente"
} else if (xpHeroi <= 10000) {
  nivelHeroi = "Imortal"
} else
  nivelHeroi = "Radiante";

//Saída
console.log(`O Herói de nome ${nomeHeroi}, está no nível de ${nivelHeroi}`);