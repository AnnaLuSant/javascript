/**
 * Sorteio de Uma Carta
 * Exemplo de uso de array para otimizar o código 
 * @authorAnna Luiza Santos
 */

function sortear(){
    let nipes = ["♥","♦","♣","♠"]
    let faces = ["A", "2", "3","4","5","6","7","8","9","10","J","Q","K"]

    // Apoio a Lógica
    // console.log(faces[10] )
    // console.log(nipes[3])

    // Sorteio De uma Carta

    let nipe = nipes [Math.floor(Math.random() * 4)]
    let face = faces [Math.floor(Math.random() * 13)]

    // Apoio a Lógica
    // console.clear()
    // console.log(face)
    // console.log(nipe)
    

    // Renderização do canto superior esquerdo da carta 
    //.innerHTML => Incere uma tag no documento HTML
    // Esta linha insere o conteúdo das variávei no documento
    document.getElementById('supEsq').innerHTML = `<div>${face}</div> <div>${nipe}</div>`


    // Renderização do centro da carta 
    document.getElementById('centroCarta').innerHTML = `<div>${nipe}</div>`


    // Renderização do canto inferior Direito da carta 
     document.getElementById('infDir').innerHTML = `<div>${face}</div> <div>${nipe}</div>`
}