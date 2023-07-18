// 10. Faça um programa que receba um número do usuário e continue
// a pedir o número se o numero for diferente de 0.

console.log("Exercicio 10")

let prompt = require("prompt-sync")();
let numero = 0;

do {
    numero = prompt("Digite um numero: ")
} while (numero != 0);