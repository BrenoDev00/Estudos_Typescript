// tipos de união
function printId(id: string | number) {
  console.log("seu ID: ", id);
}

printId(23);
printId("123");

function printText(text: string | number | boolean) {
  console.log(text);
}

printText(true);
printText(12);
printText("olá mundo");

// interfaces
interface Point {
  x: number;
  y: number;
}

function printCoord(point: Point) {
  console.log("O ponto X é", point.x);
  console.log("O ponto Y é", point.y);
}

printCoord({ x: 23, y: 1 });

interface Animal {
  name: string;
}

interface Bear extends Animal {
  honey: boolean;
}

function printAnimal(animal: Bear) {
  console.log("name: ", animal.name);
  console.log("honey: ", animal.honey);
}

printAnimal({ name: "John", honey: true });

// parâmetros opcionais
function myNumber(number?: number): void {
  console.log("meu número é ", number);
}

myNumber(23);
myNumber();
