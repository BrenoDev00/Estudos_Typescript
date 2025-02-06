// implementado classe com typescript
class Saudacao {
  nome: string;

  constructor() {
    this.nome = "olá mundo";
  }
}

const saudacao = new Saudacao();
saudacao.nome = "Bem vindo";
console.log(saudacao.nome);

// propriedade de somente leitura
class Carro {
  readonly nome: string;

  constructor() {
    this.nome = "Mustang";
  }
}

const carro = new Carro();
console.log(carro.nome);

// Tipando métodos
class Soma {
  x = 10;
  y = 2;

  sum(n: number) {
    return `${n + this.x}, ${n + this.y}`;
  }
}

const soma = new Soma();
console.log(soma.sum(5));

// usado implements para verificação de interface.
interface Ping {
  ping(): void;
}

class Pong implements Ping {
  ping() {
    console.log("olá mundo");
  }
}

const pong = new Pong();
pong.ping();

// extends para extender uma classe
class Animais {
  mover() {
    console.log("Movendo-se...");
  }
}

class Gato extends Animais {
  miar() {
    console.log("miau!...");
  }
}

const gato = new Gato();
gato.mover();
gato.miar();

// public para controlar se uma propriedade ou método é visível no código fora da classe
class Greeter {
  public greet() {
    console.log("olá mundo");
  }
}

const g = new Greeter();
g.greet();

// protected: os membros de uma classe são visíveis apenas na classe pai, em subclasses e dentro do código dessa classe pai ou subclasse
class Greetter1 {
  protected getName() {
    return "Breno";
  }

  public greet() {
    console.log("hello ", this.getName());
  }
}

class EspecialGreetter extends Greetter1 {
  public newGreet() {
    console.log("olá ", this.getName());
  }
}

const especialGreeter = new EspecialGreetter();
especialGreeter.newGreet();

// private: é como o protected, mas não permite o acesso nem mesmo às subclasses
class Base {
  private x: number = 0;
}

const b = new Base();
// console.log(b.x);  * nessa linha gera um erro, pois a propriedade x é visível somente dentro da classe Base
