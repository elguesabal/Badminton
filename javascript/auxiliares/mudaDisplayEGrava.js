import { posicoes, botoes, posicoesProgramadas } from "./variaveis.js"
// import desmarcarPosicoes from "./desmarcarPosicoes.js"

export default function mudaDisplayEGrava(top, left, posicao) {
    // desmarcarPosicoes()

    // posicoes[posicao].style.display = 'flex'

    if (botoes[9].checked) {
        posicoesProgramadas.push({ top: top, left: left, posicao: posicao })
    }

    if (document.getElementById('modoExibicao').checked == false) {
        document.getElementById('peteca').style.transition = `${Number(document.getElementById('tempo').value)}s`
    } else {
        document.getElementById('peteca').style.transition = '0s'
    }

    // document.getElementById('peteca').style.top = `35%`
    // document.getElementById('peteca').style.left = `44%`
    document.getElementById('imgPosicao').src = `./img/${posicao}.png`

    // setTimeout(function() {
    document.getElementById('peteca').style.top = `${top}%`
    document.getElementById('peteca').style.left = `${left}%`
    // }, tempo * 1000)

}