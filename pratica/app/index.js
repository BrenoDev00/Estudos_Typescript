// tipos de união
function printId(id) {
    console.log("seu ID: ", id);
}
printId(23);
printId("123");
function printText(text) {
    console.log(text);
}
printText(true);
printText(12);
printText("olá mundo");
function printCoord(point) {
    console.log("O ponto X é", point.x);
    console.log("O ponto Y é", point.y);
}
printCoord({ x: 23, y: 1 });
function printAnimal(animal) {
    console.log("name: ", animal.name);
    console.log("honey: ", animal.honey);
}
printAnimal({ name: "John", honey: true });
// parâmetros opcionais
function myNumber(number) {
    console.log("meu número é ", number);
}
myNumber(23);
myNumber();
