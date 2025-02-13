var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { Account } from "./Account.js";
var PayrollAccount = /** @class */ (function (_super) {
    __extends(PayrollAccount, _super);
    function PayrollAccount(client, branch) {
        return _super.call(this, client, branch, 0) || this;
    }
    PayrollAccount.prototype.withdrawAmmount = function (value) {
        var fee = 1.02;
        var transferredAmmount = value * fee;
        if (transferredAmmount <= this.balance)
            return (this.balance -= transferredAmmount);
    };
    return PayrollAccount;
}(Account));
export { PayrollAccount };
