import { posicoesProgramadas, modoExibicao, imgPosicao, peteca, petecaPosicao } from "./variaveis.js"

export default function comecarTreino() {
    let tempo = Number(document.getElementById('tempo').value)
    let repeticoes = Number(document.getElementById('repeticoes').value)
    // const peteca = document.getElementById('peteca')


    peteca.style.transition = `${tempo}s`

    if (posicoesProgramadas.length > 2) {
        setTimeout(function() {
            // petecaPosicao.style.filter = 'invert(0)'
            // petecaPosicao.style.width = '10vh'
            // petecaPosicao.style.height = '10vh'
    
            for (let i = 0; i < repeticoes; i++) {
                setTimeout(function () {
                    for (let j = 1; j < posicoesProgramadas.length; j++) {
                        setTimeout(function () {
                            if (modoExibicao.checked) {
                                peteca.style.display = 'flex'
                                peteca.style.transition = `0s`
                                // petecaPosicao.src = './img/peteca.png'
                                peteca.style.top = `${posicoesProgramadas[j].top}%`
                                peteca.style.left = `${posicoesProgramadas[j].left}%`
                                setTimeout(() => peteca.style.display = 'none', tempo / 2 * 1000)
                            } else {
                                imgPosicao.src = `./img/${posicoesProgramadas[j].posicao}.png`
                                peteca.style.top = `${posicoesProgramadas[j].top}%`
                                peteca.style.left = `${posicoesProgramadas[j].left}%`
                            }
                        }, tempo * 1000 * (j - 1))
                    }
                }, i * tempo * (posicoesProgramadas.length - 1) * 1000)
            }
        }, 4000)
    }
}