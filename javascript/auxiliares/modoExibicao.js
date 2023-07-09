import { peteca, imgPosicao, petecaPosicao, tempo } from "./variaveis.js"

export default function modoExibicao() {
    if (document.getElementById('modoExibicao').checked) {
        peteca.style.transition = '0s'
        imgPosicao.style.display = 'none'
        petecaPosicao.style.display = 'flex'
    } else {
        peteca.style.transition = `${Number(tempo.value)}s`
        petecaPosicao.style.display = 'none'
        imgPosicao.style.display = 'flex'
    }
}