const readline = require('readline-sync');
const MESSAGES = require('./mortgage_messages.json');

// Creates custom prompt with formatting
function prompt(message) {
  console.log("\n=> " + message + "\n------------------------------------------");
}

// Checks if a number is empty, negative or not a number
function isInvalidNumber(number) {
  return number.trim() === '' ||
  Number(number) <= 0 ||
  Number.isNaN(Number(number));
}

// Main program loop

while (true) {

  console.clear();

  prompt(MESSAGES['title']);

  prompt(MESSAGES['loanAmountMsg']);
  let loanAmount = readline.question();
  while (isInvalidNumber(loanAmount)) {
    prompt(MESSAGES['notValidMsg']);
    loanAmount = readline.question();
  }

  prompt(MESSAGES['aprMsg']);
  let annualInterestRate = readline.question();
  while (isInvalidNumber(annualInterestRate)) {
    prompt(MESSAGES['notValidMsg']);
    annualInterestRate = readline.question();
  }

  let monthlyInterestRate = (Number(annualInterestRate) / 100) / 12;

  prompt(MESSAGES['loanDurationMsg']);
  let loanDurationYears = readline.question();
  while (isInvalidNumber(loanDurationYears)) {
    prompt(MESSAGES['notValidMsg']);
    loanDurationYears = readline.question();
  }

  let loanDurationMonths = loanDurationYears * 12;

  // Calculates monthlyPayment and offers alternative algorythm if an interest free loan
  let monthlyPayment = Number(loanAmount) *
          (monthlyInterestRate /
          (1 - Math.pow((1 + monthlyInterestRate), (-Number(loanDurationMonths)))));
  if (monthlyInterestRate === 0) {
    monthlyPayment = loanAmount / loanDurationMonths;
  }

  prompt(MESSAGES['outputMsg'] + `${monthlyPayment.toFixed(2)}`);

  prompt(MESSAGES['anotherMsg']);
  let anotherCalc = readline.question().toLowerCase();

  while (anotherCalc[0] !== 'n' && anotherCalc[0] !== 'y') {
    prompt(MESSAGES['yesOrNo']);
    anotherCalc = readline.question().toLowerCase();
  }

  if (anotherCalc[0] === 'n') break;
}
