console.log("Exercicio 5")
let anterior = 0
let fibonacci = 1

for (let index = 0; index < 1; index++) {
    let numero = 0
    console.log(numero)

    for (let index = 1; index < 10; index++) {
        console.log(fibonacci)
        let atual = fibonacci
        fibonacci = anterior + atual
        anterior = atual

    }
}