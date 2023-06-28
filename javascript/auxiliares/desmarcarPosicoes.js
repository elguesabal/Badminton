import { posicoes } from "./variaveis.js"

export default function desmarcarPosicoes() {
    for (let i = 1; i < 9; i++) {
        posicoes[i].style.display = 'none'
    }
}