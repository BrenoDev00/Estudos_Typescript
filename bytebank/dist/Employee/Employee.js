var Employee = /** @class */ (function () {
    function Employee(name, cpf, salary, bonus) {
        this.name = name;
        this.cpf = cpf;
        this.salary = salary;
    }
    Employee.prototype.registerPassword = function (password) {
        this.password = password;
    };
    return Employee;
}());
export { Employee };
