var AuthSystem = /** @class */ (function () {
    function AuthSystem() {
    }
    AuthSystem.login = function (Employee, password) {
        return password == Employee.password;
    };
    return AuthSystem;
}());
export { AuthSystem };
