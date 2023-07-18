// 4. Faça um programa que imprima na tela a tabuada de um número
// qualquer escolhido pelo usuário até o 10.
console.log("Exercicio 4")

let prompt = require("prompt-sync")();

let  numero = parseInt(prompt("Informe um número de 0 a 10: "))

for (let indice = 0; indice <= 10; indice++){
    let result = numero * indice
    console.log(numero + "x" + indice + " = " + result)
};