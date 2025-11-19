/**Calculadora Flex
 * @author Anna Luiza Ferreira Costa Dos Santos
 * @version 1.0
 */
function calcular(){
    // A linha abaixo captura o falor da caixa de entrada
    let etanol = formFlex.inputEtanol.value
    console.log(etanol) //Teste
    let gasolina = formFlex.inputGasolina.value
    console.log(gasolina) //Teste

    //Logica principal: se o valor do litro do Etanol custar até 70% do valor da gasolina vale mais apena abastecer com etanol
    
    if (etanol < 0.7  * gasolina){
        console.log("Abasteça com Etanol")
        // a linha abixo identifica a teg e muda a propriedade src
        document.getElementById('status').src = "./img/etanol.png"

    }else{
        console.log("Abasteça com Gasolina")
        document.getElementById('status').src = "./img/gasolina.png"
    }

}

function limpar(){
    document.getElementById('status').src = "./img/neutro.png"

}