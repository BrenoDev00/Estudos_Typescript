import { Negociacao } from "./negociacao.js";

export class Negociacoes {
  private negociacoes: Array<Negociacao> = [];

  adicionaNegociacao(Negociacao: Negociacao) {
    this.negociacoes.push(Negociacao);
  }

  listaNegociacao(): ReadonlyArray<Negociacao> {
    return this.negociacoes;
  }
}
