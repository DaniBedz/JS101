const readline = require('readline-sync');

// Creates custom prompt with formatting
function prompt(message) {
  console.log("\n=> " + message + "\n----------------------------------------");
}

// Checks if a number is empty, negative or not a number
function invalidNumber(number) {
  return number.trim() === '' ||
  Number(number) < 0 ||
  Number.isNaN(Number(number));
}

// Displays message and prompts for input again if invalid number is entered
function validator(input) {
  while (invalidNumber(input)) {
    prompt('Not a valid number - please try again:');
    input = readline.question();
  }
}

// Main program loop

while (true) {

  console.clear();

  prompt('Mortgage Calculator');

  prompt('How much would you like to borrow?:');
  let loanAmount = readline.question();
  validator(loanAmount);

  prompt('What is annual interest rate %? (APR):');
  let annualInterestRate = readline.question();
  validator(annualInterestRate);

  let monthlyInterestRate = (Number(annualInterestRate) / 100) / 12;

  prompt('What is loan duration? (in years):');
  let loanDurationYears = (Number(readline.question()));

  // Checks if number is a decimal and prompts for input again if so
  while (Number.isInteger(loanDurationYears) === false) {
    prompt('Enter a whole number:');
    loanDurationYears = Number(readline.question());
  }
  validator(loanDurationYears.toString());

  let loanDurationMonths = loanDurationYears * 12;

  // Calculates monthlyPayment and offers alternative algorythm if an interest free loan
  let monthlyPayment = Number(loanAmount) *
          (monthlyInterestRate /
          (1 - Math.pow((1 + monthlyInterestRate), (-Number(loanDurationMonths)))));
  if (monthlyInterestRate === 0) {
    monthlyPayment = loanAmount / loanDurationMonths;
  }

  prompt(`The monthly payment is: $${monthlyPayment.toFixed(2)}`);

  prompt("Another calculation?:");
  let anotherCalc = readline.question().toLowerCase();

  while (anotherCalc[0] !== 'n' && anotherCalc[0] !== 'y') {
    prompt('Please enter "y" or "n":');
    anotherCalc = readline.question().toLowerCase();
  }

  if (anotherCalc[0] === 'n') break;
}
