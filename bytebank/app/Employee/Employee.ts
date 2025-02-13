export abstract class Employee {
  private name: string;
  private cpf: string;
  private salary: number;
  private bonus: number;
  password: string;

  constructor(name: string, cpf: string, salary: number, bonus?: number) {
    this.name = name;
    this.cpf = cpf;
    this.salary = salary;
  }

  registerPassword(password: string) {
    this.password = password;
  }
}
