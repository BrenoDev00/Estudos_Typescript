import { ClientInterface } from "../types/client.type.js";
import { Account } from "./Account.js";

export class PayrollAccount extends Account {
  constructor(client: ClientInterface, branch: number) {
    super(client, branch, 0);
  }

  withdrawAmmount(value: number) {
    const fee = 1.02;

    const transferredAmmount = value * fee;

    if (transferredAmmount <= this.balance)
      return (this.balance -= transferredAmmount);
  }
}
