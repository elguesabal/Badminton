import { posicoesProgramadas, textoPreparacao, peteca, tempo, repeticoes, petecaPosicao } from "./variaveis.js"

export default function telaPreparacao() {
    // const telaPreparacao = document.getElementById('telaPreparacao')
    // const textoPreparacao = document.getElementById('textoPreparacao')
    // const peteca = document.getElementById('peteca')
    // const tempo = document.getElementById('tempo')
    // const repeticoes = document.getElementById('repeticoes')

    document.getElementById('telaPreparacao').style.display = 'flex'

    if (Number(tempo.value) == 0) {
        textoPreparacao.style.fontSize = '20pt'
        textoPreparacao.textContent = 'Escolha qual intervalo de tempo entre as posicoes'
    } else if (Number(repeticoes.value) == 0) {
        textoPreparacao.style.fontSize = '20pt'
        textoPreparacao.textContent = 'Escolha quantas repetições serão feitas'
    } else if (posicoesProgramadas.length < 2) {
        textoPreparacao.style.fontSize = '20pt'
        textoPreparacao.textContent = 'Grave no mínimo duas posições ou mais'
    } else {
        // petecaPosicao.style.filter = 'invert(100%)'
        // petecaPosicao.style.width = '40vh'
        // petecaPosicao.style.height = '40vh'
        // petecaPosicao.src = './img/4.png'
        peteca.style.top = `35%`
        peteca.style.left = `46%`
        textoPreparacao.style.fontSize = '10vw'
        textoPreparacao.textContent = '3'
        setTimeout(() => textoPreparacao.textContent = '2', 1000)
        setTimeout(() => textoPreparacao.textContent = '1', 2000)
        setTimeout(() => {
            textoPreparacao.textContent = 'PLAY!'

            const audio = new Audio();
            audio.src = './mp3/apito.mp3';
            audio.play();
        }, 3000)
    }

    setTimeout(() => document.getElementById('telaPreparacao').style.display = 'none', 3500)
}