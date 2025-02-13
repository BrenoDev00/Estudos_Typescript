import { Employee } from "../Employee/Employee.js";

export class AuthSystem {
  static login(Employee: Employee, password: string) {
    return password == Employee.password;
  }
}
