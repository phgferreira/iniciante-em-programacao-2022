const X = "X";
const O = "O";

let rodada = 0

function reiniciarJogo() {
    
}

function selecionarArea(posicaoLinha, posicaoColuna) {
    
    // Verifica quem está jogando
    if (rodada%2 == 0) {
        marcarJogadorAtivo(O)
    } else {
        marcarJogadorAtivo(X)
    }

}
