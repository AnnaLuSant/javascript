/**
 * Simples Carrossel de Imagens
 * @author Anna Luiza Ferreira Costa Dos Santos
 */
//                  [0]         [1]       [2]                        
let slidesCarrossel = ["slide1.jpg", "slide2.jpg", "slide3.jpg"]

let intervalo = 3000 //3000ms= 3s (duração do efeito)
let indicie = 0 // Apoio a lógica

show() // Executa uma vez a função

function show() {
    //Uso do JS para adicionar a classe fadeout no CSS
    document.getElementById('slides').className+= 'fadeout'


    // Função interna de intervalos
    setTimeout(() => {
        // Toca dos slides
        document.getElementById('slides').src=(`./img/${slidesCarrossel[indicie]}`)


        //remover a classe .fadeout
        document.getElementById('slides').className = ''

    }, 1000) //Executa a cada 1s em tempo real (a imagem fica 1s parada)
    indicie++
    // Validação para retorna ao inicio
    if(indicie=== slidesCarrossel.length){
        indicie = 0
    }
    setTimeout(show, intervalo) // Executa a função a cada intervalo

}