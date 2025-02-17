var AuthSystem = /** @class */ (function () {
    function AuthSystem() {
    }
    AuthSystem.login = function (user, password) {
        return user.authenticatePassword(password);
    };
    return AuthSystem;
}());
export { AuthSystem };
