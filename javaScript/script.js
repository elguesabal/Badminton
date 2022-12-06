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


//  FUNCAO PARA APAGAR A POSICAO NA QUADRA
// const mudaDisplay = {        MDS COMO EU CONSEGUIR FAZER O MAIS DIFICIL E DEXEI O MAIS FACIL DE LADO???
//     dNone: function() {
//         for (let i = 1; i < 9; i++) {
//             posicoes[i].style.display = 'none'
//         }
//     }
// }
//  mudaDisplay.dNone()     NESSE CASO SERIA CHAMADO ASSIM A CONST DA FUNCA PQ ESSA VARIAVEL RECEBEU UM OBJETO


// function mudaDisplay() {
//     for (let i = 1; i < 9; i++) {
//         posicoes[i].style.display = 'none'
//     }
// }     ABAIXO ESTA O NOVO MODELO DE FUNCAO

function mudaDisplayEGrava(posicao) {
    for (let i = 1; i < 9; i++) {
        posicoes[i].style.display = 'none'
    }
    
    posicoes[posicao].style.display = 'flex'

    if (botoes[9].checked) {
        posicoesProgramadas.push(posicao)
    }
}
//let posicao = null    // CRIEI ESSA VARIAVEL SEM VALOR FORA DO ESCOPO DE EVENTO DE CLICK PARA ELA PODER SER LIDA PELA FUNCAO mudaDisplayEGrava() E DPS MODIFICADA EM CADA EVENTO DE CLICK    // TO FALANDO Q EU FACO O MAIS DIFICIL KKKK AGR COLOQUEI O VALOR DENTRO DO PARAMETRO DA FUNCAO


// class teste {
//     testando() {
//         for (let i = 1; i < 9; i++) {
//             posicoes[i].style.display = 'none'
//         }
//     }        ASSIM NAO FUNCIONOU
// }
//  FUNCAO PARA APAGAR A POSICAO NA QUADRA


let posicoesProgramadas = ['a posicao 0 do array deve ficar ocupado com algo para q nao seja levado em consideracao quando armazenar as posicoes e ser lido pelo laco de repeticao referente ao temporizador (let i = 1 para nao existir 0 * Number(document.getElementById(tempo).value) e comecar o primerio passe rapido d+)']


// botoes[1].onclick = () => {      ESTAVA SENDO USADO ESSE MODELO PRA CADA CLICK
//     mudaDisplay.dNone()

//     posicoes[1].style.display = 'flex'

//     if (botoes[9].checked) {
//         posicoesProgramadas.push(1)
//     }
// }



botoes[1].onclick = () => {
    mudaDisplayEGrava(1)
}

botoes[2].onclick = () => {
    mudaDisplayEGrava(2)
}

botoes[3].onclick = () => {
    mudaDisplayEGrava(3)
}

botoes[4].onclick = () => {
    mudaDisplayEGrava(4)
}

botoes[5].onclick = () => {
    mudaDisplayEGrava(5)
}

botoes[6].onclick = () => {
    mudaDisplayEGrava(6)
}

botoes[7].onclick = () => {
    mudaDisplayEGrava(7)
}

botoes[8].onclick = () => {
    mudaDisplayEGrava(8)
}


//                      SE EU BOTO Number(document.getElementById('tempo').value) DENTRO DE UMA VARIAVEL E TENTO CHAMAR DA SEMPRE ZERO
//                      let num = Number(document.getElementById('tempo').value)


botoes[11].onclick = () => {
    // mudaDisplay.dNone() DESATIVADO E ABAIXO O CODIGO Q ERA CHAMADO AKI
    for (let i = 1; i < 9; i++) {
        posicoes[i].style.display = 'none'
    }

    let tempo = Number(document.getElementById('tempo').value)
    let repeticoes = Number(document.getElementById('repeticoes'))

    // for (let i = 0; i < 2; i++) {
    //     setTimeout( function() {
            for (let j = 1; j < posicoesProgramadas.length; j++) {
                setTimeout( function() {
                    posicoes[posicoesProgramadas[j]].style.display = 'flex'
                }, tempo * 1000 * j)
    
    
                setTimeout( function() {
                    posicoes[posicoesProgramadas[j]].style.display = 'none'
                }, tempo * 1000 * j + tempo * 1000)
            }
    //     }, tempo * 1000 * posicoesProgramadas.length )
    // }
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