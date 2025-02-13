import { Client } from "./Client/Client.js";
import { CheckingAccount } from "./Account/CheckingAccount.js";
import { SavingsAccount } from "./Account/SavingsAccount.js";
import { PayrollAccount } from "./Account/PayrollAccount.js";

const Breno = new Client("Breno", "111222333-44");
console.log(Breno);

const brenoCheckingAccount = new CheckingAccount(Breno, 771);
console.log("conta corrente Breno: ", brenoCheckingAccount);

brenoCheckingAccount.depositAmmount(60);

console.log("saldo Breno: ", brenoCheckingAccount.checkBalance());

brenoCheckingAccount.withdrawAmmount(10);

console.log("saldo Breno: ", brenoCheckingAccount.checkBalance());

const brenoSavingsAccount = new SavingsAccount(Breno, 123, 90);
console.log(brenoSavingsAccount);

brenoSavingsAccount.depositAmmount(30);

console.log(brenoSavingsAccount.checkBalance());

brenoSavingsAccount.withdrawAmmount(20);

console.log(brenoSavingsAccount.checkBalance());

const Eliane = new Client("Eliane", "444555666-77");

const elianeCheckingAccount = new CheckingAccount(Eliane, 987);

brenoCheckingAccount.transferAmmount(45, elianeCheckingAccount);

console.log("saldo Eliane: ", elianeCheckingAccount.checkBalance());

elianeCheckingAccount.withdrawAmmount(10);

console.log("saldo Eliane: ", elianeCheckingAccount.checkBalance());

const elianeSavingsAccount = new SavingsAccount(Eliane, 768, 23);

console.log(elianeSavingsAccount.checkBalance());

elianeSavingsAccount.withdrawAmmount(3);

console.log("saldo Eliane: ", elianeSavingsAccount.checkBalance());

console.log("saldo Breno: ", brenoCheckingAccount.checkBalance());

const brenoPayrollAccount = new PayrollAccount(Breno, 123);

console.log("saldo Breno conta salário: ", brenoPayrollAccount.checkBalance());

brenoPayrollAccount.depositAmmount(67);

console.log("saldo Breno conta salário: ", brenoPayrollAccount.checkBalance());

brenoPayrollAccount.withdrawAmmount(45);

console.log("saldo Breno conta salário: ", brenoPayrollAccount.checkBalance());

brenoPayrollAccount.transferAmmount(10, elianeSavingsAccount);

console.log("saldo Breno conta salário: ", brenoPayrollAccount.checkBalance());
