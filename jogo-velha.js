const X = "X";
const O = "O";

const matrix =  [[2,9,4],
                 [7,5,3],
                 [6,1,8]];

var rodada = 0
var pontosX = 0
var pontosO = 0
var jogoContinua = true

function reiniciarJogo() {
    // Esse comando simplesmente recarrega a página
    window.location.reload();
}

function selecionarArea(posicaoLinha, posicaoColuna) {
    // Se jogo ainda não foi finalizado, então continua
    if (jogoContinua) {

        // Verifica quem está jogando
        if (rodada%2 == 0) {

            desenharSimbolo(X, posicaoLinha, posicaoColuna)
            pontosX = calculaJogada(X, pontosX, posicaoLinha-1, posicaoColuna-1)
            marcarJogadorAtivo(O)

        } else {

            desenharSimbolo(O, posicaoLinha, posicaoColuna)
            pontosO = calculaJogada(O, pontosO, posicaoLinha-1, posicaoColuna-1)
            marcarJogadorAtivo(X)
        }

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
