import { Employee } from "./Employee.js";

export class Director extends Employee {
  constructor(name: string, cpf: string, salary: number) {
    super(name, cpf, salary);
  }
}
