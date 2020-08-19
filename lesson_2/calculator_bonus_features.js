const MESSAGES = require('./calculator_messages.json');
const readline = require('readline-sync');
const SPACER = "\n---------------------------------------------------------";
const LANGUAGES =
['en', 'de', 'fr', 'es', 'pt', 'it', 'nl', 'pl', 'ru', 'jp', 'cn'];
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

function selectLanguage(LANGUAGES, language) {
  prompt('languageMsg');
  language = readline.question();
  language = languageExpander(language);
  while (!LANGUAGES.includes(language)) {
    prompt('invalidLanguageMsg');
    prompt('languageMsg');
    language = readline.question();
    language = languageExpander(language);
  }
  return language;
}

// eslint-disable-next-line max-lines-per-function
function languageExpander(language) {
  switch (language) {
    case '1': language = 'en';
      break;
    case '2': language = 'de';
      break;
    case '3': language = 'fr';
      break;
    case '4': language = 'es';
      break;
    case '5': language = 'pt';
      break;
    case '6': language = 'it';
      break;
    case '7': language = 'nl';
      break;
    case '8': language = 'pl';
      break;
    case '9': language = 'ru';
      break;
    case '10': language = 'jp';
      break;
    case '11': language = 'cn';
      break;
  }
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

  language = selectLanguage(LANGUAGES, language);
  console.log(messages('headerMsg', language));

  let number1 = retrieveInput('firstMsg');
  let number2 = retrieveInput('secondMsg');
  let operation = retrieveInput('operationMsg');
  let calculatedAnswer = calculateOutput(operation, number1, number2);

  prompt('answerMsg');
  console.log(`${calculatedAnswer}`);

  running = isAgain();
}
