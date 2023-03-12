/* 

    Objetivo: quando cliclarmos no botão  temos  que mostrar  a imagem de fundo correspondente.

    Passo 1 - dar um jeito de pegar os elementos HTML dos botões 
    
    Passo 2 - dar um jeito de indentificar o clique do usuário

    Passo 3 - demarcar o botão selecionado anterior 

    Passo 4 - marcar o botão clicado como se estivesse selecionado

    Passo 5 - Esconder a imagem de fundo anterior 

    Passo 6 - Fazer aparecer a imgem de fundo correspondente ao botão clicado


*/

// Passo 1 - dar um jeito de pegar os elementos HTML dos botões 

    const botoescarrossel = document.querySelectorAll('.botao');
    const imagens = document.querySelectorAll('.imagens');

// Passo 2 - dar um jeito de indentificar o clique do usuário

    botoescarrossel.forEach((botao, indice) => {
        botao.addEventListener('click', () => {

            desativarBotaoSelecionado();

            selecionarBotaoCarrossel(botao);

            esconderImagemAtiva();

            mostrarImagemDeFundo(indice);

    })
})
function mostrarImagemDeFundo(indice) {
    imagens[indice].classList.add('ativa');
}

function selecionarBotaoCarrossel(botao) {
    botao.classList.add('selecionado');
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desativarBotaoSelecionado() {
    const botaoselecionado = document.querySelector('.selecionado');
    botaoselecionado.classList.remove('selecionado');
}

