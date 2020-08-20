const MESSAGES = require('./calculator_messages.json');
const readline = require('readline-sync');
const SPACER = "\n---------------------------------------------------------";
const LANGUAGE_EXPANDED = {
  1: 'en',
  2: 'de',
  3: 'fr',
  4: 'es',
  5: 'pt',
  6: 'it',
  7: 'nl',
  8: 'pl',
  9: 'ru',
  10:'jp',
  11: 'cn'
};
const POSSIBLE_OPERATORS = ['1', '2', '3', '4'];
const VALID_ANSWERS = ['y', 'yes', 'n', 'no'];


let language = 'en';
let running = true;

function prompt(key) {
  let message = messages(key);
  console.log(`\n=> ${message}` + SPACER);
}

function messages(message) {
  return MESSAGES[language][message];
}

function selectLanguage(LANGUAGE_EXPANDED, language) {
  prompt('languageMsg');
  language = readline.question();
  while (!LANGUAGE_EXPANDED.hasOwnProperty(language)) {
    prompt('invalidLanguageMsg');
    prompt('languageMsg');
    language = readline.question();
  }
  language = LANGUAGE_EXPANDED[language];
  return language;
}

function isInvalidInput(input) {
  return input.trimStart() === '' || Number.isNaN(Number(input));
}

function isInvalidOperation(input, POSSIBLE_OPERATORS) {
  return !POSSIBLE_OPERATORS.includes(input);
}

function retrieveInput(inputMsg) {
  prompt(inputMsg);
  let input = readline.question();
  if (inputMsg === 'operationMsg') {
    while (isInvalidOperation(input, POSSIBLE_OPERATORS) === true) {
      prompt('opInvalidMsg');
      input = readline.question();
    }
  } else {
    while (isInvalidInput(input)) {
      prompt('invalidMsg');
      input = readline.question();
    }
  }
  return input;
}

function divideByZeroCheck(operation, number2) {
  if (number2 === '0' || number2 === '-0') {
    while (operation === '4') {
      prompt('divideByZeroMsg');
      operation = retrieveInput('operationMsg');
    }
  }
  return operation;
}

function isAgain() {
  prompt('againMsg');
  let again = readline.question();
  while (!VALID_ANSWERS.includes(again)) {
    prompt('invalidAgainMsg');
    again = readline.question();
  }
  return again[0].toLowerCase() === "y";
}

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

while (running) {
  console.clear();

  language = selectLanguage(LANGUAGE_EXPANDED, language);
  console.log(messages('headerMsg', language));

  let number1 = retrieveInput('firstMsg');
  let number2 = retrieveInput('secondMsg');
  let operation = retrieveInput('operationMsg');
  let calculatedAnswer = calculateOutput(operation, number1, number2);

  prompt('answerMsg');
  console.log(`${calculatedAnswer}`);

  running = isAgain();
}
