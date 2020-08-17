const readline = require('readline-sync');
const MESSAGES = require('./mortgage_messages.json');

// Creates custom prompt with formatting
function prompt(message) {
  console.log(`\n=> ${MESSAGES[message]}\n------------------------------------------`);
}

// Checks if a number is empty, negative, not a number or zero
// (zero allowed for APR)
function isInvalidNumber(number, inputMsg, invalidNumber) {
  if (inputMsg === 'aprMsg') {
    if (number.trim() === '' || Number.isNaN(Number(number))) {
      invalidNumber = true;
    }
  } else if (number.trim() === '' ||
             Number(number) <= 0 ||
             Number.isNaN(Number(number))) {
    invalidNumber = true;
  } else {
    invalidNumber = false;
  }
  return invalidNumber;
}

// Gets user input, validates and checks for decimal if loanDuration
function retrieveInput(inputMsg, input) {
  prompt(inputMsg);
  input = readline.question();
  if (inputMsg === 'loanDurationMsg') {
    while (isInvalidNumber(input, inputMsg) === true || input.includes('.')) {
      prompt('durationDecimalMsg');
      prompt(inputMsg);
      input = readline.question();
    }
  } else {
    while (isInvalidNumber(input, inputMsg) === true) {
      prompt('notValidMsg');
      prompt(inputMsg);
      input = readline.question();
    }
  }
  return input;
}

// Main calculation function
function calcMonthlyPayment(
  loanAmount, monthlyInterestRate, loanDurationMonths, monthlyPayment) {
  monthlyPayment = Number(loanAmount) *
          (monthlyInterestRate /
          (1 - Math.pow((1 + monthlyInterestRate),
            (-Number(loanDurationMonths)))));
  if (monthlyInterestRate === 0) {
    monthlyPayment = loanAmount / loanDurationMonths;
  }
  return monthlyPayment;
}

// Checks if user wants to perform another calculation and exits if !== 'y'
function isAgain(running) {
  prompt('anotherMsg');
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

// Main program loop
let running = true;
while (running) {
  console.clear();
  console.log(MESSAGES['titleMsg']);

  let loanAmount = retrieveInput('loanAmountMsg');
  let annualInterestRate = retrieveInput('aprMsg');
  let monthlyInterestRate = (Number(annualInterestRate) / 100) / 12;
  let loanDurationYears = retrieveInput('loanDurationMsg');
  let loanDurationMonths = loanDurationYears * 12;
  let monthlyPayment = calcMonthlyPayment(
    loanAmount, monthlyInterestRate, loanDurationMonths);

  prompt('outputMsg');
  console.log(`$${monthlyPayment.toFixed(2)}`);
  running = isAgain();
}
