import { posicoes, posicoesProgramadas } from "./variaveis.js"

export default function comecarTreino() {
    let tempo = Number(document.getElementById('tempo').value)
    let repeticoes = Number(document.getElementById('repeticoes').value)

    setTimeout(function() {
        for (let i = 0; i < repeticoes; i++) {
            setTimeout(function () {
                for (let j = 1; j < posicoesProgramadas.length; j++) {
                    setTimeout(function () {
                        posicoes[posicoesProgramadas[j]].style.display = 'flex'
                    }, tempo * 1000 * j)

                    setTimeout(function () {
                        posicoes[posicoesProgramadas[j]].style.display = 'none'
                    }, tempo * 1000 * j + tempo * 1000)
                }
            }, i * tempo * posicoesProgramadas.length * 1000)
        }
    }, 4000)
}