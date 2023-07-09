import { posicoesProgramadas } from "./variaveis.js";

export default function apagarSequencia() {
    while (posicoesProgramadas.length != 0) {
        posicoesProgramadas.pop()
    }
    alert('Sequências apagadas')
}