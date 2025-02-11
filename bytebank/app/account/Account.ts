import { ClientInterface } from "../types/client.type";

export abstract class Account {
  private client: ClientInterface;
  private branch: number;
  protected balance: number = 0;

  constructor(client: ClientInterface, branch: number, balance?: number) {
    this.client = client;
    this.branch = branch;
  }

  depositAmmount(value: number) {
    if (value > 0) return (this.balance += value);
  }

  withdrawAmmount(value: number) {
    if (value <= this.balance) return (this.balance -= value);
  }

  transferAmmount(value: number, account: Account) {
    const transferredAmmount = this.withdrawAmmount(value);

    if (transferredAmmount) {
      return account.depositAmmount(transferredAmmount);
    }
  }

  checkBalance() {
    return this.balance;
  }
}
