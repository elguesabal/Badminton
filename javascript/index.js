import { botoes } from "./auxiliares/variaveis.js"
import mudaDisplayEGrava from "./auxiliares/mudaDisplayEGrava.js"
import desmarcarPosicoes from "./auxiliares/desmarcarPosicoes.js"
import telaPreparacao from "./auxiliares/telaPreparacao.js"
import comecarTreino from "./auxiliares/comecarTreino.js"


botoes[1].onclick = () => mudaDisplayEGrava(1)

botoes[2].onclick = () => mudaDisplayEGrava(2)

botoes[3].onclick = () => mudaDisplayEGrava(3)

botoes[4].onclick = () => mudaDisplayEGrava(4)

botoes[5].onclick = () => mudaDisplayEGrava(5)

botoes[6].onclick = () => mudaDisplayEGrava(6)

botoes[7].onclick = () => mudaDisplayEGrava(7)

botoes[8].onclick = () => mudaDisplayEGrava(8)

botoes[11].onclick = () => {
    desmarcarPosicoes()
    telaPreparacao()
    comecarTreino()
}