import { posicoes, botoes, posicoesProgramadas } from "./variaveis.js"
import desmarcarPosicoes from "./desmarcarPosicoes.js"

export default function mudaDisplayEGrava(posicao) {
    desmarcarPosicoes()

    posicoes[posicao].style.display = 'flex'

    if (botoes[9].checked) {
        posicoesProgramadas.push(posicao)
    }
}