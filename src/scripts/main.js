// evento que escuta quando o DOM termina de carregar:
document.addEventListener('DOMContentLoaded', function(){

    // vai pegar todos os buttons:
    const buttons = document.querySelectorAll('[data-tab-button]')
    const questions = document.querySelectorAll('[data-faq-question]')

    const heroSection = document.querySelector('.hero')
    // pegar altura de um elemento:
    const alturaHero = heroSection.clientHeight

    window.addEventListener('scroll', function() {
        const posicaoAtual = window.scrollY

        if (posicaoAtual < alturaHero) {
            exibeElementosHeader()
        } else {
            ocultaElementosHeader()
        }
    })

    // evento / funçao quando clicar nos buttons (seçao de atraçao)
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(botao){
            const abaAlvo = botao.target.dataset.tabButton
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`)
            escondeTodasAbas();
            // para adicionar classes:
            aba.classList.add('shows__list--is-active')
            removeBotaoAtivo()
            botao.target.classList.add('shows__tabs__button--is-active')
        })
    }

    // accordion (seçao FAQ)
    for (let i = 0; i < questions.length; i++) {
        questions[i].addEventListener('click', abreOuFechaResposta)
    }
})

function ocultaElementosHeader() {
    const header = document.querySelector('header')
    header.classList.add('header--is-hidden')
}

function exibeElementosHeader() {
    const header = document.querySelector('header')
    header.classList.remove('header--is-hidden')
}

function abreOuFechaResposta(elemento) {
    const classe = 'faq__questions__item--is-open';

    // Para acessar o pai do elemento:
    const elementoPai = elemento.target.parentNode;

    elementoPai.classList.toggle(classe)
}

function removeBotaoAtivo() {
    const buttons = document.querySelectorAll('[data-tab-button]')

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('shows__tabs__button--is-active')
    }
}

function escondeTodasAbas() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]')

    for (let i = 0; i < tabsContainer.length; i++){
        // para remover classes (shows__list--is-active)
        tabsContainer[i].classList.remove('shows__list--is-active')
    }
}