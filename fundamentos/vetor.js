/**
 * Vetor (array)
 * @author Anna Luiza Ferreira Costa Dos Santos
 */
//              [0]    [1]    [2]     [3]      [4]    [5]
let alunosEM1 = ["Victor", "Tânia", "Pedro", "Maria", "Viviane", "Sirlei"]
console.log(typeof (alunosEM1))

// Lendo o valor de um array
console.log(alunosEM1)
console.table(alunosEM1)
console.log(alunosEM1.length) // Exibe o tamanho do vetor
console.log(alunosEM1[3])

// Adcionando dados no array
// O Push adciona SEMPRE no fim da lista
alunosEM1.push("Jorge")
console.table(alunosEM1)

// Modificando os dados de um vetor (array)
alunosEM1[1] = ("Tania")
console.table(alunosEM1)

//  Excluindo os dados de um vetor (array)
// O comando delete exclue os dados sem alterar os índicies
delete alunosEM1[3]
console.table(alunosEM1)
// Percorrendo um vetor (array)
// Usamos um laço for para percorre um índicie e extrair os dados
let notas = [2, 5, 8, 7, 9, 4,10]
// console.log(notas.length)
for (let i = 0; i < notas.length; i++){
    console.log(notas[i])

}

//  Simplificação do laço for para percorrer um array
// for each
notas.forEach((notas )=> {
    console.log(notas)
})

// in

for (let i in notas) {
    console.log(notas[i])
}