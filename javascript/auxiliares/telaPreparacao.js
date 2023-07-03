import { posicoesProgramadas } from "./variaveis.js"

export default function telaPreparacao() {
    const telaPreparacao = document.getElementById('telaPreparacao')
    const textoPreparacao = document.getElementById('textoPreparacao')
    const peteca = document.getElementById('peteca')

    telaPreparacao.style.display = 'flex'

    if (Number(document.getElementById('tempo').value) == 0) {
        document.getElementById('textoPreparacao').style.fontSize = '20pt'
        textoPreparacao.textContent = 'Escolha qual intervalo de tempo entre as posicoes'
    } else if (Number(document.getElementById('repeticoes').value) == 0) {
        document.getElementById('textoPreparacao').style.fontSize = '20pt'
        textoPreparacao.textContent = 'Escolha quantas repetições serão feitas'
    } else if (posicoesProgramadas.length < 2) {
        document.getElementById('textoPreparacao').style.fontSize = '20pt'
        textoPreparacao.textContent = 'Grave no mínimo duas posições ou mais'
    } else {
        peteca.style.top = `35%`
        peteca.style.left = `44%`
        document.getElementById('textoPreparacao').style.fontSize = '30vw'
        textoPreparacao.textContent = '3'

        setTimeout(function() {
            textoPreparacao.textContent = '2'
        }, 1000)

        setTimeout(function() {
            textoPreparacao.textContent = '1'
        }, 2000)

        setTimeout(function() {
            textoPreparacao.textContent = 'PLAY!'
        }, 3000)
    }

    setTimeout(function() {
        telaPreparacao.style.display = 'none'
    }, 3500)
}