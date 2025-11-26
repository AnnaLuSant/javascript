/**Jogo do dado
 * author Anna Luiza Ferreira cCosta dos Santos
 * Version1
*/

function jogar() {
    // a linha abaixo gera números aleatórios
    //Math.floor (Funções Matemáticas)
    //.floor (converte para números inteiros)
    //.random() * 6 (0 1 2 3 4 5)
    let sorteio = Math.floor(Math.random() * 6)
    console.log(sorteio)
    // uso da estrutura switch case
    switch (sorteio) {
        case 0:
            document.getElementById('face').src = "./img/face1.png"
            break
        case 1:
            document.getElementById('face').src = "./img/face2.png"
            break
        case 2:
            document.getElementById('face').src = "./img/face3.png"
            break
        case 3:
            document.getElementById('face').src = "./img/face4.png"
            break
        case 4:
            document.getElementById('face').src = "./img/face5.png"
            break
        case 5:
            document.getElementById('face').src = "./img/face6.png"
            break
    }
}