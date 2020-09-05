//? How old is Teddy?
// Build a program that randomly generates Teddy's age, and logs it to the
// console. Have the age be a random number between 20 and 120 (inclusive).

// Example Output:

// Teddy is 69 years old!

//* Answer

function teddyAge () {
  let randomAge = Math.floor(Math.random() * ((120 - 20 + 1) + 20));
  console.log(`Teddy is ${randomAge} years old!`);
}

// or

function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let age = randomBetween(20, 120);
console.log(`Teddy is ${age} years old!`);


//? Searching 101
// Write a program that solicits six numbers from the user, then logs a message
// that describes whether or not the sixth number appears amongst the first
// five numbers.

// Examples:

// Enter the 1st number: 25
// Enter the 2nd number: 15
// Enter the 3rd number: 20
// Enter the 4th number: 17
// Enter the 5th number: 23
// Enter the last number: 17

// The number 17 appears in 25,15,20,17,23.

// --------

// Enter the 1st number: 25
// Enter the 2nd number: 15
// Enter the 3rd number: 20
// Enter the 4th number: 17
// Enter the 5th number: 23
// Enter the last number: 18

// The number 18 does not appear in 25,15,20,17,23.

//* Answer
const readline = require('readline-sync');

let numbers = [];

numbers.push(readline.question('Enter the 1st number:\n'));
numbers.push(readline.question('Enter the 2nd number:\n'));
numbers.push(readline.question('Enter the 3rd number:\n'));
numbers.push(readline.question('Enter the 4th number:\n'));
numbers.push(readline.question('Enter the 5th number:\n'));

let last = readline.question('Enter the last number:\n');

if (numbers.includes(last)) {
  console.log(`The number ${last} appears in ${numbers.join(', ')}.`);
} else {
  console.log(`The number ${last} does not appear in ${numbers.join(', ')}.`);
}

// or

let readlineSync = require("readline-sync");
let numbers = [];

console.log("Enter the 1st number:");
numbers.push(Number(readlineSync.prompt()));
console.log("Enter the 2nd number:");
numbers.push(Number(readlineSync.prompt()));
console.log("Enter the 3rd number:");
numbers.push(Number(readlineSync.prompt()));
console.log("Enter the 4th number:");
numbers.push(Number(readlineSync.prompt()));
console.log("Enter the 5th number:");
numbers.push(Number(readlineSync.prompt()));
console.log("Enter the last number:");
const lastNumber = Number(readlineSync.prompt());

if (numbers.includes(lastNumber)) {
  console.log(`The number ${lastNumber} appears in ${numbers}.`);
} else {
  console.log(`The number ${lastNumber} does not appear in ${numbers}.`);
}


//? When Will I Retire?
// Build a program that logs when the user will retire and how many more years
// the user has to work until retirement.

// Example:

// What is your age? 30
// At what age would you like to retire? 70

// It's 2017. You will retire in 2057.
// You have only 40 years of work to go!

//* Answer
const readline = require('readline-sync');

let age = readline.question('What is your age?\n');
let retireAge = readline.question('At what age would you like to retire?\n');
let currentYear = new Date().getFullYear();
let yearsToRetirement = retireAge - age;

console.log(`It's ${currentYear}. You will retire in ${currentYear + yearsToRetirement}.`);
console.log(`You only have ${yearsToRetirement} years of work to go!`);


//? Palindromic Strings (Part 1)
// Write a function that returns true if the string passed as an argument is a
// palindrome, or false otherwise. A palindrome reads the same forwards and
// backwards. For this problem, the case matters and all characters matter.

// Examples:

isPalindrome('madam');               // true
isPalindrome('Madam');               // false (case matters)
isPalindrome("madam i'm adam");      // false (all characters matter)
isPalindrome('356653');              // true

//* Answer
function isPalindrome(string) {
  return string === string.split('').reverse().join('');
}


//? Palindromic Strings (Part 2)
// Write another function that returns true if the string passed as an argument
// is a palindrome, or false otherwise. This time, however, your function
// should be case-insensitive, and should ignore all non-alphanumeric
// characters. If you wish, you may simplify things by calling the isPalindrome
// function you wrote in the previous exercise.

// Examples:

isRealPalindrome('madam');               // true
isRealPalindrome('Madam');               // true (case does not matter)
isRealPalindrome("Madam, I'm Adam");     // true (only alphanumerics matter)
isRealPalindrome('356653');              // true
isRealPalindrome('356a653');             // true
isRealPalindrome('123ab321');            // false

//* Answer
function isRealPalindrome(string) {
  let stringAlphaNum = string.toLowerCase().replace(/[^a-z0-9]/g, '');
  console.log(stringAlphaNum === stringAlphaNum.split('').reverse().join(''));
}

// or

function isRealPalindrome(string) {
  string = removeNonLetterNumbers(string.toLowerCase());
  return isPalindrome(string);
}

function removeNonLetterNumbers(string) {
  let result = '';

  for (let idx = 0; idx < string.length; idx += 1) {
    if (isLetter(string[idx]) || isNumber(string[idx])) {
      result += string[idx];
    }
  }

  return result;
}

function isLetter(char) {
  return char >= 'a' && char <= 'z';
}

function isNumber(char) {
  return char >= '0' && char <= '9';
}


//? Palindromic Numbers
// Write a function that returns true if its integer argument is palindromic, or
// false otherwise. A palindromic number reads the same forwards and backwards.

// Examples:

isPalindromicNumber(34543);        // true
isPalindromicNumber(123210);       // false
isPalindromicNumber(22);           // true
isPalindromicNumber(5);            // true

//* Answer
function isPalindromicNumber(number) {
  console.log(number ===
              Number(number.toString().split('').reverse().join('')));
}

// or

function isPalindromicNumber(number) {
  return isPalindrome(String(number));
}


//? Running Totals
// Write a function that takes an array of numbers, and returns an array with
// the same number of elements, with each element's value being the running
// total from the original array.

// Examples:

runningTotal([2, 5, 13]);             // [2, 7, 20]
runningTotal([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
runningTotal([3]);                    // [3]
runningTotal([]);                     // []

// * Answer
function runningTotal (array) {
  let runningArray = array;
  for (let index = 1; index < array.length; index++) {
    runningArray[index] = array[index] + runningArray[index - 1];
  }
  return runningArray;
}

// or

function runningTotal(array) {
  let resultArray = [];
  let sum = 0;

  for (let idx = 0; idx < array.length; idx += 1) {
    resultArray.push((sum += array[idx]));
  }

  return resultArray;
};


//? Letter Counter (Part 1)
// Write a function that takes a string consisting of zero or more space
// separated words, and returns an object that shows the number of words
// of different sizes.

// Words consist of any sequence of non-space characters.

// Examples:

wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 1, "7": 2 }
wordSizes("What's up doc?");                              // { "2": 1, "4": 1, "6": 1 }
wordSizes('');                                            // {}

//* Answer
function wordSizes(string) {
  let words = string.split(' ');
  let letterCount = {};
  let key = 0;
  words.forEach(word => {
    key = word.length;

    if (key === 0) {
      return;
    }

    if (!letterCount[key]) {
      letterCount[key] = 0;
    }
    letterCount[key] += 1;
  });
  return letterCount;
}

// or

function wordSizes(words) {
  let wordsArray = words.split(' ');
  let count = {};

  for (let idx = 0; idx < wordsArray.length; idx += 1) {
    let wordSize = wordsArray[idx].length;
    if (wordSize === 0) {
      continue;
    }

    if (!count[wordSize]) {
      count[wordSize] = 0;
    }
    count[wordSize] += 1;
  }

  return count;
}


//? Letter Counter (Part 2)
// Modify the wordSizes function from the previous exercise to exclude
// non-letters when determining word size. For instance, the word size
// of "it's" is 3, not 4.

// Examples:

wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 2 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 3 }
wordSizes("What's up doc?");                              // { "2": 1, "3": 1, "5": 1 }
wordSizes('');

//* Answer
function wordSizes(string) {
  let words = string.split(' ');
  let letterCount = {};
  let key = 0;
  words.forEach(word => {
    word = word.replace(/[^a-z]/gi, '');
    key = word.length;

    if (key === 0) {
      return;
    }

    if (!letterCount[key]) {
      letterCount[key] = 0;
    }
    letterCount[key] += 1;
  });
  return letterCount;
}

// or

function wordSizes(words) {
  let wordsArray = words.split(' ');
  let count = {};

  for (let idx = 0; idx < wordsArray.length; idx += 1) {
    let cleanWordSize = removeNonLetters(wordsArray[idx].toLowerCase()).length;
    if (cleanWordSize === 0) {
      continue;
    }

    count[cleanWordSize] = count[cleanWordSize] || 0;
    count[cleanWordSize] += 1;
  }

  return count;
}

function removeNonLetters(string) {
  let result = '';

  for (let idx = 0; idx < string.length; idx += 1) {
    if (isLetter(string[idx])) {
      result += string[idx];
    }
  }

  return result;
}

function isLetter(char) {
  return char >= 'a' && char <= 'z';
}


//? Letter Swap
// Given a string of words separated by spaces, write a function that swaps the
// first and last letters of every word.

// You may assume that every word contains at least one letter, and that the
// string will always contain at least one word. You may also assume that each
// string contains nothing but words and spaces, and that there are no leading,
// trailing, or repeated spaces.

// Examples:

swap('Oh what a wonderful day it is');  // "hO thaw a londerfuw yad ti si"
swap('Abcde');                          // "ebcdA"
swap('a');                              // "a"

//* Answer
function swap(string) {
  let arrayOfWords = string.split(' ');
  let arrayofLetters = [];
  let newWord = '';
  let firstLetter = '';
  let lastLetter = '';
  let reversedArray = [];

  arrayOfWords.forEach(word => {
    arrayofLetters = word.split('');
    firstLetter = word[0];
    lastLetter = word[word.length - 1];
    arrayofLetters[0] = lastLetter;
    arrayofLetters[word.length - 1] = firstLetter;
    newWord = arrayofLetters.join('');
    reversedArray.push(newWord);
  });
  return reversedArray.join(' ');
}

// or

function swap(words) {
  let wordsArray = words.split(' ');

  for (let idx = 0; idx < wordsArray.length; idx += 1) {
    wordsArray[idx] = swapFirstLastCharacters(wordsArray[idx]);
  }

  return wordsArray.join(' ');
}

function swapFirstLastCharacters(word) {
  if (word.length === 1) {
    return word;
  }

  return word[word.length - 1] + word.slice(1, -1) + word[0];
}