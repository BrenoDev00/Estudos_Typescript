import { Negociacao } from "../models/negociacao.js";

export class NegociacaoContoller {
  private inputData: HTMLInputElement;
  private inputQuantidade: HTMLInputElement;
  private inputValor: HTMLInputElement;

  constructor() {
    this.inputData = document.getElementById("data");
    this.inputQuantidade = document.getElementById("quantidade");
    this.inputValor = document.getElementById("valor");
  }

  adiciona() {
    const exp = /-/g;
    const data = new Date(this.inputData.value.replace(exp, ","));
    const quantidade = parseInt(this.inputQuantidade.value);
    const valor = parseFloat(this.inputValor.value);
    const negociacao = new Negociacao(data, quantidade, valor);
  }
}
