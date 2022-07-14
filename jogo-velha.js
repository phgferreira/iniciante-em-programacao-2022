const X = "X";
const O = "O";
const simbolos = [X,O]

var matrix = [["","",""],
              ["","",""],
              ["","",""]]

var rodada = 0
var jogoContinua = true

function reiniciarJogo() {
    // Esse comando simplesmente recarrega a página
    window.location.reload();
}

function selecionarArea(posicaoLinha, posicaoColuna) {
    // Se jogo ainda não foi finalizado, então continua
    if (jogoContinua) {

        // Inidice do jogador atual, tem o objetivo de substituir o se igual a X ou se igual a O
        indice = rodada%2

        // Desenha o simbolo na tela e na matriz
        desenharSimbolo(simbolos[indice], posicaoLinha, posicaoColuna)
        matrix[posicaoLinha-1][posicaoColuna-1] = simbolos[indice]

        // Se ambos já jogaram 2 vezes então podemos começar a verificar um vencedor
        if (rodada > 3) {
            // Verifica vencedor
        }

        // Passa para o próximo jogador
        if (indice == 0) {
            marcarJogadorAtivo(O)
        } else {
            marcarJogadorAtivo(X)
        }

        // Conta uma rodada
        rodada++
    }
}

