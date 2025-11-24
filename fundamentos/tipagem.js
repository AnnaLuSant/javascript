/**
 * Tutorial de JavaScript
 * Estudo da tipagem dinâminca
 * @author Anna Luiza Ferreira Costa Dos Santos
 */

console.log("Strings >>>>>>>>>>>>>>>>>>>")
let nome = "Anna Luiza"
console.log(typeof (nome))
console.log(nome)
console.log(nome.replace("Anna Luiza", "Anna"))

// Concatenação (união)

console.log("Aluno:" + nome)// Não usar desta forma
console.log(`Aluno: ${nome}`) // Forma mais segura

console.log("Números >>>>>>>>>>>>>>>>>>>>>>>>>>>>")
let peso = 45
let altura = 1.65
console.log(typeof (peso))
console.log(typeof (altura))
console.log(Number.isInteger(peso))
console.log(Number.isInteger(altura))
let imc
imc = peso / (altura * altura)
console.log(`IMC: ${imc.toFixed(2)}`)
// ATENÇÃO
console.log(10 / 0)
console.log("3" + 2)
console.log("3" - 2)
console.log("3x" - 2)
console.log("3" * 2)
console.log("10" / 2)
console.log(0.5 + 0.5)
console.log(0.1 + 0.2)
console.log(0.1 + 0.7)

console.log("Booleanos >>>>>>>>>>>>>>>>>>>>>>>>>>>>")
let led = false
typeof (led)
console.log("comparadores especiais >>>>>>>>>>>>>>>")
console.log("2" == 2)
let x = 2
let y = "2"
console.log(typeof (x))
console.log(typeof (y))
console.log(x == y)
console.log(x === y)
console.log("Problemas no uso do var")
var media = 9
console.log(typeof (media))
console.log(media)
var media = 8
console.log(typeof (media))
console.log(media)
console.log("var  permite redeclarar uma variavel !!!!!")

// Uso de chaves na linguagem JavaScript
let mediaFinal = 3
console.log(`Média: ${mediaFinal}`)

if (mediaFinal < 5)
    console.log("REPROVADO")

else
    console.log("APROVADO!!!")
    console.log("Emitir certificado")

for (let i =1; i < 10; i++)
    console.log(i)
console.log("Não processado na estrutura for")




