const MESSAGES = require('./calculator_messages.json');
const readline = require('readline-sync');
const LANGUAGE = 'en';
const SPACER = "\n--------------------------------------------";
const POSSIBLE_OPERATORS = ['1', '2', '3', '4'];

// Formats prompt/user input
function prompt(key) {
  let message = messages(key);
  console.log(`\n=> ${message}` + SPACER);
}

// Multi-Language support
function messages(message) {
  return MESSAGES[LANGUAGE][message];
}

// Checks for valid number/blank input
function isInvalidInput(input) {
  if (input.trimStart() === '' || Number.isNaN(Number(input))) {
    return true;
  } else {
    return false;
  }
}

// Checks for valid operator
function isInvalidOperation(input) {
  if (POSSIBLE_OPERATORS.includes(input) === false) {
    return true;
  } else {
    return false;
  }
}

// Gets user input, checks for validity and returns clean input
function retrieveInput(inputMsg) {
  prompt(inputMsg);
  let dirtyInput = readline.question();
  let input = validateInput(inputMsg, dirtyInput);
  return input;
}

// Validates user input (including operation)
function validateInput(inputMsg, input) {
  if (inputMsg === 'operationMsg' ) {
    while (isInvalidOperation(input, POSSIBLE_OPERATORS) === true) {
      prompt('opInvalidMsg');
      input = readline.question();
    }
  } else {
    while (isInvalidInput(input) === true) {
      prompt('invalidMsg');
      input = readline.question();
    }
  }
  return input;
}

// Continues/stops main program
function isAgain(running) {
  prompt('againMsg');
  let again = readline.question();
  while ((again.toLowerCase() !== 'y' && again.toLowerCase() !== 'yes')  &&
     (again.toLowerCase() !== 'n' && again.toLowerCase() !== 'no')) {
    prompt('invalidAgainMsg');
    again = readline.question();
  }
  if (again[0].toLowerCase() === 'y') {
    running = true;
  } else {
    running = false;
  }
  return running;
}

// Checks if a user is trying to divide by 0 and prompts for user input if so
function divideByZeroCheck(operation, number2) {
  if (number2 === '0' || number2 === '-0') {
    while (operation === '4') {
      prompt('divideByZeroMsg');
      operation = retrieveInput('operationMsg');
    }
  }
  return operation;
}

// Main calculator function
function calculateOutput(
  operation, number1, number2) {
  operation = divideByZeroCheck(operation, number2);
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
  return output;
}

// Main program loop
let running = true;

while (running) {
  console.clear();
  console.log(messages('headerMsg', LANGUAGE));

  let number1 = retrieveInput('firstMsg');
  let number2 = retrieveInput('secondMsg');
  let operation = retrieveInput('operationMsg');
  let calculatedAnswer = calculateOutput(operation, number1, number2);

  prompt('answerMsg');
  console.log(`${calculatedAnswer}`);

  running = isAgain();
}
