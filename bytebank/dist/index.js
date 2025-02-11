import { Client } from "./client/Client.js";
import { CheckingAccount } from "./checking-account/CheckingAccount.js";
import { SavingsAccount } from "./savings-account/SavingsAccount.js";
var Breno = new Client("Breno", "111222333-44");
console.log(Breno);
var brenoCheckingAccount = new CheckingAccount(Breno, 771);
console.log("conta corrente Breno: ", brenoCheckingAccount);
brenoCheckingAccount.depositAmmount(60);
console.log("saldo Breno: ", brenoCheckingAccount.checkBalance());
brenoCheckingAccount.withdrawAmmount(10);
console.log("saldo Breno: ", brenoCheckingAccount.checkBalance());
var brenoSavingsAccount = new SavingsAccount(Breno, 123, 90);
console.log(brenoSavingsAccount);
brenoSavingsAccount.depositAmmount(30);
console.log(brenoSavingsAccount.checkBalance());
brenoSavingsAccount.withdrawAmmount(20);
console.log(brenoSavingsAccount.checkBalance());
var Eliane = new Client("Eliane", "444555666-77");
var elianeCheckingAccount = new CheckingAccount(Eliane, 987);
brenoCheckingAccount.transferAmmount(45, elianeCheckingAccount);
console.log("saldo Eliane: ", elianeCheckingAccount.checkBalance());
elianeCheckingAccount.withdrawAmmount(10);
console.log("saldo Eliane: ", elianeCheckingAccount.checkBalance());
var elianeSavingsAccount = new SavingsAccount(Eliane, 768, 23);
console.log(elianeSavingsAccount.checkBalance());
elianeSavingsAccount.withdrawAmmount(3);
console.log(elianeSavingsAccount.checkBalance());
