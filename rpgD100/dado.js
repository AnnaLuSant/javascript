/**
 * Criação do D100
 * @author Anna Luiza Ferreira Costa Dos Santos
 */

function rolar() {
    // Número de 1 a 100
    // +1 serve para que a rolagem inicie em 1 e termine em 100
    let rolagem = Math.floor(Math.random() * 100) + 1;

    // Teste
    //console.log(rolagem)


    // Pega os elemento de .dado do CSS para fazer a animação
    let dado = document.querySelector(".dado");
    let centro = document.getElementById("centro");
    // Ativar animação
    dado.classList.add("rolando");


    // Tempo em que o texto vai aparecer no coiso (dado)
    // Age junto com o CSS
    setTimeout(() => {

        centro.textContent = rolagem;
        dado.classList.remove("rolando");
    }, 400);
}