function Treino() {

    setTimeout(function () {

        const posicoes = [0, document.getElementById('posicaoUm'), document.getElementById('posicaoDois'), document.getElementById('posicaoTres'), document.getElementById('posicaoQuatro'), document.getElementById('posicaoCinco'), document.getElementById('posicaoSeis'), document.getElementById('posicaoSete'), document.getElementById('posicaoOito')]

        const botoes = [document.getElementById('botoes'), document.getElementById('um'), document.getElementById('dois'), document.getElementById('tres'), document.getElementById('quatro'), document.getElementById('cinco'), document.getElementById('seis'), document.getElementById('sete'), document.getElementById('oito'), document.getElementById('programar'), document.getElementById('tempo').value, document.getElementById('comecar')]


        function mudaDisplayEGrava(posicao) {
            for (let i = 1; i < 9; i++) {
                posicoes[i].style.display = 'none'
            }

            posicoes[posicao].style.display = 'flex'

            if (botoes[9].checked) {
                posicoesProgramadas.push(posicao)
            }
        }

        let posicoesProgramadas = ['a posicao 0 do array deve ficar ocupado com algo para q nao seja levado em consideracao quando armazenar as posicoes e ser lido pelo laco de repeticao referente ao temporizador (let i = 1 para nao existir 0 * Number(document.getElementById(tempo).value) e comecar o primerio passe rapido d+)']



        botoes[1].onclick = () => mudaDisplayEGrava(1)

        botoes[2].onclick = () => mudaDisplayEGrava(2)

        botoes[3].onclick = () => mudaDisplayEGrava(3)

        botoes[4].onclick = () => mudaDisplayEGrava(4)

        botoes[5].onclick = () => mudaDisplayEGrava(5)

        botoes[6].onclick = () => mudaDisplayEGrava(6)

        botoes[7].onclick = () => mudaDisplayEGrava(7)

        botoes[8].onclick = () => mudaDisplayEGrava(8)


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
                setTimeout(function () {
                    posicoes[posicoesProgramadas[j]].style.display = 'flex'
                }, tempo * 1000 * j)


                setTimeout(function () {
                    posicoes[posicoesProgramadas[j]].style.display = 'none'
                }, tempo * 1000 * j + tempo * 1000)
            }
            //     }, tempo * 1000 * posicoesProgramadas.length )
            // }
        }

    }, 10);



    return (
        <div>

            <div class="d-flex justify-content-evenly">
                <div id="quadra">
                    {/* <!-- LINHAS DA QUADRA --> */}
                    <div id="linhaSimplesEsquerda"></div>
                    <div id="linhaSimplesDireita"></div>

                    <div id="linhaMeioSaque"></div>

                    <div id="linhaFrenteSaque"></div>

                    <div id="linhaDuplaFundo"></div>
                    {/* <!-- LINHAS DA QUADRA --> */}

                    {/* <!-- POSICOES DENTRO DA QUADRA QUADRA --> */}
                    <div id="posicaoUm"></div>
                    <div id="posicaoDois"></div>
                    <div id="posicaoTres"></div>
                    <div id="posicaoQuatro"></div>
                    <div id="posicaoCinco"></div>
                    <div id="posicaoSeis"></div>
                    <div id="posicaoSete"></div>
                    <div id="posicaoOito"></div>
                    {/* <!-- LINHAS DA QUADRA --> */}

                    {/* <!-- BOTOES INTEGRADOS DENTRO DA QUADRA --> */}
                    <div class="botaoQuadra" id="tres"></div>
                    <div class="botaoQuadra" id="dois"></div>
                    <div class="botaoQuadra" id="um"></div>

                    <div class="botaoQuadra" id="cinco"></div>
                    <div class="botaoQuadra" id="quatro"></div>

                    <div class="botaoQuadra" id="oito"></div>
                    <div class="botaoQuadra" id="sete"></div>
                    <div class="botaoQuadra" id="seis"></div>
                    {/* <!-- BOTOES INTEGRADOS DENTRO DA QUADRA --> */}
                </div>


                {/* <!-- <div id="botoes">
                    <button type="button" class="btn btn-outline-success" id="tres">3</button>
                    <button type="button" class="btn btn-outline-success" id="dois">2</button>
                    <button type="button" class="btn btn-outline-success" id="um">1</button>
                    <br>
                    <button type="button" class="btn btn-outline-success" id="cinco">5</button>         BOTOES INTEGRADOS DIRETAMENTE A QUADRA
                    <button type="button" class="btn btn-outline-success" id="quatro">4</button>
                    <br>
                    <button type="button" class="btn btn-outline-success" id="oito">8</button>
                    <button type="button" class="btn btn-outline-success" id="sete">7</button>
                    <button type="button" class="btn btn-outline-success" id="seis">6</button>
                </div> --> */}
            </div>

            <br/>

            {/* <div class="d-flex justify-content-evenly">

                <div class="form-check form-switch ">
                    <input class="form-check-input" type="checkbox" id="programar"/>
                    <label class="form-check-label">Gravar sequência</label>
                </div>
                
                <div class="d-flex flex-row mb-3">
                    <label>Tempo em segundos: </label>
                    <select class="form-select" id="tempo" aria-label="Default select example">
                        <option selected>Escolha o intervalo...</option>
                        <option value="1">1 segundo</option>
                        <option value="2">2 segundo</option>
                        <option value="3">3 segundo</option>
                        <option value="4">4 segundo</option>
                        <option value="5">5 segundo</option>
                        <option value="6">6 segundo</option>
                        <option value="7">7 segundo</option>
                        <option value="8">8 segundo</option>
                        <option value="9">9 segundo</option>
                        <option value="10">10 segundo</option>
                    </select>
                </div>

                <div>
                    <label>Número de repetições: </label>
                    <select class="form-select" id="repeticoes" aria-label="Default select example">
                        <option selected>Quantidades de vezes...</option>
                        <option value="1">1 vez</option>
                        <option value="2">2 vezes</option>
                        <option value="3">3 vezes</option>
                        <option value="4">4 vezes</option>
                        <option value="5">5 vezes</option>
                        <option value="6">6 vezes</option>
                        <option value="7">7 vezes</option>
                        <option value="8">8 vezes</option>
                        <option value="9">9 vezes</option>
                        <option value="10">10 vezes</option>
                    </select>
                </div>

                <div>
                    <button id="comecar" class="btn btn-outline-success btn-lg">Começar</button>
                </div>
            </div> */}






            <div class="d-flex justify-content-center">
                <div class="needs-validation col-8" novalidate>
                    <div class="row g-3">

                        <div class="form-switch col-md-6">
                            <input class="form-check-input" type="checkbox" id="programar"/>
                            <label class="form-check-label">Gravar sequência</label>
                        </div>

                        <hr class="my-4"/>

                        <div class="col-md-6">
                            <label for="country" class="form-label">Tempo em segundos:</label>
                            <select class="form-select" id="tempo" required>
                                <option selected>Escolha o intervalo...</option>
                                <option value="1">1 segundo</option>
                                <option value="2">2 segundo</option>
                                <option value="3">3 segundo</option>
                                <option value="4">4 segundo</option>
                                <option value="5">5 segundo</option>
                                <option value="6">6 segundo</option>
                                <option value="7">7 segundo</option>
                                <option value="8">8 segundo</option>
                                <option value="9">9 segundo</option>
                                <option value="10">10 segundo</option>
                            </select>
                            <div class="invalid-feedback">
                                Please select a valid country.
                            </div>
                        </div>

                        <div class="col-md-6">
                            <label for="state" class="form-label">Número de repetições:</label>
                            <select class="form-select" id="repeticoes" required>
                                <option selected>Quantidades de vezes...</option>
                                <option value="1">1 vez</option>
                                <option value="2">2 vezes</option>
                                <option value="3">3 vezes</option>
                                <option value="4">4 vezes</option>
                                <option value="5">5 vezes</option>
                                <option value="6">6 vezes</option>
                                <option value="7">7 vezes</option>
                                <option value="8">8 vezes</option>
                                <option value="9">9 vezes</option>
                                <option value="10">10 vezes</option>
                            </select>
                            <div class="invalid-feedback">
                                Please provide a valid state.
                            </div>
                        </div>

                    </div>

                    <hr class="my-4"/>

                    <button id="comecar" class="w-100 btn btn-outline-success btn-lg">Começar</button>
                </div>
            </div>
            
            <br/>

        </div>
    )
}

export default Treino