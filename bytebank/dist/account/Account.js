var Account = /** @class */ (function () {
    function Account(client, branch, balance) {
        this.balance = 0;
        this.client = client;
        this.branch = branch;
    }
    Account.prototype.depositAmmount = function (value) {
        if (value > 0)
            return (this.balance += value);
    };
    Account.prototype.withdrawAmmount = function (value) {
        if (value <= this.balance)
            return (this.balance -= value);
    };
    Account.prototype.transferAmmount = function (value, account) {
        var transferredAmmount = this.withdrawAmmount(value);
        if (transferredAmmount) {
            return account.depositAmmount(transferredAmmount);
        }
    };
    Account.prototype.checkBalance = function () {
        return this.balance;
    };
    return Account;
}());
export { Account };
