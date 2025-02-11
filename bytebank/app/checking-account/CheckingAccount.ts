import { Account } from "../account/Account.js";
import { ClientInterface } from "../types/client.type";

export class CheckingAccount extends Account {
  constructor(client: ClientInterface, branch: number) {
    super(client, branch, 0);
  }

  withdrawAmmount(value: number) {
    const fee = 1.1;

    const transferredAmmount = value * fee;

    if (transferredAmmount <= this.balance)
      return (this.balance -= transferredAmmount);
  }
}
