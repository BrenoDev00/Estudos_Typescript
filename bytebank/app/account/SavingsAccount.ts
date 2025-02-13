import { Account } from "./Account.js";
import { ClientInterface } from "../types/client.type.js";

export class SavingsAccount extends Account {
  constructor(client: ClientInterface, branch: number, balance: number) {
    super(client, branch, balance);
  }
}
