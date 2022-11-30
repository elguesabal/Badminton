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

const botoes = [document.getElementById('botoes'), document.getElementById('um'), document.getElementById('dois'), document.getElementById('tres'), document.getElementById('quatro'), document.getElementById('cinco'), document.getElementById('seis'), document.getElementById('sete'), document.getElementById('oito'), document.getElementById('programar'), document.getElementById('tempo').value, document.getElementById('comecar')]
//  BOTOES


// function um() {
    
//     um.style.display = 'flex' 
// } QUANDO UTILIZADO ESSE METODO DE EVENTO CLICK AS VARIAVEIS SO SAO LIDAS QUANDO SAO CRIACADAS DENTRO DA FUNCTION


// let teste = botoes[0].onclick =() => {
//     for (let i = 1; i < 9; i++) {
//         posicoes[i].style.backgroundColor = 'blue'
//     }
// } TIRAR DUVIDA DE COMO TRANFORMAR UM IF OU FOR EM VARIAVEL OU COISA SEMELHANTE


let posicoesProgramadas = []


botoes[1].onclick = () => {
    for (let i = 1; i < 9; i++) {
        posicoes[i].style.display = 'none'
    }
    posicoes[1].style.display = 'flex'

    if (botoes[9].checked) {
        posicoesProgramadas.push(1)
    }
}

botoes[2].onclick = () => {
    for (let i = 1; i < 9; i++) {
        posicoes[i].style.display = 'none'
    }
    posicoes[2].style.display = 'flex'

    if (botoes[9].checked) {
        posicoesProgramadas.push(2)
    }
}

botoes[3].onclick = () => {
    for (let i = 1; i < 9; i++) {
        posicoes[i].style.display = 'none'
    }
    posicoes[3].style.display = 'flex'

    if (botoes[9].checked) {
        posicoesProgramadas.push(3)
    }
}

botoes[4].onclick = () => {
    for (let i = 1; i < 9; i++) {
        posicoes[i].style.display = 'none'
    }
    posicoes[4].style.display = 'flex'

    if (botoes[9].checked) {
        posicoesProgramadas.push(4)
    }
}

botoes[5].onclick = () => {
    for (let i = 1; i < 9; i++) {
        posicoes[i].style.display = 'none'
    }
    posicoes[5].style.display = 'flex'

    if (botoes[9].checked) {
        posicoesProgramadas.push(5)
    }
}

botoes[6].onclick = () => {
    for (let i = 1; i < 9; i++) {
        posicoes[i].style.display = 'none'
    }
    posicoes[6].style.display = 'flex'

    if (botoes[9].checked) {
        posicoesProgramadas.push(6)
    }
}

botoes[7].onclick = () => {
    for (let i = 1; i < 9; i++) {
        posicoes[i].style.display = 'none'
    }
    posicoes[7].style.display = 'flex'

    if (botoes[9].checked) {
        posicoesProgramadas.push(7)
    }
}

botoes[8].onclick = () => {
    for (let i = 1; i < 9; i++) {
        posicoes[i].style.display = 'none'
    }
    posicoes[8].style.display = 'flex'

    if (botoes[9].checked) {
        posicoesProgramadas.push(8)
    }
}


//                      SE EU BOTO Number(document.getElementById('tempo').value) DENTRO DE UMA VARIAVEL E TENTO CHAMAR DA SEMPRE ZERO
//                      let num = Number(document.getElementById('tempo').value)


botoes[11].onclick = () => {
    for (let i = 1; i < 9; i++) {
        posicoes[i].style.display = 'none'
    }

    for (let i = 0; i < posicoesProgramadas.length; i++) {
        setTimeout( function() {
            posicoes[posicoesProgramadas[i]].style.display = 'flex'
        }, Number(document.getElementById('tempo').value) * 1000 * i)


        setTimeout( function() {
            posicoes[posicoesProgramadas[i]].style.display = 'none'
        }, Number(document.getElementById('tempo').value) * 1000 * i + Number(document.getElementById('tempo').value) * 1000)
    }
}





// programar[0].onclick = () => {


//     if (botoes[i].checked) {

//             botoes[1].onclick = () => {
//                 alert('a')                           NAO DEU CERTO UM EVENTO DE CLICK DENTRO DO OUTRO
//                 // posicoes.push()

//         }
//     }
// }


// if (document.getElementById('programar').checked) {
//     for (let i = 0; i < ;i++) {
//         setTimeout( function() {

//         }, 5000)
//     }
// }


// botoes[0].onclick = () => {
//     alert('a')
// }














                        // CODIGOS NAO UTILIZADOS MAIS

// botoes[0].onclick = () => {
//     for (let i = 1; i < 9; i++) {
//          posicoes[i].style.display = 'none'
//     }

//     try {
//         if (botoes[1].onclick) {
//             posicoes[1].style.display = 'flex'
//             throw '1'
//         }

//         if (botoes[2].onclick) {
//             posicoes[2].style.display = 'flex'
//             throw '2'
//         }

//         if (botoes[3].onclick) {
//             posicoes[3].style.display = 'flex'
//             throw '3'
//         }

//         if (botoes[4].onclick) {
//             posicoes[4].style.display = 'flex'
//             throw '4'
//         }

//         if (botoes[5].onclick) {
//             posicoes[5].style.display = 'flex'
//             throw '5'
//         }

//         if (botoes[6].onclick) {
//             posicoes[6].style.display = 'flex'
//             throw '6'
//         }

//         if (botoes[7].onclick) {
//             posicoes[7].style.display = 'flex'
//             throw '7'
//         }

//         if (botoes[8].onclick) {
//             posicoes[8].style.display = 'flex'
//             throw '8'
//         }
//     } catch (erro) {
//         console.log('erro de logica')
//     }
// }