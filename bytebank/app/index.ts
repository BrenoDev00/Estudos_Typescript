import { Director } from "./Employee/Director.js";
import { Manager } from "./Employee/Manager.js";
import { AuthSystem } from "./AuthSystem/AuthSystem.js";

const Breno = new Director("Breno", "111222333-78", 10000);
const Pedro = new Manager("Pedro", "777888999-45", 5000);

Breno.registerPassword("12345");

console.log(AuthSystem.login(Breno, "12345"));

Pedro.registerPassword("a345");

console.log(AuthSystem.login(Pedro, "a345"));
