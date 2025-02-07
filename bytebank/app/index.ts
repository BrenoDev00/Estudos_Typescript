import { Client } from "./client/Client.js";
import { CheckingAccount } from "./checking-account/CheckingAccount.js";

const Breno = new Client("Breno", "111222333-44");
console.log(Breno);

const brenoCheckingAccount = new CheckingAccount(Breno, 771);
console.log(brenoCheckingAccount);

console.log("saldo atual de Breno: ", brenoCheckingAccount.checkBalance());

brenoCheckingAccount.depositAmmount(178.56);

console.log("saldo atual de Breno: ", brenoCheckingAccount.checkBalance());

brenoCheckingAccount.withdrawAmmount(78);

console.log("saldo atual de Breno: ", brenoCheckingAccount.checkBalance());

const Eliane = new Client("Eliane", "888999111-00");

const elianeCheckingAccount = new CheckingAccount(Eliane, 522);

console.log("saldo atual Eliane: ", elianeCheckingAccount.checkBalance());

brenoCheckingAccount.transferAmmount(50, elianeCheckingAccount);

console.log("saldo Breno: ", brenoCheckingAccount.checkBalance());

console.log("saldo Eliane: ", elianeCheckingAccount.checkBalance());

brenoCheckingAccount.transferAmmount(10, elianeCheckingAccount);

console.log("saldo Eliane: ", elianeCheckingAccount.checkBalance());
