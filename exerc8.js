// 8. Faça um programa que receba a idade do usuário, enquanto a
// resposta do usuário for menor que 18 anos continue a solicitar a
// idade e mostre uma mensagem quando a idade do usuário for
// maior que 18.
console.log("Exercicio 8")

let prompt = require("prompt-sync")();
let idade = 0; 

 do {
    idade = parseInt(prompt("Informe a idade do usuario: "))
 } while (idade < 18);
       
    console.log("O usuario é maior de 18")

    
