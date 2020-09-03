// ? Welcome Stranger
// Create a function that takes 2 arguments, an array and an object.
// The array will contain 2 or more elements that, when combined with
// adjoining spaces, will produce a person's name. The object will contain
// two keys, "title" and "occupation", and the appropriate values. Your function
// should return a greeting that uses the person's full name,
// and mentions the person's title.

// Example:
console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);
// logs Hello, John Q Doe! Nice to have a Master Plumber around.

//* Answer
function greetings (array, object) {
  let name = array.reduce((first, second) => first + " " + second);
  let jobDetails = Object.values(object);
  let jobWords = jobDetails.reduce((
    title, occupation) => title + " " + occupation);
  console.log(`Hello, ${name}! Nice to have a ${jobWords} around.`);
}

// or

function greetings(name, status) {
  return `Hello, ${name.join(" ")}! Nice to have a ${status["title"]} ${
    status["occupation"]
  } around.`;
}


//? Greeting a user
// Write a program that will ask for user's name. The program will then greet the user.
// If the user writes "name!" then the computer yells back to the user.

//- Examples
// What is your name? Bob
// Hello Bob.

// What is your name? Bob!
// HELLO BOB. WHY ARE WE SCREAMING?

//* Answer
const readline = require('readline-sync');
console.log("What is your name?");
let name = readline.question();
if (name.includes("!")) {

  console.log(`HELLO ${name.toUpperCase().slice(0,-1)}. WHY ARE WE SCREAMING?`);
} else {
  console.log(`Hello ${name}.`);
}

// or

let readlineSync = require("readline-sync");

let name = readlineSync.question("What is your name?\n");

if (name[name.length - 1] === "!") {
  name = name.slice(0, -1);
  console.log(`HELLO ${name.toUpperCase()}. WHY ARE YOU SCREAMING?`);
} else {
  console.log(`Hello ${name}.`);
}


//? Multiplying Two Numbers
// Create a function that takes two arguments, multiplies them together, and returns the result.

//- Example:
console.log(multiply(5, 3) === 15); // logs true

//* Answer
function multiply (num1, num2) {
  return num1 * num2;
}

// or

const multiply = (num1, num2) => num1 * num2;


//? Squaring an Argument
// Using the multiply() function from the "Multiplying Two Numbers" problem,
// write a function that computes the square of its argument (the square is
// the result of multiplying a number by itself).

//- Examples:
console.log(square(5) === 25); // logs true
console.log(square(-8) == 64); // logs true

//* Answer
function square (num) {
  return num * num;
}

// or

const square = (num) => num * num;


//? Arithmetic Integer
// Write a program that prompts the user for two positive integers, and then
// prints the results of the following operations on those two numbers:
// addition, subtraction, product, quotient, remainder, and power.
// Do not worry about validating the input.

//- Example
// ==> Enter the first number:
// 23
// ==> Enter the second number:
// 17
// ==> 23 + 17 = 40
// ==> 23 - 17 = 6
// ==> 23 * 17 = 391
// ==> 23 / 17 = 1
// ==> 23 % 17 = 6
// ==> 23 ** 17 = 141050039560662968926103

//* Answer
const readline = require('readline-sync');

let num1 = Number(readline.question('=> Enter the first number:\n'));
let num2 = Number(readline.question('=> Enter the second number:\n'));

let add = num1 + num2;
let subtract = num1 - num2;
let multiply = num1 * num2;
let divide = Math.floor(num1 / num2);
let modulus = num1 % num2;
let squared = Math.pow(num1, num2);

console.log(`${num1} + ${num2} = ${add}`);
console.log(`${num1} - ${num2} = ${subtract}`);
console.log(`${num1} * ${num2} = ${multiply}`);
console.log(`${num1} / ${num2} = ${divide}`);
console.log(`${num1} % ${num2} = ${modulus}`);
console.log(`${num1} ** ${num2} = ${squared}`);

// or

const readlineSync = require("readline-sync");

console.log("Enter the first number:");
let firstNumber = Number(readlineSync.prompt());
console.log("Enter the second number:");
let secondNumber = Number(readlineSync.prompt());

console.log(`${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}`);
console.log(`${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}`);
console.log(`${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}`);
console.log(`${firstNumber} / ${secondNumber} = ${Math.floor(firstNumber / secondNumber)}`);
console.log(`${firstNumber} % ${secondNumber} = ${firstNumber % secondNumber}`);
console.log(
  `${firstNumber} ** ${secondNumber} = ${Math.pow(firstNumber, secondNumber)}`
);


//? The End Is Near But Not Here
// Write a function that returns the next to last word in the String passed to
// it as an argument.

// Words are any sequence of non-blank characters.

// You may assume that the input String will always contain at least two words.

//- Examples:
console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true

//* Answer
function penultimate (string) {
  let words = string.split(" ");
  return words[words.length -2];
}


//? Exclusive Or
// The || operator returns a truthy value if either or both of its operands are
// truthy, a falsey value if both operands are falsey. The && operator returns a
// truthy value if both of its operands are truthy, and a falsey value if either
// operand is falsey. This works great until you need only one of two conditions
// to be truthy, the so-called exclusive or.

// In this exercise, you will write a function named xor that takes two arguments,
// and returns true if exactly one of its arguments is truthy, false otherwise.
// Note that we are looking for a boolean result instead of a truthy/falsy value
// as returned by || and &&.

//- Examples:
console.log(xor(5, 0) === true);
console.log(xor(false, true) === true);
console.log(xor(1, 1) === false);
console.log(xor(true, true) === false);

//* Answer
function xor (first, second) {
  if (first || second === true) {
    return true;
  } else {
    return false;
  }
}

// or

function xor(value1, value2) {
  return !!((value1 && !value2) || (value2 && !value1));
}


//? Write a function that returns an Array that contains every other element of
// an Array that is passed in as an argument. The values in the returned list
// should be those values that are in the 1st, 3rd, 5th, and so on elements of
// the argument Array.

//- Examples:
console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []

//* Answer
function oddities (inputArray) {
  let oddArray = [];
  for (let index = 0; index < inputArray.length; index += 2) {
    oddArray.push(inputArray[index]);
  }
  return oddArray;
}


//? Convert a String to a Number!
// The parseInt() method converts a string of numeric characters (including an
// optional plus or minus sign) to an integer. The method takes 2 arguments
// where the first argument is the string we want to convert and the second
// argument should always be 10 for our purposes. parseInt() and the Number()
// method behave similarly. In this exercise, you will create a function that
// does the same thing.

// Write a function that takes a String of digits, and returns the appropriate
// number as an integer. You may not use any of the methods mentioned above.

// For now, do not worry about leading + or - signs, nor should you worry about
// invalid characters; assume all characters will be numeric.

// You may not use any of the standard conversion methods available in JavaScript,
// such as String() and Number(). Your function should do this the old-fashioned
// way and calculate the result by analyzing the characters in the string.

//- Examples
console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true


//* Answer
const DIGITS = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9
};

function stringToInteger(string) {
  let arrayOfDigits = string.split("").map(letter => DIGITS[letter]);
  let newNumber = 0;
  arrayOfDigits.forEach(digit => (newNumber = (10 * newNumber) + digit));
  return newNumber;
}


//? Convert a String to a Signed Number!
// In the previous exercise, you developed a function that converts simple
// numeric strings to integers. In this exercise, you're going to extend that
// function to work with signed numbers.

// Write a function that takes a string of digits, and returns the appropriate
// number as an integer. The string may have a leading + or - sign; if the
// first character is a +, your function should return a positive number;
// if it is a -, your function should return a negative number. If no sign
// is given, you should return a positive number.

// You may assume the string will always contain a valid number.

// You may not use any of the standard conversion methods available in JavaScript,
// such as parseInt() and Number(). You may, however, use the stringToInteger()
// function from the previous lesson.

//- Examples
console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true


//* Answer
const DIGITS = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9
};

function stringToSignedInteger(string) {
  let newNumber = 0;
  let sign = '';
  if (string[0] === '-') {
    sign = '-';
    string = string.slice(1);
  } else if (string[0] === '+') {
    sign = '+';
    string = string.slice(1);
  }
  let arrayOfDigits = string.split("").map(letter => DIGITS[letter]);
  arrayOfDigits.forEach(digit => (newNumber = (10 * newNumber) + digit));
  if (sign === '-') {
    newNumber -= (newNumber * 2);
  }
  return newNumber;
}

// or

function stringToSignedInteger(string) {
  switch (string[0]) {
    case "-":
      return -stringToInteger(string.slice(1, string.length));
    case "+":
      return stringToInteger(string.slice(1, string.length));
    default:
      return stringToInteger(string);
  }
}


// ? Convert a Number to a String!
// In the previous two exercises, you developed functions that convert simple
// numeric strings to signed integers. In this exercise and the next, you're
// going to reverse those functions.

// Write a function that converts a non-negative integer value (e.g., 0, 1, 2,
// 3, and so on) to the string representation of that integer.

// You may not use any of the standard conversion functions available in
// JavaScript, such as String(), Number.prototype.toString, or an expression
// such as '' + number. Your function should do this the old-fashioned way and
// construct the string by analyzing and manipulating the number.

//- Examples:
integerToString(4321);      // "4321"
integerToString(0);         // "0"
integerToString(5000);      // "5000"
integerToString(1234567890);      // "1234567890"


//* Answer
const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function integerToString (number) {
  let newNumber = '';
  do {
    let remainder = number % 10;
    number = Math.floor(number / 10);
    newNumber = DIGITS[remainder] + newNumber;
  } while (number > 0);
  return newNumber;
}


//? Convert a Signed Number to a String!
// In the previous exercise, you developed a function that converts non-negative
// numbers to strings. In this exercise, you're going to extend that function
// by adding the ability to represent negative numbers as well.

// Write a function that takes an integer,
// and converts it to a string representation.

// You may not use any of the standard conversion functions available in
// JavaScript, such as String() and Number.prototype.toString(). You may,
// however, use integerToString() from the previous exercise.

// You might also want to check the Math.sign() function.

//- Examples
console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");

//* Answer
function signedIntegerToString (string) {
  let sign = '';
  if (string > 0) {
    sign = "+";
  } else if (string < 0 ) {
    string *= -1;
    sign = '-';
  }
  string = integerToString(string);
  return sign + string;
}

// or

function signedIntegerToString(number) {
  switch (Math.sign(number)) {
    case -1:
      return `-${integerToString(-number)}`;
    case +1:
      return `+${integerToString(number)}`;
    default:
      return integerToString(number);
  }
}