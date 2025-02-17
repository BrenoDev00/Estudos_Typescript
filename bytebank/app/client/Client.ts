export class Client {
  private name: string;
  private cpf: string;
  private password: string;

  constructor(name: string, cpf: string) {
    this.name = name;
    this.cpf = cpf;
  }

  registerPassword(password: string) {
    return (this.password = password);
  }

  authenticatePassword(password: string) {
    return this.password == password;
  }
}
