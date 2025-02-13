export abstract class Employee {
  private name: string;
  private cpf: string;
  private salary: number;

  constructor(name: string, cpf: string, salary: number) {
    this.name = name;
    this.cpf = cpf;
    this.salary = salary;
  }
}
