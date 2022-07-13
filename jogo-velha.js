const X = "X";
const O = "O";

// Essa matriz utiliza a mesma ideia do Sudoku, a soma em horizontal, vertical e diagonal sempre dá 15
const matrix =  [[2,9,4],
                 [7,5,3],
                 [6,1,8]];

var rodada = 0
var jogoContinua = true

/* (rodada%2) = resto 0 ou resto 1, índice 0 ou índice 1
   Variáveis exclusivas de cada jogador */
const simbolos = [X,O]
var pontos = [0,0]

function reiniciarJogo() {
    // Esse comando simplesmente recarrega a página
    window.location.reload();
}

function selecionarArea(posicaoLinha, posicaoColuna) {
    // Se jogo ainda não foi finalizado, então continua
    if (jogoContinua) {

        // Seleciona o simbolo e os pontos do jogador atual, variável usada só para simplificar a leitura
        simbolo = escolhas[rodada%2]

        // Desenha o simbolo na tela
        desenharSimbolo(simbolo, posicaoLinha, posicaoColuna)

        // Calcula os pontos da casa escolhida e verifica vitória
        pontos[rodada%2] = calculaJogada(simbolo, pontos[rodada%2], posicaoLinha-1, posicaoColuna-1)
        
        // Passa para o próximo jogador
        if (simbolo == "X") {
            marcarJogadorAtivo(O)
        } else {
            marcarJogadorAtivo(X)
        }

        // Conta uma rodada
        rodada++
    }
}

// Essa função calcula o peso de cada casa
function calculaJogada(simbolo, pontos, linha, coluna) {
    pontos += matrix[linha][coluna]

    /* Se ambos os jogadores não tiver jogado pelo menos 2 vezes cada então não pode ter vitória
       Se a soma do peso das casas for igual a 15, então ganhou */
    if (rodada > 3 && pontos == 15){

        // Declara vitorioso e encerra o jogo
        exibirResultado('Vitória do ' + simbolo)
        jogoContinua = false

    }
    /* Se a situação atual não se enquadra em cima e os 15 pontos foram atingidos ou ultrapassado então
       esse foi uma jogada inválida e deve voltar atras apenas nos calculos e não no tabuleiro */
    else if (pontos >= 15) {
        pontos -= matrix[linha][coluna]
    }

    return pontos
}
