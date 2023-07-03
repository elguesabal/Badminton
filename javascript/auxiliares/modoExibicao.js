export default function modoExibicao() {
    if (document.getElementById('modoExibicao').checked) {
        document.getElementById('peteca').style.transition = '0s'
        document.getElementById('imgPosicao').style.display = 'none'
        document.getElementById('quadradoPosicao').style.display = 'flex'
    } else {
        document.getElementById('peteca').style.transition = `${Number(document.getElementById('tempo').value)}s`
        document.getElementById('quadradoPosicao').style.display = 'none'
        document.getElementById('imgPosicao').style.display = 'flex'
    }
}