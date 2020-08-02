const readline = require('readline-sync');
const spacer = "\n-----------------";

function prompt(message) {
  console.log(`\n=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

console.log("\n----- Calculator -----");

prompt("First number:" + spacer);
let number1 = readline.question();

while (invalidNumber(number1)) {
  prompt("Number not valid - please try again.");
  number1 = readline.question();
}

prompt("Second number:" + spacer);
let number2 = readline.question();

while (invalidNumber(number2)) {
  prompt("Number not valid - please try again.");
  number2 = readline.question();
}

prompt("Operation:\n  1). Add\n  2). Subtract\n  3). Multiply\n  4). Divide" + spacer);
let operation = readline.question();

while (!['1', '2', '3', '4'].includes(operation)) {
  prompt('Operation not valid - Enter 1, 2, 3 or 4:');
  operation = readline.question();
}

let output;
switch (operation) {
  case '1':
    output = Number(number1) + Number(number2);
    break;
  case '2':
    output = Number(number1) - Number(number2);
    break;
  case '3':
    output = Number(number1) * Number(number2);
    break;
  case '4':
    output = Number(number1) / Number(number2);
    break;
}

console.log(`${spacer}\n\n=> The output is:${spacer}\n${output}`);
