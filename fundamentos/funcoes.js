/**
 * estudo das funçoes
 * @author Anna Luiza Ferreira Costa Dos Santos
 */

function hello() {
    console.log("Hello function")
}

console.log(typeof (hello))
hello()

// Função anônima
// Podemos usar let ou const para criar uma função anônima, 
// a vantagem de criar funções dessa forma é armazenar o 
// resultado da execução da função

const hello2 = function () {
    console.log("Hello function anônima")
}
console.log(typeof (hello2))
hello2()

// Simplificação da função anônima (arrow function)>>>>>>>>>>>
// function() simplificado para: () =>

const hello3 = () => {
    console.log("hello função anônima simplificada")
}

// Simplificação 2 da função anônima>>>>>>
// Neste caso só uma linha de código é processada
// Simplificação: _ e omissão de chaves

const hello4 =  _=> console.log ("Hello função anônima simplificada 2")
console.log(typeof (hello4))
hello4()

// Função com parâmestro e retornos simplificada>>>>>>>>>>>>>>>>>>>>>>>>>>>>
function somar(num1, num2){
return console.log(num1 + num2)
}
console.log(typeof(somar))
somar(2, 2)

// Função anônima com parâmetro e retorno

const somarA = (num1, num2) => {
    return console.log(num1 + num2)
}
console.log(typeof(somarA))
somarA(3, 4)

//Função com parâmestro e retornos simplificada2 (aparece bastante) >>>>>>>>>>>>>>>>>>>>>>
// Nesse caso omitimos chaves e o retorno é implicito
// CUIDADO!!!! Não é uma função simples a dica são os parâmetros
const somarAS = (num1, num2) => console.log(num1 + num2)

console.log(typeof(somarAS))
somarAS(5,10)
