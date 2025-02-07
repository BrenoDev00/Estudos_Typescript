var CheckingAccount = /** @class */ (function () {
    function CheckingAccount(client, branch) {
        this.balance = 0;
        this.client = client;
        this.branch = branch;
    }
    CheckingAccount.prototype.depositAmmount = function (value) {
        if (value > 0)
            return (this.balance += value);
    };
    CheckingAccount.prototype.withdrawAmmount = function (value) {
        if (value <= this.balance)
            return (this.balance -= value);
    };
    CheckingAccount.prototype.transferAmmount = function (value, account) {
        var transferredAmmount = this.withdrawAmmount(value);
        if (transferredAmmount !== undefined) {
            return account.depositAmmount(transferredAmmount);
        }
    };
    CheckingAccount.prototype.checkBalance = function () {
        return this.balance;
    };
    return CheckingAccount;
}());
export { CheckingAccount };
