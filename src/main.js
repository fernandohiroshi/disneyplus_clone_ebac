// evento que escuta quando o DOM termina de carregar:
document.addEventListener('DOMContentLoaded', function(){

    // vai pegar todos os buttons:
    const buttons = document.querySelectorAll('[data-tab-button]')

    // evento / funçao quando clicar nos buttons
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
})

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