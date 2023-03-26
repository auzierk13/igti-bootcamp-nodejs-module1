console.log("Hello World");
import math_operations from "./operation1.js";
import multiplication from "./operation2.js";
import {division, rest} from "./operation3.js";

var a = 6;
var b = 3;
console.log("Sum ", a , " + ", b , " =", math_operations.sum(a,b));
console.log("Subtraction  ", a, " - ", b, " =", math_operations.subtraction(a, b));
console.log("multiplication ",a, " * ", b, " =", multiplication(a, b));

console.log("Division ",a, " / ", b, " =", division(a, b));
console.log("Rest ",a, " % ", b, " =", division(a, b));