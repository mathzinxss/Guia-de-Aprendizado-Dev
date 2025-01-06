console.log("------------------------- Exercício 1 -------------------------\n")
let nome = "Math"
let idade = 16

console.log(`Meu nome é ${nome} e eu tenho ${idade} anos. \n\n`)

console.log("------------------------- Exercício 2 -------------------------\n")

let valor = 50
let desconto = 25

console.log(`O valor do seu produto é R$${valor}, com um desconto de ${desconto}%.`)
let soma = valor - (valor * desconto / 100)
console.log(`O valor do seu produto reajustado com o desconto é de R$${soma}\n\n`)

console.log("------------------------- Exercício 3 -------------------------\n")

let frutasFavoritas = ["Maçã", "Laranja", "Manga"]
console.log(`Minha fruta favorita é ${frutasFavoritas[1]}.\n\n`)

console.log("------------------------- Exercício 4 -------------------------\n")

let livro = {
    nome: "Lutando contra o luto",
    autor: "Danilo Lopes",
    ano: 2020
}

console.log(`O melhor livro que eu já lí foi o "${livro.nome}" de ${livro.autor}, lançado no ano de ${livro.ano}. \n\n`)

console.log("------------------------- Exercício 5 -------------------------\n")

let estaLogado = false
estaLogado = true

console.log(`Status de login: [${estaLogado}]\n\n`)

console.log("------------------------- Exercício 6 -------------------------\n")

let pi = 3.14
let raio = 5
let result = pi * (raio * raio)

console.log(`O valor a àrea do círculo é ${result}\n\n`)

console.log("------------------------- Exercício 7 -------------------------\n")

const frutas = ["Maçã", " Banana"]
console.log(`Array const antes: ${frutas}`)
frutas.push(" Laranja") 
console.log(`Array const depois: ${frutas}`)