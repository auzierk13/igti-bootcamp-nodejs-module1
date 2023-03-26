console.log("Hello World");
var math_operations = require("./operation1");
const multiplication = require("./operation2");



console.log("Sum 1 + 2 =", math_operations.sum(1,2));
console.log("Subtraction  5 - 3 =",math_operations.subtraction(5,3));
console.log("multiplication 5 - 3 =", multiplication(5,3));