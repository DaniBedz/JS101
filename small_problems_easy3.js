
//? ddaaiillyy ddoouubbllee
// Write a function that takes a string argument and returns a new string that
// contains the value of the original string with all consecutive duplicate
// characters collapsed into a single character.

// Examples:
crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');                           // ""

function crunch (string) {
  let lettersArray = string.split('');
  let noDouble = '';
  for (let index = 0; index < lettersArray.length; index++) {

    if (lettersArray[index] !== lettersArray[index + 1]) {
      noDouble += lettersArray[index];
    }
  }
  return noDouble;
}

// or

function crunch(text) {
  let index = 0;
  let crunchText = '';

  while (index <= text.length - 1) {
    if (text[index] !== text[index + 1]) {
      crunchText += text[index];
    }

    index += 1;
  }

  return crunchText;
}


//? Bannerizer
// Write a function that will take a short line of text,
// and write it to the console log within a box.

// Examples:
logInBox('To boldly go where no one has gone before.');

// will log on the console:

// +--------------------------------------------+
// |                                            |
// | To boldly go where no one has gone before. |
// |                                            |
// +--------------------------------------------+

logInBox('');
// +--+
// |  |
// |  |
// |  |
// +--+

//* Answer
function logInBox (string) {
  const topBottomLines = ('-'.repeat(string.length + 2));
  console.log(`+` + topBottomLines + `+`);
  console.log(`| ` + ' '.repeat(string.length) + ` |`);
  console.log(`| ` + string + ` |`);
  console.log(`| ` + ' '.repeat(string.length) + ` |`);
  console.log(`+` + topBottomLines + `+`);
}

// or

function logInBox(message) {
  let horizontalRule = `+${"-".repeat(message.length + 2)}+`;
  let emptyLine = `|${" ".repeat(message.length + 2)}|`;

  console.log(horizontalRule);
  console.log(emptyLine);
  console.log(`| ${message} |`);
  console.log(emptyLine);
  console.log(horizontalRule);
}


//? Stringy Strings
// Write a function that takes one argument, a positive integer, and returns a
// string of alternating '1's and '0's, always starting with a '1'. The length
// of the string should match the given integer.

// Examples:
stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"

//* Answer
function stringy (number) {
  return ("10".repeat(number).substr(0, number));
}

// or

function stringy(size) {
  let result = "";
  for (let idx = 0; idx < size; idx++) {
    let number = ((idx % 2) === 0) ? 1 : 0;
    result += number;
  }
  return result;
};


//? Fibonacci Number Location By Length
// The Fibonacci series is a series of numbers (1, 1, 2, 3, 5, 8, 13, 21, ...)
// such that the first two numbers are 1 by definition, and each subsequent
// number is the sum of the two previous numbers. This series appears throughout
// the natural world.

// Computationally, the Fibonacci series is a simple series, but the results
// grow at an incredibly rapid rate. For example, the 100th Fibonacci number
// is 354,224,848,179,261,915,075—that's enormous, especially considering that
// it takes six iterations just to find the first 2-digit Fibonacci number.

// Write a function that calculates and returns the index of the first Fibonacci
// number that has the number of digits specified by the argument. (The first
// Fibonacci number has an index of 1.)

// You may assume that the argument is always an integer greater
// than or equal to 2.

// Examples:
findFibonacciIndexByLength(2);       // 7
findFibonacciIndexByLength(10);      // 45
findFibonacciIndexByLength(16);      // 74

// Don't try any higher values until you read the solution Discussion

//* Answer
function findFibonacciIndexByLength(length) {
  let fibonacci = [1, 1];
  let nextElement = 0;
  let lengthOflastElement = 0;
  for (let index = 0; length > lengthOflastElement; index++) {
    nextElement = fibonacci[index] + fibonacci[(index + 1)];
    fibonacci.push(nextElement);
    lengthOflastElement = fibonacci.reduce((a, b) => a + b).toString().length;
  }
  fibonacci.push(nextElement);
  return fibonacci.length + 1;
}

// or

function findFibonacciIndexByLength(length) {
  let first = 1;
  let second = 1;
  let index = 2;
  let fibonacci;

  do {
    fibonacci = first + second;
    index += 1;
    first = second;
    second = fibonacci;
  } while (String(fibonacci).length < length);

  return index;
}


//? Right Triangles
// Write a function that takes a positive integer, n, as an argument, and logs
// a right triangle whose sides each have n stars. The hypotenuse of the
// triangle (the diagonal side in the images below) should have one end at the
// lower-left of the triangle, and the other end at the upper-right.

// Examples:
triangle(5);

//     *
//    **
//   ***
//  ****
// *****

triangle(9);

//         *
//        **
//       ***
//      ****
//     *****
//    ******
//   *******
//  ********
// *********


//* Answer
function triangle(size) {
  for (let index = 1; index < size + 1; index++) {
    console.log(' '.repeat(size - index),'*'.repeat(index));
  }
}

// or

function triangle(height) {
  let spaces = height - 1;
  let stars = 1;
  while (height > 0) {
    console.log(`${" ".repeat(spaces)}${"*".repeat(stars)}`);
    spaces -= 1;
    stars += 1;
    height -= 1;
  }
}


//? Madlibs
// Madlibs is a simple game where you create a story template with "blanks" for
// words. You, or another player, then construct a list of words and place them
// into the story, creating an often silly or funny story as a result.

// Create a simple madlib program that prompts for a noun, a verb, an adverb,
// and an adjective, and injects them into a story that you create.

// Example:

// Enter a noun: dog
// Enter a verb: walk
// Enter an adjective: blue
// Enter an adverb: quickly

// console output:
// Do you walk your blue dog quickly? That's hilarious!
// The blue dog walks quickly over the lazy dog.
// The dog quickly walks up blue Joe's turtle.

//* Answer
const readline = require('readline-sync');

let noun = readline.question('Enter a noun:\n');
let verb = readline.question('Enter a verb:\n');
let adjective = readline.question('Enter an adjective:\n');
let adverb = readline.question('Enter an adverb:\n');

console.log(`Maddie is afraid of ${adjective} ${noun}s that ${verb} ${adverb}`);


//? Double Doubles
// A double number is an even-length number whose left-side digits are exactly
// the same as its right-side digits. For example, 44, 3333, 103103, and 7676
// are all double numbers, whereas 444, 334433, and 107 are not.

// Write a function that returns the number provided as an argument multiplied
// by two, unless the argument is a double number; return double numbers as-is.

// Examples:
twice(37);          // 74
twice(44);          // 44
twice(334433);      // 668866
twice(444);         // 888
twice(107);         // 214
twice(103103);      // 103103
twice(3333);        // 3333
twice(7676);        // 7676

//* Answer
function twice (number) {
  let firstHalf = number.toString().slice(0, (number.toString().length / 2));
  let secondHalf = number.toString().slice((number.toString().length / 2), number.toString().length);
  if (firstHalf === secondHalf) {
    return number;
  } else {
    return number * 2;
  }
}

// or

function twice(number) {
  if (isDoubleNumber(number)) {
    return number;
  } else {
    return number * 2;
  }
}

function isDoubleNumber(number) {
  let stringNumber = String(number);
  let center = Math.floor(stringNumber.length / 2);
  let leftNumber = stringNumber.substring(0, center);
  let rightNumber = stringNumber.substring(center);

  return leftNumber === rightNumber;
}


//? Grade Book
// Write a function that determines the mean (average) of the three scores
// passed to it, and returns the letter associated with that grade.

// Numerical score letter grade list:

//     90 <= score <= 100: 'A'
//     80 <= score < 90: 'B'
//     70 <= score < 80: 'C'
//     60 <= score < 70: 'D'
//     0 <= score < 60: 'F'

// Tested values are all between 0 and 100. There is no need to check for
// negative values or values greater than 100.

// Examples:
getGrade(95, 90, 93);    // "A"
getGrade(50, 50, 95);    // "D"


function getGrade(number1, number2, number3) {
  let average = ((number1 + number2 + number3) / 3);
  let grade = '';
  switch (true) {
    case (average >= 90): grade = "A";
      break;
    case (average >= 80): grade = "B";
      break;
    case (average >= 70): grade = "C";
      break;
    case (average >= 60): grade = "D";
      break;
    case (average < 60): grade = "F";
      break;
  }
  return grade;
}

// or

function getGrade(grade1, grade2, grade3) {
  let average = (grade1 + grade2 + grade3) / 3;

  if (average >= 90 && average <= 100) {
    return 'A';
  } else if (average >= 80 && average < 90) {
    return 'B';
  } else if (average >= 70 && average < 80) {
    return 'C';
  } else if (average >= 60 && average < 70) {
    return 'D';
  } else {
    return 'F';
  }
}


//? Clean up the words
// Given a string that consists of some words and an assortment of
// non-alphabetic characters, write a function that returns that string
// with all of the non-alphabetic characters replaced by spaces. If one
// or more non-alphabetic characters occur in a row, you should only have
// one space in the result (i.e., the result string should never have
// consecutive spaces).

// Example:
cleanUp("---what's my +*& line?");    // " what s my line "

function isNonAlphaChar(letter) {
  return !(letter.toUpperCase() != letter.toLowerCase());
}

function cleanUp(string) {
  let arrayOfCharacters = string.split('');

  for (let index = 0; index < arrayOfCharacters.length; index++) {
    if (isNonAlphaChar(arrayOfCharacters[index])) {
      arrayOfCharacters[index] = ' ';
    }
  }
  return arrayOfCharacters.join('').replace(/ {1,}/g," ");
}

// or

function cleanUp(text) {
  let cleanText = '';

  for (let idx = 0; idx < text.length; idx += 1) {
    if (isLowerCaseLetter(text[idx]) || isUpperCaseLetter(text[idx])) {
      cleanText += text[idx];
    } else if (cleanText[cleanText.length - 1] !== ' ') {
      cleanText += ' ';
    }
  }
  return cleanText;
}

function isLowerCaseLetter(char) {
  return char >= 'a' && char <= 'z';
}

function isUpperCaseLetter(char) {
  return char >= 'A' && char <= 'Z';
}

// or

function cleanUp(text) {
  return text.replace(/[^a-z]/gi, " ").replace(/\s+/gi, " ");
}


//? What Century is That?
// Write a function that takes a year as input and returns the century. The
// return value should be a string that begins with the century number, and
// ends with 'st', 'nd', 'rd', or 'th' as appropriate for that number.

// New centuries begin in years that end with 01. So, the years 1901 - 2000
// comprise the 20th century.

// Examples:
century(2000);        // "20th"
century(2001);        // "21st"
century(1965);        // "20th"
century(256);         // "3rd"
century(5);           // "1st"
century(10103);       // "102nd"
century(1052);        // "11th"
century(1127);        // "12th"
century(11201);       // "113th"

//* Answer
function century(year) {
  let centuryNumber = Math.floor(year / 100) + 1;

  if (year % 100 === 0) {
    centuryNumber -= 1;
  }

  return centuryNumber.toString() + centuryEnding(centuryNumber);
}

function centuryEnding(centuryNumber) {
  if (shouldBeTh(centuryNumber % 100)) {
    return 'th';
  }

  let lastDigit = centuryNumber % 10;
  switch (lastDigit) {
    case 1: return 'st';
    case 2: return 'nd';
    case 3: return 'rd';
    default: return 'th';
  }
}

function shouldBeTh(lastTwo) {
  return lastTwo === 11 || lastTwo === 12 || lastTwo === 13;
}