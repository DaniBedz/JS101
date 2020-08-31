//? Isn't it Odd?
// Write a function that takes one integer argument,
// which may be positive, negative, or zero.
// This method returns true if the number's absolute value is odd.
// You may assume that the argument is a valid integer value

//* Answer

function isOdd (number) {
  return number % 2 === 1;
}


//? Odd Numbers
// Log all odd numbers from 1 to 99, inclusive,
// to the console. Log all numbers on separate lines.

//* Answer

for (let num = 1; num < 100; num += 2) {
  console.log(num);
}


//? Even Numbers
// Log all even numbers from 1 to 99, inclusive,
// to the console. Log all numbers on separate lines.

//* Answer

for (let num = 1; num < 100; num += 1) {
  if (num % 2 === 0) {
    console.log(num);
  }
}


//? How big is the room?
// Build a program that asks the user to enter
// the length and width of a room in meters,
// and then logs the area of the room to the
// console in both square meters and square feet.

// Note: 1 square meter == 10.7639 square feet
// Do not worry about validating the input at this time.
// Use the readlineSync.prompt method to collect user input.

//* Problem:
// - Collect the width and length of a room in square metres,
//   calculate the area and convert it to square feet.
//   log the areas in both units.

// Input: integer
// Output: integer
// Rules:
//   Explicit Requirements:
//     - Calculate/display area in square metres.
//     - Calculate/display area in square feet.
//     - Use readlineSync.prompt to collect user input.

//* Examples:
// Enter the length of the room in meters:
// 10
// Enter the width of the room in meters:
// 7
// The area of the room is 70.00 square meters (753.47 square feet).

//* Data Structure:
// - integers

//* Algorithm:
// - Require readline.Sync and set it to variable.
// - Initialise CONST for SQUARE_METERS_TO_FEET.
// - Prompt user for length of room in metres and save in lengthSquareMetres variable.
// - Prompt user for width of room in metres and save in widthSquareMetres variable.
// - Save lengthSquareMetres * widthSquareMetres to calculatedAreaSM variable.
// - Initialise calculatedAreaSF to calculatedAreaSM * SQUARE_METERS_TO_FEET.
// - Log to console the area of the room in Square metres and Square feet.

//* Code:
// const readline = require("readline-sync");
// const SQUARE_METERS_TO_FEET = 10.7639;

// console.log("What is the length in square metres?");
// let lengthSquareMetres = readline.question();

// console.log("What is the width in square metres?");
// let widthSquareMetres = readline.question();

// let calculatedAreaSM = lengthSquareMetres * widthSquareMetres;

// let calculatedAreaSF = calculatedAreaSM * SQUARE_METERS_TO_FEET;

// console.log(`The area is: ${calculatedAreaSM.toFixed(2)} square metres (${calculatedAreaSF.toFixed(2)} square feet)`);


//? Tip Calculator
// Create a simple tip calculator. The program should prompt for a bill amount
// and a tip rate. The program must compute the tip, and then log both the tip
// and the total amount of the bill to the console. You can ignore input
// validation and assume that the user will enter numbers.


//* Problem:
// Calculate tips from user entered bill amount and tip rate.
// Log both to console.

// Input: Integers
// Output: Integer (rounded to 2 decimal places)
// Rules:
//   Explicit Requirements:
//     - Accepts 2 inputs, bill amount & tip rate.
//     - Outputs tip and total bill to console.

//* Examples:
// What is the bill? 200
// What is the tip percentage? 15

// The tip is $30.00
// The total is $230.00

//* Data Structure:
// - Amounts stored in variables.

//* Algorithm:
// - Use readline-sync to collect user input and store to billAmount.
// - Prompt user to enter the bill amount.
// - Prompt user to enter the tip rate.
// - Use readline-sync to collect user input and store to tipRate.
// - Initialise tipAmount to tipRate / 100 * billAmount - billAmount.
// - Initialise totalBill to billAmount + tipAmount.
// - Log to console the tipAmount and totalBill.

//* Code:
const readline = require("readline-sync");

let billAmount = Number((readline.question("What is the bill amount?\n")));

let tipRate = Number((readline.question("What is the tip percentage?\n")));

let tipAmount = ((tipRate / 100) * billAmount);

let totalBill = billAmount + tipAmount;

console.log(`The tip is: $${tipAmount.toFixed(2)}`);
console.log(`The total is: $${totalBill.toFixed(2)}`);


//? Sum or Product of Consecutive Integers
// Write a program that asks the user to enter an integer greater than 0,
// then asks whether the user wants to determine the sum or the product
// of all numbers between 1 and the entered integer, inclusive.


//* Problem:
// - User enters a number ( > 0), asks the user if they want to sum
//   or compute the product of all numbers between 1 and the
//   entered integer incluside.

// Input: Integer, string "s" or string "p".
// Output: Integer.
// Rules:
//   Explicit Requirements:
//     - Number > 0.
//     - Only "s" or "p" to be entered after number is entered.
//   Implicit Requirements:
//     - Error returned and retry if invalid number entered for first question.
//     - Error returned and retry if "s" or "p" not entered for second question.

//* Examples:
// Please enter an integer greater than 0: 5
// Enter "s" to compute the sum, or "p" to compute the product. s

// The sum of the integers between 1 and 5 is 15.

// Please enter an integer greater than 0: 6
// Enter "s" to compute the sum, or "p" to compute the product. p

// The product of the integers between 1 and 6 is 720.

//* Data Structure:
// - Integers stored as variables.
// - For loop to calculate product.

//* Algorithm:
// - Use readline-sync to collect user input and store to number.
// - Check isInalidNumber, while 'true', display invalid number/prompt again.
// - Use readline-sync to collect user input and store to sumOrProduct.
// - Check isInvalidChoice, while 'false', display invalid number/prompt again.
//   - If sumOrProduct = "s" => for loop to compute output.
//   - If sumOrProduct = "p" => for loop to compute output.
// - Log answer to console based on sumOrProduct.

//* Code:
const readline = require("readline-sync");

function isInvalidNumber (number) {
  return number.trimStart() === '' ||
         Number.isNaN(Number(number)) ||
         number < 1;
}

function isInvalidChoice (sumOrProduct) {
  return sumOrProduct !== "s" && sumOrProduct !== "p";
}

function calculateOutput (number, sumOrProduct) {
  if (sumOrProduct === "s") {
    let output = 0;
    for (let counter = 1; counter <= number; counter++) {
      output += counter;
    }
    return output;
  } else {
    let output = 1;
    for (let counter = 1; counter <= number; counter++) {
      output *= counter;
    }
    return output;
  }
}

function displayOutput (number, sumOrProduct, output) {
  if (sumOrProduct === "s") {
    console.log(`The sum of the integers between 1 and ${number} is ${output}.`);
  } else {
    console.log(`The product of the integers between 1 and ${number} is ${output}.`);
  }
}

// Main program
let number = readline.question(
  "Please enter an integer greater than 0:\n");

while (isInvalidNumber(number)) {
  console.log(
    "That is not a valid number.\n");
  number = readline.question(
    "Please enter an integer greater than 0:\n");
}

let sumOrProduct = readline.question(
  "Enter 's' to compute the sum, or 'p' to compute the product:\n");

while (isInvalidChoice(sumOrProduct)) {
  console.log(
    "That is not a valid sumOrProduct.\n");
  sumOrProduct = readline.question(
    "Enter 's' to compute the sum, or 'p' to compute the product:\n");
}

let output = calculateOutput(number, sumOrProduct);

displayOutput(number, sumOrProduct, output);


//? Short Long Short
// Write a function that takes two strings as arguments, determines the longer
// of the two strings, and then returns the result of concatenating the shorter
// string, the longer string, and the shorter string once again. You may assume
// that the strings are of different lengths.

// Examples:

shortLongShort("abc", "defgh"); // "abcdefghabc"
shortLongShort('abcde', 'fgh');    // "fghabcdefgh"
shortLongShort('', 'xyz');         // "xyz"

//* Answer

function shortLongString (string1, string2) {
  if (string1.length < string2.length) {
    return string1 + string2 + string1;
  } else {
    return string2 + string1 + string1;
  }
}


//? Leap Years (Part 1)
// In the modern era under the Gregorian Calendar, leap years occur in every
// year that is evenly divisible by 4, unless the year is also divisible by 100.
// If the year is evenly divisible by 100, then it is not a leap year, unless
// the year is also evenly divisible by 400.

// Assume this rule is valid for any year greater than year 0.
// Write a function that takes any year greater than 0 as input,
// and returns true if the year is a leap year,
// or false if it is not a leap year.

// Examples:
isLeapYear(2016);      // true
isLeapYear(2015);      // false
isLeapYear(2100);      // false
isLeapYear(2400);      // true
isLeapYear(240000);    // true
isLeapYear(240001);    // false
isLeapYear(2000);      // true
isLeapYear(1900);      // false
isLeapYear(1752);      // true
isLeapYear(1700);      // false
isLeapYear(1);         // false
isLeapYear(100);       // false
isLeapYear(400);       // true

//* Answer
function isLeapYear (year) {
  if (year % 400 === 0) {
    return true;
  } else if (year % 100 === 0) {

  return false;
  } else {
    return year % 4 === 0;
  }
}

// or

function isLeapYear(year) {
  return (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0);
}


//? Leap Years (Part 2)
// This is a continuation of the previous exercise.
// The British Empire adopted the Gregorian Calendar in 1752,
// which was a leap year. Prior to 1752, they used the Julian Calendar.
// Under the Julian Calendar,leap years occur in any year that is
// evenly divisible by 4. Using this information, update the function
// from the previous exercise to determine leap years
// both before and after 1752.

isLeapYear(2016);      // true
isLeapYear(2015);      // false
isLeapYear(2100);      // false
isLeapYear(2400);      // true
isLeapYear(240000);    // true
isLeapYear(240001);    // false
isLeapYear(2000);      // true
isLeapYear(1900);      // false
isLeapYear(1752);      // true
isLeapYear(1700);      // true
isLeapYear(1);         // false
isLeapYear(100);       // true
isLeapYear(400);       // true

//* Answer
function isLeapYear(year) {
  if (year > 1752) {
    return (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0);
  } else {
    return year % 4 === 0;
  }
}


// ? Multiples of 3 and 5
// Write a function that computes the sum of all numbers between 1 and
// some other number, inclusive, that are multiples of 3 or 5. For instance,
// if the supplied number is 20, the result should be 98
// (3 + 5 + 6 + 9 + 10 + 12 + 15 + 18 + 20).
// You may assume that the number passed in is an integer greater than 1.

// Examples:
multisum(3);       // 3
multisum(5);       // 8
multisum(10);      // 33
multisum(1000);    // 23416

//* Answer
function multisum (number) {
  let output = 0;
  for (let counter = 1; counter <= number; counter++) {
    if (counter % 3 === 0 || counter % 5 === 0) {
      output += counter;
    }
  }
  return output;
}


//? ASCII String Value
// Write a function that determines and returns the ASCII string value of a
// string passed in as an argument. The ASCII string value is the sum of the
// ASCII values of every character in the string. (You may use
// String.prototype.charCodeAt() to determine the ASCII value of a character.)

//Examples:

asciiValue('Four score');         // 984
asciiValue('Launch School');      // 1251
asciiValue('a');                  // 97
asciiValue('');                   // 0

//* Answer
function asciiValue (string) {
  let value = 0;
  for (let counter = 0; counter < string.length; counter++) {
    value += string[counter].charCodeAt();
  }
  return value;
}