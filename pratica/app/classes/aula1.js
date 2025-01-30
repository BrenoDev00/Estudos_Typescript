// implementado classe com typescript
class Saudacao {
    constructor() {
        this.nome = "olá mundo";
    }
}
const saudacao = new Saudacao();
saudacao.nome = "Bem vindo";
console.log(saudacao.nome);
// propriedade de somente leitura
class Carro {
    constructor() {
        this.nome = "Mustang";
    }
}
const carro = new Carro();
console.log(carro.nome);
// Tipando métodos
class Soma {
    constructor() {
        this.x = 10;
        this.y = 2;
    }
    sum(n) {
        return `${n + this.x}, ${n + this.y}`;
    }
}
const soma = new Soma();
console.log(soma.sum(5));
class Pong {
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
