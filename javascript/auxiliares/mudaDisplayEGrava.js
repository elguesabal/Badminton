import { posicoesProgramadas, tempo, peteca, modoExibicao, imgPosicao, programar } from "./variaveis.js"
// import desmarcarPosicoes from "./desmarcarPosicoes.js"

export default function mudaDisplayEGrava(top, left, posicao) {
    // desmarcarPosicoes()

    // posicoes[posicao].style.display = 'flex'

    if (programar.checked) {
        posicoesProgramadas.push({ top: top, left: left, posicao: posicao })
    }

    if (modoExibicao.checked == false) {
        peteca.style.transition = `${tempo.value}s`
    } else {
        peteca.style.transition = '0s'
    }

    // document.getElementById('peteca').style.top = `35%`
    // document.getElementById('peteca').style.left = `44%`
    imgPosicao.src = `./img/${posicao}.png`

    // setTimeout(function() {
    peteca.style.top = `${top}%`
    peteca.style.left = `${left}%`
    // }, tempo * 1000)

}