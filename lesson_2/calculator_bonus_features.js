const MESSAGES = require('./calculator_messages.json');
const LANGUAGE = 'en';
const readline = require('readline-sync');
const spacer = "\n-----------------";

function messages(message, lang = 'en') {
  return MESSAGES[lang][message];
}

function prompt(key) {
  let message = messages(key);
  console.log(`\n=> ${message}` + spacer);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

while (true) {
  console.clear();
  console.log(messages('header', LANGUAGE));

  prompt('first');
  let number1 = readline.question();

  while (invalidNumber(number1)) {
    prompt('invalid');
    number1 = readline.question();
  }

  prompt('second');
  let number2 = readline.question();

  while (invalidNumber(number2)) {
    prompt('invalid');
    number2 = readline.question();
  }

  prompt('operation');
  let operation = readline.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt('opInvalid');
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

  prompt('answer');
  console.log(`${output}`);

  prompt('again');
  let answer = readline.question();

  if (answer === '' || answer[0].toLowerCase() !== 'y') break;
}
