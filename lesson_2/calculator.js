// Ask the user for the first number.
// Ask the user for the second number.
// Ask the user for an operation to perform.
// Perform the operation on the two numbers.
// Print the result to the terminal.

const readline = require('readline-sync');

console.log("Calculator");

console.log("\nFirst number:");
let number1 = readline.question();

console.log("\nSecond number:");
let number2 = readline.question();

console.log("\nOperation:\n1). Add\n2). Subtract\n3). Multiply\n4). Divide\n");
let operation = readline.question();

let output;
if (operation === '1') {
  output = Number(number1) + Number(number2);
} else if (operation === '2') {
  output = Number(number1) - Number(number2);
} else if (operation === '3') {
  output = Number(number1) * Number(number2);
} else if (operation === '4') {
  output = Number(number1) / Number(number2);
}

console.log(`\nThe output is: ${output}`);
