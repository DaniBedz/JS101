const readline = require('readline-sync');
const MESSAGES = require('./mortgage_messages.json');
const VALID_ANSWERS = ['y', 'yes', 'n', 'no'];

function prompt(message) {
  console.log(`\n=> ${MESSAGES[message]}\n----------------------------------------------------`);
}

function retrieveInput(inputMsg, input) {
  prompt(inputMsg);
  input = readline.question();
  if (inputMsg === 'loanDurationMsg') {
    while (isInvalidNumber(input, inputMsg) || input.includes('.')) {
      prompt('durationDecimalMsg');
      prompt(inputMsg);
      input = readline.question();
    }
  } else {
    while (isInvalidNumber(input, inputMsg)) {
      prompt('notValidMsg');
      prompt(inputMsg);
      input = readline.question();
    }
  }
  return input;
}

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

function isAgain() {
  prompt('anotherMsg');
  let again = readline.question();
  while (!VALID_ANSWERS.includes(again)) {
    prompt('invalidAgainMsg');
    again = readline.question();
  }
  return again[0].toLowerCase() === "y";
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
