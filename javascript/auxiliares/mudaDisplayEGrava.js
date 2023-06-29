import { posicoes, botoes, posicoesProgramadas } from "./variaveis.js"
import desmarcarPosicoes from "./desmarcarPosicoes.js"

export default function mudaDisplayEGrava(top, left) {
    // desmarcarPosicoes()

    // posicoes[posicao].style.display = 'flex'

    if (botoes[9].checked) {
        posicoesProgramadas.push({ top: top, left: left })
    }

    let tempo = Number(document.getElementById('tempo').value)

    document.getElementById('peteca').style.transition = `${tempo}s`
    document.getElementById('peteca').style.top = `35%`
    document.getElementById('peteca').style.left = `44%`

    setTimeout(function() {
        document.getElementById('peteca').style.top = `${top}%`
        document.getElementById('peteca').style.left = `${left}%`
    }, tempo * 1000)

}