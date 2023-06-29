export default function telaPreparacao() {
    const telaPreparacao = document.getElementById('telaPreparacao')
    const textoPreparacao = document.getElementById('textoPreparacao')
    const peteca = document.getElementById('peteca')

    peteca.style.top = `35%`
    peteca.style.left = `46.4%`

    telaPreparacao.style.display = 'flex'
    textoPreparacao.textContent = '3'

    setTimeout(function() {
        textoPreparacao.textContent = '2'
    }, 1000)

    setTimeout(function() {
        textoPreparacao.textContent = '1'
    }, 2000)

    setTimeout(function() {
        textoPreparacao.textContent = 'Começou!'
    }, 3000)

    setTimeout(function() {
        telaPreparacao.style.display = 'none'
    }, 3500)
}