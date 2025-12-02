/**
 * Criação de Dados como (D20 ou D100)
 * 
 * @author Anna Luiza Ferreira Costa Dos Santos
 */

function rolar() {
    let faces = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20"]

    // Teste
    // console.log(faces[10])

    let face = faces[Math.floor(Math.random() * 20)]

    // Teste
    // console.log(face)

    // Renderização

    let dado = document.getElementById('centro').innerHTML  = `<div>${face}</div>`

    //  //Ativação da animação
    //  dado.classList.add("rolando");

    //   //Coloca o resultado da rolagem
    //  setTimeout(() => {
    //      dado.textContent = face;

    //   //Para a animação para poder rodar novamente depois
    //      dado.classList.remove("rolando");
    //  })

}