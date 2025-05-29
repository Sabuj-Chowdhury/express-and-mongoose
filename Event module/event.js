const EventEmitter = require("node:events");
class GreetingEvent extends EventEmitter {}

const sayHello = new GreetingEvent();

sayHello.on("Hello", () => {
  console.log("Hello there!");
});
sayHello.on("Bye", () => {
  console.log("Bye!");
});
sayHello.on("Hello", () => {
  console.log("Hello Sabuj!");
});

sayHello.emit("Hello");
sayHello.emit("Bye");
