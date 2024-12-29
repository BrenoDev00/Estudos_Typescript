export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    adicionaNegociacao(Negociacao) {
        this.negociacoes.push(Negociacao);
    }
    listaNegociacao() {
        return [...this.negociacoes];
    }
}
