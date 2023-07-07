import { botoes, comecar, iconTelaCheia } from "./auxiliares/variaveis.js"
import mudaDisplayEGrava from "./auxiliares/mudaDisplayEGrava.js"
import telaPreparacao from "./auxiliares/telaPreparacao.js"
import comecarTreino from "./auxiliares/comecarTreino.js"
import telaCheia from "./auxiliares/telaCheia.js"
import modoExibicao from "./auxiliares/modoExibicao.js"
import apagarSequencia from "./auxiliares/apagarSequencia.js"


botoes[0].onclick = () => mudaDisplayEGrava(35, 44, 10)

botoes[1].onclick = () => mudaDisplayEGrava(7.6, 85, 1)

botoes[2].onclick = () => mudaDisplayEGrava(7.6, 44, 2)

botoes[3].onclick = () => mudaDisplayEGrava(7.6, 1, 3)

botoes[4].onclick = () => mudaDisplayEGrava(46.2, 85, 4)

botoes[5].onclick = () => mudaDisplayEGrava(46.2, 1, 5)

botoes[6].onclick = () => mudaDisplayEGrava(89.5, 85, 6)

botoes[7].onclick = () => mudaDisplayEGrava(89.5, 44, 7)

botoes[8].onclick = () => mudaDisplayEGrava(89.5, 1, 8)

comecar.onclick = () => { telaPreparacao(); comecarTreino() }

iconTelaCheia.onclick = () => telaCheia()

document.getElementById('modoExibicao').onclick = () => modoExibicao()

document.getElementById('apagarSequencia').onclick = () => apagarSequencia()