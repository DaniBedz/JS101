const readline = require('readline-sync');

// Creates custom prompt with formatting
function prompt(message) {
  console.log("\n=> " + message + "\n----------------------------------------");
}

// Checks if an input number is empty, negative or not a number
function isInvalidNumber(number) {
  return number.trim() === '' ||
         Number(number) < 0   ||
         Number.isNaN(Number(number));
}

// Displays message and prompts for input again if invalid number is entered
function validator(input) {
}

// Main program loop

while (true) {

  console.clear();

  console.log('Mortgage Calculator');

  prompt('How much would you like to borrow?:');
  let loanAmount = readline.question();
  while (isInvalidNumber(loanAmount)) {
    prompt('Must enter a positive number');
    loanAmount = readline.question();
  }

  prompt('What is annual interest rate %? (APR):');
  let annualInterestRate = readline.question();
  while (isInvalidNumber(annualInterestRate)) {
    prompt('Must enter a positive number');
    annualInterestRate = readline.question();
  }

  let monthlyInterestRate = ((annualInterestRate) / 100) / 12;
  let loanDurationYears = 0;
  // Checks if number is a decimal and prompts for input again if so
  while (Number.isInteger(loanDurationYears) === false) {
    prompt('What is loan duration? (in years):');
    loanDurationYears = readline.question();
  }

  while (isInvalidNumber(loanDurationYears)) {
    prompt('Must enter a positive number');
    loanDurationYears = readline.question();
  }
  let loanDurationMonths = loanDurationYears * 12;

  // Calculates monthlyPayment and offers alternative algorythm if an interest free loan
  let monthlyPayment = loanAmount *
          (monthlyInterestRate /
          (1 - Math.pow((1 + Number(monthlyInterestRate)), (-Number(loanDurationMonths)))));
  if (Number(monthlyInterestRate === 0)) {
    monthlyPayment = loanAmount / loanDurationMonths;
  }
  debugger;
  prompt(`The monthly payment is: $${monthlyPayment.toFixed(2)}`);

  prompt("Another calculation?:");
  let anotherCalc = readline.question().toLowerCase();

  while (anotherCalc[0] !== 'n' && anotherCalc[0] !== 'y') {
    prompt('Please enter "y" or "n":');
    anotherCalc = readline.question().toLowerCase();
  }

  if (anotherCalc[0] === 'n') break;
}
