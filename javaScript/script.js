//  POSICOES DA QUADRA
// const posicaoUm = document.getElementById('posicaoUm')
// const posicaoDois = document.getElementById('posicaoDois')
// const posicaoTres = document.getElementById('posicaoTres')
// const posicaoQuatro = document.getElementById('posicaoQuatro')
// const posicaoCinco = document.getElementById('posicaoCinco')
// const posicaoSeis = document.getElementById('posicaoSeis')
// const posicaoSete = document.getElementById('posicaoSete')
// const posicaoOito = document.getElementById('posicaoOito')

const posicoes = [0, document.getElementById('posicaoUm'), document.getElementById('posicaoDois'), document.getElementById('posicaoTres'), document.getElementById('posicaoQuatro'), document.getElementById('posicaoCinco'), document.getElementById('posicaoSeis'), document.getElementById('posicaoSete'), document.getElementById('posicaoOito')]
//  POSICOES DA QUADRA



//  BOTOES
// const um = document.getElementById('um')
// const dois = document.getElementById('dois')
// const tres = document.getElementById('tres')
// const quatro = document.getElementById('quatro')
// const cinco = document.getElementById('cinco')
// const seis = document.getElementById('seis')
// const sete = document.getElementById('sete')
// const oito = document.getElementById('oito')

const botoes = [document.getElementById('botoes'), document.getElementById('um'), document.getElementById('dois'), document.getElementById('tres'), document.getElementById('quatro'), document.getElementById('cinco'), document.getElementById('seis'), document.getElementById('sete'), document.getElementById('oito')]
//  BOTOES


// function um() {
//     um.style.display = 'flex' 
// } QUANDO UTILIZADO ESSE METODO DE EVENTO CLICK AS VARIAVEIS SO SAO LIDAS QUANDO SAO CRIACADAS DENTRO DA FUNCTION


// let teste = botoes[0].onclick =() => {
//     for (let i = 1; i < 9; i++) {
//         posicoes[i].style.backgroundColor = 'blue'
//     }
// } TIRAR DUVIDA DE COMO TRANFORMAR UM IF OU FOR EM VARIAVEL OU COISA SEMELHANTE



botoes[1].onclick = () => {
    for (let i = 1; i < 9; i++) {
        posicoes[i].style.display = 'none'
    }
    posicoes[1].style.display = 'flex'
}

botoes[2].onclick = () => {
    for (let i = 1; i < 9; i++) {
        posicoes[i].style.display = 'none'
    }
    posicoes[2].style.display = 'flex'
}

botoes[3].onclick = () => {
    for (let i = 1; i < 9; i++) {
        posicoes[i].style.display = 'none'
    }
    posicoes[3].style.display = 'flex'
}

botoes[4].onclick = () => {
    for (let i = 1; i < 9; i++) {
        posicoes[i].style.display = 'none'
    }
    posicoes[4].style.display = 'flex'
}

botoes[5].onclick = () => {
    for (let i = 1; i < 9; i++) {
        posicoes[i].style.display = 'none'
    }
    posicoes[5].style.display = 'flex'
}

botoes[6].onclick = () => {
    for (let i = 1; i < 9; i++) {
        posicoes[i].style.display = 'none'
    }
    posicoes[6].style.display = 'flex'
}

botoes[7].onclick = () => {
    for (let i = 1; i < 9; i++) {
        posicoes[i].style.display = 'none'
    }
    posicoes[7].style.display = 'flex'
}

botoes[8].onclick = () => {
    for (let i = 1; i < 9; i++) {
        posicoes[i].style.display = 'none'
    }
    posicoes[8].style.display = 'flex'
}