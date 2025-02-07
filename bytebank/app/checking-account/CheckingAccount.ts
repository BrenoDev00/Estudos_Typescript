import { ClientInterface } from "../types/client.type";

export class CheckingAccount {
  client: ClientInterface;
  branch: number;
  private balance: number = 0;

  constructor(client: ClientInterface, branch: number) {
    this.client = client;
    this.branch = branch;
  }

  depositAmmount(value: number) {
    if (value > 0) return (this.balance += value);
  }

  withdrawAmmount(value: number) {
    if (value <= this.balance) return (this.balance -= value);
  }

  transferAmmount(value: number, account: CheckingAccount) {
    const transferredAmmount = this.withdrawAmmount(value);

    if (transferredAmmount !== undefined) {
      return account.depositAmmount(transferredAmmount);
    }
  }

  checkBalance() {
    return this.balance;
  }
}
