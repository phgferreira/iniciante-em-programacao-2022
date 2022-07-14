const X = "X";
const O = "O";
const simbolos = [X,O]

var matriz = [["","",""],
              ["","",""],
              ["","",""]]

var rodada = 0
var jogoContinua = true

function reiniciarJogo() {
    // Esse comando simplesmente recarrega a página
    window.location.reload();
}

function selecionarArea(posicaoLinha, posicaoColuna) {
    // Se jogo ainda não foi finalizado e a casa escolhida está vazia então continua com o jogo
    if (jogoContinua && matriz[posicaoLinha-1][posicaoColuna-1] == "") {

        // Inidice do jogador atual, tem o objetivo de substituir o se igual a X ou se igual a O
        indice = rodada%2

        // Desenha o simbolo na tela e na matriz
        desenharSimbolo(simbolos[indice], posicaoLinha, posicaoColuna)
        matriz[posicaoLinha-1][posicaoColuna-1] = simbolos[indice]

        // Se ambos já jogaram 2 vezes então podemos começar a verificar um vencedor
        if (rodada > 3) {
            verificaJogada(simbolos[indice], posicaoLinha-1, posicaoColuna-1)
        }

        // Passa para o próximo jogador
        passaAVez(indice)

        // Conta uma rodada
        rodada++

        if (rodada == 9) {
            declaraEmpate()
        }
    }
}

function passaAVez(indice) {
    if (indice == 0) {
        marcarJogadorAtivo(O)
    } else {
        marcarJogadorAtivo(X)
    }
}

function verificaJogada(simbolo, linha, coluna) {
    // Com base na jogada mais recente, abaixo estão as possibilidades de vitória
    if ((matriz[linha][0] == matriz[linha][1] && matriz[linha][1] == matriz[linha][2]) ||
        (matriz[0][coluna] == matriz[1][coluna] && matriz[1][coluna] == matriz[2][coluna]) ||
        (matriz[0][0] == matriz[1][1] && matriz[1][1] == matriz[2][2]) ||
        (matriz[2][0] == matriz[1][1] && matriz[1][1] == matriz[0][2])) {

            declaraVitoria(simbolo)
    }
}

function declaraVitoria(simbolo) {
    exibirResultado('Vitória do ' + simbolo)
    jogoContinua = false
}

function declaraEmpate() {
    exibirResultado('DEU VELHA!')
}
