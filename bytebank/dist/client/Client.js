var Client = /** @class */ (function () {
    function Client(name, cpf) {
        this.name = name;
        this.cpf = cpf;
    }
    Client.prototype.registerPassword = function (password) {
        return (this.password = password);
    };
    Client.prototype.authenticatePassword = function (password) {
        return this.password == password;
    };
    return Client;
}());
export { Client };
