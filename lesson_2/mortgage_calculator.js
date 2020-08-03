const readline = require('readline-sync');
const MESSAGES = require('./mortgage_messages.json');

// Creates custom prompt with formatting
function prompt(key, extra) {
  let message = messages(key, extra = '');
  console.log(`\n=> ${message}\n------------------------------------------` + extra.toString());
}

// Shortens prompt by returning external messages syntax
function messages(message) {
  return MESSAGES[message];
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

  prompt('title');

  prompt('loanAmountMsg');
  let loanAmount = readline.question();
  while (isInvalidNumber(loanAmount)) {
    prompt('notValidMsg');
    loanAmount = readline.question();
  }

  prompt('aprMsg');
  let annualInterestRate = readline.question();
  while (isInvalidNumber(annualInterestRate)) {
    prompt('notValidMsg');
    annualInterestRate = readline.question();
  }

  let monthlyInterestRate = (Number(annualInterestRate) / 100) / 12;

  prompt('loanDurationMsg');
  let loanDurationYears = readline.question();

  while (isInvalidNumber(loanDurationYears) || loanDurationYears.includes('.')) {
    prompt('durationDecimal');
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

  prompt('outputMsg');
  console.log(`$${monthlyPayment.toFixed(2)}`);

  prompt('anotherMsg');
  let anotherCalc = readline.question().toLowerCase();

  while (anotherCalc[0] !== 'n' && anotherCalc[0] !== 'y') {
    prompt('yesOrNo');
    anotherCalc = readline.question().toLowerCase();
  }

  if (anotherCalc[0] === 'n') break;
}
