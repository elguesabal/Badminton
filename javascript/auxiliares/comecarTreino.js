import { posicoes, posicoesProgramadas } from "./variaveis.js"

export default function comecarTreino() {
    let tempo = Number(document.getElementById('tempo').value)
    let repeticoes = Number(document.getElementById('repeticoes').value)
    const peteca = document.getElementById('peteca')

    setTimeout(function() {
        for (let i = 0; i < repeticoes; i++) {
            setTimeout(function () {
                for (let j = 1; j < posicoesProgramadas.length; j++) {
                    setTimeout(function () {
                        peteca.style.top = `${posicoesProgramadas[j].top}%`
                        peteca.style.left = `${posicoesProgramadas[j].left}%`
                    }, tempo * 1000 * j)
                }
            }, i * tempo * posicoesProgramadas.length * 1000)
        }
    }, 4000)
}