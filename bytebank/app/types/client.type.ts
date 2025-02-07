export interface ClientInterface {
  name: string;
  cpf: string;

  depositAmmount?: (value: number | undefined) => number;
}
