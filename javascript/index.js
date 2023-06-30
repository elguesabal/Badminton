import { botoes } from "./auxiliares/variaveis.js"
import mudaDisplayEGrava from "./auxiliares/mudaDisplayEGrava.js"
// import desmarcarPosicoes from "./auxiliares/desmarcarPosicoes.js"
import telaPreparacao from "./auxiliares/telaPreparacao.js"
import comecarTreino from "./auxiliares/comecarTreino.js"
import telaCheia from "./auxiliares/telaCheia.js"


botoes[0].onclick = () => mudaDisplayEGrava(35, 44)

botoes[1].onclick = () => mudaDisplayEGrava(7.6, 85)

botoes[2].onclick = () => mudaDisplayEGrava(7.6, 44)

botoes[3].onclick = () => mudaDisplayEGrava(7.6, 1)

botoes[4].onclick = () => mudaDisplayEGrava(46.2, 85)

botoes[5].onclick = () => mudaDisplayEGrava(46.2, 1)

botoes[6].onclick = () => mudaDisplayEGrava(89.5, 85)

botoes[7].onclick = () => mudaDisplayEGrava(89.5, 44)

botoes[8].onclick = () => mudaDisplayEGrava(89.5, 1)

botoes[11].onclick = () => {
    // desmarcarPosicoes()
    telaPreparacao()
    comecarTreino()
}

document.getElementById('iconTelaCheia').onclick = () => telaCheia()