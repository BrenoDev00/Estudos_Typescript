import { Negociacao } from "./negociacao.js";

export class Negociacoes {
  private negociacoes: Negociacao[] = [];

  adicionaNegociacao(Negociacao: Negociacao) {
    this.negociacoes.push(Negociacao);
  }

  listaNegociacao(): readonly Negociacao[] {
    return this.negociacoes;
  }
}
