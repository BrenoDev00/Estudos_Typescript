export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    adicionaNegociacao(Negociacao) {
        this.negociacoes.push(Negociacao);
    }
}
const negociacoes = new Negociacoes();