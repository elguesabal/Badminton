export default function telaCheia() {
    const elemento = document.documentElement

    if (document.webkitFullscreenElement) {
        if (document.exitFullscreen) {
            document.exitFullscreen()
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen()
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen()
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen()
        }
    } else {
        if (elemento.requestFullscreen) {
            elemento.requestFullscreen()
        } else if (elemento.mozRequestFullScreen) {
            elemento.mozRequestFullScreen()
        } else if (elemento.webkitRequestFullscreen) {
            elemento.webkitRequestFullscreen()
        } else if (elemento.msRequestFullscreen) {
            elemento.msRequestFullscreen()
        }
    }
}