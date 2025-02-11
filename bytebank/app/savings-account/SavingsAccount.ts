import { Account } from "../account/Account.js";
import { ClientInterface } from "../types/client.type.js";

export class SavingsAccount extends Account {
  constructor(client: ClientInterface, branch: number, balance: number) {
    super(client, branch, balance);
  }

  withdrawAmmount(value: number) {
    if (this.balance >= value) return (this.balance -= value);
  }
}
